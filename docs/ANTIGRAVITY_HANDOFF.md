# Antigravity Handoff — Phase 06

Repository: https://github.com/Maajolawasanjo/Hephzibah-portfolio

## Completed code

Phases 01–05 have passed GitHub Actions lint, TypeScript and production build.
Phase 06 adds the SelectedWork editorial gallery, typed project collection,
media sizing and an honest empty state while project assets are unavailable.

Read `docs/SELECTED_WORK.md` and `docs/DESIGN_SYSTEM.md`.

## Content and design rules

- Real approved work ONLY; no fabricated case studies or project artwork.
- Never treat the decorative "Work." type specimen as a client brand/logo.
- Preferred collection: six to eight best real brand identity projects.
- Colors: burgundy #66001F and cream #FEFCEF.
- Art direction: modern editorial minimalism, bold expressive typography.
- Alro needs licensed webfont files; DM Sans is the temporary fallback.
- Use `src/content/projects.ts` for curated entries and
  `public/projects/<actual-slug>/` for licensed/approved real artwork.
- Keep project cards without links until Phase 07 implements their actual routes.
- Maintain responsive, accessible and reduced-motion behavior.

## Before marking Phase 06 content-complete

1. Acquire and verify the project titles, briefs, years and client permission.
2. Obtain approved images and descriptive alt text; optimize and upload them.
3. Populate the typed collection with six to eight verified entries.
4. Inspect mobile, tablet, desktop, keyboard focus and image crops in a browser.
5. Verify CI results for Phase 06.
6. Commit package-lock.json after a connected npm install and migrate CI to npm ci.

Phase 07: Individual Project Case Studies using only real project information.
