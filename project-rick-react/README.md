# Project Rick — React

A React rebuild of the original Project Rick site. The existing images and `db.json` data are preserved, while the frontend is now component-based and uses CSS Grid instead of floats for predictable layout.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
npm run build
```

## What changed

- React component structure
- Season selection without manual DOM manipulation
- Local `db.json` data loading from `/db.json`
- Character selector with React state
- Comments handled with React state
- Responsive CSS Grid layout
- Existing Project Rick images preserved
- No JSON Server is required for the current frontend
