# Antigravity Handoff — Phase 03

Repository: https://github.com/Maajolawasanjo/Hephzibah-portfolio

## Scope

All Phase 03 shared components are under src/components.
Study docs/DESIGN_SYSTEM.md and docs/COMPONENTS.md before making changes.

The root route is a development COMPONENT PREVIEW, not the finished homepage.
Placeholder cards are explicitly labeled and must never be presented as real work.

## Branding

- Burgundy: #66001F
- Cream: #FEFCEF
- Display typography: Alro (licensed webfont files not yet supplied)
- Body: DM Sans
- Style: editorial minimalism with sophisticated typography and restrained motion.

Do not fabricate clients, projects, client reviews, statistics or contact links.
Do not add a database, CMS, component library, or animation dependency without a need.

## Phase 04 next

Implement shared global header, desktop navigation, accessible mobile menu,
footer and overall page layout using the Phase 03 primitives.
Do not begin the final hero, project gallery or project case studies yet.

## Verification

- Run npm install and commit the generated package-lock.json if missing;
  then change CI to use npm ci.
- Run npm run lint, npm run typecheck and npm run build.
- Test desktop/mobile, reduced-motion, keyboard focus, and links.
- Reevaluate typography once Alro files are legally supplied.
- Report exact files, commit SHA, CI result, and remaining issues.
