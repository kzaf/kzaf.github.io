# Repository and content audit

Inspected 22 October 2026. Upstream default branch: `master`; upstream commit: `5a7a05e5e0dca40515359478571fa4ddcf2d1451`.

## Existing implementation

The recursive repository inventory contains plain HTML, Bootstrap 3.3.7, jQuery 3.1.0, icon fonts, animation/hover stylesheets and image assets. There is no package manifest, application framework, README, configured test suite, or checked-in Actions workflow. Custom CSS uses a fixed desktop profile sidebar and duplicated desktop/mobile biography markup. The site includes a legacy Universal Analytics script, external Google Fonts, missing image alt text and no section navigation, canonical metadata or social card. Several source images exceed 2 MB; the largest presentation image is approximately 15 MB. Desktop and mobile content repeats outdated Netherlands, phone and Skype details. The Get A Room and Calculator headings incorrectly link to TriviApp's Play Store listing.

The live site's rendered text and links were inspected through the web connector. A visual inspection of the original live site was unavailable. The repository tree and accessible source files were inspected through the GitHub connector. The connector cannot retrieve content of files over 1 MB in this environment; those original assets were inventoried by name, size and blob SHA, and remain untouched upstream. No AGENTS.md exists in the accessible repository tree or workspace.

## Design and architecture decision

Retain static hosting and replace Bootstrap/jQuery in the rendered page with semantic HTML, responsive CSS and a small navigation script. A dependency-free Node build generates cards from a validated JSON catalog into committed root HTML. This preserves the existing URL and static serving behavior without adding a framework, backend, deployment workflow or runtime dependency. Retain original assets and old libraries in history and on disk; do not load obsolete libraries in the new page.

## Verified project sources

All seven catalog entries have public repository metadata and readable project documentation:

| Project | Documentation | Evidence used |
| --- | --- | --- |
| TriviApp | https://github.com/kzaf/TriviApp/blob/master/README.md | Firebase authentication, scoring, categories, Retrofit, Room, themes; Java and original icon from existing portfolio |
| Calculator & Currency Converter | https://github.com/kzaf/SimpleCalculator/blob/master/README.md | Kotlin, calculator, conversion, fixer.io; original icon from portfolio |
| Get A Room | https://github.com/kzaf/GetARoom/blob/master/README.md | Java, booking and management; thesis context and Volley from existing portfolio |
| Popular Movies | https://github.com/kzaf/PopularMovies_Stage2/blob/master/README.md | Details, trailers, reviews, offline favourites, tablet support; Java and original preview from portfolio |
| Baking App | https://github.com/kzaf/BakingApp/blob/master/README.md | Recipes, ExoPlayer, Espresso, Retrofit; Java, widget and original icon from portfolio |
| Pokédex | https://github.com/kzaf/Pokedex-app/blob/master/README.md | React Native, PokeAPI; search, mobile platforms, details and original preview from portfolio |
| Rick and Morty | https://github.com/kzaf/rickandmortyapp/blob/main/README.md | Flutter, Dart, BLoC, Dio, characters and details; no screenshot claimed or fabricated |

Public repository search returned 18 repositories. The list was curated rather than automatically published. Readme requests for `repository-search` and `WeatherForecastMVVM` returned 404, so they were not selected. Starter exercises, sprite collections and other unselected repositories were omitted. No private repositories were requested or used. No unpublished or confidential work is included.

Original portfolio: https://kzaf.github.io/ and its upstream index.html. Its six featured projects are all preserved. LinkedIn (`https://www.linkedin.com/in/kzafeiropoulos/`) and email (`k.a.zafeiropoulos@gmail.com`) come from the original source. Location, current title, employer, past experience and current skills come from the owner-provided profile, not inferred employment history. No dates were supplied, so none are displayed.

TriviApp's Google Play page was accessible and matched the project. The older hotel and calculator listings could not be opened by the web connector; their original URLs are preserved here for reference rather than exposed as verified live actions:

- https://play.google.com/store/apps/details?id=com.hotelreservation.hotelreseration
- https://play.google.com/store/apps/details?id=com.calc.kzaf.simplecalculator

GitHub reports all selected repositories as unarchived. The catalog supports archived status but does not invent maintenance status based on age.

## Access and delivery limitations

Direct git clone and curl failed because the configured workspace proxy at port 8080 was unreachable. The connected GitHub integration allows reads but rejected remote branch creation with HTTP 403, `Resource not accessible by integration`. At that initial audit stage, no remote writes, pull request, merge or deployment occurred. The owner subsequently installed the connector on the correct account, restoring write access for feature-branch delivery. A local Git repository was initialized from the accessible upstream files solely for review and patch production; its baseline commit is not the upstream Git history. Large original files omitted from this local snapshot are not deleted by the generated patch. Apply only the redesign commits/patch to a fresh upstream checkout, not the local snapshot's root commit.

Pages settings could not be queried through the available connector. The live page and checked-in root index are consistent with static Pages hosting; the redesign preserves that arrangement. Actual repository settings must be reviewed by the owner before any later deployment.
