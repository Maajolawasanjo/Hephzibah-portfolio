# Antigravity Handoff — Phase 09

Repository: https://github.com/Maajolawasanjo/Hephzibah-portfolio

## Current code and phase

Phase 09 implements the complete homepage Services & Value Proposition
section, after Phase 08's editorial biography.

Read docs/SERVICES.md, docs/DESIGN_SYSTEM.md, docs/NAVIGATION.md,
docs/SELECTED_WORK.md and docs/IMPLEMENTATION.md.

The homepage section order is Hero → Selected Work → Services → About.

## Content system

- src/config/site.ts is the source for approved service names.
- src/content/services.ts holds proposed editorial descriptions, audiences
  and possible scope, with no unapproved guarantees or fixed package prices.
- src/components/home/services.tsx renders the responsive editorial rows
  and the inverse burgundy value proposition panel.
- src/components/home/focus-strip.tsx has been removed.
- Hero, header/footer, and Services links target real homepage sections.

Service copy needs Hephzibah's final approval before public launch.

## Non-negotiable visual language

- Burgundy #66001F, Cream #FEFCEF.
- Modern Editorial Minimalism with polished, confident typography.
- Alro display type pending licensed webfont files, DM Sans supporting body.
- No automatic system/browser dark-mode switching.
- Accessible semantic headings, visible focus and reduced motion.
- Never invent client projects, testimonials, results, service guarantees,
  social contacts or pricing.

## Verification and next phase

1. Inspect GitHub Actions for Phase 09 lint, typecheck and build.
2. Test real 320px/375px/tablet/desktop layouts, zoom, and keyboard navigation.
3. Obtain approval for service wording and actual offered deliverables.
4. Supply licensed Alro webfont files and recheck heading proportions.
5. Commit package-lock.json from a verified network-enabled npm install,
   then migrate GitHub CI from npm install to npm ci.

Next: Phase 10 — Supporting Sections. Only add verified teaching,
tools, process, testimonials and more-work materials; do not invent results.
