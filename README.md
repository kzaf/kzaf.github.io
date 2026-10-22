# Konstantinos Zafeiropoulos — Portfolio

A lightweight, dark mobile software engineer portfolio for **https://kzaf.github.io/**. Generated HTML, plain CSS, and a small accessible navigation script. No framework, backend, analytics, CDN fonts, credentials or runtime dependencies.

## Develop and validate

Use Node.js 22 or newer and npm:

```sh
npm ci
npm run build
npm run lint
npm test
npm run preview
```

Open http://localhost:4173. The build writes `index.html` directly to the repository root. This committed output works with the original static GitHub Pages hosting model; no workflow or Pages settings change is required. Run the build whenever content changes and commit the generated HTML with its source. The preview command requires Python 3. You can also open `index.html` directly in a browser.

## Maintain projects

Edit `src/data/projects.json`. Each project uses:

```json
{
  "id": "unique-project-slug",
  "title": "Project name",
  "description": "A short, verified description.",
  "image": "img/existing-image.png",
  "imageAlt": "Description of the genuine image",
  "technologies": ["Kotlin", "Android"],
  "githubUrl": "https://github.com/owner/public-repo",
  "demoUrl": "https://example.com",
  "featured": true,
  "archived": false,
  "order": 1
}
```

`image`, `githubUrl`, `demoUrl`, and `order` are optional. Images require `imageAlt`. Lower `order` values appear first within each section. `featured` selects the larger card layout. `archived` displays an archived label; it does not remove a project. Current repositories are not marked archived because GitHub reports them as unarchived. The renderer supports an empty catalog.

Only add public or already publicly featured work. Verify descriptions, technology tags, images and URLs against public documentation. Never automatically populate this list from all accessible repositories. Add project images beneath `img/`, use compressed images where possible, and provide meaningful alt text. Original images remain available; large legacy presentation sheets are not downloaded on page load. Featured cards use genuine app icons, not invented screenshots. Other project previews are accessible through explicit links.

Run `npm run build`, `npm run lint` and `npm test` after edits. Check narrow and wide browser widths before opening a pull request.

## Maintain other content

- `src/index.template.html`: biography, experience, contact information and metadata.
- `scripts/projects.mjs`: catalog validation and card presentation.
- `assets/style.css`: responsive layout, colors, focus and reduced-motion styles.
- `assets/main.js`: progressively enhanced mobile menu.
- `assets/social-card.svg` and `.png`: editable social artwork and its PNG export. Keep both in sync when updating branding; a vector editor can export the SVG at 1200 × 630.
- `robots.txt` and `sitemap.xml`: canonical root URL.

No employment dates, achievements or metrics are inferred. Experience comes from the owner-provided profile. Historical project technologies are distinct from the current professional toolkit.

## Deployment and approval

The canonical URL remains https://kzaf.github.io/. All site asset paths are relative to the root page. The checked-in `index.html` keeps deployment independent of Node.js on GitHub Pages. `.nojekyll` allows plain static serving. Existing `css/`, `js/`, fonts and original image assets remain in the repository for historical compatibility but are no longer loaded by the redesign.

Review and approve the feature branch before merging. Do not enable automatic deployment of this feature branch. No repository visibility, DNS, secrets, Pages settings or deployment permissions have been changed.

## Review artifacts

See `docs/AUDIT.md` for verified sources and audit limitations, `docs/VALIDATION.md` for actual check results, and `docs/PULL_REQUEST.md` for the prepared PR description.
