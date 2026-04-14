

# Apple-Style Page Redesign

## Overview
Redesign the Homepage, Student page, and Institution page following the Apple product page analogy. The Homepage becomes a clean front door with a hero, product wow-moments, audience fork, and single CTA. The Student page becomes an immersive iPhone-style scroll-driven walkthrough. The Institution page becomes a Mac-style immersive product showcase.

---

## Homepage (Index.tsx) — "The Apple.com Front Door"

**Remove**: ProblemSection, FlywheelSection, FAQSection, DualCTASection
**Keep**: Navbar, Footer

**New structure:**
1. **Hero** — "Everyone's Private College Advisor" headline. Full-bleed product mockup (a stylized UI screenshot placeholder using CSS/SVG since no real screenshots exist). Single "Join the Waitlist" CTA button. Clean, spacious, Apple-like.

2. **WowMomentsSection** (new component) — 2-3 visual "taste" cards showing the most impressive product capabilities:
   - AI Match Score visualization (animated radial gauge)
   - One-click universal application (stylized dashboard mockup)
   - AI Advisor chat preview (chat bubble mockup)
   Each as a large, full-width visual block with minimal copy, scroll-revealed.

3. **AudienceForkSection** (new component) — Clean two-column fork: "I'm a Student" / "I'm an Institution" with brief taglines and routing links to `/students` and `/institutions`. Visually distinct cards.

4. **WaitlistCTASection** (new component) — Single full-width CTA: "Join the Waitlist" button. Simple, centered, no dual-CTA.

---

## Student Page — "The iPhone Product Page"

**Remove**: Current StudentsSection (3-step icon cards), DualCTASection
**Keep**: Navbar, Footer

**New structure — immersive scroll-driven walkthrough:**

1. **Student Hero** — "One profile. Every school." headline with bold sub-copy.

2. **StudentWalkthroughSection** (new component) — 4 sequential full-viewport scroll sections, each with:
   - Large product mockup placeholder on one side
   - Headline + brief copy on the other
   - Alternating left/right layout
   
   Sections:
   - "Tell us who you are" → Profile builder mockup
   - "We'll find where you belong" → AI matching results mockup
   - "Apply once, go anywhere" → Application dashboard mockup
   - "Your AI advisor, always on" → Chat interface mockup

3. **Student FAQ** — Condensed accordion (reuse existing student FAQs)

4. **Single CTA** — "Join the Waitlist"

---

## Institution Page — "The Mac Product Page"

**Remove**: Current InstitutionsSection (before/after table), DualCTASection
**Keep**: Navbar, Footer

**New structure — immersive product showcase:**

1. **Institution Hero** — "Admissions, reimagined" headline.

2. **InstitutionWalkthroughSection** (new component) — 3-4 full-width scroll sections showing value props through product mockups (not comparison tables):
   - Smart candidate pipeline → Dashboard mockup showing AI-ranked applicants
   - Structured profiles → Standardized student profile card mockup
   - Real-time analytics → Analytics dashboard mockup
   - Integrity built-in → Verification status mockup

3. **Institution FAQ** — Condensed accordion (reuse existing institution FAQs)

4. **Single CTA** — "Request a Demo" form (reuse RequestDemoForm)

---

## Files to Create
- `src/components/landing/WowMomentsSection.tsx`
- `src/components/landing/AudienceForkSection.tsx`
- `src/components/landing/WaitlistCTASection.tsx`
- `src/components/landing/StudentHero.tsx`
- `src/components/landing/StudentWalkthroughSection.tsx`
- `src/components/landing/InstitutionHero.tsx`
- `src/components/landing/InstitutionWalkthroughSection.tsx`

## Files to Modify
- `src/pages/Index.tsx` — New section composition
- `src/pages/Students.tsx` — New section composition
- `src/pages/Institutions.tsx` — New section composition
- `src/components/landing/HeroSection.tsx` — Redesign with product mockup, new headline, single CTA

## Files Unchanged
- Navbar, Footer, ScrollReveal, RequestDemoForm, FAQSection — reused as-is or with minor adjustments
- AIEngine page, About page — untouched (not in scope)

## Technical Approach
- All product mockups will be CSS/SVG-based UI representations (skeleton screens with realistic layouts) — no real screenshots needed
- Continue using the existing ScrollReveal component for animations
- Add a new `sticky-scroll` animation pattern for the walkthrough sections (CSS sticky positioning + intersection observer transitions)
- Maintain existing color palette (navy, ocean, gold, fog, steel)
- All sections remain responsive with existing Tailwind breakpoints

