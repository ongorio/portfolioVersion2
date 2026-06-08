# Design System

Documentation of the visual language and component patterns for the portfolio project.

## Contents

- [tokens.md](./tokens.md) — Colors, typography, spacing, radii, shadows, animation
- [components.md](./components.md) — Component patterns and usage
- [gaps.md](./gaps.md) — Known inconsistencies and what needs to be formalized

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS 4 with `@theme` for CSS custom properties
- Geist Sans / Geist Mono (Google Fonts via Next.js)
- Phosphor Icons v2

## Design Principles

- **Green-forward**: The palette is built around a dark forest-green surface with a vivid malachite accent.
- **Light default**: The current active theme uses a light (`#f8f8f8`) background with dark green surfaces. A dark theme variant exists but is commented out.
- **Utility-first**: Tailwind class composition is preferred over component-scoped CSS. Global utilities (`.section-shell`, `.section-title`, `.section-kicker`) handle repeated structural patterns.
- **Token-driven**: All colors should flow through CSS custom properties — not hardcoded hex values.
