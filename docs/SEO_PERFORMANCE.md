# Phase 14 — SEO, Performance & Quality Assurance

## Implementation summary

Phase 14 prepares the portfolio for search and production review **without
publishing incomplete or invented content**. No verified production domain,
approved gallery, public inquiry address, or owner launch authorization is
currently available; indexing remains explicitly disabled.

### Search metadata

- `src/app/layout.tsx`: coherent title template, description, Open Graph
  title/site/description, Nigeria English locale and Twitter summary metadata.
- `src/app/work/[slug]/page.tsx`: factual per-case-study title/description
  and canonical links only after publication approval.
- `src/components/seo/person-json-ld.tsx`: verified Person JSON-LD with
  name, profession, Lagos, and canonical URL; withheld before launch.
- No unapproved logo, stock portrait, testimonials, social handles or
  fabricated Open Graph image is used. A branded OG image needs original
  approved art before the production launch.

### Indexing and domain authorization

`src/lib/seo.ts` is the shared publication gate used by page metadata,
robots.txt, sitemap.xml, per-project case studies and JSON-LD.

A publicly indexable site requires ALL of the following:

1. `SITE_CONTENT_APPROVED=true`, following Hephzibah's editorial sign-off.
2. `SITE_LAUNCH_APPROVED=true`, following explicit release authorization.
3. `NEXT_PUBLIC_SITE_URL` set to the verified, owner-controlled HTTPS
   production origin, with no path/query, port or credentials.
4. At least one real approved selected project in the repository.
5. A validated, approved public inquiry email configured via
   `NEXT_PUBLIC_CONTACT_EMAIL` and `CONTACT_EMAIL_APPROVED=true`.
6. Deployment must not be a Vercel preview environment.

Until these conditions are met:

- `<meta name="robots">` signals noindex/nofollow.
- `/robots.txt` disallows general crawling and announces no sitemap.
- `/sitemap.xml` contains **no public URL entries**.
- No canonical domain link or structured-data script is emitted.

When approved and rebuilt:

- /robots.txt allows crawling and references the real sitemap/domain.
- /sitemap.xml contains / plus only the real *published* case-study routes.
- Homepage and published case-study canonical links use the real domain.
- Site identity JSON-LD appears, with no invented reviews or outcomes.

**Important:** robots/noindex do not control access or guarantee privacy.
For private preview work, enable deployment protection. Search robots
may not crawl a blocked page to see its noindex directive; don't treat
robots.txt as a confidentiality tool.

No DNS, production domain, Search Console property or site submission was
created in this phase. Environment flags are OFF by default in .env.example.
Deployment requires a new build after approval/variable changes.

## Images and resource loading

- Existing Next.js Image components provide responsive sizes and optimized
  formats for actual, approved assets.
- `MediaFrame` now uses Next.js 16 `preload`, replacing deprecated
  `priority`. This is only used for the above-the-fold case-study cover.
- Below-the-fold Selected Work and detailed-gallery images load lazily;
  the first card no longer needlessly preloads as if it were the homepage
  hero (which is typographic and contains no image).
- Case-study art is displayed with contain, preserving original identity
  compositions. Card covers may crop intentionally within set ratios.
- `scripts/check-assets.mjs` checks public/projects and public/about,
  permits optimized JPEG/PNG/WebP/AVIF only, flags symlinks, and rejects
  media larger than 3 MiB. The limit is a preventive asset-size budget,
  not a substitute for visual fidelity assessment.
- Actual imagery is not yet present, so no real-world image compression
  statistics, Core Web Vitals score or LCP claim can be made.
- No speculative preload of unapproved photos or extra runtime package.

## Automated tests

`tests/browser/seo.spec.ts` checks that unapproved preview builds
have descriptive metadata, are noindex, block search crawling, expose
no case-study sitemap URLs, and do not request made-up portfolio assets.

`tests/browser/accessibility.spec.ts` continues to cover five viewport
widths, focus and mobile navigation, keyboard behavior, reduced motion,
and contact publishing controls. CI runs:

    npm ci --no-audit --no-fund
    npm run lint
    npm run typecheck
    npm run check:assets
    npm run build
    npx playwright install --with-deps chromium
    npm run test:browser

The committed lockfile was generated and verified by GitHub Actions;
normal CI now installs with npm ci to preserve the exact dependency tree.

### Outstanding quality gates

- [ ] Phase 14 GitHub Actions lint/typecheck/asset/build/browser run green.
- [ ] Real approved image files and associated case-study content integrated.
- [ ] Verify actual Core Web Vitals (LCP, INP, CLS) on deployed mobile/desktop.
- [ ] Lighthouse/CrUX/real-device performance testing after assets are present.
- [ ] True 200%/400% browser zoom, Safari/Firefox, VoiceOver/NVDA QA.
- [ ] Owner-supplied licensed Alro font and final typography review.
- [ ] Owner-approved public email and working contact email handler.
- [ ] Owner-approved social preview imagery and trademark/favicon assets.
- [ ] Confirm production domain ownership and final publication authorization.
- [ ] Verify indexing rules and sitemap again on the live production deployment.
- [x] Commit a verified package-lock.json and migrate CI to npm ci.

This phase is complete at the source/automated-test level only after CI
passes. Actual launch readiness depends on these external approvals and
manual tests, addressed in Phase 15.

## References

- Next.js 16 MetadataRoute conventions for robots and sitemap.
- Next.js 16 Image component: `preload` replaces deprecated `priority`.
- Site requirements in docs/DESIGN_SYSTEM.md and docs/CASE_STUDIES.md.
