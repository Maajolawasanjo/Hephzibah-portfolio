# Hephie Creatives — Portfolio V2 professional redesign

## Direction

Retain Burgundy `#66001F` and Cream `#FEFCEF`. The revised site is a
premium creative portfolio that also provides hiring-relevant professional
information, rather than an editorial landing page filled with decorative
typography and empty sections.

## Implemented in the first V2 pass

- Unified Satoshi typography sourced directly from
  `https://api.fontshare.com/v2/css`. Font files are **not** redistributed
  or committed. Review [Fontshare's Satoshi license](https://www.fontshare.com/fonts/satoshi).
- Smaller, more measured responsive display and heading scales with
  clearer text rhythm and tighter section spacing.
- A readable hero positioning Hephzibah as an identity designer and
  visual storyteller, including remote and in-person branding work.
- Smaller real-work waiting state; no fake portfolio cards or filler images.
- About section without a misleading dummy portrait or typography tile.
- Professional Experience, Skills and Education/Training sections.
- Verified named design software: PixelLab, Photoshop and Illustrator.
- Service, process, and mentorship composition refinements.
- Contact section with two paths (hire a designer / start a creative
  project) and an accessible **disabled** enquiry form until the owner
  approves an inbox. The current enabled mode only prepares a mailto
  message; it never sends an email automatically.

## Factual source and safeguards

Facts for the professional profile were provided during the visual audit:
Hephzibah has taken courses at TS Academy and Apex Academy, now studies at
NUTM, uses PixelLab, Adobe Photoshop and Adobe Illustrator, and has
delivered personal-branding design work for online and local clients.

Do not invent her degree title, work duration, named employer, job titles,
certification, client results, phone/email or portraits. Onsite study
programme and verified qualification detail remain open.

## Further requirements for a credible employer-facing portfolio

1. Genuine approved case-study images and factual project narratives.
2. Actual jobs, contracts, dates and responsibilities, after owner review.
3. NUTM programme and verified academy course/certificate titles.
4. A verified public email inbox and actual enquiry-delivery integration
   before claiming website messages can be sent.
5. Downloadable résumé only after the owner supplies or approves the real
   CV content. Do not manufacture a CV from unsupported assumptions.
6. Real Safari/iPhone, mobile, screen-reader, performance and font-load QA.

The current deployment must stay protected and noindex until approvals.


## Satoshi production-load correction

The initial V2 build's CSS bundle retained the `Satoshi` font-family stack,
but did **not** retain the external CSS import. Therefore, the font could
fall back to Arial despite a green build. The correction puts an explicit
Fontshare CSS stylesheet link in the root layout's HTML head and removes
the ineffective CSS import.

The release audit now inspects the actual root-layout font source, and
the browser test requires the Fontshare stylesheet link to exist. Real
network delivery and rendered glyph metrics should still be inspected
in a normal browser; no font binaries are committed or redistributed.
