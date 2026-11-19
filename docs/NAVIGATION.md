# Global Navigation — Updated in Phase 08

The site's shared shell owns one header, one main landmark and one footer.
All visible primary and footer navigation destinations currently exist.

| Navigation label | Destination | Current content |
| --- | --- | --- |
| Home | `/#home` | Homepage hero |
| Work | `/#selected-work` | Gallery architecture; approved projects pending |
| About | `/#about` | Hephzibah biography and design philosophy |
| What I do | `/#focus` | Short, confirmed service-area index |

The brand wordmark links to `/`. The primary CTA "Explore work"
links to `/#selected-work`. This destination does not pretend missing
client projects are available.

## Accessibility and responsiveness

- Desktop links appear at `lg`; mobile disclosure is used below that
  breakpoint to avoid crowding with four nav destinations and the CTA.
- On opening, focus moves inside the mobile navigation.
- Escape closes the menu and restores focus to the toggle.
- Tab / Shift+Tab remain within the expanded header controls.
- Outside pointer interactions close the menu.
- Selecting a link closes the mobile menu.
- Resizing to desktop closes any open mobile menu.
- A skip link leads to the single `#main-content` landmark.
- Global CSS supports reduced motion and visible focus indicators.

## Later phases

As the portfolio gains real Services and Contact content, update the
navigation only when its section and actual destination exist.
Do not create dead links, fake routes, or unverifiable social/contact URLs.

Browser-based keyboard, zoom, and responsive QA remains required and
cannot be replaced by CI alone.
