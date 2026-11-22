# TemplateHub

A static portfolio-style directory that showcases every website template and project in one place.
Built with plain HTML, CSS and vanilla JavaScript. No build step, no backend, no dependencies.

Developed by **PythosX**.

## Folder structure

```
templatehub/
├── index.html              Landing page
├── assets/
│   ├── css/style.css
│   └── js/app.js           Project list, search, filters, instruction dialogs
├── projects/               All templates, kept in their original structure
│   ├── troweld/  browny/  carvilla/  finter/  fonicy/  goodweb/
│   ├── it-next/  jackpiro/  john-doe/  pcoint/  picstudio/  spering/
│   ├── training-institute/
│   ├── cipherx/            Standalone HTML project
│   ├── mini-games/         Starter collection (first game: 01-snake)
│   ├── dance-website/      Node.js app (runs locally, see below)
│   └── notifies/           Chrome extension (load unpacked)
├── vercel.json
└── README.md
```

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploy to Vercel (static)

### Option 1: Vercel dashboard + GitHub
1. Create a new GitHub repository and push this folder to it (the folder containing `index.html` is the repo root).
2. Go to https://vercel.com/new and import the repository.
3. Set **Framework Preset** to **Other**. Leave **Build Command** and **Output Directory** empty.
4. Click **Deploy**. Every push to the main branch redeploys automatically.

### Option 2: Vercel CLI
```bash
npm i -g vercel
cd templatehub
vercel          # preview deployment
vercel --prod   # production deployment
```
Answer the prompts with the defaults. When asked for the output directory, keep `./`.

All paths are relative, so the site works at the domain root and on any preview URL.

## Adding a new project

1. Copy the project folder into `projects/<slug>/`.
2. Add an entry to the `PROJECTS` array in `assets/js/app.js` with `name`, `cats`, `desc`, `icon`, an optional `thumb`, and `href` (for example `projects/<slug>/index.html`).
3. If you use a new category, add it to the `CATEGORIES` array.

## Special projects

**Dance Website (Node.js).** Needs Node.js and a local MongoDB. It cannot run on Vercel's static hosting.
```bash
cd projects/dance-website
npm install
node app.js
# open http://localhost:8000
```

**Notifies (Chrome extension).**
1. Open `chrome://extensions`.
2. Turn on **Developer mode**.
3. Click **Load unpacked** and select the `projects/notifies` folder.

**Mini Games.** The card opens `projects/mini-games/01-snake/index.html`. Add more games as `02-name/`, `03-name/`, and so on.

## Notes

- Templates keep their original licenses (the free-css.com templates typically require keeping their credit links).
- The Google Fonts used by the landing page load from the web; the page falls back to system fonts offline.
