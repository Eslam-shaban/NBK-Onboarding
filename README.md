# NBK-E · IT Enterprise Monitoring — Onboarding Console

An internal onboarding website for the NBK Egypt IT Monitoring team, with seven pages in English and Arabic.

## Running the site

Open `index.html` in a browser, or host the project folder on an internal static web server. No build step or package installation is required. JavaScript must be enabled. Google Fonts falls back to installed fonts when unavailable.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Team overview, responsibilities, collaborating teams and onboarding timeline |
| `access.html` | Access checklist and progress dashboard |
| `systems.html` | Monitoring systems, portal links and operational FAQs |
| `atm.html` | ATM issues, vendors, contacts and applications |
| `infrastructure.html` | Searchable directory of 12 teams and their responsibilities |
| `medical-care.html` | Personal Services: performance appraisal, learning and medical information |
| `faq.html` | Searchable employee FAQ directory |

## Languages

Use the English / العربية buttons on any page. Arabic uses a right-to-left layout. The selected language is saved on the device and carried between pages in the `lang` URL parameter. Open `infrastructure.html?lang=ar`, for example, to view the Arabic infrastructure directory.

Both languages include all 12 infrastructure teams, their descriptions and responsibilities, plus translated search and selection controls.

## Editing content

- `js/content.js`: centralized English content, navigation, assets and progress settings.
- `js/content.ar.js`: centralized Arabic content. Keep keys, IDs, URLs and collection order aligned with English.
- `js/language.js`: language selection, direction and language-aware page links.
- `js/script.js`: shared rendering, search, checklist progress and theme behavior.
- `css/style.css`: shared styling.
- HTML files: page structure and content bindings such as `data-content-text`.

Edit the content files to update team details, applications, contacts and FAQs. Infrastructure entries are under `infrastructure.teams`; each has an `id`, `name`, `description`, `keywords` and `responsibilities`. Keep team IDs consistent between languages and include relevant search terms in `keywords`.

The employee FAQ order comes from the `faqPage.items` array in each content file. The health-insurance limit question is third and the Uber billed to NBK question is fifth. Reorder complete entries, including their answers and keywords, in both languages.

The earlier root-level `content.js` and `content.json` are superseded by the files in `js/`.

## Progress and preferences

Checklist state is stored locally per browser/device; there is no backend or shared team progress. Use the same browser and origin to retain saved progress. Language and theme choices are also stored locally.

Progress settings live under `progress` in the content files, including `trackedItemIds`, `initialCompletedItemIds` and storage keys. When adding or removing a tracked checklist item, keep these settings and its HTML `data-track-id` aligned in both languages. Initial completed items are applied when progress is first seeded.

## Logo and internal links

The pages use `images/nbk-logo.png`, configured under `site.logo` in the content files. Keep that asset available when copying or hosting the project.

Application and document links point to their configured destinations; internal resources require the appropriate network access and permissions. This site is an internal onboarding reference and is not intended for external distribution.
