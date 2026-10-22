# Modernize Android engineer portfolio with a static, data-driven redesign

Replaces the outdated Bootstrap/jQuery page with a responsive dark portfolio for Konstantinos Zafeiropoulos, now based in Athens and working as an Android Engineer at Alpha Bank. Adds a concise biography, four-employer experience timeline, categorized toolkit, verified contact links and seven curated public projects while preserving all six original projects.

Project cards are generated from `src/data/projects.json` into committed static HTML. The page includes accessible navigation, reduced-motion support, focus styles, canonical/social metadata, a sitemap and robots.txt. The implementation requires no runtime dependencies or hosting changes, and original assets remain intact.

## Validation

- npm dependency installation, production generation, catalog/HTML/asset checks and renderer tests passed.
- Browser visual, keyboard, responsive and automated accessibility verification could not run: Chromium failed under the execution sandbox, and the permission retry was canceled.
- Public repository metadata and selected README documentation verified through the GitHub connector.
- TriviApp Google Play verified; older unverified listings omitted from public action buttons and retained in audit notes.
- No private or unpublished project content included.

## Review notes

The original repository history and assets are preserved. The feature branch contains the prepared static redesign; it has not been merged or deployed. Browser visual, responsive and keyboard verification remains outstanding as documented in `docs/VALIDATION.md`.
