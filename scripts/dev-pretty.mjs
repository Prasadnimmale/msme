import http from 'node:http';
import { spawn } from 'node:child_process';

const PUBLIC_PORT = Number(process.env.PORT || 3000);
const INTERNAL_PORT = PUBLIC_PORT + 100; // 3100

const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

/**
 * Reorders <head> children so charset, viewport, <title>, description, keywords,
 * robots, canonical, and google-site-verification appear first inside <head>
 * for instant readability in `view-source:`.
 */
function prioritizeSeoTagsInHead(html) {
  return html.replace(/<head>([\s\S]*?)<\/head>/i, (fullMatch, headInner) => {
    const tagRegex = /(<title>[\s\S]*?<\/title>|<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>|<!--[\s\S]*?-->|<[a-zA-Z][^>]*>)/gi;
    const headTags = headInner.match(tagRegex);
    if (!headTags) return fullMatch;

    const topMeta = []; // charset & viewport
    const seoTags = []; // title, description, keywords, canonical, robots, google-site-verification
    const styleAndFontTags = []; // stylesheets & fonts
    const assetAndScriptTags = []; // preload & nextjs scripts

    for (const tag of headTags) {
      const lower = tag.toLowerCase();
      if (lower.includes('charset=') || lower.includes('name="viewport"')) {
        topMeta.push(tag);
      } else if (
        lower.startsWith('<title>') ||
        lower.includes('name="description"') ||
        lower.includes('name="keywords"') ||
        lower.includes('rel="canonical"') ||
        lower.includes('name="robots"') ||
        lower.includes('name="googlebot"') ||
        lower.includes('name="google-site-verification"')
      ) {
        seoTags.push(tag);
      } else if (
        lower.includes('rel="stylesheet"') ||
        lower.includes('fonts.googleapis.com') ||
        lower.includes('fonts.gstatic.com')
      ) {
        styleAndFontTags.push(tag);
      } else {
        assetAndScriptTags.push(tag);
      }
    }

    return `<head>${[
      ...topMeta,
      ...seoTags,
      ...styleAndFontTags,
      ...assetAndScriptTags,
    ].join('')}</head>`;
  });
}

/**
 * Pretty-prints Next.js HTML output for readable `view-source:` inspection in development
 * while preserving all scripts, styles, RSC payloads, and React hydration integrity.
 */
function prettyPrintHtml(rawHtml) {
  if (!rawHtml || !rawHtml.includes('<html')) {
    return rawHtml;
  }

  // 1. Group SEO metadata tags at the top of <head> for easy identification
  const organizedHtml = prioritizeSeoTagsInHead(rawHtml);

  // 2. Protect <script>...</script> and <style>...</style> blocks so their contents are never modified
  const protectedBlocks = [];
  const htmlWithPlaceholders = organizedHtml.replace(
    /<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,
    (match) => {
      const index = protectedBlocks.length;
      protectedBlocks.push(match);
      return `___PROTECTED_BLOCK_${index}___`;
    }
  );

  // 3. Tokenize HTML into tags, comments, doctype, placeholders, and text
  const tokenRegex =
    /(<!DOCTYPE[^>]*>|<!--[\s\S]*?-->|<\/?[a-zA-Z][^>]*>|___PROTECTED_BLOCK_\d+___)/g;
  const rawTokens = htmlWithPlaceholders.split(tokenRegex).filter((t) => t !== '');

  const lines = [];
  let indent = 0;
  const pad = (depth) => '  '.repeat(Math.max(0, depth));

  for (let i = 0; i < rawTokens.length; i++) {
    const token = rawTokens[i];

    // Protected <script> or <style> block
    const blockMatch = token.match(/^___PROTECTED_BLOCK_(\d+)___$/);
    if (blockMatch) {
      const originalBlock = protectedBlocks[Number(blockMatch[1])];
      lines.push(`${pad(indent)}${originalBlock}`);
      continue;
    }

    // DOCTYPE
    if (/^<!DOCTYPE/i.test(token)) {
      lines.push(token);
      continue;
    }

    // HTML Comment
    if (token.startsWith('<!--')) {
      lines.push(`${pad(indent)}${token}`);
      continue;
    }

    // Closing tag
    const closeMatch = token.match(/^<\/([a-zA-Z0-9-]+)\s*>$/);
    if (closeMatch) {
      indent = Math.max(0, indent - 1);
      lines.push(`${pad(indent)}${token}`);
      continue;
    }

    // Opening or self-closing tag
    const openMatch = token.match(/^<([a-zA-Z0-9-]+)(?:\s[^>]*)?>$/);
    if (openMatch) {
      const tagName = openMatch[1].toLowerCase();
      const isSelfClosing = VOID_TAGS.has(tagName) || token.endsWith('/>');

      if (isSelfClosing) {
        lines.push(`${pad(indent)}${token}`);
        continue;
      }

      // Collapse simple leaf element `<tag>short text</tag>` onto one readable line
      const nextToken = rawTokens[i + 1];
      const afterNextToken = rawTokens[i + 2];
      if (
        nextToken &&
        !nextToken.startsWith('<') &&
        !nextToken.startsWith('___PROTECTED_BLOCK_') &&
        afterNextToken &&
        afterNextToken.toLowerCase() === `</${tagName}>` &&
        nextToken.length <= 280 &&
        !nextToken.includes('\n')
      ) {
        lines.push(`${pad(indent)}${token}${nextToken}${afterNextToken}`);
        i += 2;
        continue;
      }

      // Collapse empty element `<tag></tag>` onto one line
      if (nextToken && nextToken.toLowerCase() === `</${tagName}>`) {
        lines.push(`${pad(indent)}${token}${nextToken}`);
        i += 1;
        continue;
      }

      lines.push(`${pad(indent)}${token}`);
      indent++;
      continue;
    }

    // Plain text content
    const trimmed = token.trim();
    if (trimmed.length > 0) {
      lines.push(`${pad(indent)}${token}`);
    }
  }

  let formatted = lines.join('\n');

  // 4. Inject a tiny self-removing dev script at the end of <head> that strips pretty-print
  // newline text nodes synchronously before React 19 hydration runs on the live DOM.
  const hydrationSafeCleanupScript = `<script data-dev-pretty-cleanup="true">(function(){var s=document.currentScript;if(s)s.remove();function c(r){var w=document.createTreeWalker(r,4),a=[];while(w.nextNode()){var n=w.currentNode;if(n.nodeValue.indexOf('\\n')!==-1&&n.nodeValue.trim()==='')a.push(n);}for(var i=0;i<a.length;i++)a[i].remove();}c(document.documentElement);var o=new MutationObserver(function(){c(document.documentElement);});o.observe(document.documentElement,{childList:true,subtree:true});window.addEventListener('load',function(){c(document.documentElement);o.disconnect();});})();</script>`;

  formatted = formatted.replace('  </head>', `    ${hydrationSafeCleanupScript}\n  </head>`);
  return formatted + '\n';
}

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
    // Request uncompressed HTML from internal Next.js server so we can format it
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
