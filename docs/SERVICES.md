# Phase 09 — Services & Value Proposition

## Scope and purpose

Turn the four approved service names into a complete, readable editorial
section on the homepage without inventing a fixed package catalogue,
guaranteed business outcomes, prices, client claims or unconfirmed contacts.

The Services section follows Selected Work and precedes About. The former
short service-area index in FocusStrip is removed rather than duplicated.

## Approved service categories

The single source for the four service names is src/config/site.ts:

1. Logo Design
2. Full Brand Identity & Guidelines
3. Social Media Branding
4. Photography & Videography Content

src/content/services.ts maps those verified names to an editorial description,
a likely audience and **potential** areas of work. These are descriptions
of possible project scope, not promises that each engagement includes all
listed deliverables. Discuss and confirm actual service bundles with the
portfolio owner before any commercial launch.

## File structure

- src/content/services.ts — typed service descriptions and value proposition.
- src/components/home/services.tsx — responsive Services section and value block.
- src/app/page.tsx — now Hero, SelectedWork, Services, About.
- src/config/navigation.ts — uses the real /#services destination.
- src/components/home/hero.tsx — hero button leads to real Services anchor,
  while Explore below points to Selected Work.
- src/content/about.ts — About eyebrow advances to 04 to match actual order.
- src/components/home/focus-strip.tsx — removed, no longer used.

## Design and accessibility

- Uses approved Burgundy #66001F and Cream #FEFCEF only.
- Modern Editorial Minimalism: strong type hierarchy and generous spacing.
- Four numbered, separated service rows, not heavy shadow cards.
- Each service is an article with its own third-level heading and supporting
  descriptive paragraphs, followed by a list of illustrative areas of work.
- A contrasting semantic color block explains design value and links to the
  existing About section with a functional Meet the designer action.
- All nav links and calls to action lead to actual on-page anchors.
- No external network form or email address is invented.
- Follows responsive grids, keyboard focus styles, reduced-motion support,
  semantic headings and readable content.
- Alro remains approved for display but is not embedded pending a
  licensed webfont file. DM Sans remains the temporary fallback.

## Editorial cautions

The descriptive service copy, audience statements and the tagline
"Clarity first. Character in every detail." are proposed positioning,
not independently verified experience claims. Review and approve with
Hephzibah before public launch.

Avoid saying each service includes a specific set of deliverables unless
confirmed by the owner. Do not add fixed prices or time commitments without
a real service menu. Do not create a Contact CTA until the verified contact
channel or form exists in Phase 11.

## Phase 09 validation

- [x] Four approved service categories surfaced in a complete layout.
- [x] Responsive editorial rows and descriptive audience/scope copy written.
- [x] Explicit value proposition and working About CTA included.
- [x] Redundant short service index removed.
- [x] Hero and global nav use real anchors.
- [ ] GitHub CI lint, TypeScript and production build completed for Phase 09.
- [ ] Real mobile/tablet/desktop and zoom visual QA.
- [ ] Owner-approved service descriptions, deliverables and packages.
- [ ] Final licensed Alro integration and typography review.

Next: Phase 10 — Supporting Sections (Tools, Process, Teaching, Testimonials,
More Work). No testimonials or client metrics may be fabricated.
