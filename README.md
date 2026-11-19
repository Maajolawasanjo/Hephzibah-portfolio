# Hephie Creatives — Portfolio

Portfolio for **Hephzibah Uzorndu**, founder of Hephie Creatives,
Brand Identity Designer & Visual Storyteller based in Lagos, Nigeria.

## Milestone — Phase 14: SEO, Performance & Quality Assurance

Next.js App Router, React, TypeScript and Tailwind CSS v4.

The site contains an editorial homepage, Services, About, Process,
creative toolkit, mentorship, approval-gated selected-work/case-study
components, a Contact section and restrained reduced-motion-aware
interactions.

Phase 14 adds metadata, robots.txt, conditional sitemap.xml, verified
identity JSON-LD, optimized image preload rules, an asset-size check
and Chromium SEO tests.

**Search indexing is deliberately OFF until explicit launch approval,
an owner-controlled production domain, real project content and approved
contact details exist.** No fake client work or unverified social images
are published.

See [SEO, Performance and Quality Assurance](docs/SEO_PERFORMANCE.md).

## Development

Recommended Node.js 22:

    npm install
    npm run lint
    npm run typecheck
    npm run check:assets
    npm run build
    npx playwright install chromium
    npm run test:browser

package-lock.json has not yet been committed. Generate and verify it
with an npm-enabled environment, then migrate CI to npm ci.

## Publication configuration

After owner sign-off, configure `.env.example` variables in the
deployment environment, **not as hard-coded code**. Only after
approving project assets, editorials, a real public email, and an
owned HTTPS production domain should the content and launch approval
flags be enabled. Rebuild after changing these variables.

## Brand

Modern Editorial Minimalism, Burgundy #66001F and Cream #FEFCEF.
Alro by Artyway is the licensed display-font target; files are still
unavailable. DM Sans is the temporary fallback.

## Outstanding launch items

- 6–8 real approved gallery projects and complete case-study assets.
- Hephzibah's editorial sign-off and approved public contact email.
- Licensed Alro webfont and genuine social-preview/logo artwork.
- Actual Core Web Vitals, Safari/Firefox, real screen-reader testing.
- Production domain verification, final SEO and deployment audit.

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
- docs/SEO_PERFORMANCE.md
- docs/IMPLEMENTATION.md
- docs/ANTIGRAVITY_HANDOFF.md
