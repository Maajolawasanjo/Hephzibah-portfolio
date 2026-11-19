# Hephie Creatives — Portfolio

Professional portfolio for **Hephzibah Uzorndu**, founder of
**Hephie Creatives**, a Brand Identity Designer & Visual Storyteller
based in Lagos, Nigeria.

## Milestone — Phase 11: Contact & Conversion

The Next.js portfolio contains an editorial hero, approved-service overview,
About biography, design process, creative toolkit, mentorship, Selected Work
gallery framework, case-study templates and a new Contact section.

Additional projects and testimonials remain hidden until verified.
Contact email and contact-form activation are deliberately approval-gated.
The address supplied earlier has not been approved for PUBLIC publishing,
so no private email, WhatsApp number or social profile is committed.

### Activating the contact section

Confirm Hephzibah's preferred public inquiry address and configure:

    NEXT_PUBLIC_CONTACT_EMAIL=approved-address@example.com
    CONTACT_EMAIL_APPROVED=true

in the environment (not Git), then rebuild/redeploy. The form opens
a prefilled draft in the visitor's own mail app and **does not send**
or store an inquiry by itself. A direct email link is also provided.

See [Contact implementation and validation](docs/CONTACT.md).

## Brand

Modern Editorial Minimalism with expressive typography,
Burgundy #66001F and Cream #FEFCEF. Alro by Artyway is the approved
display font, pending licensed webfont files. DM Sans is the fallback.

## Technology

Next.js App Router, React, TypeScript, Tailwind CSS v4.
Node.js 22 recommended.

    npm install
    npm run dev
    npm run lint
    npm run typecheck
    npm run build

package-lock.json remains pending. Generate and commit it from a verified
npm-enabled environment, then change GitHub Actions to npm ci.

The site remains noindex until approved content and launch sign-off.

## Documentation

- docs/DESIGN_SYSTEM.md
- docs/COMPONENTS.md
- docs/NAVIGATION.md
- docs/HOMEPAGE_HERO.md
- docs/SELECTED_WORK.md
- docs/CASE_STUDIES.md
- docs/ABOUT.md
- docs/SERVICES.md
- docs/SUPPORTING_SECTIONS.md
- docs/CONTACT.md
- docs/IMPLEMENTATION.md
- docs/ANTIGRAVITY_HANDOFF.md
