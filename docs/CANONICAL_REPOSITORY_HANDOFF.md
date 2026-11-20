# Canonical GitHub repository handoff — Hephie Creatives

**Status as of 2026-11-20:** transfer is BLOCKED by the GitHub app
installation scope, **not** by the portfolio code or collaborator rights.

## Repositories

- **Working, verified implementation:** `Maajolawasanjo/Hephzibah-portfolio`.
- **Designer-owned intended destination:** `okezibauzorndu-rgb/Hephzibah-Portfolio-`.
- The designer-owned repository exists but has **no Git commits** yet.
- The latest reviewed source commit at the time of this audit:
  `535e5c5c31b7420fe0853d33d8a88873afdd8735`.
- The source passed **57/57 Playwright cases** across Chromium, Firefox
  and WebKit, plus lint, typecheck, content and asset validation, and build.
- Its Vercel deployment was READY, access-protected, and noindex.

## Verified blocker

The connected GitHub actor is `Maajolawasanjo`, and the designer's
repository metadata reports collaborator `push: true`. Nevertheless,
an attempted initial `.editorconfig` commit using the GitHub connector
returned **HTTP 403 Resource not accessible by integration**.

Inspection of the GitHub app installations accessible to the connector
listed the `Maajolawasanjo` and `Abtechguru` account installations,
but **not** `okezibauzorndu-rgb`. The missing owner installation is the
likely cause. No write succeeded in the designer's empty repository.

Do not mistake collaborator `push: true` for a grant of GitHub App
installation access. Do not attempt to bypass these restrictions.

## Path A: install/authorize the GitHub app (preferred for direct ChatGPT edits)

1. The designer signs into GitHub as `okezibauzorndu-rgb`.
2. In GitHub account settings, review **Applications / Installed GitHub
   Apps** and install/authorize the same GitHub integration used by
   ChatGPT for the repository `Hephzibah-Portfolio-`.
3. Grant it **repository contents write** access as required. The owner
   controls these permissions; the collaborator cannot grant them for her.
4. Confirm the repository is visible to the connected integration and a
   minimal authorized write works.
5. Transfer the existing verified source to the empty destination.
6. Confirm the destination's source tree, `main` history, lockfile,
   workflows and tests before changing the Vercel Git connection.

**No source transfer has occurred.** Do not describe the destination as
populated or fully set up until it is verified.

## Path B: owner-authorized git push from a local machine

Because the destination is currently empty, a collaborator who has
normal Git push credentials for the owner repository can do:

```bash
git clone https://github.com/Maajolawasanjo/Hephzibah-portfolio.git
cd Hephzibah-portfolio
git remote add hephzibah https://github.com/okezibauzorndu-rgb/Hephzibah-Portfolio-.git
git push hephzibah main
```

This copies the full source history and latest `main` rather than
reconstructing the implementation as a new single commit. It requires
valid authorized Git credentials and an owner who accepts the transfer.
**Never force-push** if the destination acquires new commits; stop and
reconcile both histories first.

Do not transfer private `private-intake/` drafts; they are not tracked
and must remain confidential. Do not commit personal emails or unapproved
project artwork.

## Post-transfer checks

- `main` and source history exist in the designer-owned repository.
- Both repositories point to the same intended source commit at cutover.
- `package-lock.json`, CI workflow, source, tests and docs are present.
- GitHub Actions runs successfully with Node.js 22 and `npm ci`.
- Reconfigure Vercel Git integration **only after** verified transfer and
  adequate owner authorization; do not create a duplicate deployment.
- Vercel Authentication remains enabled, including domain-specific
  protection once an owner-controlled custom domain is introduced.
- The website stays `noindex` and release flags remain off until all
  genuine content, rights, contact, domain and launch approvals are complete.
- Treat the working fallback as a safe copy until cutover and validation;
  do not delete it or change DNS as part of a Git transfer.

## Release status

This handoff is **independent of public-launch readiness**. The
original project artwork, licensed Alro webfont, reviewed public contact
inbox, custom domain, manual real-device/accessibility and performance QA,
and explicit owner approval are all still required.

See [owner handoff](OWNER_HANDOFF.md),
[final launch audit](LAUNCH_AUDIT.md) and
[release readiness](LAUNCH_READINESS_UPDATE.md).
