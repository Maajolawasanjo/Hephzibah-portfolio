# Antigravity Handoff — Phase 15

Source: https://github.com/Maajolawasanjo/Hephzibah-portfolio

**Audit state:** Vercel production-target deployment READY and protected;
not approved for public launch. See docs/LAUNCH_AUDIT.md.

The current Vercel project is hephzibah-portfolio, linked to main.
Vercel Node version was aligned to 22.x. Do not create a second duplicate
project or turn off Vercel Authentication to simplify testing.

## Release guardrails

- Do not enable SITE_CONTENT_APPROVED, SITE_LAUNCH_APPROVED or
  RELEASE_QA_APPROVED without real owner sign-off.
- Do not set CONTACT_EMAIL_APPROVED or NEXT_PUBLIC_CONTACT_EMAIL until
  the owner confirms the PUBLIC business inbox.
- Only use an owner-controlled verified custom HTTPS domain.
- Beware: current Vercel Authentication is all_except_custom_domains;
  attaching a custom domain may expose it. Review protection before connecting.
- No fake brands, project images, reviews, results, email or social links.
- Alro by Artyway requires licensed website-embedding font files.
- Brand remains Burgundy #66001F and Cream #FEFCEF, editorial minimalism.
- No automatic OS dark mode changes.

## Commands

    npm ci
    npm run lint
    npm run typecheck
    npm run check:assets
    npm run audit:release
    npm run build
    npx playwright install chromium
    npm run test:browser

For the final release sign-off:

    npm run audit:release -- --strict

The verified package-lock.json is now committed and npm ci is required
in GitHub Actions. Keep package.json and the lockfile synchronized.

## Outstanding

Original project covers/case studies, rights and owner reviews, Alro,
public email, custom domain, full manual device/accessibility testing,
performance measurements, approved brand/social assets and launch authorization.

Phase 15 is a controlled readiness gate: a successful build or a Vercel
READY deployment is not synonymous with an approved public launch.
