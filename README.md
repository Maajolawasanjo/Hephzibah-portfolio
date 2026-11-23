# Hephie Creatives — Portfolio

Portfolio for **Hephzibah Uzorndu**, founder of Hephie Creatives,
a Brand Identity Designer & Visual Storyteller in Lagos, Nigeria.

## Phase 15 — Deployment & Final Audit

**Current state: deployed to Vercel behind authentication, not approved
for public launch.** The site already has a successful production-target
deployment from GitHub `main`. The final phase adds release safeguards
and a repeatable launch-preflight audit.

See **[the consolidated deployment and launch audit](docs/LAUNCH_AUDIT.md)**.

## What is implemented

- Next.js homepage with editorial hero, About, Services, Process,
  creative disciplines, mentorship, global navigation and accessible
  mobile menu.
- Approved-only selected-work and reusable project case-study templates.
- Optional authentic testimonials and extra projects (hidden until verified).
- Contact interface activated only for an owner-approved public email;
  the form prepares a mailto draft and does not send or store email.
- Responsive and reduced-motion-aware interactions.
- Safe prelaunch robots/noindex/sitemap rules.
- Playwright Chromium browser checks, asset size check, release audit.

## How to verify

Use Node.js **22**, also configured for the Vercel project:

    npm ci
    npm run lint
    npm run typecheck
    npm run check:assets
    npm run audit:release
    npm run build
    npx playwright install chromium
    npm run test:browser

The informational preflight lists missing release requirements without
failing staging CI. After full content, artwork, font, domain, inbox and
manual QA sign-off, run:

    npm run audit:release -- --strict

The lockfile was generated, tested with `npm ci`, and committed by a
one-time GitHub Actions workflow. GitHub CI now installs reproducibly using
`npm ci`; update and verify the lockfile whenever dependencies change.

## Design language

Modern Editorial Minimalism, Burgundy #66001F, Cream #FEFCEF,
Alro by Artyway as the approved but not-yet-installed display font,
and DM Sans as the body and temporary fallback typeface.

## Before public launch

The owner must approve genuine project/case-study content and imagery,
first-person copy and potential client quotes, the public business contact,
legally licensed Alro webfont files, a verified custom HTTPS domain and
the actual launch. Review deployment protection before adding custom
domains, since existing Vercel Authentication excludes them.

No unverified case studies, achievements, contacts, testimonials or
client images should be fabricated to make the site appear complete.

### Documentation

- [Consolidated launch audit](docs/LAUNCH_AUDIT.md)
- [SEO and performance](docs/SEO_PERFORMANCE.md)
- [Accessibility](docs/ACCESSIBILITY_AUDIT.md)
- [Global design system](docs/DESIGN_SYSTEM.md)
- [Selected Work](docs/SELECTED_WORK.md)
- [Case Studies](docs/CASE_STUDIES.md)
- [Contact](docs/CONTACT.md)
- [Implementation roadmap](docs/IMPLEMENTATION.md)


## Post-launch-audit safeguards

The release gate now requires complete approved case studies and recorded
manual QA sign-off before search indexing can be enabled. The CI workflow
also validates actual image references via `npm run check:content`.
See [owner content handoff](docs/OWNER_HANDOFF.md) and
[post-audit readiness update](docs/LAUNCH_READINESS_UPDATE.md).


## Real-project intake (local and unpublished)

When Hephzibah provides a genuine project, start a **gitignored** local
intake with `npm run intake:project -- actual-project-slug`. Fill the
private JSON draft, add approved original artwork locally, and check it
with `npm run intake:check -- actual-project-slug`. This does not publish
a case study or change the website. See [Project intake](docs/PROJECT_INTAKE.md).


### Private visual review before publication

To inspect a real project draft without making it public:

```bash
npm run intake:preview -- actual-project-slug
```

This generates a static, private `review.html` inside the gitignored
intake folder, using only the owner's entered copy and local artwork.
Missing content is identified; approval flags are not set automatically.
Read docs/PROJECT_INTAKE.md for secure-handling guidance.


## Cross-browser release checks

GitHub CI now runs Playwright browser tests against Chromium, Firefox and
WebKit, including responsive widths, disclosure-menu navigation, reduced
motion, focus visibility, robots/sitemap and contact safety checks. These
checks complement but do not replace manual Safari, Firefox, real-device
and NVDA/VoiceOver acceptance. See docs/ACCESSIBILITY_AUDIT.md.

## Canonical repository handoff

The verified implementation currently lives in this repository. The
designer-owned intended destination,
`okezibauzorndu-rgb/Hephzibah-Portfolio-`, is empty. Although the
collaborator has GitHub push access, the connected GitHub integration
returned HTTP 403 on the owner's repository because it has not been
installed/authorized for that account. No transfer has occurred.
See [canonical repository handoff](docs/CANONICAL_REPOSITORY_HANDOFF.md)
for the precise unblock and history-preserving transfer steps.


## Portfolio V2 — professional profile redesign

This redesign addresses the user's visual audit: Satoshi for all typography,
more balanced heading scales, reduced blank space and repeated decorative
placeholders, a compact selected-work pending state, and new experience,
skills and education sections. Verified user-provided background includes
remote and in-person personal-branding clients; PixelLab, Photoshop and
Illustrator; coursework at TS Academy and Apex Academy; and current studies
at NUTM. No employers, dates, certifications, degrees or numerical outcomes
are invented. The contact form is visually present but safely disabled until
an approved inbox exists; no messages are submitted or stored.

The font uses Fontshare's official Satoshi stylesheet, without copying or
redistributing font binaries. Manual review must confirm loading and
commercial-use compliance with the current ITF Free Font License.
See [V2 professional redesign](docs/V2_PROFESSIONAL_REDESIGN.md).


## Temporary supplied imagery

Six user-supplied visual resources are now stored in `public/editorial/` and shown contextually across the homepage, services, software toolkit and supporting professional sections. The brand and logo mockups are illustrative references, **not approved Hephie client case studies**. See [temporary asset manifest](docs/TEMPORARY_VISUAL_ASSETS.md). The project publication and indexing approvals remain unchanged.
