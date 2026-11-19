# Phase 07 — Individual Project Case Studies

## Implementation

The reusable case-study layout, typed data model and dynamic slug route are
implemented in code. No case-study pages are public: no approved project
briefs, artwork or published project records have been supplied.

### Source modules

- src/content/projects.ts — one source for featured work and its detailed case study.
- src/components/portfolio/case-study-view.tsx — reusable editorial page.
- src/app/work/[slug]/page.tsx — per-project metadata, static paths and 404 handling.
- src/components/ui/media-frame.tsx — contain mode to prevent artwork cropping.
- src/components/home/selected-work.tsx — automatic links to approved studies only.

### Content required before publishing

Confirm actual project title, unique lowercase hyphenated slug, description,
category, original cover image with descriptive alt text, permission for
portfolio use and explicit project approval.

The nested caseStudy must include the designer role, background/brief,
challenge, approach, solution, at least one actual deliverable, and at least
one approved gallery image with meaningful alt text. Explicitly approve
the caseStudy after reviewing all its details. Outcome is optional; do
not invent sales figures, testimonials, results, or other metrics.

Place approved, optimized images under public/projects/REAL-SLUG/ and
reference their exact local paths in the data model. Verify actual files exist.
Do not use third-party stock imagery, mock clients, or fabricated visuals.

### Publication safeguards

- Only approved projects with unique valid slugs enter the homepage gallery.
- Only complete, separately approved studies receive generated routes.
- generateStaticParams returns published slugs only; dynamicParams is false.
- Invalid and unapproved slugs are unavailable and guarded by notFound().
- Cards without an approved complete study are non-clickable.
- Next-project and back links go only to real generated destinations.
- The detailed gallery uses uncropped containment and preserves artwork colors.
- Real project metadata uses accurate title/summary and remains noindex
  pending an overall launch review.

### Case-study page structure

1. Back to Selected Work, real title, summary and project metadata.
2. Approved project cover.
3. Background and challenge.
4. Creative approach and design solution.
5. Original artwork gallery with optional descriptive captions.
6. Verified deliverables and optional evidence-backed outcome.
7. Link to next approved case study, or return to Selected Work.

### Acceptance

- [x] Typed project and full case-study data architecture written.
- [x] Dynamic page template, per-page metadata and route guards written.
- [x] Detailed images use contain mode; no forced cropping.
- [x] Approved-study links are computed automatically.
- [ ] GitHub Actions lint, type checking and build pass.
- [ ] Authentic approved case studies and images supplied.
- [ ] Real browser/mobile/accessibility QA completed.
- [ ] Licensed Alro font files installed and typography reviewed.

Phase 07 is structurally implemented; content publication remains blocked.


## Optional reviewed project intake

Use `npm run intake:project -- actual-project-slug` to create a local
`private-intake/` draft containing blank factual fields and an artwork
folder. Once owner/client rights are confirmed, run
`npm run intake:check -- actual-project-slug`. Only after independent
review, copy approved optimized media into public/projects/ and add a
properly approved typed record to `src/content/projects.ts`. This
private intake path is not a publishing mechanism. Full instructions:
docs/PROJECT_INTAKE.md.
