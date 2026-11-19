# Phase 15 — Deployment & Final Launch Audit

**Audit date:** November 19, 2026  
**Overall status:** DEPLOYED / PROTECTED / NOT APPROVED FOR PUBLIC LAUNCH

This is a deployment and release-readiness audit, not a claim that the
website's final project content or visual QA is complete.

## Verified GitHub and Vercel facts

| Item | Audited result |
| --- | --- |
| Source repository | github.com/Maajolawasanjo/Hephzibah-portfolio |
| Active branch | main |
| Baseline commit examined | ef493b42afe76fc195aa4521e45f9ae13c8ae7c3 (Phase 14) |
| GitHub CI at baseline | ESLint, TypeScript, asset validator, build, 15 Chromium tests passed |
| Vercel project | hephzibah-portfolio |
| Project ID | prj_JGRECMu0hzuvJll3a6Nu4b93zdck |
| Deployment ID | dpl_2oLrrTqBxqeZfet32RsGBe11vbu8 |
| Deployed source commit | ef493b42afe76fc195aa4521e45f9ae13c8ae7c3 |
| Deployment target/state | production / READY |
| Vercel Node runtime | changed from 26.x to 22.x to align with GitHub CI |
| Vercel-managed project alias | hephzibah-portfolio-henna.vercel.app |
| Custom owned domain | none configured or verified |
| Vercel environment variables | none configured |
| Deployment protection | Vercel Authentication enabled |
| Password protection | not enabled |
| Deployment HTTPS | enabled for Vercel-managed aliases |

### Protected deployment HTTP verification

Using the authenticated Vercel connector, the following responses were
verified from the deployed Phase 14 commit:

- GET /: **HTTP 200**, correct name/title, metadata robots noindex,
  main navigation and homepage content present.
- GET /robots.txt: **HTTP 200**, `User-Agent: *` and `Disallow: /`.
- GET /sitemap.xml: **HTTP 200**, empty urlset and no client URLs.
- Vercel runtime errors/fatals: no matching entries found in the queried
  recent deployment window. This is not proof that no error has ever occurred.
- Verified production build completed successfully. Build logs reported
  a Node engine-version drift (now fixed) and an npm configuration warning
  that did not break the build.

The deployment is marked production because it is built from main, but it
remains **protected and not approved as a public-facing launch**.
`live: false` in project metadata is consistent with no public custom domain.

**Access warning:** SSO protection is currently set to
`all_except_custom_domains`. Adding a custom domain later may exclude it
from this Vercel Authentication rule. Review deployment protection for the
specific custom domain BEFORE assigning it; do not accidentally expose
unfinished work.

### Changes made during Phase 15

- Vercel project Node runtime explicitly aligned with GitHub CI: **22.x**.
- Repository package engine constrained to Node 22.
- Added low-risk response headers: nosniff, deny framing,
  referrer policy, and unused browser-feature policy.
- Added a Node-based release preflight reporting genuine blockers.
- The preflight defaults to informational output for staging CI; strict
  mode fails if any required prerequisite is missing.
- Added Chromium response/security and prelaunch contact checks.
- Tightened canonical domain validation to reject Vercel-generated hosts.
- Added a manual release QA approval flag, default false.
- Kept search indexing, form activation, client case studies and
  public-contact information disabled until owner sign-off.

## Code gates versus launch gates

### Technically implemented and available in preview

- Editorial homepage, header, mobile navigation and footer.
- Four service areas, founder biography, process, toolkit and mentorship.
- Case-study templates and selected-project data structures.
- Responsive/accessibility fixes and motion-reduction behavior.
- Robots/sitemap/metadata safety gates and asset-budget checks.
- Client-side mailto draft composer, dormant until public inbox approval.

### Blocking the public launch

1. **Real artwork and projects:** six to eight curated case-study candidates
   were requested; none have been approved and added to the repository yet.
2. **Rights and editorial sign-off:** client permission for imagery, actual
   briefs, results, statements, About/service copy and optional testimonials.
3. **Display font:** official licensed Alro by Artyway webfont files and
   embedding rights; DM Sans is still a placeholder fallback for display.
4. **Public business contact:** confirm Hephzibah's preferred publicly
   visible inquiry email and verify actual mailto-handler behavior.
5. **Domain:** agree on an owner-controlled custom HTTPS domain, verify its
   DNS, TLS and protection policy before connecting it publicly.
6. **Manual QA:** physical keyboard, NVDA/VoiceOver, Safari/Firefox,
   actual mobile devices, text zoom, colors and image layout.
7. **Performance:** inspect real media on deployed mobile/desktop and
   measure LCP, INP, CLS / Core Web Vitals and related regression budgets.
8. **Brand assets:** approved favicon, portrait if desired, and accurate
   Open Graph/social sharing image.
9. **Explicit release authorization:** content approval, manual QA sign-off
    and separate production launch approval must be recorded.

Optional testimonials, named software and More Work must stay hidden if
authentic content is not supplied; do not fabricate filler.

## Repeatable release preflight

    npm run audit:release

This prints conditions verified from the repository and environment, plus
manual checklist items. It is intentionally nonblocking in staging CI.

After completing real owner sign-offs and configuring a verified production
environment, enforce the strict gate with:

    npm run audit:release -- --strict

The strict check requires real image files, actual project entries,
licensed Alro webfont assets, package-lock.json, verified public inbox,
custom domain, explicit content/launch approval and RELEASE_QA_APPROVED.
A passing preflight alone does not replace actual DNS, ownership or
assistive-technology checks.

Required environment variables are documented in .env.example.
Do not commit a personal or unapproved public contact email.

## Release sequence after blockers are resolved

1. Receive and verify public-use rights for all real portfolio imagery,
   writing and licensed font files; add actual cases and run asset checks.
2. Review the entire site with the owner and record editorial approval.
3. Configure the confirmed public inbox and test the prepared inquiry email.
4. Verify each subsequent dependency update with the tracked lockfile and npm ci.
5. Complete manual accessibility/responsive/browser and image/performance QA.
6. Verify custom domain ownership, HTTPS and explicit Vercel protection.
7. Configure build-time environment flags only when all approvals are true.
8. Review one final protected release candidate, then obtain separate
   public-launch authorization.
9. Publish and immediately verify homepage, case-study paths, metadata,
   robots, sitemap, canonical, email actions, contact links and logs.
10. Monitor actual performance and regressions; keep rollback available.

**Decision:** Phase 15 deployment audit and safeguards can be implemented
and CI-verified, but public launch must remain BLOCKED until the owner's
materials and sign-offs are complete. Do not disable deployment protection
or set publication flags as a shortcut.


## Phase 15 automated and deployment verification update

The first Phase 15 commit passed GitHub lint, TypeScript, asset validation,
production build and **17 Chromium browser tests**. Vercel deployed the
matching commit as READY. Authenticated live requests returned HTTP 200
for homepage, robots.txt and sitemap.xml, correctly showing noindex,
robots Disallow: / and an empty sitemap, plus the intended response
security headers. Project Node runtime remained 22.x and Vercel
Authentication remained active.

The release preflight initially counted eight blockers because npm install
created a **local untracked package-lock.json** in CI. This was a false
positive. Phase 15 now checks the Git-tracked lockfile instead, so the
missing committed lockfile is correctly reported as a ninth release blocker.
The corrected audit was subsequently rerun. None of these blockers
authorizes a public launch.


## Post-audit reproducible dependency update

GitHub Actions generated `package-lock.json` against the npm registry,
validated `npm ci`, and ran lint, TypeScript, asset checks and the
production build on that exact dependency tree. The verified lockfile was
committed to `main` as `09c4ee0`.

The normal quality workflow now uses `npm ci` rather than `npm install`,
and the one-time bootstrap workflow was removed. This closes the
previously unresolved reproducible-installation requirement; approved
project work, licensing, public contact, custom domain, manual testing
and explicit launch authorization remain outstanding.
