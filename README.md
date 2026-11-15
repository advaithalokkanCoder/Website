# Website dashboard

This repository now contains a simple static website dashboard built around the available repository information and visual assets.

## Files
- `index.html` — main landing page
- `styles.css` — design system and layout
- `script.js` — rendering logic for summary cards and charts
- `data/language-data.json` — structured data source for the dashboard
- `assets/*.svg` — built-in gallery visuals used by the page

## Preview locally
Open `index.html` in a browser, or serve the folder with a simple local web server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes
The repository was empty when the site was created, so I built a functional dashboard scaffold using the repository metadata and a small set of local visual assets. If you add the Excel data file and actual repository images later, the structure is ready to be updated with the exact source files.
