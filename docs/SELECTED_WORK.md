# Phase 06 — Selected Work

## Implementation status

The gallery component and typed content collection are implemented.
Actual portfolio content is **blocked on the owner's approved project material**.
Neither the Hephie Creatives temporary GitHub repository nor the original
Hephzibah-owned GitHub repository had project assets at the time of this phase.
No brand identity cases, project names, creative results or mockups have been invented.

### Where the gallery is implemented

- `src/content/projects.ts`: curated, typed source of real selected projects.
- `src/components/home/selected-work.tsx`: editorial section and responsive gallery.
- `src/components/portfolio/project-card.tsx`: reusable card with correct image
  sizes for lead and smaller features.
- `public/projects/`: approved, web-ready artwork goes here.
- `src/app/page.tsx`: uses SelectedWork instead of the earlier placeholder.

A gallery with no approved projects shows an honest "In curation" editorial
state, not fake work. When verified entries exist, the first approved item
takes the full-width lead position, and subsequent cards use a two-column
editorial arrangement (single-column on mobile). The gallery supports up to
eight approved projects. No client names or project images are hard-coded.

### Required assets and details before publishing work

For each of the strongest **6–8 actual projects**:

1. Confirm project title, client/brand, category and whether it can be public.
2. Supply a wide, high-resolution cover artwork with permission for portfolio use.
3. Supply clear alternative text describing the actual visual.
4. Provide a short factual summary, designer's role, and year if known.
5. Supply additional real artwork/brand mockups and brief/process notes for
   the next phase of individual case-study pages.
6. Confirm whether any outcome or testimonial can be publicly attributed.

Recommended assets are optimized WebP or AVIF, with meaningful filenames.
Save covers under `public/projects/<actual-slug>/cover.webp` and use image
paths beginning `/projects/`. Preserve client artwork's original palette.

### Publishing model

Edit `src/content/projects.ts` to add typed `SelectedProject` objects.
Use approved=true only after artwork and content are verified. Add a unique
slug, order, title, summary, category, image path, meaningful alt text, and
optional year or aspect ratio. Unapproved projects are excluded. Duplicate
slugs, incomplete titles/summaries and missing alt text are excluded.

`href` must remain absent until the corresponding real case study route
exists in Phase 07. Cards without a valid route are intentionally not links.

### Quality checks and follow-up

- [x] Reusable editorial gallery and publication data model implemented.
- [x] Genuine no-project empty state with no fabricated samples.
- [x] Responsive image sizing, aspect-ratio options and lead-feature layout.
- [x] Previous temporary section removed from active page.
- [ ] GitHub Actions lint, typecheck and production build pass on phase commit.
- [ ] Owner supplies verified work and approved artwork.
- [ ] Six to eight actual projects curated and published.
- [ ] Mobile/tablet/desktop browser image-crop and accessibility review.

**Phase 06 is structurally implemented, not content-complete.**
Phase 07 will introduce real project case-study routes once briefs and assets exist.
