# Phase 10 — Supporting Sections

## Implementation

This phase adds Process, Creative Toolkit, Teaching & Mentorship,
Testimonials, and More Work to the existing editorial portfolio.

**Content policy:** publish real evidence-based information, not invented
client endorsements, project screenshots, exact tools, credentials or
quantified results.

### Source files

- src/content/supporting.ts — proposed process steps, creative
  disciplines, gated software tool names and mentorship copy.
- src/content/testimonials.ts — quotes requiring explicit authorization
  to publish both the words and attribution.
- src/content/more-work.ts — independent approved additional work collection.
- src/components/home/process.tsx — four-step creative-process narrative.
- src/components/home/toolkit.tsx — creative disciplines; optional named
  tools shown only when actually verified.
- src/components/home/mentorship.tsx — founder's one-on-one teaching story,
  using the supplied About-draft information.
- src/components/home/testimonials.tsx — hidden until verified testimonials.
- src/components/home/more-work.tsx — hidden until authentic additional
  portfolio projects exist.
- src/app/page.tsx — integrates all sections in editorial reading order.

## Public content

Process: Discover, Define, Design, Refine & deliver. These are conceptual
steps and are NOT binding delivery milestones or claims about a fixed
commercial process. Founder review of detailed wording is still required.

Toolkit: Identity & layout, Image-making, Visual content. These describe
areas of creative practice supported by the portfolio's approved service
categories. Individual software brands such as Photoshop, Figma, etc.
are **not named** until Hephzibah confirms the exact applications she
uses and permits their public display.

Teaching: A dedicated section about one-on-one guidance for aspiring
creatives, which is mentioned in the supplied About draft. No course
dates, prices, booking URL, credentials, number of students, or invented
student reviews are offered.

Testimonials: The section returns null when the explicitly approved
attributed testimonial list is empty; it will not display artificial
quotes or the appearance of false social proof. Any future entry requires
verbatim text, name, role, and approved public attribution.

More Work: The section returns null while the additional approved-project
list is empty. Real project title, permitted cover imagery with meaningful
alt text and category must be supplied. Do not create fake project cards.
Only include an href if its destination is real and published.

## Site layout

Homepage section order:

1. Hero
2. Selected Work
3. Services
4. About & Professional Identity
5. Design Process
6. Creative Toolkit
7. Teaching & Mentorship
8. Testimonials (conditionally rendered)
9. More Work (conditionally rendered)

Desktop/mobile global navigation remains Home, Work, Services, About,
because each of those targets exists and adding four more long labels
would clutter the design. The supporting sections have their own
real on-page ids if future approved navigation is needed.

## Visual direction and accessibility

Modern Editorial Minimalism; Burgundy #66001F, Cream #FEFCEF.
Numbered process entries and typographic grids instead of card-heavy UI.
Restrained borders and whitespace, plus an inverse process section.
Semantic sections with labels, hierarchical headings and list structures.
Typography remains DM Sans as a fallback until licensed Alro files
are supplied. Respect reduced-motion, focus and browser zoom.

## Acceptance

- [x] Process, Toolkit and Teaching editorial components implemented.
- [x] Testimonial data and conditional display implemented without fake quotes.
- [x] More Work data and conditional gallery implemented without fake projects.
- [x] Existing homepage connected to all new components.
- [ ] Phase 10 lint, TypeScript and production build verified on GitHub.
- [ ] Owner approves process and mentorship editorial descriptions.
- [ ] Owner supplies any named tools, attributed testimonials and extra work.
- [ ] Real-browser mobile/tablet/desktop/zoom and keyboard QA.
- [ ] Alro licensed files supplied and typography checked.

Phase 10 can be complete at the code/automated-testing level without
unverified optional content being made public.

Next: Phase 11 — Contact & Conversion with verified destination and
consent-based handling of any inquiry form.
