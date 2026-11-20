# Phase 13 — Responsive Design & Accessibility Audit

## Scope

Code-level audit, remediation and repeatable Chromium browser testing for
Hephie Creatives. Target: WCAG 2.2 AA-oriented interaction and presentation.
This is **not a formal accessibility certification** or an exhaustive
screen-reader, keyboard or cross-browser manual assessment.

## Findings corrected

| Finding | Remediation | Files |
| --- | --- | --- |
| Mobile menu used a modal-style Tab trap for a nonmodal disclosure | Removed the trap; Tab can leave the menu, focus-out closes it, and Escape returns focus to the toggle | site-header.tsx |
| Mobile menu had a conditionally absent navigation node referenced by aria-controls | The controlled navigation has a persistent ID and native hidden state | site-header.tsx |
| Long mobile navigation could exceed available viewport height | Max available height plus independent vertical scrolling inside the opened menu | site-header.tsx |
| Desktop navigation hit targets were small | Added 44px minimum-height link targets | site-header.tsx |
| Very small visible labels (10–11px) in brand and hero | Increased to the shared 12px label minimum | site-header.tsx, hero.tsx |
| Sticky header could hide hash-link destinations | Added global scroll margin to ids in main | globals.css |
| Decorative typography could clip badly on narrow widths | Reduced and unified its responsive scale; made wrapping more robust | globals.css, hero.tsx, about.tsx, mentorship.tsx, selected-work.tsx |
| Keyboard focus could enter a scroll-reveal target while it was transparent | Reveal the nearest marked ancestor as soon as focus enters | motion-observer.tsx |
| Direct hash navigation could land on a pending reveal | Make matching anchored content visible on initial navigation | motion-observer.tsx |
| Inquiry labels were comparatively small | Increased form labels to at least 16px | contact-form.tsx |
| Focus indicator was defined but not consistently strengthened across controls | Shared visible focus outline in normal/inverse sections | globals.css |

## Automated browser smoke tests

Tests are authored in `tests/browser/accessibility.spec.ts`, configured
with `playwright.config.ts`, and run in GitHub Actions after production build.

The checks cover:

- Rendered homepage landmarks: single main, header, footer and h1.
- Language attribute and accessible navigation destinations.
- Document horizontal overflow at **320, 375, 768, 1024, 1440 CSS pixels**.
- Mobile menu: open and initial focus, Escape and focus return, Tab leaving
  disclosure without a trap.
- Desktop navigation visibility.
- Reduced-motion preference and content visibility.
- Contact form remains inactive without an authorized public address.
- Simplified increased-root-font layout stress test.

Run locally after `npm install`, `npm run build`, and
`npx playwright install chromium`:

    npm run test:browser

On GitHub, the existing quality workflow installs Chromium and executes
the tests. Failure evidence can be uploaded as an Actions artifact.

### Limits of automation

- These are browser **smoke tests**, not a full axe audit.
- Text enlargement by doubling the root font size approximates part of
  text-resizing behavior; it does not reproduce every browser's 200% zoom.
- Touch-device menus, OS screen readers, actual mobile Safari/WebKit,
  Firefox, font-loading variations and keyboard-only workflows need
  hands-on review.
- Programmatic overflow tests cannot establish typography, contrast,
  page composition or touch ergonomics for every device.
- Project pages lack real approved artwork, so image gallery clipping,
  alt-text quality and dynamic case-study navigation are not yet validated.
- Contact form with a real approved email remains untestable in production
  until public contact configuration is approved.
- Licensed Alro fonts have not been provided; typography must be rechecked
  when that display typeface is legally installed.

## Manual QA checklist (not yet signed off)

- [ ] iPhone-sized 320/375px and Android mobile touch navigation.
- [ ] Tablet portrait/landscape and 1024px/1440px desktop visual review.
- [ ] Actual browser zoom at 200%, 400% narrow-reflow review.
- [ ] VoiceOver and NVDA landmark, heading, menu and form announcements.
- [ ] Full keyboard traversal, focus order and skip link behavior.
- [ ] Actual Safari, Firefox and Chromium browser check.
- [ ] Normal and inverted color contrast, link states and forced colors.
- [ ] Reduced motion, low-bandwidth and JavaScript-disabled navigation.
- [ ] Meaningful actual project image alternatives and case-study media.
- [ ] Contact email handler and inquiry drafting after owner approval.
- [ ] Integration and layout review using the licensed Alro font.

## Publication status

Phase 13 addresses confirmed source-level issues and introduces repeatable
real Chromium checks. The final completion status depends on CI results.
Manual visual and assistive-technology checks remain open and should not
be described as passed without evidence.

Next planned phase: Phase 14 — SEO, Performance & Quality Assurance.


## Post-phase automated cross-browser expansion

The release QA suite now covers Playwright's **Chromium, Firefox and WebKit**
browser engines in GitHub Actions. This runs the existing responsive layout,
mobile menu, reduced-motion, prelaunch SEO and security smoke tests in each
engine, plus a targeted contact-navigation/keyboard-focus compatibility
check. The intended default run is 19 tests × 3 engines = 57 cases.

Install browser dependencies and run with:

```bash
npm ci
npm run build
npx playwright install --with-deps chromium firefox webkit
npm run test:browser
```

Automated Playwright WebKit on a Linux CI runner is not a substitute for
**real Safari on iOS/macOS**, and Playwright Firefox is not a substitute for
a manual Firefox and screen-reader audit. Browser-engine automation catches
more layout and keyboard regressions, but real device, assistive-technology,
actual 200%/400% zoom, and approved-media checks remain open.

The CI run status for this addition must be verified separately before
reporting it as passing.
