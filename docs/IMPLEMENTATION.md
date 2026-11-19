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
| 09–15 | Not yet implemented |

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
See docs/ABOUT.md. Phase 08 CI and owner's content approval are pending.
