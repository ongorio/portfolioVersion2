# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build + type check
npm run lint     # ESLint
npx tsc --noEmit # type-check without building
```

There are no tests in this project.

## Architecture

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Phosphor Icons v2.

### Data flow

All portfolio content lives in **`src/data/portfolio.ts`** as a single `portfolioData` object. This is the only file to edit when updating content (name, jobs, projects, certifications, etc.). Types are defined in the same file.

### Component structure

- **`src/app/page.tsx`** — root page; imports all section components and `SideNav`, passes slices of `portfolioData` as props. Section render order matches nav order: Hero → Projects → Experience → Certifications → About → Contact.
- **`src/components/ui/`** — shared primitives used across sections:
  - `SectionHeader` — kicker + h2 title pair used by every section
  - `Button` — `primary | secondary | social` variants; renders `<a>` when `href` is provided, `<button>` otherwise
  - `Card` — `standard | elevated | interactive` variants; pass `className` for layout overrides (e.g. flex row in CertificationsSection)
  - `Badge` — `skill` (with icon) or `tech` (label only) variants
- **`src/components/`** — one file per section plus `SideNav` and `IconToken`
- **`src/lib/icon-map.ts`** — centralises all Phosphor icon imports and exports typed maps (`skillIconMap`, `socialIconMap`, `navIconMap`, `categoryIconMap`)

### Styling conventions

Tailwind CSS v4 with a custom token layer in **`src/app/globals.css`**:
- Raw values in `:root` (e.g. `--accent: #16db65`)
- Tailwind colour aliases in `@theme inline` (e.g. `--color-accent: var(--accent)`) — these become utility classes like `bg-accent`, `text-accent`
- Composite surfaces (`--surface-card`, `--surface-chip`, etc.) defined via `color-mix()` in `:root`, used as Tailwind arbitrary values: `bg-[var(--surface-card)]`
- Shadow, spacing, radius, and motion tokens also live in `:root` and are used via `var()` in arbitrary Tailwind values
- Never use raw hex values in components — always use semantic tokens
- Reuse the existing section utility classes (`section-shell`, `section-title`, `section-kicker`) rather than inventing one-off spacing

### Accessibility

- Keep visible text labels on links and buttons
- Mark decorative icons with `aria-hidden`
- Leave focus styles intact (don't strip `focus-visible` rings)

### Icons

All icons must be imported from `@phosphor-icons/react/ssr` (SSR-safe) in server components. The `ContactSection` is a client component (`"use client"`) and imports `CheckCircleIcon` from `@phosphor-icons/react` directly. Render icons through `<IconToken>` (wraps the icon with standard defaults) rather than using Phosphor components directly.

### Client components

Only `SideNav` and `ContactSection` are client components. `SideNav` uses `IntersectionObserver` to track scroll position across section IDs `["work", "experience", "certifications", "about", "contact"]` and highlights the active nav item.

### Adding a new section

1. Add data type and entries to `src/data/portfolio.ts`
2. Create `src/components/NewSection.tsx` using `SectionHeader`, `Card`, `Badge` as appropriate
3. Add a nav entry with `iconKey` to `portfolioData.navItems`
4. Add the section ID to `SECTION_IDS` in `SideNav.tsx`
5. Import and render the section in `src/app/page.tsx` in the correct order

### Resume handling

- Store the resume PDF under `public/resume/`
- Reference it with a root-relative path in `portfolio.ts` (e.g. `/resume/your-resume.pdf`)

## Common tasks

| Task | Update this first | Also check/update |
|---|---|---|
| Add a project card | `src/data/portfolio.ts` (`projects`) | `ProjectsSection.tsx` only if layout changes |
| Remove or reorder projects | `src/data/portfolio.ts` (`projects`) | Confirm grid still balances on mobile/desktop |
| Add an experience item | `src/data/portfolio.ts` (`experiences`) | `ExperienceSection.tsx` only if timeline style changes |
| Update social links | `src/data/portfolio.ts` (`socialLinks`) | `HeroSection.tsx`, `ContactSection.tsx` |
| Add a skill/tool badge | `src/data/portfolio.ts` (`skillGroups`) | `src/lib/icon-map.ts` for the `iconKey` mapping |
| Add a brand-new icon key | `src/lib/icon-map.ts` (union + map) | `src/data/portfolio.ts` to use the new key |
| Change section labels/order | `src/data/portfolio.ts` (`navItems`) | Matching section `id` and `SECTION_IDS` in `SideNav.tsx` |
| Add/update resume link | `public/resume/*` + `src/data/portfolio.ts` (`socialLinks`) | Decide view vs. download behaviour in link rendering |
| Change palette/theme | `src/app/globals.css` | Update CSS variables/tokens first; avoid raw hex |

## Common gotchas

| Gotcha | Why it happens | Fix |
|---|---|---|
| Nav link does not scroll to section | `navItems.id` does not match the section `id` | Keep IDs in `portfolio.ts`, the section `id` attributes, and `SECTION_IDS` identical |
| Icon does not render | Missing `iconKey` union or map entry | Add the key to the union and map in `src/lib/icon-map.ts`, then use it in data |
| Build fails on icon imports | Wrong Phosphor entrypoint | Import from `@phosphor-icons/react/ssr` in server components; keep types consistent |
| Resume link 404s | PDF not under `public/` or wrong path | Place the file in `public/resume/` and use a root-relative URL |
| Social links drift between sections | Hero and Contact styled separately | Update both `HeroSection` and `ContactSection` together |
| Lint passes but build fails | Type/runtime issue caught only at build | Run both `npm run lint` and `npm run build` before finishing |

## Before finishing

Run `npm run lint` and `npm run build`. Fix any errors before concluding work. (See `docs/wireframe.txt` for the original layout reference; `src/app/globals.css` is the palette source of truth.)
