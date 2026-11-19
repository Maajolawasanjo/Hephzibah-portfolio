# Design System — Approved Foundation

## Art direction

**Modern Editorial Minimalism with sleek, expressive typography.**
Strong visual hierarchy, intentional whitespace, large real-world project imagery,
precise grids, restrained motion, and no gratuitous gradients or glassmorphism.

## Palette

- Primary Burgundy: #66001F — headings, text, actions, contrast sections
- Primary Cream: #FEFCEF — site backgrounds and reversed text on burgundy

Earlier suggested purple/lavender colors are **not** approved.

## Typography

- **Alro by Artyway** is the approved display font.
  Licensed website-embedding font files have NOT been supplied and are NOT bundled.
  The CSS currently uses an explicit temporary fallback.
- **DM Sans** is the working supporting sans-serif for body copy.
- Editorial emphasis must not compromise legibility or mobile typography.
- Hero type begins around clamp(3.3rem, 8.3vw, 8.5rem); refine with real font and content.

## Interaction & layout

Mobile-first responsive gutters, fluid typography, clear keyboard focus, meaningful
image alt text, stable image aspect ratios, and support for reduced-motion settings.
Use CSS transitions first; Motion can be added where it demonstrably helps.
Project imagery keeps the client's original colors.
