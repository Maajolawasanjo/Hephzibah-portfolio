# Phase 03 — Shared Component Library

This phase adds reusable, typed UI primitives. It does not implement production pages.

## Inventory

| Module | Export | Purpose |
| --- | --- | --- |
| src/components/layout/container.tsx | Container | Fluid page gutters; optional narrow measure |
| src/components/layout/section.tsx | Section | Semantic section with default/inverse tone and compact rhythm |
| src/components/ui/typography.tsx | Heading, Text | Semantic heading levels and flexible type scale |
| src/components/ui/button.tsx | Button | Anchor when href is supplied; native button otherwise |
| src/components/ui/divider.tsx | Divider | Decorative by default, semantic when explicitly requested |
| src/components/ui/section-heading.tsx | SectionHeading | Eyebrow, title, description, optional action |
| src/components/ui/media-frame.tsx | MediaFrame | Responsive Next Image or visible pending-artwork state |
| src/components/portfolio/project-card.tsx | ProjectCard | Consistent image, title, category, optional year and link |
| src/lib/cn.ts | cn | Lightweight class-name joiner |

## Rules for using components

- Navigation: Button with href renders a Next.js Link. Use only valid destinations.
- Actions: Button without href is a native button, default type=button. Set type=submit for forms.
- Typography: Heading level sets document semantics, while size controls visual scale.
- Sections: Use Section and Container rather than inventing page-specific gutters.
- Inverse color: Set Section tone=inverse; the explicit burgundy/cream tokens are inherited by its children.
- Project cards: Never invent projects, outcomes, clients, photos or links.
- Images: Supply meaningful image alt and real approved assets. A missing image displays a clearly labeled pending-artwork state.
- If href is omitted, ProjectCard is static and not deceptively clickable.
- Buttons and typography must have visible focus and readable sizes.
- No system-triggered dark mode, excessive gradients, shadow cards or unnecessary animation.
- Alro display webfont is still pending licensed files; DM Sans is the documented fallback.
- Do not embed external font files without permission.

## Review page

The root page currently serves as a component-library demonstration, NOT the final homepage.
It demonstrates functional in-page links, a genuinely disabled native button,
semantic text and headings, project cards with explicitly missing artwork,
and an inverted burgundy section.

## Phase 03 acceptance criteria

- [x] Reusable components and a preview implemented in repository.
- [x] No fabricated client portfolio content or fake links.
- [x] Semantic HTML, focus styles and reduced-motion basics included.
- [ ] GitHub Actions lint, typecheck and production build verified for Phase 03 commit.
- [ ] Browser visual QA at 320px, 375px, tablet, desktop, 200% zoom.
- [ ] Keyboard focus and screen reader behavior reviewed in browser.
- [ ] Licensed Alro font files supplied and metrics evaluated.

## Next phase

Phase 04: global header and responsive navigation, mobile menu, site footer,
and consistent page-level layout. Final hero and work sections come later.
