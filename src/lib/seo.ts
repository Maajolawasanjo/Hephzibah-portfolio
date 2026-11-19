import { getPublishedCaseStudies } from "@/content/projects";
import { getPublicContactEmail } from "@/lib/contact";

/**
 * Publication is an explicit, reviewed release decision. Neither a preview
 * hostname nor a single approved gallery card demonstrates launch readiness.
 */
export function getApprovedSiteUrl(): URL | null {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return null;

  try {
    const url = new URL(raw);
    if (
      url.protocol !== "https:" ||
      !url.hostname.includes(".") ||
      url.hostname === "localhost" ||
      url.hostname.endsWith(".vercel.app") ||
      url.username ||
      url.password ||
      url.port ||
      url.pathname !== "/" ||
      url.search ||
      url.hash
    ) {
      return null;
    }
    return url;
  } catch {
    return null;
  }
}

export type SeoPublicationState = {
  indexable: boolean;
  url: URL | null;
};

/**
 * Site-wide public indexing requires an approved FULL case study, owner
 * content sign-off, a confirmed public inbox, a verified HTTPS origin,
 * explicit launch authorization and documented manual QA sign-off.
 *
 * Flags alone cannot verify image ownership or DNS. Those must be reviewed
 * by people before these environment values are enabled.
 */
export function getSeoPublicationState(): SeoPublicationState {
  const url = getApprovedSiteUrl();
  const indexable = Boolean(
    url &&
      process.env.SITE_CONTENT_APPROVED === "true" &&
      process.env.RELEASE_QA_APPROVED === "true" &&
      process.env.SITE_LAUNCH_APPROVED === "true" &&
      process.env.VERCEL_ENV === "production" &&
      getPublishedCaseStudies().length > 0 &&
      getPublicContactEmail()
  );

  return { indexable, url: indexable ? url : null };
}
