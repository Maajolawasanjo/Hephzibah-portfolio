# Hephie Creatives — Design System (Phase 02)

## Design philosophy

**Modern Editorial Minimalism with sleek, expressive typography.**
Warm, contemporary, confident, precise. Typography and genuine design work
provide the visual character; whitespace and editorial rhythm provide structure.

Avoid generic gradients, glassmorphism, cards around every paragraph, ornamental
shadows, invented achievements, or effects that compromise reading.

## Official palette (approved)

| Role | Token | Value |
| --- | --- | --- |
| Brand ink | `--brand-burgundy` | `#66001F` |
| Brand paper | `--brand-cream` | `#FEFCEF` |

These are the **only brand colors**. The CSS derives semantic supporting colors
using `color-mix()`: muted text (82% burgundy), subtle surface (4% burgundy),
and hairline dividers (20% burgundy). They are *not* new brand colors.
Never restore the earlier purple/lavender palette.

Brand primary contrast is about **12.86:1**, exceeding WCAG AAA for regular
text. WCAG compliance for imagery, overlays, hover/focus and future components
must still be assessed individually.

### Semantic roles

- `--color-page` and `--color-text`: background and foreground
- `--color-text-muted`: secondary text, not disabled controls
- `--color-surface-soft`: background for restrained grouping
- `--color-line`: section separators and hairlines
- `--color-action`, `--color-action-text`: future buttons and controls
- `.theme-inverse`: explicit burgundy section with cream text

**Do not automatically follow OS dark mode.** Inverted sections must be
explicitly authored; the default site remains cream regardless of system theme.

## Typography

- **Display:** Alro by Artyway (approved).
- **Body:** DM Sans (working supporting font).
- **Alro is NOT installed.** The CSS currently falls back to DM Sans/Arial,
  labeled as a preview. Obtain licensed webfont files and an appropriate
  website-embedding license before shipping or claiming integration.
- Do not fetch, imitate, or redistribute copyrighted Alro font files.
- Limit to these two font families unless a later design review approves another.

### Fluid type scale

| Token | Purpose | Current sizing |
| --- | --- | --- |
| `--type-display` | Major editorial statements | `clamp(3.25rem, 8vw, 8.5rem)` |
| `--type-heading-xl` | Hero / page headings | `clamp(2.75rem, 6.2vw, 6.25rem)` |
| `--type-heading-lg` | Section headings | `clamp(2.125rem, 4.4vw, 4.5rem)` |
| `--type-heading-md` | Subsections / project titles | `clamp(1.625rem, 2.8vw, 2.5rem)` |
| `--type-lead` | Supporting statements | `clamp(1.125rem, 1.6vw, 1.375rem)` |
| `--type-body` | Paragraph copy | `1rem` |
| `--type-small` | Captions / metadata | `0.875rem` |
| `--type-label` | Uppercase eyebrow labels | `0.75rem` |

Line height: display 0.94, headings 1.06, paragraphs 1.65. Headline tracking
is intentionally tight; labels use +0.16em. Refine typography after Alro
becomes available, especially at 320px and 375px widths.

The corresponding *CSS styles* are `.type-display`, `.type-heading-xl`,
`.type-heading-lg`, `.type-heading-md`, `.type-lead`, `.type-body`,
`.type-small`, and `.type-label`. Reusable React typography components
will be created in **Phase 03**, not here.

## Layout and spacing

- Baseline 4px with 8px rhythm for primary spacing.
- Spacing tokens: `--space-1/2/3/4/6/8/12/16/24`.
- Maximum canvas: `--layout-content-max: 80rem`.
- Maximum reading measure: `--layout-reading-max: 42rem`.
- Responsive gutter: `clamp(1.25rem, 4vw, 4rem)`.
- Responsive section spacing: `clamp(4.5rem, 9vw, 9rem)`.
- Responsive grid gap: `clamp(1rem, 2.4vw, 3rem)`.
- Start with Tailwind's standard `sm`, `md`, `lg`, `xl`, `2xl` breakpoints.
- Use `.layout-container` and `.layout-section` CSS styles until shared
  React wrappers are added in Phase 03.
- Case studies may use 12-column editorial grids at larger widths;
  simplify to readable single-column arrangements on small screens.
- Keep project imagery at natural, purposeful aspect ratios, not
  arbitrarily stretched or cropped.

## Minimal shape and motion

- Hairline: `--stroke-hairline: 1px`.
- Control radius: `--radius-control: 0.25rem`.
- Media radius: `--radius-media: 0.5rem`.
- Motion durations: `--motion-fast: 160ms`,
  `--motion-base: 260ms`, `--motion-slow: 480ms`.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Never rely on motion to convey essential information.
- Disable nonessential motion when reduced motion is preferred.
- Use native browser interactions and CSS first, with a motion library
  only where it solves a genuine design need.

## Accessibility

- Preserve visible keyboard focus. Global `:focus-visible` outline:
  3px current semantic foreground with 4px offset.
- `forced-colors` uses system `Highlight` outline.
- Text labels should not be smaller than 12px, and meaningful body text
  should be at least 16px.
- Aesthetic headings must not overlap or clip at narrow screen widths.
- Use descriptive alt text for actual project imagery, semantic headings,
  and links with understandable purposes.
- Browser text zoom and reduced-motion preferences must be supported.

## Implementation boundaries

Phase 02 establishes CSS tokens and a static design-system preview.
**No production homepage, site header/footer, project components, or fabricated
case studies** are included. Those are scoped for later phases.

### Phase 02 acceptance criteria

- [x] Tokens and typography scale defined.
- [x] Explicit inverted burgundy section defined.
- [x] Accessible base and reduced-motion styles authored.
- [x] Responsive token preview authored.
- [ ] Automated lint, type-check and build revalidated after push.
- [ ] Visual QA at 320px, 375px, tablet and desktop.
- [ ] Licensed Alro webfonts supplied and tested (external dependency).
