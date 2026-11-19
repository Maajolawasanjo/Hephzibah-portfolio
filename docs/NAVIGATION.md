# Global Navigation — Phase 13 accessibility revision

Main header/footer links currently target real homepage sections only:
Work (/#selected-work), Services (/#services), About (/#about),
and Contact (/#contact). The brand wordmark returns to /.

The header has desktop navigation at the lg breakpoint and a
mobile disclosure menu below lg. The disclosure is **not a modal**.
It must not trap the keyboard user's Tab key.

## Mobile disclosure behavior

- Native button: aria-expanded and aria-controls refer to a persistent
  navigation element, hidden while closed.
- On open, focus moves to the first menu link.
- Tab/Shift+Tab move naturally; leaving the header closes the menu.
- Escape closes the menu and returns focus to the toggle.
- Clicking outside or activating any link closes the menu.
- Resizing to the desktop breakpoint closes an open mobile menu.
- Long menus scroll within the available viewport height.
- No links to unfinished or unpublished sections are introduced.

A focus-visible skip link bypasses the header and leads to the main landmark.
Anchor targets have scroll margin to avoid being obscured by the sticky
header. Automatic hover animations are not required for navigation.
Respect prefers-reduced-motion. Testing requirements and limitations
are documented in docs/ACCESSIBILITY_AUDIT.md.
