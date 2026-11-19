# Antigravity Handoff — Phase 07

Repository: https://github.com/Maajolawasanjo/Hephzibah-portfolio

## Scope

Phases 01–06 form the existing foundation. Phase 07 now implements
reusable case-study pages, a typed content schema and safe routing.

Read docs/CASE_STUDIES.md, docs/SELECTED_WORK.md,
docs/DESIGN_SYSTEM.md and docs/IMPLEMENTATION.md.

## Approved design

- Modern Editorial Minimalism, deliberate expressive typography.
- Burgundy #66001F, cream #FEFCEF, body font DM Sans.
- Alro display font still needs licensed webfont files.
- Respect keyboard focus, reduced motion, image alt text and original artwork.
- Never automatically inherit browser/system dark mode.

## Content safety

Do not fabricate brands, project work, graphics, clients, metrics or testimonials.
No case-study records are published until actual client-approved material
is supplied and the explicit project/study approval flags are set.
No manual links to unfinished routes. Local image paths must resolve.

## Next steps

1. Confirm Phase 07 CI lint/typecheck/build.
2. When assets are supplied, verify each brief/image and populate the collection.
3. Test actual case-study paths, unavailable slug 404 behavior and image layout.
4. Visually inspect mobile/tablet/desktop, zoom, keyboard and alt descriptions.
5. Generate package-lock.json and migrate CI to npm ci in an npm-enabled runtime.
6. Add licensed Alro files only with permission and correct web embedding rights.

Phase 08 next: About & Professional Identity, using verified biography only.
