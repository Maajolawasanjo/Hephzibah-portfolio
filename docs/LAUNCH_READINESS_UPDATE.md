# Launch-readiness update — post Phase 15

## Automated improvements

- Dependency tree has a verified, committed npm lockfile.
- GitHub Actions installs with `npm ci`.
- The SEO publication gate requires at least one **complete, approved
  case study**, not simply an approved featured-project record.
- `RELEASE_QA_APPROVED=true` is also required for indexing, along with
  production Vercel environment, confirmed owner-controlled HTTPS domain,
  content approval, launch authorization and public contact approval.
- `npm run check:content` evaluates the actual project data and checks
  selected work, approved additional work and optional portrait local
  image references against the filesystem.
- The release preflight counts actual approved case studies instead of
  searching the text of the projects file for a nonempty array.

## Not completed by automation

- Client rights, accurate design narratives and original media.
- Alro font licensing and actual embedding.
- Owner-reviewed professional copy, social-preview artwork and public inbox.
- Verified DNS/HTTPS and Vercel protection for the custom domain.
- Manual browser and assistive-technology QA and performance measurements.
- Explicit content, QA and public-launch approval.

**Deployment state stays protected and search indexing stays disabled.**
See docs/OWNER_HANDOFF.md and docs/LAUNCH_AUDIT.md for ownership and
requirements. GitHub issues track the external dependencies without
publishing private contact details or fake assets.
