# Private owner review — no publication

The Hephie Creatives project-intake workflow includes a **local static HTML
review page**, intended to make it easier to examine real original work and
approve the wording before any public website edits.

## Generate

From a local repository checkout with Node.js 22:

```bash
npm ci
npm run intake:project -- real-project-slug
# Fill private-intake/real-project-slug/project.json and artwork/ first.
npm run intake:preview -- real-project-slug
```

Open `private-intake/real-project-slug/review.html` locally. It includes:
the owner's actual title and category, brief/summary, challenge, creative
approach and solution, designer role, deliverables, selected imagery,
permission flags and outstanding intake requirements.

## Safeguards

- The directory is gitignored. No uploads, API calls, or server runtime
  are part of this preview feature.
- Generated HTML escapes all user-supplied text and applies an inline
  Content Security Policy. It refuses unsafe image paths and does not
  load external imagery or fonts.
- Missing fields and missing artwork produce an explicit review state,
  not fabricated placeholder clients, logos or results.
- Every review is labeled **PRIVATE REVIEW — NOT APPROVED FOR PUBLICATION**.
- No review automatically updates the website's Selected Work, approved
  flags, case study routes or indexing state.
- Existing project.json and original artwork are never overwritten by
  preview regeneration. Only the derived review.html is regenerated.

The review is a convenience for the owner's editorial sign-off. It cannot
independently prove permission to display the client's work. Do not put
private drafts, review HTML, or nonpublic imagery into public GitHub
issues or Vercel deployments.

## Tests

`npm run test:intake` runs local-only test fixtures under operating-system
temporary directories. Tests verify HTML/attribute escaping, no external
network/image sources, correct pending content, prevention of unsafe paths,
and repeatable previews.

Even after this review is complete, adding real published projects still
requires a separate, intentionally reviewed source and media change and
the full CI, Vercel, accessibility and launch approval gates.
