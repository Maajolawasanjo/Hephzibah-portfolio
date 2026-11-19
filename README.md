# Hephie Creatives — Portfolio

Portfolio for Hephzibah Uzorndu, founder of Hephie Creatives,
Brand Identity Designer & Visual Storyteller based in Lagos, Nigeria.

## Phase 13 — Responsive Design & Accessibility Audit

Next.js App Router, React, TypeScript, Tailwind CSS v4.

The repository implements an editorial homepage, supporting sections,
approval-gated real work/case studies, and a draft-only contact experience.
Phase 13 adds accessibility and responsive fixes plus automated Chromium
browser tests through Playwright.

### Running checks

Node.js 22:

    npm install
    npm run lint
    npm run typecheck
    npm run build
    npx playwright install chromium
    npm run test:browser

The quality workflow runs all commands, installing Chromium and publishing
failure artifacts. The repository still needs a verified npm lockfile; it
currently uses npm install in CI rather than npm ci.

See docs/ACCESSIBILITY_AUDIT.md for the exact fixes, browser-test scope
and outstanding manual review requirements.

## Approved design

Modern Editorial Minimalism with expressive typography.
Burgundy #66001F, Cream #FEFCEF, DM Sans supporting body type.
Alro by Artyway is the approved display font; licensed files are still
required before it can be embedded.

## Not launch-ready yet

- Owner-approved 6–8 real portfolio projects, associated images and case studies.
- Owner approval of biography, services, process and mentorship copy.
- Confirmed public inquiry email to enable the contact composer.
- Authentic optional testimonials and additional work.
- Full browser/mobile/screen-reader and licensed-font QA.
- SEO, performance, deployment and domain verification.

Public search indexing remains disabled until approved launch.

## Documentation

- docs/DESIGN_SYSTEM.md
- docs/COMPONENTS.md
- docs/NAVIGATION.md
- docs/HOMEPAGE_HERO.md
- docs/SELECTED_WORK.md
- docs/CASE_STUDIES.md
- docs/ABOUT.md
- docs/SERVICES.md
- docs/SUPPORTING_SECTIONS.md
- docs/CONTACT.md
- docs/MOTION.md
- docs/ACCESSIBILITY_AUDIT.md
- docs/IMPLEMENTATION.md
- docs/ANTIGRAVITY_HANDOFF.md
