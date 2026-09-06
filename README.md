# NBK-E · IT Enterprise Monitoring — Onboarding Console

A three-page internal site: `index.html` (overview), `access.html` (checklist,
forms, progress dashboard), `systems.html` (monitoring systems, portal links,
FAQ). Shared styling in `css/style.css`, shared behavior in `js/script.js`.

## Running it
Just open `index.html` in a browser, or host the folder on any internal web
server. No build step, no dependencies beyond the Google Fonts CDN (falls
back to system fonts if that's blocked on your network).

## Progress tracking
Checkbox state is saved with `localStorage`, per browser/device — there's no
backend. Anyone new to the team starts fresh; each person's ticks are their
own. If you want a shared/team-wide dashboard instead, that needs a small
backend (even a shared JSON file behind a tiny API would do) — happy to help
wire that up if it'd be useful.

## Logo
The sidebar currently uses a small inline SVG mark instead of a real NBK
Egypt logo file, so the site doesn't ship with a placeholder image that might
not match the real brand mark. Drop the real logo at `images/nbk-logo.svg` (or
`.png`) and swap the `<div class="brand-mark">…</div>` blocks in each HTML
file for an `<img>` tag pointing at it.

## Editing content
Every data point (forms, systems, teams, FAQ) is plain HTML in the three
page files — no templating, so search-and-replace or direct edits are safe.
The `TRACKED_ITEMS` array at the top of `js/script.js` is the single source
of truth for what counts toward the progress ring; if you add or remove a
checklist row, update that array and the row's `data-track-id` to match.
