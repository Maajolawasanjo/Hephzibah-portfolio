# Antigravity Handoff — Phase 14

Repository: https://github.com/Maajolawasanjo/Hephzibah-portfolio

Phase 14 adds controlled search metadata, indexing rules, conditional
sitemaps, verified identity JSON-LD, image-loading refinements,
a preventative image size budget, and Chromium SEO smoke tests.

Read docs/SEO_PERFORMANCE.md, docs/CASE_STUDIES.md,
docs/ACCESSIBILITY_AUDIT.md and docs/IMPLEMENTATION.md.

## Important publication controls

The site is NOT approved for public indexing, and the custom domain has
not been verified. Search robots currently disallow crawling; page
metadata is noindex. Sitemap has no URLs, and canonical/JSON-LD are
withheld until strict owner and content approval gates pass.

Activation requires explicit SITE_CONTENT_APPROVED and SITE_LAUNCH_APPROVED,
an approved HTTPS NEXT_PUBLIC_SITE_URL, at least one verified project,
and a verified public inquiry email. A preview environment cannot index.

Do not invent client results, testimonials, images, portraits, social
profiles, contact emails, official logos or project descriptions.

## Design and performance

Modern Editorial Minimalism, Burgundy #66001F, Cream #FEFCEF.
Alro display is still awaiting licensed webfont files.
Body font DM Sans; avoid unnecessary JS and animation dependencies.
Only preload a genuine above-the-fold case-study cover image.
Keep approved project art at or below the documented size budget.

## Before Phase 15

1. Confirm GitHub Actions on Phase 14 passes lint, typecheck, assets,
   production build and all Chromium browser smoke tests.
2. Review actual browser visual performance and Core Web Vitals, not
   just CSS/source-level promises.
3. Obtain owner approval of real work, services copy, display font,
   public email, logo/preview assets and final production domain.
4. Confirm explicit permission for public launch and search indexing.
5. Prepare Vercel production deployment and real browser release audit.
6. Generate/commit npm package-lock.json and migrate CI to npm ci.

Next: Phase 15 — Deployment & Final Audit. Never mark it complete merely
because a Vercel deployment exists or the build passes.
