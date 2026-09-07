#!/usr/bin/env node
// Перевіряє, що всі внутрішні href/src у зібраному dist/ ведуть на файли,
// які справді існують у збірці. Запускається в CI після `astro build`.
import { readdir, readFile, access } from 'node:fs/promises';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const BASE = '/Lady_Victoria';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (entry.name.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

function resolveInternalPath(link) {
  const [pathPart] = link.split(/[?#]/);
  if (!pathPart.startsWith(BASE)) return null;
  let rel = pathPart.slice(BASE.length) || '/';
  if (rel.endsWith('/')) rel += 'index.html';
  else if (!extname(rel)) rel += '/index.html';
  return join(DIST, rel);
}

const htmlFiles = await walk(DIST);
const linkPattern = /(?:href|src)="([^"]+)"/g;
const brokenLinks = [];
let checkedCount = 0;

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf-8');
  for (const match of html.matchAll(linkPattern)) {
    const link = match[1];
    if (!link.startsWith(BASE)) continue; // зовнішні посилання й корінь домену не перевіряємо тут
    const resolved = resolveInternalPath(link);
    if (!resolved) continue;
    checkedCount += 1;
    try {
      await access(resolved);
    } catch {
      brokenLinks.push({ file: file.replace(DIST, 'dist'), link });
    }
  }
}

console.log(`Перевірено внутрішніх посилань: ${checkedCount} у ${htmlFiles.length} файлах.`);

if (brokenLinks.length) {
  console.error(`\nЗнайдено ${brokenLinks.length} непрацюючих внутрішніх посилань:`);
  for (const { file, link } of brokenLinks) {
    console.error(`  ${file} -> ${link}`);
  }
  process.exit(1);
}

console.log('Усі внутрішні посилання коректні.');
