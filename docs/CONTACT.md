# Phase 11 — Contact & Conversion

## What is implemented

A responsive, editorial contact section now sits at the end of the homepage.
All navigation, footer links and the Contact anchor `/#contact` are real.
The header uses the "Start a project" CTA only when an approved public
email destination is configured. Otherwise the header CTA remains
"Explore work", which already has an operational destination.

The section's hero introduces collaboration without promising response
times, fixed fees or project availability.

### Files

- `src/components/home/contact.tsx`: full editorial contact layout,
  direct email link and conditional inquiry form.
- `src/components/home/contact-form.tsx`: accessible client-side inquiry
  composer, which opens a draft in the visitor's own email application.
- `src/lib/contact.ts`: address syntax validation, approval gate and
  correctly URL-encoded `mailto` draft generator.
- `src/components/layout/site-shell.tsx`: passes whether contact is
  ready to the responsive site header.
- `src/components/layout/site-header.tsx`: conditional conversion CTA.
- `src/config/navigation.ts`: real Contact section anchor.
- `src/app/page.tsx`: adds Contact after all supporting sections.
- `.env.example`: blank configuration values. No personal address
  is committed to the public repository.

## Contact address and launch gate

A personal email address was previously supplied for Hephzibah, but it
was not specifically approved as the **public inquiry address**.
Publishing an address in this public GitHub repository cannot be treated
as a private placeholder. For that reason this phase deliberately does
not hard-code any personal email, phone, WhatsApp or social-profile URL.

To activate the functional contact flow **after approval**:

1. Obtain explicit confirmation from Hephzibah that the chosen address
   is the correct *public business/inquiry email*.
2. Set `NEXT_PUBLIC_CONTACT_EMAIL=approved-address@example.com` in
   the local/Vercel environment (not in Git).
3. Set `CONTACT_EMAIL_APPROVED=true` in the same environment.
4. Rebuild or redeploy the site so the approved address is present in
   the compiled client contact form and server-rendered content.
5. Verify the email opens via the direct link and the inquiry composer
   generates a correctly addressed draft.

If no approved address is configured, the Contact section displays
"public inquiry email is being finalized" and does not render a working
form or a misleading send button. The public email must be valid and
both environment values must be configured. There is no accidental
fallback to an unconfirmed address.

## The inquiry experience

The form collects name, sender email, service of interest and brief.
The service choices come from the four approved service names plus
"Not sure yet". Required HTML validation checks the inputs. On submit,
the form opens the user's mail client with a subject and a prepared body.
**No email is sent by the site** and no message is stored or logged by
the server. The sender must review and press Send from their email app.
The UI explicitly explains this behavior, including when the composer
does not open.

This `mailto` approach is intentionally chosen until an approved
backend or transactional email service is commissioned. It cannot verify
delivery and depends on the visitor having a configured mail handler.
The direct email link provides an alternative.

Do not describe this as a server-submitted contact form, and do not add
a fake success message or promise a response deadline.

## Editorial/technical constraints

- Modern Editorial Minimalism, Burgundy `#66001F`, Cream `#FEFCEF`.
- No invented testimonials, brand contacts, social icons, WhatsApp numbers
  or unverified claims.
- Semantic headings, clearly labeled form inputs and visible focus states.
- Works on mobile/desktop layouts, honors reduced-motion rules.
- No tracking, analytics event, database write or API endpoint is created.
- Alro licensed webfont integration remains pending.
- Public site indexing remains disabled until overall launch approval.

## Validation

- [x] Contact section and explicit publication gate authored.
- [x] Draft-only inquiry form and direct-email fallback implemented.
- [x] Header CTA, navigation and homepage updated.
- [x] No address or social identity invented/committed.
- [ ] Phase 11 GitHub Actions checks pass (lint, typecheck, build).
- [ ] Owner approves public inbox, then sets environment values.
- [ ] Real browser test verifies email-handler behavior and fallback.
- [ ] Real browser/mobile/zoom/keyboard/assistive technology QA.
- [ ] Full launch review and authorized public indexing.

Next is Phase 12 — Animation & Microinteractions, while respecting
reduced motion and the editorial design constraints.
