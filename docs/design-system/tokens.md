# Tokens

Defined in `src/app/globals.css`. The file uses a two-layer approach:

- **`:root`** — raw named values (e.g. `--accent: #16db65`). Use these with `var()` in arbitrary Tailwind values or inline styles.
- **`@theme inline`** — Tailwind aliases (e.g. `--color-accent: var(--accent)`). These generate utility classes like `bg-accent`, `text-accent`, `border-accent/50`.

Always prefer Tailwind utility classes (`text-accent`, `bg-surface-2/15`) over raw `var()` in component JSX.

---

## Colors

### Active theme (light)

| `:root` token | Tailwind class | Value | Description |
|---|---|---|---|
| `--background` | `bg-background` / `text-background` | `#f8f8f8` | Page background |
| `--surface` | `bg-surface` / `text-surface` | `#0d2818` | Primary dark surface (nav, headings) |
| `--surface-2` | `bg-surface-2` / `text-surface-2` | `#04471c` | Secondary surface (card bg tints, borders) |
| `--accent` | `bg-accent` / `text-accent` | `#16db65` | Primary interactive color (CTAs, focus rings) |
| `--accent-2` | `bg-accent-2` / `text-accent-2` | `#058c42` | Darker accent (hover on accent elements, kicker text) |
| `--accent-3` | `bg-accent-3` / `text-accent-3` | `#11b954` | Mid hover variant |
| `--accent-mid` | `bg-accent-mid` / `text-accent-mid` | `#9ce6bb` | Icon tint on dark surfaces |
| `--accent-light` | `bg-accent-light` / `text-accent-light` | `#d9ffe8` | Link text on dark surfaces |
| `--foreground` | `text-foreground` | `#020202` | Default body text |
| `--muted` | `text-muted` | `#a9b8b0` | Muted / secondary text |

### Composite surface tokens

These are defined in `:root` via `color-mix()` and used as Tailwind arbitrary values: `bg-[var(--surface-card)]`.

| Token | Value | Usage |
|---|---|---|
| `--surface-card` | `color-mix(in srgb, var(--surface-2) 15%, transparent)` | Card backgrounds |
| `--surface-card-border` | `color-mix(in srgb, var(--surface-2) 50%, transparent)` | Card borders |
| `--surface-chip` | `color-mix(in srgb, var(--accent) 10%, transparent)` | Chip / badge backgrounds |
| `--surface-chip-border` | `color-mix(in srgb, var(--accent) 20%, transparent)` | Chip / badge borders |

### Dark theme variant

Commented out in `globals.css`. Same token names, with `--background: #020202` and `--foreground: #f5f5f5`.

---

## Typography

Fonts are loaded in `src/app/layout.tsx` via `next/font/google` and exposed as `--font-geist-sans` / `--font-geist-mono`. The `@theme inline` block maps these to `--font-sans` / `--font-mono` so `font-sans` and `font-mono` Tailwind classes work.

### Font families

| Token | Tailwind class | Value |
|---|---|---|
| `--font-sans` | `font-sans` | Geist Sans |
| `--font-mono` | `font-mono` | Geist Mono |

### Scale

| Role | Size | Weight | Notes |
|---|---|---|---|
| Hero title | `clamp(3rem, 6vw, 5rem)` | 700 | Responsive, single use |
| Section title | `1.75rem` | 700 | `.section-title` utility |
| Card title | `1.125rem` | 600 | — |
| Body | `1rem` | 400 | Default |
| Small | `0.875rem` | varies | Navigation, social links |
| Label / badge | `0.75rem` | 500 | Skill badges, date ranges |
| Kicker | `0.75rem` | 400 | `.section-kicker` — uppercase, `letter-spacing: 0.2em` |
| Timeline date | `0.69rem` | — | `letter-spacing: 0.11em` |

### Global utilities

```css
.section-title  { font-size: 1.75rem; font-weight: 700; line-height: 1.2; color: var(--surface); }
.section-kicker { font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent-2); }
```

---

## Spacing

4px base unit. Named tokens are defined in `:root` and used via `var()` in arbitrary Tailwind values.

| Token | Value | Use |
|---|---|---|
| `--space-xs` | `4px` | Micro gaps |
| `--space-sm` | `8px` | Icon/text gap, badge padding |
| `--space-md` | `16px` | Default element gap |
| `--space-lg` | `24px` | Card internals |
| `--space-xl` | `32px` | Section internals |
| `--space-2xl` | `48px` | — |
| `--space-3xl` | `80px` | Section separation & scroll offset |
| `--gap-inline` | `8px` | Icon + text inline gap |
| `--gap-stack` | `16px` | Nav item list gap |
| `--gap-grid` | `24px` | Project / cert card grid gap |
| `--pad-card` | `20px` | Standard card padding (`p-5`) |
| `--sidebar-w` | `280px` | Fixed sidebar width |

---

## Border Radius

Defined in `:root`. Use via `var()` in arbitrary Tailwind values or reference the matching Tailwind default class.

| Token | Value | Tailwind equiv | Used on |
|---|---|---|---|
| `--radius-sm` | `6px` | `rounded-md` | Form inputs, badges |
| `--radius-md` | `8px` | `rounded-lg` | Certification icon tiles |
| `--radius-lg` | `12px` | `rounded-xl` | Cards (project, experience) |
| `--radius-full` | `9999px` | `rounded-full` | Pills, nav items, social buttons |

---

## Shadows

Defined in `:root`. Use via `shadow-[var(--shadow-md)]` Tailwind arbitrary values.

| Token | Value | Used on |
|---|---|---|
| `--shadow-glow` | `0 0 0 1px rgba(22, 219, 101, 0.05)` | Project card accent ring |
| `--shadow-md` | `0 10px 24px rgba(2, 2, 2, 0.18)` | Elevated experience cards |
| `--shadow-lg` | `0 20px 48px rgba(2, 2, 2, 0.24)` | Dialogs / focus overlays |
| `--shadow-ring` | `0 0 0 4px var(--background)` | Timeline dot white ring |

---

## Motion

Defined in `:root`. Use via `duration-[var(--duration-default)]` or in arbitrary transition values.

| Token | Value |
|---|---|
| `--duration-fast` | `150ms` |
| `--duration-default` | `200ms` |
| `--duration-slow` | `300ms` |
| `--ease-default` | `ease-in-out` |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |

---

## Breakpoints

Standard Tailwind breakpoints; `lg` is the primary layout breakpoint.

| Name | Width | Role |
|---|---|---|
| `sm` | 640px | Typography scaling, minor adjustments |
| `md` | 768px | Grid changes (2-col projects, certifications) |
| `lg` | 1024px | Sidebar layout activates, main layout shifts |

---

## Opacity conventions

Target convention: **Tailwind slash syntax only** (`text-white/70`, `border-surface-2/50`). Avoid raw `rgba()` in component classes.

Common opacity levels in use:

| Level | Usage |
|---|---|
| `/10` or `/15` | Card backgrounds (`bg-surface-2/15`) |
| `/20` | Accent chip backgrounds (`bg-accent/10`) |
| `/40` – `/50` | Borders at rest |
| `/70` – `/80` | Secondary text on dark surfaces |
| `/85` | Body text on dark cards |
| `/100` | Full (hover, active states) |
