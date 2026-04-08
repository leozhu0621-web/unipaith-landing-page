

# Add Micro-Interactions & Polish

## Changes

### 1. Global utility classes (`src/index.css`)
Add reusable CSS classes:
- **`.story-link`** — animated underline that expands on hover (for nav links)
- **`.hover-lift`** — cards lift up with enhanced shadow on hover
- **`.btn-press`** — subtle scale-down on active press for buttons

### 2. Navbar animated underlines (`Navbar.tsx`)
- Add the `story-link` class to desktop nav links so they get an animated underline on hover
- Add hover scale to the brand logo text

### 3. Button press animation (`button.tsx`)
- Add `active:scale-[0.97] transition-transform` to the base button variants so all buttons feel tactile on click

### 4. Card hover effects across sections
- **Students Section**: Add `hover-lift` to the visual icon cards (the colored rounded boxes)
- **Institutions Section**: Add subtle row highlight on hover for the before/after comparison rows
- **AI Features Section**: Add `hover-lift` to the mock UI cards
- **Social Proof Section**: Add `hover-lift` to testimonial cards
- **Dual CTA Section**: Add `hover-lift` and a subtle border-color transition to the two CTA cards

### 5. Icon micro-animations
- Add `group` class to card containers and `group-hover:scale-110 group-hover:rotate-3 transition-transform` to icons inside cards, so icons subtly grow/tilt on hover

## Technical Details

**Files to modify:**
- `src/index.css` — add `.story-link`, `.hover-lift`, `.btn-press` utility classes
- `src/components/ui/button.tsx` — add `active:scale-[0.97]` to base variant string
- `src/components/landing/Navbar.tsx` — apply `story-link` class to nav links
- `src/components/landing/StudentsSection.tsx` — hover-lift on cards, icon animation
- `src/components/landing/InstitutionsSection.tsx` — row hover highlight
- `src/components/landing/AIFeaturesSection.tsx` — hover-lift on mock cards, icon animation
- `src/components/landing/SocialProofSection.tsx` — hover-lift on testimonial cards
- `src/components/landing/DualCTASection.tsx` — enhanced hover on CTA cards, icon animation

No new dependencies needed.

