# Phase 04 — Global Layout & Navigation

A site-wide layout wraps all pages in src/app/layout.tsx.

## Components

- src/components/layout/site-shell.tsx — shared header, main, footer landmarks, accessible skip link.
- src/components/layout/site-header.tsx — sticky brand header, desktop navigation, mobile disclosure menu.
- src/components/layout/site-footer.tsx — real brand identity, location, in-page links, copyright.
- src/config/navigation.ts — typed source of all preview navigation links.

## Current preview routes

The actual Work, About, Services and Contact pages do not exist yet.
Do not create fake URLs. Existing preview destinations are:

| Label | Destination |
| --- | --- |
| Components | /#buttons-preview |
| Typography | /#typography-preview |
| Project cards | /#projects-preview |
| Explore preview | /#projects-preview |

Brand links point home. Replace previewNavigation with actual production routes
only as corresponding portfolio pages or sections are implemented.

## Accessible mobile navigation

- Native button has aria-expanded, aria-controls, and a descriptive label.
- Focus initially enters the opened menu.
- Escape closes the menu and restores focus to its toggle.
- Tab/Shift+Tab loop within visible header interactive controls while open.
- Clicking outside or selecting a nav link closes the menu.
- Desktop and mobile nav use one source of truth.
- Skip-to-content link bypasses header and focuses the main landmark.

## Visual direction

Keep approved burgundy #66001F and cream #FEFCEF, DM Sans for supporting text,
and Alro as an approved but not yet supplied licensed display font.
Use tokens and existing shared components. Avoid unapproved colors,
automatic browser dark mode and decorative excess.

## Acceptance

Implemented: site shell, header, footer, working preview navigation, mobile
disclosure controls and no duplicate page landmarks.

Awaiting independent checks: automated Phase 04 CI, browser viewport testing
at 320px/375px/tablet/desktop, 200% text zoom, keyboard and screen-reader
navigation. Also pending: licensed Alro fonts and npm lockfile.

Next is Phase 05, the actual homepage hero.
