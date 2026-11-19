# Hephie Creatives — 15-phase plan

Every phase requires review before proceeding.

1. **Project Setup & Architecture** — Next.js, TypeScript, Tailwind, linting, smoke test.
2. **Global Design System** — approved palette, Alro integration, typography and spacing scales.
3. **Shared UI Components** — buttons, headings, containers, sections, project cards.
4. **Global Layout & Navigation** — header, mobile menu, footer, shared layout.
5. **Homepage Hero** — professional intro, expressive type, verified copy and CTA.
6. **Selected Work** — actual branding project gallery.
7. **Project Case Studies** — project-specific brief, process, outcomes, mockups.
8. **About & Professional Identity** — verified experience, portrait and philosophy.
9. **Services & Value Proposition** — four services, what clients receive, reasons to hire.
10. **Supporting Sections** — tools, process, testimonials, teaching, more work.
11. **Contact & Conversion** — approved email, WhatsApp and social links.
12. **Animation & Microinteractions** — subtle and accessible interactions.
13. **Responsive & Accessibility Audit** — devices, contrast, keyboard tests.
14. **SEO, Performance & Quality Assurance** — sitemap, metadata, image optimization.
15. **Deployment & Final Audit** — GitHub to Vercel, domain and release checks.

## Phase 01 acceptance criteria

- [ ] npm install completes and package-lock.json is committed.
- [ ] npm run lint passes.
- [ ] npm run typecheck passes.
- [ ] npm run build passes.
- [ ] Mobile and desktop previews are visually inspected.
- [ ] Burgundy / cream applied consistently.
- [ ] No invented clients, testimonials, achievements or contacts.
- [ ] Alro correctly documented as pending licensed files.
- [ ] No final homepage or shared components constructed prematurely.

This initial commit is a scaffold only: installation, browser QA and build checks
have not been verified by this assistant. Do not mark the phase complete until they pass.

## Milestone status (November 19, 2026)

| Phase | Status |
| --- | --- |
| 01 Project foundation | Committed; CI passed |
| 02 Design system | Committed; CI passed |
| 03 Shared components | Committed; CI passed |
| 04 Global layout and navigation | Committed; CI passed |
| 05 Homepage hero | Committed; CI passed |
| 06 Selected Work | Gallery architecture implemented; actual projects pending |
| 07 Case studies | Route/template written; real content pending |
| 08 About & Professional Identity | About section implemented; CI and owner copy sign-off pending |
| 09 Services & Value Proposition | Section implemented; CI and owner copy approval pending |
| 10 Supporting Sections | Components implemented; CI and optional materials pending |
| 11 Contact & Conversion | Contact UI and draft composer implemented; public email approval pending |
| 12 Animation & Microinteractions | Implemented, CI pending |
| 13 Responsive & Accessibility Audit | Remediation and Chromium tests authored; CI pending |
| 14 SEO, Performance & QA | SEO safeguards and tests authored; CI pending |
| 15 Deployment & Final Audit | Not yet implemented |

Phase 05 introduces only the responsive hero, a concise index of confirmed
services to support existing navigation, and an honest selected-work holding
section. See docs/HOMEPAGE_HERO.md.

Earlier Phase 01 checkboxes remain the original initial acceptance list.
Automated lint/typecheck/build checks passed in GitHub Actions for Phases
01–04, but visual QA, Alro licensing and a committed npm lockfile are still open.


## Phase 06 — Gallery status

Code is present, but no original approved work files were found in either
repo. The gallery shows a clearly labelled curation state until actual client
projects, images, captions and public-use permission are supplied. See
docs/SELECTED_WORK.md. Phase 06 must not be reported as content-complete.


## Phase 07 — Case Study Architecture

The case-study template, typed project narrative data and protected slug-based
route are added. No project pages are published while authentic approved
briefs and images are absent. See docs/CASE_STUDIES.md. Phase 07 automated CI passed; browser QA remains outstanding.


## Phase 08 — About & Professional Identity

A standalone About section is integrated into the homepage, presenting the
established first-person biography and a three-point design philosophy.
The nav now includes a real About destination and the desktop breakpoint
was adjusted to avoid crowding. The portrait is deliberately not fabricated:
its space uses a decorative typographic composition until an actual approved
photo is available. Achievement counts remain unpublished pending confirmation.
See docs/ABOUT.md. Phase 08 CI passed; owner's content approval remains pending.


## Phase 09 — Services & Value Proposition

A detailed four-service section and value proposition were added. Service
names follow the existing approved categories. Potential areas of work and
audience descriptions are editorial proposals, not a fixed scope guarantee.
The short FocusStrip was removed and all homepage links updated to real
Services, Selected Work and About anchors. See docs/SERVICES.md.
Phase 09 CI passed; final owner sign-off remains pending.


## Phase 10 — Supporting Sections

Process, creative disciplines and one-on-one mentorship are implemented.
Testimonials and More Work have owner-approval content gates and are hidden
while the collections are empty. Named creative tools are also excluded
until verified. See docs/SUPPORTING_SECTIONS.md. Phase 10 lint, typecheck, build CI passed on the correction commit.


## Phase 11 — Contact & Conversion

A complete contact section and inquiry-draft interface are implemented,
with a valid public address and explicit approval required before activation.
The previously supplied email has not been verified as the owner's preferred
public inbox, so it is intentionally NOT committed to GitHub. Navigation
now links to a real Contact anchor, with the header primary CTA automatically
changing after an approved address is configured. The form opens an email
draft only and never claims to have sent or stored a message.
See docs/CONTACT.md. Phase 11 CI passed; public contact approval remains pending.


## Phase 12 — Editorial Motion

Hero entrance, selected intersection-triggered reveals, desktop nav underline,
mobile-menu entrance, button/project hover and inquiry-field focus feedback
were implemented without adding an animation package. The observer preserves
server-rendered content when JavaScript or observers are unavailable and
respects reduced motion. Read docs/MOTION.md. Phase 12 CI passed; real-browser motion QA remains open.


## Phase 13 — Accessibility & Responsive Quality

Code-level review identified a nonmodal mobile-menu focus trap, missing
persistent aria-controls target, tiny labels, decorative text overflow risk,
focusable elements potentially hidden by scroll reveal and sticky-header
anchor overlap. The corresponding fixes have been staged. Playwright now
adds a real Chromium browser smoke suite to the normal CI workflow,
including viewport-width, navigation, keyboard and reduced-motion checks.
See docs/ACCESSIBILITY_AUDIT.md. Phase 13 lint, typecheck, build and 11
Chromium smoke tests passed on follow-up commit 8a13720. Extensive manual
screen-reader and cross-browser QA remains outstanding.


## Phase 14 — SEO, Performance & Quality Assurance

Controlled metadata, robots, sitemap, canonical and verified Person JSON-LD
are implemented. Public indexing remains blocked until the owner's launch
flags, valid HTTPS domain, approved real project and contact email exist.
Images now use Next.js 16 preload only when appropriate, with all unapproved
and below-the-fold imagery deferred. An asset-size validation script and
additional Chromium browser SEO checks are included. See
docs/SEO_PERFORMANCE.md. Automated CI and real-world performance/launch QA
must be confirmed separately.
