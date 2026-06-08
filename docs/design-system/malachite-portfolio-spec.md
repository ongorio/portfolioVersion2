# Malachite Design System & Portfolio — Full Implementation Spec

**Stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS 4 · Geist Sans/Mono · Phosphor Icons v2  
**Theme:** Light default (dark variant exists, currently commented out)  
**Layout:** Fixed 280px sidebar + fluid scrollable main, responsive at `lg` (1024px)

---

## Table of contents

1. [Design tokens](#1-design-tokens)
2. [Global CSS setup](#2-global-css-setup)
3. [Component patterns](#3-component-patterns)
4. [Page layout shell](#4-page-layout-shell)
5. [Section: Hero](#5-section-hero)
6. [Section: Projects](#6-section-projects)
7. [Section: Experience](#7-section-experience)
8. [Section: Certifications ← NEW](#8-section-certifications--new)
9. [Section: About](#9-section-about)
10. [Section: Contact](#10-section-contact)
11. [Navigation — SideNav](#11-navigation--sidenav)
12. [Scroll-spy & active tracking](#12-scroll-spy--active-tracking)
13. [Gaps to resolve](#13-gaps-to-resolve)
14. [Implementation checklist](#14-implementation-checklist)

---

## 1. Design tokens

All tokens live in `src/app/globals.css` under `@theme {}` (Tailwind CSS 4) and `:root {}`. Tailwind binds them automatically so `bg-accent`, `text-surface`, etc. work as utility classes.

### 1.1 Color palette

#### Base green ramp

| Variable | Hex | Role |
|---|---|---|
| `--green-900` | `#020202` | Near-black |
| `--green-800` | `#0D2818` | Phthalo green — primary surface |
| `--green-700` | `#04471C` | Forest green — secondary surface |
| `--green-500` | `#058C42` | Spanish green — accent-2 |
| `--green-400` | `#11B954` | Mid accent (hover variant) |
| `--green-300` | `#16DB65` | Malachite — **signature accent** |
| `--green-200` | `#9CE6BB` | Accent mid tint (icons on dark) |
| `--green-100` | `#D9FFE8` | Accent light tint (links on dark) |

#### Neutrals

| Variable | Hex | Role |
|---|---|---|
| `--neutral-0` | `#FFFFFF` | White |
| `--neutral-50` | `#F8F8F8` | Page background |
| `--neutral-400` | `#A9B8B0` | Muted sage-grey text |
| `--neutral-900` | `#020202` | Default text / near-black |

#### Semantic tokens (use these in components, never raw hex)

```css
:root {
  /* Surfaces */
  --color-background: var(--neutral-50);    /* page bg */
  --color-surface:    var(--green-800);     /* nav, headings on light bg */
  --color-surface-2:  var(--green-700);     /* card borders, bg tints */
  --color-foreground: var(--neutral-900);   /* default body text */
  --color-muted:      var(--neutral-400);   /* secondary text */

  /* Accent */
  --color-accent:       var(--green-300);   /* CTAs, focus rings, highlights */
  --color-accent-2:     var(--green-500);   /* darker accent — hover on accent elements */
  --color-accent-3:     var(--green-400);   /* contact submit hover */
  --color-accent-mid:   var(--green-200);   /* icon tint on dark surfaces */
  --color-accent-light: var(--green-100);   /* link text on dark surfaces */

  /* Ink aliases */
  --text-strong:  var(--color-surface);     /* headings on light bg */
  --text-body:    var(--color-foreground);  /* body copy */
  --text-muted:   var(--color-muted);       /* secondary / meta */
  --text-on-dark: var(--neutral-0);         /* text on dark green surfaces */

  /* Functional surface composites */
  --surface-card:        color-mix(in srgb, var(--color-surface-2) 15%, transparent);
  --surface-card-border: color-mix(in srgb, var(--color-surface-2) 50%, transparent);
  --surface-chip:        color-mix(in srgb, var(--color-accent)   10%, transparent);
  --surface-chip-border: color-mix(in srgb, var(--color-accent)   20%, transparent);

  --focus-ring: var(--color-accent);
}
```

### 1.2 Typography

Fonts are loaded in `src/app/layout.tsx` via `next/font/google`:

```ts
import { Geist, Geist_Mono } from "next/font/google";
const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
```

Apply both variables to `<body>`.

#### Type scale

| Role | Size | Weight | Token / Notes |
|---|---|---|---|
| Hero title | `clamp(3rem, 6vw, 5rem)` | 700 | `--text-hero` — responsive |
| Display | `2.5rem` | 700 | `--text-display` |
| Section title | `1.75rem` | 700 | `--text-section` — `.section-title` utility |
| Card title | `1.125rem` | 600 | `--text-card-title` |
| Body | `1rem` | 400 | `--text-body-size` |
| Small | `0.875rem` | varies | `--text-sm` — nav, social links |
| Label / badge | `0.75rem` | 500 | `--text-xs` — kicker, badges |
| Timeline date | `0.69rem` | 400 | `--text-2xs` — `letter-spacing: 0.11em` |

#### Line heights

| Token | Value | Use |
|---|---|---|
| `--leading-tight` | `1.1` | Display / hero |
| `--leading-snug` | `1.2` | Section titles |
| `--leading-normal` | `1.5` | Body copy |
| `--leading-relaxed` | `1.7` | Long prose |

#### Letter spacing

| Token | Value | Use |
|---|---|---|
| `--tracking-tight` | `-0.03em` | Hero titles |
| `--tracking-kicker` | `0.2em` | `.section-kicker` |
| `--tracking-date` | `0.11em` | Timeline dates |

### 1.3 Spacing

4px base unit. Use named tokens over arbitrary values.

| Token | Value | Use |
|---|---|---|
| `--space-xs` | `4px` | Micro gaps |
| `--space-sm` | `8px` | Icon/text gap, badge padding |
| `--space-md` | `16px` | Default element gap |
| `--space-lg` | `24px` | Card internals |
| `--space-xl` | `32px` | Section internals |
| `--space-2xl` | `48px` | — |
| `--space-3xl` | `80px` | **Section separation & scroll offset** |
| `--gap-inline` | `8px` | Icon + text |
| `--gap-stack` | `16px` | Nav item list |
| `--gap-grid` | `24px` | Project/cert card grid |
| `--pad-card` | `20px` | Standard card padding |
| `--sidebar-w` | `280px` | Fixed sidebar |

### 1.4 Border radius

| Token | Value | Used on |
|---|---|---|
| `--radius-sm` | `6px` | Form inputs, badges |
| `--radius-md` | `8px` | Certification items, icon tiles |
| `--radius-lg` | `12px` | Cards (project, experience) |
| `--radius-full` | `9999px` | Pills, nav items, social buttons |

### 1.5 Shadows

| Token | Value | Used on |
|---|---|---|
| `--shadow-glow` | `0 0 0 1px rgba(accent, 5%)` | Project card ring |
| `--shadow-md` | `0 10px 24px rgba(foreground, 18%)` | Elevated experience cards |
| `--shadow-lg` | `0 20px 48px rgba(foreground, 24%)` | Dialogs / focus overlays |
| `--shadow-ring` | `0 0 0 4px var(--color-background)` | Timeline dot white ring |

### 1.6 Motion

All transitions use these; avoid bare Tailwind `transition`.

| Token | Value |
|---|---|
| `--duration-fast` | `150ms` |
| `--duration-default` | `200ms` |
| `--duration-slow` | `300ms` |
| `--ease-default` | `ease-in-out` |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |

Shorthands:

```css
--transition-colors:    color, background-color, border-color — duration-default ease-default
--transition-transform: transform — duration-default ease-default
```

---

## 2. Global CSS setup

`src/app/globals.css`:

```css
@import "tailwindcss";

@theme {
  /* Mirror all :root tokens here so Tailwind generates utility classes */
  --color-background: ...;
  --color-surface: ...;
  /* ...all tokens from §1 */
}

:root {
  /* same values as @theme */
}

/* ---- Section utilities ---- */
.section-shell {
  margin-bottom: var(--space-3xl);
  scroll-margin-top: var(--space-3xl);
}
.section-kicker {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-kicker);
  text-transform: uppercase;
  color: var(--text-muted);
}
.section-title {
  margin-top: var(--space-sm);
  font-size: var(--text-section);
  font-weight: 700;
  line-height: var(--leading-snug);
  color: var(--text-strong);
}

/* ---- Focus ring ---- */
.focus-ring:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-background), 0 0 0 4px var(--focus-ring);
}

/* ---- Scrollbar ---- */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-thumb {
  background: var(--surface-card-border);
  border-radius: 999px;
}
```

---

## 3. Component patterns

Use Tailwind classes exactly as shown. Don't add arbitrary values unless specified.

### 3.1 Standard card

```
rounded-xl
border border-surface-2/50
bg-surface-2/15
p-5
shadow-[0_0_0_1px_rgba(22,219,101,0.05)]
```

**Elevated card** (Experience) — same + stronger shadow:

```
shadow-[0_10px_24px_rgba(2,2,2,0.18)]
```

**Interactive card** (Projects) — add hover states:

```
transition
hover:border-surface-2/80
hover:shadow-md
cursor-pointer
```

### 3.2 Certification card (new — see §8)

```
flex items-start gap-4
rounded-xl border border-surface-2/50 bg-surface-2/15 p-5
```

Icon tile inside:

```
flex h-11 w-11 flex-none items-center justify-center
rounded-lg
border border-accent/20 bg-accent/10
```

### 3.3 Skill badge

```
inline-flex items-center gap-1.5
rounded-md
border border-surface-2/50
bg-surface-2/15
px-3 py-1 text-xs font-medium
text-surface/85
```

### 3.4 CTA / social button

```
inline-flex items-center gap-2
rounded-full
border border-accent/40 hover:border-accent
bg-surface hover:bg-surface-2
text-accent-light text-sm
px-4 py-2
transition
focus-ring
```

### 3.5 Primary CTA button (Hero)

```
inline-flex items-center gap-2
rounded-full
bg-accent hover:bg-accent-2
text-surface font-semibold text-sm
px-5 py-2.5
transition
focus-ring
```

### 3.6 Navigation link — desktop sidebar

```
flex items-center gap-3
text-sm text-white/70 hover:text-accent
hover:translate-x-1
transition
focus-ring
```

Active state: `text-accent font-medium`

### 3.7 Navigation link — mobile pill

```
whitespace-nowrap
rounded-full
border border-white/15 hover:border-accent/60
px-3 py-1 text-xs
text-white/70 hover:text-accent
transition
focus-ring
```

Active state: `border-accent/60 text-accent`

### 3.8 Focus ring (all interactive elements)

```
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-accent
focus-visible:ring-offset-2
focus-visible:ring-offset-background
```

Or use the global `.focus-ring` utility class.

### 3.9 Timeline

- **Vertical rail:** `absolute left-[7px] top-0 h-full w-[2px] bg-surface-2/50`
- **Dot:** `h-3.5 w-3.5 rounded-full border-2 border-surface-2/50 bg-accent shadow-[0_0_0_4px_var(--color-background)]`
- Items: `relative pl-8` — dot is absolute left-0, card floats right

### 3.10 Icons

All from Phosphor Icons v2. Standard sizes:

| Label | px | Where |
|---|---|---|
| `xs` | 14 | Timeline decorators |
| `sm` | 16 | Buttons, nav |
| `md` | 18 | Default |
| `lg` | 24 | Standalone |

Color on dark surfaces: `text-accent-mid` (`#9CE6BB`)
Color on accent: `text-surface`
Interactive: `text-accent`

---

## 4. Page layout shell

`src/app/page.tsx` (or a `PortfolioLayout` wrapper):

```tsx
<div className="lg:grid lg:grid-cols-[280px_minmax(0,1fr)] min-h-screen bg-background">
  {/* Sidebar — hidden below lg */}
  <aside className="hidden lg:block sticky top-0 h-screen">
    <SideNav active={active} onNavigate={navigate} />
  </aside>

  {/* Mobile top bar — visible below lg */}
  <header className="lg:hidden sticky top-0 z-10 flex items-center justify-between gap-4
    px-4 py-3 bg-surface text-on-dark">
    <Monogram />
    <nav className="flex gap-2 overflow-x-auto">
      {NAV_ITEMS.map(item => <MobilePill key={item.id} ... />)}
    </nav>
  </header>

  {/* Scrollable main */}
  <main className="h-screen overflow-y-auto lg:h-auto" ref={mainRef}>
    <div className="px-4 py-8 sm:px-6 lg:px-10 lg:py-14 max-w-[880px]">
      <HeroSection onNavigate={navigate} />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />   {/* NEW — see §8 */}
      <AboutSection />
      <ContactSection />
    </div>
  </main>
</div>
```

---

## 5. Section: Hero

**Id:** `#top` (no nav entry — not in scroll-spy)  
**Kicker:** `PORTFOLIO · {year}`

Content order:
1. Kicker span
2. `<h1>` — large responsive headline with accent-colored keyword. Size: `clamp(3rem, 6vw, 5rem)`, weight 800, `leading-tight tracking-tight text-surface`
3. Subtitle paragraph — `text-body text-lg leading-relaxed max-w-xl mt-4`
4. CTA row — Primary button ("See the work" → scrolls to `#work`) + Secondary button ("Get in touch" → scrolls to `#contact`). `flex gap-3 mt-8`
5. Stack chips row — availability badge + skill pills. `flex flex-wrap gap-2 mt-6`

Availability badge:

```
rounded-full border border-accent/30 bg-accent/10
px-3 py-1 text-xs font-mono text-accent-2
```

---

## 6. Section: Projects

**Id:** `#work`  
**Kicker:** `SELECTED WORK`  
**Title:** `Projects`

Grid: `grid grid-cols-1 md:grid-cols-2 gap-6 mt-7`

Each project card (`<a>` tag, interactive card pattern from §3.1):

```
group block rounded-xl border border-surface-2/50 bg-surface-2/15 p-5
shadow-[0_0_0_1px_rgba(22,219,101,0.05)]
hover:border-surface-2/80 hover:shadow-md
transition no-underline
```

Card internals (top to bottom):
1. **Thumbnail placeholder** — `h-[120px] rounded-md bg-surface border border-surface-card-border flex items-center justify-center mb-4`  — centered icon `text-accent-mid`
2. **Title row** — `flex items-center justify-between gap-2` — title `text-[1.125rem] font-semibold text-surface` + arrow-up-right icon `text-accent-2 group-hover:text-accent transition`
3. **Blurb** — `text-sm leading-normal text-body mt-2 mb-3.5`
4. **Tech badges** — `flex flex-wrap gap-2` of skill badges (§3.3)

---

## 7. Section: Experience

**Id:** `#experience`  
**Kicker:** `THE PATH SO FAR`  
**Title:** `Experience`

Timeline (§3.9) with items:

```tsx
type ExperienceItem = {
  year: string;    // e.g. "2024 — PRESENT"
  title: string;   // role
  org: string;     // company
  body: string;    // description
  last?: boolean;  // omits the rail line on final item
}
```

Each item card: elevated card pattern (§3.1 + stronger shadow):

```
rounded-xl border border-surface-2/50 bg-surface-2/15 p-5
shadow-[0_10px_24px_rgba(2,2,2,0.18)]
```

Inside:
- Year: `font-mono text-[0.69rem] tracking-[0.11em] text-muted mb-1`
- Title: `text-[1.125rem] font-semibold text-surface`
- Org: `text-sm text-muted mt-0.5`
- Body: `text-sm leading-normal text-body mt-3`

---

## 8. Section: Certifications ← NEW

> **This section is new.** It replaces the cert block previously embedded in `EducationSection.tsx`.

**Id:** `#certifications`  
**Kicker:** `CREDENTIALS`  
**Title:** `Certifications`  
**Nav entry:** between Experience and About (see §11)

### Data shape

```ts
type Cert = { name: string; org: string; year: string };
```

### Component

```tsx
// src/components/CertificationsSection.tsx
import { SealCheck } from "@phosphor-icons/react";

const CERTS: Cert[] = [
  // ← Replace with real credentials
  { name: "AWS Solutions Architect — Professional",    org: "Amazon Web Services",               year: "2025" },
  { name: "CKA — Certified Kubernetes Administrator",  org: "Cloud Native Computing Foundation", year: "2024" },
  { name: "Terraform Associate",                       org: "HashiCorp",                         year: "2024" },
  { name: "Professional Cloud Architect",              org: "Google Cloud",                      year: "2023" },
  { name: "CKAD — Certified Kubernetes App Developer", org: "Cloud Native Computing Foundation", year: "2023" },
  { name: "AWS Developer — Associate",                 org: "Amazon Web Services",               year: "2022" },
];

function CertCard({ cert }: { cert: Cert }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-surface-2/50 bg-surface-2/15 p-5">
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
        <SealCheck weight="bold" size={20} className="text-accent" />
      </div>
      <div className="flex min-w-0 flex-col gap-1">
        <span className="text-[1.125rem] font-semibold leading-snug text-surface">
          {cert.name}
        </span>
        <span className="text-sm text-muted">{cert.org}</span>
        <span className="mt-0.5 font-mono text-[0.69rem] tracking-[0.11em] text-muted">
          {cert.year}
        </span>
      </div>
    </div>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell">
      <span className="section-kicker">CREDENTIALS</span>
      <h2 className="section-title">Certifications</h2>
      <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
        {CERTS.map((c) => <CertCard key={c.name} cert={c} />)}
      </div>
    </section>
  );
}
```

> **Note on icons:** if the project routes icons through `IconToken.tsx` / `icon-map.ts`, replace `<SealCheck>` with your wrapper, e.g. `<IconToken name="SealCheck" weight="bold" size={20} className="text-accent" />`.

### Migration: remove old cert block from `EducationSection.tsx`

Delete the certifications sub-block (the `rounded-lg border border-accent/20 bg-accent/10 px-3 py-2` items) and any associated `CERTS` constant from that file. `EducationSection` should only render education history after this change.

---

## 9. Section: About

**Id:** `#about`  
**Kicker:** `ABOUT ME`  
**Title:** `A bit of background` (or equivalent)

Two-column layout at `lg`: `grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 mt-7 items-start`

**Left column** — prose narrative: two paragraphs, `text-body leading-relaxed`

**Right column** — card (§3.1) with two sub-blocks:

1. **Stack & tools** — mono kicker (`STACK & TOOLS`) + flex-wrap skill badges (§3.3)

```
font-mono text-[0.69rem] tracking-[0.2em] uppercase text-muted mb-3
```

2. ~~Certifications~~ — **removed** (now its own section, §8)

---

## 10. Section: Contact

**Id:** `#contact`  
**Kicker:** `GET IN TOUCH`  
**Title:** `Start a conversation`  
**Note:** This is the last section — omit the bottom margin override (`margin-bottom: 0`)

Content: `max-w-[620px]`

Form fields (vertical stack, `gap-4`):

```
input / textarea:
  w-full rounded-md border border-surface-2/50 bg-surface-2/15
  px-4 py-2.5 text-sm text-body
  placeholder:text-muted
  focus-ring
  transition
```

Submit button: primary CTA style (§3.5) with loading state.

Success state: card (§3.1) with check-circle icon (`text-accent`, lg) + "Message sent" heading + follow-up text.

**Known issue:** Original contact form was styled for a dark background and needs token-aligned styles. Use `bg-surface-2/15` and semantic tokens throughout — not `bg-[#020202]` or `text-white`.

---

## 11. Navigation — SideNav

`src/components/SideNav.tsx`

### Nav items array

```ts
const NAV_ITEMS = [
  { id: "work",            label: "Selected work",  icon: "FolderSimple" },
  { id: "experience",      label: "Experience",     icon: "Path"         },
  { id: "certifications",  label: "Certifications", icon: "SealCheck"    }, // NEW
  { id: "about",           label: "About",          icon: "User"         },
  { id: "contact",         label: "Contact",        icon: "PaperPlaneTilt" },
];
```

### Desktop sidebar layout

```
bg-surface text-on-dark
w-[280px] flex-none
sticky top-0 h-screen
flex flex-col gap-9 p-7
```

Sections (top to bottom):
1. **Identity block** — monogram tile + name + role subtitle
2. **Tagline** — `text-sm leading-relaxed text-white/70 max-w-[220px]`
3. **Nav list** — `flex flex-col gap-4` of desktop nav links (§3.6)
4. **Social buttons** — pushed to bottom (`mt-auto`) — GitHub + LinkedIn using CTA button (§3.4) in `secondary` variant
5. **Footer line** — `font-mono text-[0.69rem] text-white/45 tracking-wide` — location · timezone · status

**Monogram tile:**

```
w-13 h-13 rounded-xl
bg-accent/14 border border-accent/40
flex items-center justify-center
font-extrabold text-2xl tracking-tight text-accent
```

---

## 12. Scroll-spy & active tracking

Use a single `IntersectionObserver` on the scrollable `<main>` element.

```ts
const SECTION_IDS = [
  "work",
  "experience",
  "certifications",   // NEW
  "about",
  "contact",
];
```

Observer config:

```ts
{
  root: mainRef.current,
  threshold: [0.25, 0.5],
  rootMargin: "-10% 0px -55% 0px",
}
```

On intersection change, set `active` to the id with the highest `intersectionRatio`. Pass `active` and an `onNavigate(id)` handler to `SideNav`.

`onNavigate`: set `active` + scroll main to `el.offsetTop - 24` (instant, no smooth scroll on programmatic jump).

---

## 13. Gaps to resolve

Address these while implementing. Full detail in `docs/design-system/gaps.md`.

| # | Issue | Fix |
|---|---|---|
| 1 | Hardcoded hex values in `SideNav`, `HeroSection`, `ContactSection` | Replace with semantic tokens from §1.1 |
| 2 | No shadow tokens | Use `--shadow-glow`, `--shadow-md`, `--shadow-ring` from §1.5 |
| 3 | No radius tokens | Use `--radius-sm/md/lg/full` from §1.4 |
| 4 | No spacing tokens | Use `--space-*` scale from §1.3 |
| 5 | No motion tokens | Use `--duration-*` and `--ease-*` from §1.6 |
| 6 | No icon size system | Use xs/sm/md/lg scale from §3.10 |
| 7 | Mixed opacity notation (`rgba()` vs Tailwind `/` syntax) | Use Tailwind slash syntax only |
| 8 | `SideNav` mobile uses `border-white/15` / `text-white/70` (absolute white) instead of semantic tokens | Audit mobile nav styles; use `text-on-dark` and `border-surface-card-border` |
| 9 | `ContactSection` was styled for dark bg | Re-style with light-theme tokens (§10) |
| 10 | No WCAG contrast documentation | Audit `text-muted` on `#f8f8f8`, badge text on card bg |

---

## 14. Implementation checklist

### Design system
- [ ] All tokens defined in `globals.css` under `@theme` and `:root`
- [ ] Geist Sans + Geist Mono loaded via `next/font/google`, variables set on `<body>`
- [ ] `.section-shell`, `.section-kicker`, `.section-title` utilities present
- [ ] `.focus-ring` utility present, applied to all interactive elements
- [ ] No raw hex values in components — semantic tokens only
- [ ] Transition classes use token durations, not bare `transition`

### Portfolio layout
- [ ] `lg:grid-cols-[280px_minmax(0,1fr)]` sidebar + main layout
- [ ] Sidebar hidden below `lg`; mobile top bar shown below `lg`
- [ ] Main scrolls independently (`h-screen overflow-y-auto` on `lg`)
- [ ] Max content width `880px`, centered

### Sections
- [ ] HeroSection — responsive headline, CTA buttons, stack chips
- [ ] ProjectsSection — 2-col `md:` grid, interactive cards with thumbnails
- [ ] ExperienceSection — timeline rail, elevated cards
- [ ] **CertificationsSection** — 2-col `md:` grid, 6 cert cards, icon tile + name/org/year
- [ ] AboutSection — 2-col `lg:` grid, prose left + skills card right (no certs)
- [ ] ContactSection — form with token-aligned styles, success state

### Navigation & scroll
- [ ] `NAV_ITEMS` array includes `"certifications"` entry with `SealCheck` icon
- [ ] `SECTION_IDS` array for scroll-spy includes `"certifications"`
- [ ] `<CertificationsSection />` rendered between Experience and About
- [ ] Old cert block removed from `EducationSection.tsx`
- [ ] Active nav item highlights correctly on scroll

### Gaps
- [ ] All hardcoded hex values replaced
- [ ] Shadow, radius, spacing, motion tokens in use everywhere
- [ ] Opacity uses Tailwind slash syntax throughout
- [ ] SideNav mobile uses semantic tokens
- [ ] ContactSection re-styled for light theme
