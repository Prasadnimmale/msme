import fs from 'node:fs';
import path from 'node:path';
import { prettyPrintHtml } from './pretty-html.mjs';

const OUT_DIR = path.resolve(process.cwd(), 'out');

function getHtmlFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

const htmlFiles = getHtmlFiles(OUT_DIR);
for (const filePath of htmlFiles) {
  const rawHtml = fs.readFileSync(filePath, 'utf8');
  const formattedHtml = prettyPrintHtml(rawHtml);
  fs.writeFileSync(filePath, formattedHtml, 'utf8');
  console.log(` ✓ Pretty-formatted: ${path.relative(process.cwd(), filePath)}`);
}

