

# Separate Pages for Student, Institution, AI Engine, and About

## Overview
Move each section from the single-page layout into its own dedicated route. The homepage keeps Hero, Problem, Flywheel, FAQ, and Dual CTA. Navbar and Footer links become React Router `<Link>` elements.

## Changes

### 1. Create 4 new page files
- `src/pages/Students.tsx` — wraps `StudentsSection` with Navbar + Footer
- `src/pages/Institutions.tsx` — wraps `InstitutionsSection` with Navbar + Footer
- `src/pages/AIEngine.tsx` — wraps `AIFeaturesSection` with Navbar + Footer
- `src/pages/About.tsx` — wraps `SocialProofSection` (the about/team content) with Navbar + Footer

Each page follows the same pattern: Navbar at top, section content with `pt-20` (for fixed navbar clearance), DualCTASection, Footer at bottom.

### 2. Update `src/App.tsx`
Add routes:
- `/students` → Students page
- `/institutions` → Institutions page
- `/ai-engine` → AIEngine page
- `/about` → About page

### 3. Slim down `src/pages/Index.tsx`
Remove `StudentsSection`, `InstitutionsSection`, `AIFeaturesSection`, `SocialProofSection`, and their `NarrativeBreak` wrappers. Keep: Hero, Problem, Flywheel, FAQ, DualCTA, Footer.

### 4. Update `Navbar.tsx`
- Change `<a href="#students">` → React Router `<Link to="/students">` (and same for all 4 links)
- Logo link → `<Link to="/">`
- CTA links stay as anchor `#cta` or become `/` + scroll

### 5. Update `Footer.tsx`
- Same link changes: anchor `#students` → `<Link to="/students">`, etc.

### Files touched
- **New**: `src/pages/Students.tsx`, `src/pages/Institutions.tsx`, `src/pages/AIEngine.tsx`, `src/pages/About.tsx`
- **Modified**: `src/App.tsx`, `src/pages/Index.tsx`, `src/components/landing/Navbar.tsx`, `src/components/landing/Footer.tsx`

