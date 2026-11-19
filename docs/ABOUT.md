# Phase 08 — About & Professional Identity

## Purpose

Create a distinctive but factual About section for Hephzibah Uzorndu,
founder of Hephie Creatives. It belongs to the scrolling homepage after
Selected Work and is linked from the site-wide navigation at `/#about`.

This section should feel like part of the same portfolio: editorial
typography, confident spacing, direct language and a thoughtful personal
perspective rather than generic achievement cards.

## Content provenance and editorial controls

The introduction, service scope, photography/videography involvement and
one-on-one teaching are based on the About draft supplied for this project.
The section deliberately avoids unsourced awards, client names,
universities, certifications or performance statistics.

Previous draft figures such as `50+ clients` and `8 companies`, and a
start year, are **not published** here pending confirmation and approval
from Hephzibah. They must not be converted into impressive-looking
numerical counters without validation.

The first-person copy and the three-part design philosophy are editorial
adaptations of the project's established brand positioning and draft
About content. They should be reviewed by Hephzibah before external launch.

## Files

- `src/content/about.ts` — first-person biography, principles, and
  optional portrait record; the copy is centralized for review.
- `src/components/home/about.tsx` — semantic, responsive About section.
- `src/app/page.tsx` — includes About after the Selected Work section.
- `src/config/navigation.ts` — includes the real `/#about` destination.
- `src/components/layout/site-header.tsx` — desktop navigation begins at
  large breakpoints to avoid crowding with the new About link.

## Section composition

1. Numbered eyebrow and simple professional identity block.
2. Oversized editorial heading: "A designer who listens before she creates."
3. Responsive visual panel and first-person professional introduction.
4. Three short paragraphs about branding, purpose, photography/video and teaching.
5. Three numbered working principles:
   Listen first; Design with purpose; Make it memorable.

No fake testimonials, stock portrait, personal photo or official logo
has been invented. Until a real approved portrait exists, the visual panel
is abstract typography ("Think. Create.") rather than a likeness of
Hephzibah. It is decorative to assistive technology.

## Adding a real portrait

After Hephzibah authorizes a professional portrait for display, save an
optimized image under `public/about/` using a descriptive filename
and edit `src/content/about.ts` to provide `portrait.src` and
`portrait.alt`. Verify image permissions, mobile cropping and alt text.

Do not source a substitute face or claim an unapproved photo is hers.

## Branding, accessibility and constraints

- Burgundy `#66001F`, cream `#FEFCEF`, existing semantic tokens.
- Modern Editorial Minimalism, expressive typography, no unnecessary shadows.
- Alro by Artyway is the approved display family but licensed webfont
  files are still missing; DM Sans remains the temporary fallback.
- No system/browser dark-theme overrides.
- Semantic section and heading structure, real `/#about` anchor,
  visible focus styling and reduced-motion baseline.
- The brief references to creative services and teaching are not full
  separate sections; detailed Services is Phase 09 and Teaching is Phase 10.

## Acceptance checklist

- [x] About section, data model, responsive editorial presentation.
- [x] Desktop and mobile navigation links to a real section.
- [x] No invented client/project metrics or portrait.
- [x] Clear design philosophy based on supplied content.
- [ ] Phase 08 lint, typecheck and production build verified by GitHub Actions.
- [ ] Owner reviews and approves first-person biography and philosophy.
- [ ] Actual optional portrait supplied, approved and crop-tested.
- [ ] Browser mobile/tablet/desktop, keyboard, zoom and screen-reader QA.
- [ ] Licensed Alro files integrated before final typographic sign-off.

Next: Phase 09 — Services & Value Proposition.
