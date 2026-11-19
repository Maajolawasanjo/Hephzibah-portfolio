# Real project intake — Hephie Creatives

## Goal

Receive Hephzibah's authentic work **without** adding invented client
stories, placeholder visuals, or unauthorized material to the live site.
This workflow creates a local, untracked draft; it cannot publish work.

## Create a private draft

Run from the portfolio repository on Node.js 22:

```bash
npm ci
npm run intake:project -- actual-project-slug
```

Use a unique lowercase slug with hyphens (e.g., your **real** project
slug); do not use client names in a publicly visible GitHub issue before
publication permission exists.

The script creates:

```text
private-intake/
  actual-project-slug/
    README.txt
    project.json
    artwork/
```

`private-intake/` is in `.gitignore`. Gitignore is **not encryption or
access control**. Treat real client materials as confidential; transfer them
through an authorized secure channel and never force-add this directory
to a public Git repository.

The command refuses to overwrite an existing project folder.

## Complete the project.json

Fill only factual information for the specific original project:

| Field | Required detail |
| --- | --- |
| slug | Stable lowercase hyphenated name matching folder |
| title / category | Real approved display name and one existing portfolio category |
| summary | Concise, factual description of the work |
| year | Actual project year or null |
| role | Designer's real contribution |
| background | Client brief / starting point, accurately described |
| challenge | The real communication/design challenge |
| approach | What the designer actually researched or explored |
| solution | The final work and design reasoning |
| deliverables | Nonempty list of actual files/applications produced |
| outcome | Optional; omit if not supported by evidence |
| cover | `filename`, meaningful `alt`, optional `caption` |
| gallery | One or more actual artwork image objects |
| permission | Four independent approvals described below |

Categories supported by the current site are: Brand Identity, Logo Design,
Visual Identity and Creative Direction.

Artwork filenames must be simple lowercase names, ending with .webp,
.avif, .jpg, .jpeg or .png. Put the real files in the draft's
`artwork/` directory and reference **filenames**, not external URLs.

## Verify four independent approvals

All draft permission flags start **false** and require explicit evidence.

- `ownerReviewed`: Hephzibah has checked the accuracy of the entry.
- `clientPortfolioPermission`: public portfolio display is authorized.
- `artworkRightsVerified`: imagery, fonts, client logos and other included
  assets may legally be displayed on the site.
- `caseStudyApproved`: the complete copy and selected visuals are approved
  for an individual case-study page.

Only set a flag to true after the corresponding approval was actually
given. Store evidence securely; do not commit private client approval emails.

## Check the draft

```bash
npm run intake:check -- actual-project-slug
```

The checker verifies required fields, category, approval flags, safe image
filenames, nonempty alt text, referenced local files and the 3 MiB
per-image size budget. A failing check lists the remaining requirements.
A passing check means the draft is ready for a **separate human review**,
not automatically licensed, correct or published.

The command does **not** modify `src/content/projects.ts`, upload client
files, set production flags, or expose the private directory in Vercel.

## Review, then publish intentionally

After the separate content and rights review:

1. Export optimized approved original media from the draft to
   `public/projects/actual-project-slug/`.
2. Manually map factual draft fields to the existing `SelectedProject`
   and `ProjectCaseStudy` types in `src/content/projects.ts`.
3. Keep `approved: false` on both until sign-off of the precise published
   version. Never treat a successful intake check as a release decision.
4. Change approval values only after explicit owner authorization.
5. Run `npm run check:assets`, `npm run check:content`, lint, typecheck,
   build and Chromium browser checks.
6. Review the actual project page on the protected Vercel deployment.

See docs/CASE_STUDIES.md and docs/OWNER_HANDOFF.md for all requirements.

## What tests cover

CI runs `npm run test:intake` with temporary **test fixtures** (not real
client projects). The tests cover slug validation, no-overwrite behavior,
unapproved draft rejection, structured content completeness and invalid
image references. They do not certify that someone genuinely owns the
work or has granted publication permission.
