

# Scroll Progress Curve with Glowing Point

## What it does
A subtle curved SVG line runs vertically along the left side of the homepage, spanning from the Hero through WowMoments, AudienceFork, and WaitlistCTA sections. A glowing dot travels along the curve as the user scrolls, acting as a visual storytelling progress indicator.

## Implementation

### New component: `src/components/landing/ScrollProgressCurve.tsx`
- Renders a fixed-position SVG overlay on the left side of the viewport (roughly 40-60px from the left edge)
- The SVG contains a smooth cubic Bezier curve path running top-to-bottom with gentle S-curves
- The path is drawn with a thin, subtle stroke (e.g. `ocean-500/20`)
- A glowing circle element is positioned along the path using SVG `getPointAtLength()` based on scroll progress
- Scroll progress is calculated via a `useEffect` with a `scroll` event listener (throttled with `requestAnimationFrame`)
- The glow effect uses an SVG `<filter>` with `feGaussianBlur` and a bright `ocean-500` fill
- Hidden on mobile (`md:block hidden`) to avoid clutter on small screens

### Modify: `src/pages/Index.tsx`
- Import and render `<ScrollProgressCurve />` inside the main `<div>` wrapper, positioned as a fixed overlay

### Technical details
- Use `document.documentElement.scrollTop / (scrollHeight - clientHeight)` for 0-1 progress
- Use `path.getTotalLength()` and `path.getPointAtLength(progress * totalLength)` to position the dot
- CSS glow: `filter: drop-shadow(0 0 8px rgba(59,130,246,0.8))` on the circle
- The curve path will have 3-4 gentle bends to feel organic, not a straight line

### Files
- **Create**: `src/components/landing/ScrollProgressCurve.tsx`
- **Modify**: `src/pages/Index.tsx` (add the component)

