# Isaias Portfolio

Single-page portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Agent Guidance

For future AI-assisted updates in this project, see:

- `AGENTS.md`

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit Portfolio Content

All main content is managed in:

- `src/data/portfolio.ts`

Update this file to change:

- Hero text (name, title, value proposition)
- Social links (GitHub, LinkedIn, Resume)
- Skill badges
- Experience timeline
- Project cards
- Education and certifications
- Section navigation labels

## Main Structure

- `src/app/page.tsx` - single-page layout and section composition
- `src/components/*` - section components and side navigation
- `src/app/globals.css` - global styles, palette tokens, section utility classes
- `src/lib/icon-map.ts` - icon key to Phosphor icon mapping
- `src/components/IconToken.tsx` - reusable icon renderer
- `docs/color_palet.txt` - source palette reference
- `wireframe.txt` - initial layout wireframe reference

## Checks

```bash
npm run lint
npm run build
```
