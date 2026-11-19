# Phase 05 — Global Navigation Updated for Homepage

The shared navigation and footer were introduced in Phase 04; Phase 05
changes their labels to match actual homepage anchors. No fake routes.

| Label | Working destination |
| --- | --- |
| Home | /#home |
| What I do | /#focus |
| Selected work | /#selected-work |
| Explore work CTA | /#selected-work |

The selected-work destination is currently an honest, clearly labeled
holding section. Phase 06 replaces it with actual curated branding projects.

Brand links return to /.

## Architecture and accessibility

- src/components/layout/site-shell.tsx owns the shared header/main/footer
  landmarks and a visible-on-focus skip-to-main link.
- src/components/layout/site-header.tsx owns the sticky header and accessible
  mobile navigation (expanded state, focus handling, Escape, outside click).
- src/components/layout/site-footer.tsx owns the shared footer.
- src/config/navigation.ts is the single source of truth for visible nav links.
- Mobile and desktop navigation use the same source.
- The root page must never reintroduce duplicate landmarks or dead links.

## Manual QA still needed

Test at 320px and 375px, tablet, and desktop; keyboard traversal, Escape
behavior, click-away, 200% zoom and actual in-browser layout on real screens.
CI checks do not substitute for visual or assistive-technology validation.
