# Isaias Portfolio

A single-page personal portfolio with sticky side navigation and responsive sections, built with the Next.js App Router.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** (token-based theme layer in `globals.css`)
- **Phosphor Icons v2** (SSR-safe imports)

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build + type check
npm run start    # serve the production build
npm run lint     # ESLint
npx tsc --noEmit # type-check without building
```

There are no automated tests in this project. Run `npm run lint` and `npm run build` before pushing.

## Edit Portfolio Content

All page content lives in a single file:

- **`src/data/portfolio.ts`**

Update it to change:

- Hero text (name, title, value proposition)
- Social links (GitHub, LinkedIn, Resume)
- Skill / tool badges
- Experience timeline
- Project cards
- Education and certifications
- Section navigation labels

Prefer editing data entries over hardcoding text in components. To add the resume, drop the PDF in `public/resume/` and reference it as `/resume/your-resume.pdf` in `portfolio.ts`.

## Sections

The page renders in this order (nav order matches): **Hero → Projects → Experience → Certifications → About → Contact**.

## Project Structure

- `src/app/page.tsx` — single-page layout; composes sections and passes slices of `portfolioData`
- `src/app/globals.css` — global styles, palette tokens, and section utility classes
- `src/components/*` — one file per section, plus `SideNav` and `IconToken`
- `src/components/ui/*` — shared primitives (`SectionHeader`, `Button`, `Card`, `Badge`)
- `src/data/portfolio.ts` — canonical content model and types
- `src/lib/icon-map.ts` — maps icon keys to Phosphor icons
- `docs/design-system/` — design system spec, tokens, and component reference
- `docs/color_palet.txt` — palette reference (`src/app/globals.css` is the source of truth)
- `docs/wireframe.txt` — initial layout wireframe reference

## Styling

Colors, spacing, radius, shadow, and motion are defined as CSS variables in `src/app/globals.css` and exposed as Tailwind tokens. Use semantic tokens (e.g. `text-foreground`, `bg-accent`) in components — never raw hex values.

## Contributing / AI-Assisted Updates

For conventions, common tasks, and gotchas when working in this repo (including AI-assisted edits), see **`CLAUDE.md`**.

## Deployment

This is a standard Next.js app and deploys cleanly to [Vercel](https://vercel.com). Any host that supports Next.js 16 works — build with `npm run build` and serve with `npm run start`.
