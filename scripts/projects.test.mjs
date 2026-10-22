import test from 'node:test';
import assert from 'node:assert/strict';
import { renderProjects, validateProjects } from './projects.mjs';
const project = { id: 'sample', title: 'Sample', description: 'An example.', technologies: ['Kotlin'], featured: true, archived: false, githubUrl: 'https://github.com/example/sample' };
test('catalog rejects duplicate IDs and unsafe URLs', () => {
  assert.throws(() => validateProjects([project, project]), /unique/);
  assert.throws(() => validateProjects([{ ...project, githubUrl: 'javascript:alert(1)' }]), /HTTPS/);
  assert.throws(() => validateProjects([{ ...project, image: '../secret' }]), /image/);
});
test('cards escape content, respect ordering and display archived state', () => {
  const html = renderProjects([{ ...project, title: '<script>', order: 2 }, { ...project, id: 'first', title: 'First', archived: true, order: 1 }]);
  assert(html.indexOf('First') < html.indexOf('&lt;script&gt;'));
  assert(!html.includes('<script>'));
  assert(html.includes('Archived'));
});
test('empty catalog has an understandable empty state', () => {
  assert.match(renderProjects([]), /More projects/);
});
