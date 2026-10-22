import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { validateProjects } from './projects.mjs';
const root = new URL('../', import.meta.url);
const projects = validateProjects(JSON.parse(await readFile(new URL('src/data/projects.json', root), 'utf8')));
const html = await readFile(new URL('index.html', root), 'utf8');
assert(!html.includes('{{'), 'Build must resolve template placeholders');
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Exactly one h1');
assert.equal((html.match(/<article\b/g) || []).length, projects.length);
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(new Set(ids).size, ids.length, 'Unique IDs');
for (const m of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(m[1]), `Missing anchor ${m[1]}`);
for (const m of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  if (/^(https:|mailto:|#)/.test(m[1])) continue;
  await access(new URL(m[1], root));
}
for (const p of projects) if (p.image) await access(new URL(p.image, root));
for (const m of html.matchAll(/<img\b[^>]*>/g)) assert(/alt="[^"]+"/.test(m[0]), 'Meaningful image alt required');
console.log('Catalog, asset paths, project count, image alts, heading and navigation checks passed.');
