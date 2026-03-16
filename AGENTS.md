# AGENTS.md

Project guidance for AI agents working in this repository.

## Project Overview
- Stack: Next.js (App Router), TypeScript, Tailwind CSS.
- Goal: single-page personal portfolio with sticky navigation and responsive sections.
- Primary content source: `src/data/portfolio.ts`.

## Source of Truth
- Treat `src/data/portfolio.ts` as the canonical content model.
- Prefer updating data entries instead of hardcoding text in components.
- Keep nav links and section IDs aligned:
  - `navItems` IDs in `src/data/portfolio.ts`
  - section `id` attributes in components (`HeroSection`, `ExperienceSection`, etc.)

## Icons
- Use Phosphor icons through the reusable wrapper `src/components/IconToken.tsx`.
- Keep icon mapping centralized in `src/lib/icon-map.ts`.
- Add new icon keys to the typed unions first, then map keys to icons, then reference keys in `portfolio.ts`.
- Avoid importing raw icon components directly inside section components when a mapping key is sufficient.

## Styling and UI Conventions
- Reuse existing section utility classes in `src/app/globals.css` (`section-shell`, `section-title`, `section-kicker`).
- Preserve the established palette from `docs/color_palet.txt`.
- Keep components accessible:
  - visible text labels for links/buttons
  - decorative icons with `aria-hidden`
  - focus styles intact

## File Structure (Important)
- Page composition: `src/app/page.tsx`
- Sections: `src/components/*`
- Content model: `src/data/portfolio.ts`
- Icon registry: `src/lib/icon-map.ts`
- Reference docs: `docs/color_palet.txt`, `wireframe.txt`

## Resume Handling
- Store resume PDF under `public/resume/`.
- Reference it with a root-relative path in `portfolio.ts` (for example, `/resume/your-resume.pdf`).

## Quick Checklist
| Task | Update this first | Also check/update |
|---|---|---|
| Add a project card | `src/data/portfolio.ts` (`projects`) | `src/components/ProjectsSection.tsx` only if layout changes |
| Remove or reorder projects | `src/data/portfolio.ts` (`projects`) | Confirm grid still looks balanced on mobile/desktop |
| Add an experience item | `src/data/portfolio.ts` (`experiences`) | `src/components/ExperienceSection.tsx` only if timeline style changes |
| Update social links | `src/data/portfolio.ts` (`socialLinks`) | `src/components/HeroSection.tsx`, `src/components/ContactSection.tsx` |
| Add a new skill/tool badge | `src/data/portfolio.ts` (`skillGroups`) | `src/lib/icon-map.ts` for `iconKey` mapping |
| Add a brand-new icon key | `src/lib/icon-map.ts` (union + map) | `src/data/portfolio.ts` to use the new key |
| Change section labels/order | `src/data/portfolio.ts` (`navItems`) | Ensure matching section `id` values in components |
| Add or update resume link | `public/resume/*` + `src/data/portfolio.ts` (`socialLinks`) | Decide view vs download behavior in link rendering |
| Change palette/theme tone | `src/app/globals.css` | Keep alignment with `docs/color_palet.txt` |

## Common Gotchas
| Gotcha | Why it happens | How to avoid/fix |
|---|---|---|
| Nav link does not scroll to section | `navItems.id` does not match section `id` | Keep IDs in `src/data/portfolio.ts` and component section IDs identical |
| Icon does not render | Missing `iconKey` union entry or map entry | Add key to union and map in `src/lib/icon-map.ts`, then use that key in data |
| Build fails with icon import issues | Wrong icon package entrypoint/type mix | Use mapped imports from `@phosphor-icons/react/dist/ssr` and keep types consistent |
| Resume link opens 404 | PDF not under `public/` or wrong path | Place file in `public/resume/` and use root-relative URL (`/resume/file.pdf`) |
| Section spacing looks inconsistent | Custom one-off spacing classes diverge from utilities | Reuse `section-shell`, `section-title`, `section-kicker` in `src/app/globals.css` |
| Social links look different across sections | Hero and Contact styles drift apart | Update both `HeroSection` and `ContactSection` when changing social UI |
| Lint passes but build fails | Runtime/type issue caught only at build time | Always run both `npm run lint` and `npm run build` before finishing |

## Validation Before Finishing
- Run:
  - `npm run lint`
  - `npm run build`
- If either fails, fix errors before concluding work.
