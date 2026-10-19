NBK-E onboarding website — updated project

Open index.html after extracting the ZIP. No build step or server is required.

Pages: Overview, Access checklist, Systems & portals, ATM Operations, Infrastructure, Medical Care, Frequently Asked.
Edit js/content.js for the centralized content of all seven pages.
The earlier root content.js and content.json are superseded; do not copy them into this version.
ATM issues, vendors, contacts and applications render from collections. Add entries without changing HTML.
Infrastructure intentionally contains a coming-soon message until details are supplied.
Progress tracking IDs and initial completed IDs are unchanged. The two reference pages add no progress tasks.
Device-local progress uses the existing nbke: storage keys. Use the same browser and origin to retain previous progress.

Your original logo image was not uploaded. Copy it into images/nbk-logo.png.
Stylesheet fonts fall back to installed fonts when the Google Fonts URL is unavailable.

Changes reconstructed from the supplied Claude transcript and merged with the existing centralized-content version.
No vendor details, banking procedures or application URLs were invented.

Languages
Use English / العربية on any page. Arabic uses right-to-left layout.
The language choice is saved on this device and carried between pages.
Edit js/content.js for English and js/content.ar.js for Arabic. Keep the same keys and collection order in both files.
Language switching preserves the existing theme and checklist storage keys.
