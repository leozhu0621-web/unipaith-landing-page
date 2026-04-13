

# Wire Up "Join the Waitlist" / Login Buttons to External App

## Overview
Update all "Join the Waitlist" buttons (navbar, mobile menu, hero, CTA sections) to redirect to `https://app.unipaith.co/login` instead of scrolling to an anchor.

## Changes

### 1. Update `Navbar.tsx`
- Change both CTA buttons ("Request a Demo" and "Join the Waitlist") `Link to="/#cta"` → `<a href="https://app.unipaith.co/login">` (external link, opens in same or new tab as preferred).

### 2. Update `HeroSection.tsx`
- Change the "Join the Waitlist" button to link to `https://app.unipaith.co/login`.

### 3. Update `DualCTASection.tsx`
- Change the "Join the Waitlist" button/form to link to `https://app.unipaith.co/login`.

### 4. Update `Footer.tsx` (if it has CTA links)
- Same treatment for any waitlist/login links.

### Decision needed
- Should "Request a Demo" also go to `app.unipaith.co/login`, or stay as-is / go to a different URL?
- Should the link open in a new tab (`target="_blank"`) or same tab?

## Files modified
- `src/components/landing/Navbar.tsx`
- `src/components/landing/HeroSection.tsx`
- `src/components/landing/DualCTASection.tsx`
- `src/components/landing/Footer.tsx` (if applicable)

