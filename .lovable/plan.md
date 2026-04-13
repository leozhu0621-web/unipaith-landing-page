

# Fix Text Contrast and Section Background Rhythm

## Overview
Two issues from the reference image:
1. **Text on light backgrounds** uses Slate Blue (too light) — must be Midnight Navy (#1A223F)
2. **Page lacks dark sections** — needs alternating light/dark backgrounds for visual rhythm

## Current state
- CSS variables: `--foreground` on light theme is `207 35% 23%` which maps to ~harbor-500 (#273C4D), not Midnight Navy
- `--muted-foreground` is `200 10% 55%` — quite light for body text on ivory
- All sections use light backgrounds (`bg-card`, `bg-background`, `bg-mist-500/5`)
- Only DualCTA and Footer use dark backgrounds

## Changes

### 1. Update CSS variables in `src/index.css`
- Change `--foreground` from `207 35% 23%` to navy-500 equivalent (`230 45% 17%` ≈ #1A223F)
- Darken `--muted-foreground` to ensure body text is readable (closer to navy-400)

### 2. Apply section background rhythm per the reference table

| Section | Component | Current bg | New bg |
|---------|-----------|-----------|--------|
| Hero | `HeroSection.tsx` | `bg-background` (warm ivory) | Keep warm ivory ✓ |
| Stats/"Admissions is broken" | `ProblemSection.tsx` | `bg-card` (white) | Mist Blue (`bg-mist-300/20` or similar) |
| "Picture this" cards | Inside ProblemSection | `bg-background` | Keep (warm ivory cards on mist bg) ✓ |
| Institution problem | `InstitutionsSection.tsx` | `bg-mist-500/5` | Deep Harbor (`bg-harbor-600` with light text) |
| Flywheel | `FlywheelSection.tsx` | `bg-mist-500/5` | Midnight Navy (`bg-navy-500` with light text) |
| FAQ | `FAQSection.tsx` | `bg-background` | Keep warm ivory ✓ |
| CTA | `DualCTASection.tsx` | Dark gradient | Keep ✓ |
| Footer | `Footer.tsx` | `bg-navy-500` | Keep ✓ |

### 3. Dark section text overrides
For sections with dark backgrounds (InstitutionsSection, FlywheelSection), override text colors inline:
- Headings → `text-ivory-100`
- Body text → `text-ivory-100/70`
- Card components inside dark sections keep their own colors

## Files modified
- `src/index.css` — foreground/muted-foreground CSS variables
- `src/components/landing/ProblemSection.tsx` — mist blue background
- `src/components/landing/InstitutionsSection.tsx` — deep harbor dark background + light text
- `src/components/landing/FlywheelSection.tsx` — midnight navy dark background + light text

