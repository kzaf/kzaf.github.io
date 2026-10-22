export const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

export function validateProjects(projects) {
  if (!Array.isArray(projects)) throw new Error('Project catalog must be an array');
  const ids = new Set();
  for (const p of projects) {
    if (!/^[a-z0-9-]+$/.test(p.id) || ids.has(p.id)) throw new Error('Project IDs must be unique slugs');
    ids.add(p.id);
    for (const key of ['title', 'description']) if (typeof p[key] !== 'string' || !p[key].trim()) throw new Error(`Missing ${key}: ${p.id}`);
    if (!Array.isArray(p.technologies) || p.technologies.some(t => typeof t !== 'string' || !t.trim())) throw new Error(`Invalid technologies: ${p.id}`);
    for (const key of ['featured', 'archived']) if (typeof p[key] !== 'boolean') throw new Error(`Invalid ${key}: ${p.id}`);
    if (p.order !== undefined && !Number.isFinite(p.order)) throw new Error(`Invalid order: ${p.id}`);
    for (const key of ['githubUrl', 'demoUrl']) if (p[key] && new URL(p[key]).protocol !== 'https:') throw new Error(`Use HTTPS: ${p.id}`);
    if (p.image && (!/^img\/[\w ().-]+$/.test(p.image) || p.image.includes('..') || !p.imageAlt)) throw new Error(`Invalid local image or missing alt: ${p.id}`);
  }
  return projects;
}

export function renderProjects(projects) {
  if (!projects.length) return '<p class="empty-state">More projects will be added here.</p>';
  return [...projects].sort((a, b) => (a.order ?? 999) - (b.order ?? 999)).map(p => `
  <article class="project-card ${p.featured ? 'featured' : 'compact'}" aria-labelledby="project-${p.id}">
    ${p.featured ? `<div class="project-visual visual-${p.id}">${p.image ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.imageAlt)}" width="96" height="96" loading="lazy" decoding="async">` : '<span aria-hidden="true">&lt;/&gt;</span>'}<span class="visual-caption">${escapeHtml(p.title)}</span><span class="visual-platform">ANDROID APPLICATION</span></div>` : ''}
    <div class="project-body">
      <div class="project-meta"><span>${p.archived ? 'Archived' : p.featured ? 'Featured project' : 'Public project'}</span><span aria-hidden="true">↗</span></div>
      <h3 id="project-${p.id}">${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.description)}</p>
      <ul class="tags" aria-label="Technologies">${p.technologies.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul>
      <div class="project-links">${p.githubUrl ? `<a href="${escapeHtml(p.githubUrl)}" aria-label="${escapeHtml(p.title)} on GitHub">Source code <span aria-hidden="true">↗</span></a>` : ''}${p.demoUrl ? `<a href="${escapeHtml(p.demoUrl)}" aria-label="${escapeHtml(p.title)} on Google Play">Google Play <span aria-hidden="true">↗</span></a>` : ''}${!p.featured && p.image ? `<a href="${escapeHtml(p.image)}" aria-label="View original ${escapeHtml(p.title)} preview">Preview <span aria-hidden="true">↗</span></a>` : ''}</div>
    </div>
  </article>`).join('\n');
}
