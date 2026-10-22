# Validation results

Checked locally on 22 October 2026 with Node.js 24.19.0 and npm 11.9.0.

## Passed

- `npm install --ignore-scripts --no-audit --no-fund` and `npm ci --ignore-scripts --no-audit --no-fund`: successful; no dependencies to fetch.
- `npm run build`: generated production root `index.html` with seven project cards, no client-side project fetching, and no unresolved template markers.
- `npm run lint`: JavaScript syntax, catalog shape, unique IDs, one h1, project count, local assets, internal anchor targets and image alt attributes.
- `npm test` and direct `node scripts/projects.test.mjs`: renderer/catalog tests covering unsafe URLs, duplicate IDs, image traversal, output escaping, ordering, archived labels and empty states; all three direct tests passed.
- Primary text/background contrast calculations exceed WCAG AA's 4.5:1: body 16.83:1; muted panel copy 7.91:1; accent 9.93:1; primary button 8.91:1; tags 9.72:1. This is not a full accessibility audit.
- Public metadata and README verification for all seven selected repositories. Selected GitHub links returned readable project documentation.
- TriviApp Play Store page accessible and matches the app. Unverified older store actions are omitted and documented in the audit.
- Social image exported at 1200 × 630 and visually inspected.
- Original six portfolio projects retained. Catalog reviewed against the public sources; no private, unpublished or company-internal work included.
- Static source review confirms semantic sections, a skip link, heading hierarchy, visible focus styles, image dimensions, deferred navigation script, below-the-fold image lazy loading, responsive CSS breakpoints and reduced-motion rules.

## Not verified

- Chromium visual/responsive checks, menu interaction, keyboard navigation and screen-reader behavior: browser launch failed with a sandbox socket permission error. The additional-permission retry was canceled. A local HTTP preview server was also blocked by socket restrictions. Responsive and accessible behavior is implemented but cannot be claimed as browser-tested here.
- Core Web Vitals, Lighthouse, full automated accessibility scan and real-device performance: no working browser session. The page minimizes dependencies and image transfers, but no performance score is claimed.
- LinkedIn destination availability: URL preserved from existing public source; successful current access was not established.
- Actual GitHub Pages settings, deployment and post-deployment asset checks: unavailable through this connection and intentionally unchanged.
- Initial remote delivery was blocked by HTTP 403 from the GitHub integration. After the owner installed the connector on the correct account, feature-branch creation succeeded. The prepared changes are being delivered through the connector. No merge or deployment is authorized in this delivery step.

## Before approval to publish

Apply the redesign commits to a fresh upstream checkout, run the documented commands, then inspect desktop, tablet and narrow mobile widths. Check menu toggle/Escape, keyboard focus, anchors, image previews, email and social links. Review Pages configuration and deployment behavior before merging. Keep the production URL https://kzaf.github.io/.
