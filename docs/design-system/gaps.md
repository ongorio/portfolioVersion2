# Gaps & Known Inconsistencies

Things not yet fully resolved in the codebase. Resolved items have been removed.

---

## 1. Hardcoded hex values (partially resolved)

`--accent-light` and `--accent-mid` are now defined tokens. The known remaining hardcoded values are in the navigation layer:

| Value | Should be | Files |
|---|---|---|
| `text-white/70`, `border-white/15` | semantic tokens (`text-on-dark`, `border-surface-card-border`) | `SideNav.tsx` mobile styles |

See gap #3 below for the full SideNav audit.

---

## 2. Mixed opacity notation (partially resolved)

Most components now use Tailwind slash syntax. `FunnelThumb` uses `color-mix()` in inline styles for dynamic opacity values (intentional — slash syntax doesn't support runtime-computed values). No action needed there.

Remaining concern: shadow tokens (`--shadow-glow`, `--shadow-md`) still use raw `rgba()` inside the `:root` definition — this is acceptable since they live in CSS, not component JSX.

---

## 3. SideNav mobile uses absolute white instead of semantic tokens

The mobile nav uses `border-white/15`, `text-white/70`, etc. — hardcoded white — while the rest of the app uses semantic tokens. This is intentional if the mobile nav always has a dark surface background, but should be confirmed and documented.

**Options:**
- Keep `text-white/70` and add a comment confirming the mobile nav is always on `bg-surface`
- Replace with `text-on-dark/70` if a `--text-on-dark` token is added

---

## 4. No WCAG contrast documentation

Several text/opacity combinations lack verified contrast ratios. High-risk combinations to audit:

- `text-white/70` on `bg-surface` (`#0d2818`) — mobile nav
- `text-muted` (`#a9b8b0`) on `#f8f8f8` — section kickers, meta text
- Badge text (`text-surface/85`) on `bg-surface-2/15`
- `text-accent-2` (`#058c42`) on `#f8f8f8` — section kickers (current `.section-kicker` color)

---

## 5. Contact form not wired to a real endpoint

`ContactSection.tsx` calls `setSubmitted(true)` on submit without sending data anywhere. Needs integration with a form service (Resend, Formspree, etc.) before the portfolio goes public.
