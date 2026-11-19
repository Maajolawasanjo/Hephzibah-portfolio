# Phase 12 — Animation & Microinteractions

## Intent

Motion should reinforce the Hephie Creatives editorial identity without
distracting from work, masking content, slowing down the site, or making
the visitor's browsing path unpredictable.

No animation library was added. The implementation uses the existing
CSS motion design tokens and one small, route-aware IntersectionObserver
client enhancer.

## Implemented

- Hero: subtle, staggered entrance for the introductory text, display
  headline, supporting statement and decorative typography specimen.
- Homepage section content: one-time reveal on intersection for selected
  editorial heading groups and service rows. Only the elements explicitly
  marked with `data-reveal="up"` participate.
- Navigation: minimal underline draw on desktop hover/focus.
- Mobile menu: brief, restrained enter animation after expansion.
  Menu still uses a native disclosure button and the previously
  implemented Escape, focus, click-away and resize behaviors.
- Buttons: small hover lift on hover-capable pointers only.
- Published project cards: slight lift on hover; existing optimized image
  hover behavior is retained. Non-clickable placeholder content does not
  falsely acquire a link.
- Inquiry form: brief border-color feedback on focused fields.
  The inquiry form still activates only for an approved public email.

## Code

- `src/components/motion/motion-observer.tsx` — a small client component
  that observes expressly marked elements when the route changes.
- `src/app/globals.css` — hero/menu keyframes, reveal transitions,
  underline and pointer feedback, and reduced-motion safeguards.
- `src/components/layout/site-shell.tsx` — mounts one observer per
  shared layout.
- `src/components/home/*` — opt-in reveal attributes.
- `src/components/layout/site-header.tsx` — nav/menu treatment.
- `src/components/ui/button.tsx`, `src/components/portfolio/project-card.tsx`,
  and `src/components/home/contact-form.tsx` — hover/focus classes.

## Performance and progressive enhancement

- The server renders **all content visible**; no route is hidden by default.
- The observer runs only in the browser and only marks below-viewport
  targets pending. Content currently in view, above the viewport,
  or loaded after a navigation is left visible.
- Content is revealed once, then removed from observation.
- If JavaScript is disabled or IntersectionObserver is unavailable, content
  remains visible. This is a visual enhancement, never a requirement.
- No continuous parallax, infinite looping, slider, scroll-jacking,
  video background, large dependency or ongoing paint-heavy effect.
- Only opacity/transform are used for entrance movement. Borders and
  underlines change without page reflow.
- CSS durations use the defined motion tokens; motion is reserved for
  editorial hierarchy, navigation and functional affordances.

## Accessibility and motion preferences

- When `prefers-reduced-motion: reduce`, entrance effects and
  transitions effectively disappear, revealed content remains fully
  visible, and smooth scrolling is already disabled by global CSS.
- If a visitor enables reduced motion while the page is open,
  the observer disconnects and restores all pending elements.
- Focus outlines and the menu's keyboard interaction remain functional.
- The observer is route-aware for navigation between the homepage and
  future approved project case studies.
- No interactive behavior is conveyed by animation alone.

## Validation plan

- [x] No new animation dependency; uses CSS and browser observer.
- [x] Visible-by-default progressive enhancement implemented.
- [x] Reduced-motion CSS and dynamic preference handling authored.
- [x] Main components, cards, links and menu integrated.
- [ ] Automated ESLint, TypeScript and Next.js build verified on Phase 12.
- [ ] Browser confirms no reveal flash and no hidden elements after anchor jumps.
- [ ] Keyboard Tab and Shift+Tab through mobile navigation checked.
- [ ] Slow devices and reduced-motion settings checked in browser.
- [ ] Real desktop/touch hover behavior and cumulative layout shift measured.
- [ ] Safari/iOS/browser matrix inspected.

**Automated builds cannot replace visual/interaction testing.**
Phase 13 is the dedicated Responsive Design & Accessibility Audit,
where browser-based QA issues should be fixed before launch.
