import http from 'node:http';
import { spawn } from 'node:child_process';
import { prettyPrintHtml } from './pretty-html.mjs';

const PUBLIC_PORT = Number(process.env.PORT || 3000);
const INTERNAL_PORT = PUBLIC_PORT + 100; // 3100

// Start internal Next.js dev server on INTERNAL_PORT
const nextBin = './node_modules/next/dist/bin/next';
const nextProc = spawn(process.execPath, [nextBin, 'dev', '-p', String(INTERNAL_PORT)], {
  stdio: ['inherit', 'pipe', 'pipe'],
  env: { ...process.env },
});

nextProc.stdout.on('data', (chunk) => {
  const text = chunk
    .toString()
    .replaceAll(String(INTERNAL_PORT), String(PUBLIC_PORT));
  process.stdout.write(text);
});

nextProc.stderr.on('data', (chunk) => {
  const text = chunk
    .toString()
    .replaceAll(String(INTERNAL_PORT), String(PUBLIC_PORT));
  process.stderr.write(text);
});

nextProc.on('exit', (code) => {
  process.exit(code ?? 0);
});

// Create HTTP proxy on PUBLIC_PORT (3000) that pretty-prints text/html responses
const server = http.createServer((req, res) => {
  const acceptHeader = req.headers['accept'] || '';
  const isHtmlRequest =
    req.method === 'GET' &&
    !req.url.startsWith('/_next/') &&
    acceptHeader.includes('text/html');

  const proxyHeaders = { ...req.headers, host: `localhost:${INTERNAL_PORT}` };
  if (isHtmlRequest) {
    delete proxyHeaders['accept-encoding'];
  }

  const proxyReq = http.request(
    {
      hostname: '127.0.0.1',
      port: INTERNAL_PORT,
      path: req.url,
      method: req.method,
      headers: proxyHeaders,
    },
    (proxyRes) => {
      const contentType = proxyRes.headers['content-type'] || '';
      if (isHtmlRequest && contentType.includes('text/html')) {
        const chunks = [];
        proxyRes.on('data', (chunk) => chunks.push(chunk));
        proxyRes.on('end', () => {
          const rawHtml = Buffer.concat(chunks).toString('utf8');
          const prettyHtml = prettyPrintHtml(rawHtml);
          const bodyBuffer = Buffer.from(prettyHtml, 'utf8');

          const responseHeaders = { ...proxyRes.headers };
          delete responseHeaders['content-encoding'];
          delete responseHeaders['transfer-encoding'];
          responseHeaders['content-length'] = String(bodyBuffer.length);

          res.writeHead(proxyRes.statusCode || 200, responseHeaders);
          res.end(bodyBuffer);
        });
      } else {
        res.writeHead(proxyRes.statusCode || 200, proxyRes.headers);
        proxyRes.pipe(res);
      }
    }
  );

  proxyReq.on('error', (err) => {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end(`Dev server starting up... (${err.message})`);
  });

  req.pipe(proxyReq);
});

// Forward WebSocket upgrades (Next.js HMR / Fast Refresh)
server.on('upgrade', (req, socket, head) => {
  const proxyReq = http.request({
    hostname: '127.0.0.1',
    port: INTERNAL_PORT,
    path: req.url,
    method: req.method,
    headers: { ...req.headers, host: `localhost:${INTERNAL_PORT}` },
  });

  proxyReq.on('upgrade', (proxyRes, proxySocket, proxyHead) => {
    let rawHeaders = `HTTP/${proxyRes.httpVersion} ${proxyRes.statusCode} ${proxyRes.statusMessage}\r\n`;
    for (let i = 0; i < proxyRes.rawHeaders.length; i += 2) {
      rawHeaders += `${proxyRes.rawHeaders[i]}: ${proxyRes.rawHeaders[i + 1]}\r\n`;
    }
    rawHeaders += '\r\n';
    socket.write(rawHeaders);
    if (proxyHead && proxyHead.length) socket.write(proxyHead);
    if (head && head.length) proxySocket.write(head);
    proxySocket.pipe(socket);
    socket.pipe(proxySocket);
  });

  proxyReq.on('error', () => socket.destroy());
  proxyReq.end();
});

server.listen(PUBLIC_PORT, () => {
  console.log(` ✓ Pretty-HTML Dev Proxy active on http://localhost:${PUBLIC_PORT}`);
});
