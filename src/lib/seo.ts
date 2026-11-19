import { getSelectedProjects } from "@/content/projects";
import { getPublicContactEmail } from "@/lib/contact";

/**
 * Publication is a deliberate, multi-step decision, not an inference
 * from the Vercel-generated preview hostname or the GitHub repository.
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
 * Requires owner-reviewed site content, explicit launch authorization,
 * a production HTTPS domain, at least one approved real project and an
 * explicitly authorized public contact address.
 *
 * The public portfolio collection is empty today, so preview deployments
 * remain noindex even if somebody sets other variables prematurely.
 */
export function getSeoPublicationState(): SeoPublicationState {
  const url = getApprovedSiteUrl();
  const indexable = Boolean(
    url &&
      process.env.SITE_CONTENT_APPROVED === "true" &&
      process.env.SITE_LAUNCH_APPROVED === "true" &&
      process.env.VERCEL_ENV !== "preview" &&
      getSelectedProjects().length > 0 &&
      getPublicContactEmail()
  );

  return { indexable, url: indexable ? url : null };
}
