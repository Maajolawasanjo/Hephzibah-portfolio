# Hephie Creatives — Owner approval and asset handoff

**Current status: protected preview only; public launch NOT authorized.**

This checklist separates the materials that Hephzibah Uzorndu must provide
or approve from the engineering tasks that can be completed independently.
No unapproved personal contact information or client artwork belongs in
public GitHub issues.

## Real portfolio work

For each of 6–8 candidate selected projects (no need to invent filler):

- Confirm real project name, category, date if accurate and designer's role.
- Provide the original design assets or optimized exports, along with
  descriptive alt text and any permitted behind-the-scenes process images.
- Explain the actual brief, problem, creative approach, solution and specific
  deliverables. Add impact/results only if supported by evidence.
- Obtain client/public-use permission, including third-party imagery/logos.
- Sign off the final wording and images before toggling project and
  caseStudy `approved` flags in `src/content/projects.ts`.
- Ensure every referenced local image exists under
  `public/projects/<real-slug>/` and passes `npm run check:content`.

A completed case study is a condition for indexing. A styled placeholder
or an approved gallery cover alone does not qualify.

## Brand and biography

- Confirm first-person biography, professional title and working philosophy.
- Review the proposed Services descriptions, process and mentorship copy.
- Provide Alro by Artyway legally licensed **webfont** files with embedding
  rights, or explicitly approve an alternative. No font file is to be
  distributed or attached publicly without appropriate permission.
- Confirm any optional professional portrait, favicon, official brand marks,
  and branded Open Graph social image for production.

## Contact and domain

- Identify an email inbox intended for PUBLIC portfolio inquiries.
  Do not share a personal email in a public GitHub issue.
- Confirm direct-mailto drafting as the contact interaction, or authorize
  implementation of a real sending service before claiming form delivery.
- Select and verify an owner-controlled HTTPS domain.
- Review Vercel Authentication for the exact custom domain: the current
  configuration excludes custom domains, which may make one accessible
  without the existing protection.

## Verification and sign-off

- Review actual mobile, tablet and desktop rendering with real artwork
  and licensed typography, at zoom and with keyboard navigation.
- Complete Safari/Firefox and NVDA/VoiceOver/real-device audits.
- Measure deployed Core Web Vitals (LCP, INP, CLS) and image crop behavior.
- Inspect social sharing artwork and brand metadata.
- Record content approval and explicit launch permission separately.
- Only after evidence of QA is recorded may `RELEASE_QA_APPROVED=true`
  be set in the deployment environment.
- Keep `SITE_CONTENT_APPROVED` and `SITE_LAUNCH_APPROVED` false until
  those corresponding approvals are specifically granted.

## Release engineer checklist

```bash
npm ci
npm run lint
npm run typecheck
npm run check:assets
npm run check:content
npm run audit:release
npm run build
npm run test:browser
```

`npm run audit:release -- --strict` is the final blocker gate after
owner sign-off. A passing script does not itself certify design or
accessibility, and an automated green build does not authorize publication.

The fully staged implementation, approved assets, manual QA and public
domain must be reviewed on a protected release candidate before unprotecting
the site or allowing search indexing.


## Guided local project submission

The engineer can create a **gitignored** intake directory by running
`npm run intake:project -- actual-project-slug`. Hephzibah can fill the
`project.json` fields and provide actual client-approved artwork in
`private-intake/actual-project-slug/artwork/`, without placing unapproved
material in the public site. Use `npm run intake:check -- actual-project-slug`
to identify missing descriptions, image files and permission sign-offs.

**Important:** Gitignore reduces accidental Git commits but is not encryption.
Use a genuinely access-controlled channel when exchanging private client
assets. The intake does not publish anything automatically.

See docs/PROJECT_INTAKE.md.


## Private visual review

After a real draft has been entered in `private-intake/`, run
`npm run intake:preview -- actual-project-slug`. This generates a
local `review.html` with the genuine supplied copy, existing artwork,
the current permission flags and an automated list of missing details.
Open it locally with Hephzibah, verify the story and imagery, and record
the necessary approvals securely. It is **not a public case study**
or evidence of publication rights merely because the preview renders.
See docs/PROJECT_INTAKE.md.


## V2: verified professional background and additions needed

The owner/user reports that Hephzibah works with PixelLab, Adobe Photoshop
and Adobe Illustrator; previously took courses at TS Academy and Apex Academy;
is currently studying at NUTM; and has delivered remote and face-to-face
personal-branding work for clients. These facts now inform the professional
profile. Before adding more detailed CV-style claims, please confirm her
actual employer/role names, work periods, job scope, degree programme,
course names, certificate titles and dates, along with permitted client
case-study images. None of these currently unverified details should be guessed.
