# Antigravity Handoff — Phase 02

Repository:
https://github.com/Maajolawasanjo/Hephzibah-portfolio

## Phase 02 design system

The source of truth is `src/styles/tokens.css` and
`docs/DESIGN_SYSTEM.md`. Tailwind semantic utility mappings and global
typographic styles live in `src/app/globals.css`.

The root route is a **design-system preview**, not the final homepage.
Future components must use tokens and existing type classes instead
of scattering hardcoded colors or creating independent typography scales.

### Approved visual constraints

- Burgundy `#66001F`; cream `#FEFCEF`
- Modern Editorial Minimalism with expressive type and disciplined grid
- Alro is approved for display but cannot be embedded until licensed webfont
  files have been provided. Current fallback is explicitly temporary.
- DM Sans for body copy
- Accessible focus indicators, reduced-motion support, no automatic dark theme
- Avoid excess cards, gradients, glassmorphism, glow and decorative clutter

### Validation before Phase 03

1. Run install, lint, type checking and production build.
2. Commit `package-lock.json` if it is still missing; switch CI to `npm ci`.
3. Inspect 320px/375px/mobile, tablet and wide desktop layouts.
4. Confirm no clipped headlines or horizontal scrolling.
5. Verify color contrast and focus styling in normal/inverse sections.
6. Review actual Alro metrics after licensed font files are available.
7. Record the commit and CI outcome.

Next planned phase: **Shared UI Components**. Do not build production
homepage or client project sections before those shared pieces.
