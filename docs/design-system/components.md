# Components

Documented patterns for recurring UI elements. Each entry lists the Tailwind classes that define the component's visual shape so they can be applied consistently.

Shared primitives live in `src/components/ui/`. Section-specific components live in `src/components/`.

---

## Buttons & Interactive Links

### Primary CTA button
Used in `HeroSection.tsx` ("See the work"), rendered via `Button` with `variant="primary"`.

```
inline-flex items-center gap-2
rounded-full
bg-accent hover:bg-accent-2
text-surface font-semibold text-sm
px-5 py-2.5
transition-[background-color] duration-[var(--duration-default)]
focus-ring
```

### Social / secondary button
Used in `HeroSection.tsx` social links and `SideNav.tsx`. Rendered via `Button` with `variant="social"` or `variant="secondary"`.

```
inline-flex items-center gap-2
rounded-full
border border-accent/40 hover:border-accent
bg-surface hover:bg-surface-2
text-accent-light text-sm
px-4 py-2
transition duration-[var(--duration-default)]
focus-ring
```

### Navigation link (desktop sidebar)
Used in `SideNav.tsx` desktop variant.

```
flex items-center gap-3
text-sm text-white/70 hover:text-accent
hover:translate-x-1
transition duration-[var(--duration-default)]
focus-ring
```

Active state: `text-accent font-medium`

### Navigation link (mobile pill)
Used in `SideNav.tsx` mobile horizontal scroll.

```
whitespace-nowrap
rounded-full
border border-white/15 hover:border-accent/60
px-3 py-1 text-xs
text-white/70 hover:text-accent
transition duration-[var(--duration-default)]
focus-ring
```

Active state: `border-accent/60 text-accent`

---

## Cards & Containers

### Standard card (`Card` component — `variant="standard"`)
Base card used across sections.

```
rounded-lg
border border-[var(--surface-card-border)]
bg-[var(--surface-card)]
p-5
```

### Elevated card (`variant="elevated"`)
Same as standard + stronger shadow. Used for experience cards.

```
rounded-lg
border border-[var(--surface-card-border)]
bg-[var(--surface-card)]
p-5
shadow-[var(--shadow-md)]
```

### Interactive card (`variant="interactive"`)
Same as standard + hover states. Used for project cards.

```
group cursor-pointer
rounded-lg
border border-[var(--surface-card-border)]
bg-[var(--surface-card)]
p-5
transition-[border-color,box-shadow] duration-[var(--duration-default)]
hover:border-surface-2/80 hover:shadow-[var(--shadow-md)]
```

### Certification card
Used in `CertificationsSection.tsx`. A `Card` (standard) with a flex row layout and icon tile.

```tsx
<Card className="flex items-start gap-4">
  {/* Icon tile */}
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
    <SealCheckIcon weight="bold" size={20} className="text-accent" />
  </div>

  {/* Text */}
  <div>
    <p className="text-[1.125rem] font-semibold leading-snug text-surface">{cert.name}</p>
    <p className="mt-0.5 text-sm text-muted">{cert.org}</p>
    <p className="mt-1 font-mono text-[0.69rem] uppercase tracking-[0.11em] text-accent">{cert.year}</p>
  </div>
</Card>
```

---

## Badges

### Skill badge (`Badge` — `variant="skill"`)
Used in `AboutSection.tsx`. Renders icon + label.

```
inline-flex items-center gap-1.5
rounded-md
border border-surface-2/50
bg-surface-2/15
px-3 py-1 text-xs font-medium
text-surface/85
```

### Tech badge (`variant="tech"`)
Used in `ProjectsSection.tsx`. Label only, no icon.

Same classes as skill badge.

---

## Layout Shells

### Section shell
Global utility applied to every top-level `<section>`.

```css
.section-shell {
  margin-bottom: var(--space-3xl);   /* 80px */
  scroll-margin-top: var(--space-3xl);
}
```

### Section header (`SectionHeader` component)
Kicker + title pair at the top of each section. Props: `kicker` (string) and `title` (string).

```tsx
<SectionHeader kicker="SELECTED WORK" title="Projects" />
```

Renders:
```html
<div>
  <span class="section-kicker">SELECTED WORK</span>
  <h2 class="section-title">Projects</h2>
</div>
```

### Page layout
Two-column at `lg`: fixed sidebar (280px) + fluid main.

```
lg:grid lg:grid-cols-[280px_minmax(0,1fr)]
```

Main content padding:
```
px-4 py-8 sm:px-6 lg:px-10 lg:py-14
```

---

## Project Thumbnails

Each project card has a `h-[160px]` thumbnail area. Three render paths:

### Image thumbnail
For projects with a `thumbnailImage` string path.

```tsx
<Image src={project.thumbnailImage} alt={...} width={600} height={400}
  className="h-full w-full object-cover object-top" />
```

### `CleanupCounterThumbnail` (`thumbnailVariant: "cleanup-counter"`)
Client component (`"use client"`). Animates a count-up from 0 → 1M+ on scroll into view using `IntersectionObserver` + `requestAnimationFrame`. Ease-out cubic over 2 seconds.

```
h-full w-full flex flex-col items-center justify-center gap-2
bg-[var(--surface)] rounded-md
```

### `FunnelThumb` (`thumbnailVariant: "funnel"`)
Pure server component — no state, no effects. Renders 5 horizontal bar rows (Received → Converted). Bar widths are driven by a `pct` value (0–1). First row uses `--accent-mid` tint; subsequent rows use `--accent` at increasing opacity via `color-mix()`.

```
h-full w-full flex items-center justify-center
bg-[var(--surface)] rounded-md
```

### Fallback
When no thumbnail is configured, renders a centered `FolderSimpleIcon` at `color: var(--accent-mid)`.

---

## Timeline

Used in `ExperienceSection.tsx`.

- **Vertical rail:** `absolute left-[7px] top-0 h-full w-[2px] bg-surface-2/50`
- **Dot:** `h-3.5 w-3.5 rounded-full border-2 border-surface-2/50 bg-accent shadow-[var(--shadow-ring)]`
  - `--shadow-ring` = `0 0 0 4px var(--background)` — white ring, not dark
- **Items:** `relative pl-8` — dot is `absolute left-0`, card floats right

---

## Icons

All icons come from Phosphor Icons v2. In server components, import from `@phosphor-icons/react/ssr`. In client components (`SideNav`, `ContactSection`), import from `@phosphor-icons/react` directly.

Render through `<IconToken>` rather than using Phosphor components directly where possible.

### Standard sizes

| Label | px | Where |
|---|---|---|
| xs | 14 | Timeline decorators |
| sm | 15–16 | Button icons, nav |
| md | 18–20 | Default / certification tiles |
| lg | 24 | Standalone / fallback thumbnails |

### Color conventions

| Context | Class |
|---|---|
| Icon on dark surface | `text-accent-mid` |
| Icon on accent background | `text-surface` |
| Interactive icon | `text-accent` |
| Muted / decorative | `text-muted` |

---

## Focus States

All interactive elements use the `.focus-ring` utility or inline equivalent:

```css
.focus-ring:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--accent);
}
```

Tailwind inline equivalent (for elements that can't use the class):
```
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-accent
focus-visible:ring-offset-2
focus-visible:ring-offset-background
```
