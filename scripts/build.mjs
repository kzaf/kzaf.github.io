import { readFile, writeFile } from 'node:fs/promises';
import { renderProjects, validateProjects } from './projects.mjs';

const projects = validateProjects(JSON.parse(await readFile(new URL('../src/data/projects.json', import.meta.url), 'utf8')));
const template = await readFile(new URL('../src/index.template.html', import.meta.url), 'utf8');
const html = template.replace('{{FEATURED_PROJECTS}}', renderProjects(projects.filter(p => p.featured)))
  .replace('{{OTHER_PROJECTS}}', renderProjects(projects.filter(p => !p.featured)))
  .replace('{{YEAR}}', String(new Date().getUTCFullYear()));
await writeFile(new URL('../index.html', import.meta.url), html.replace(/[\t ]+$/gm, ''));
console.log(`Generated index.html with ${projects.length} public projects. No client-side rendering required.`);
