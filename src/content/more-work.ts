import type { MediaRatio } from "@/components/ui/media-frame";

export type AdditionalProject = {
  slug: string;
  title: string;
  category: string;
  image: { src: string; alt: string };
  ratio?: MediaRatio;
  approved: boolean;
  /** Link only if a real, published project destination exists. */
  href?: string;
};

/**
 * Supplemental real projects that have not been featured in Selected Work.
 * Empty until approved additional work and imagery are available.
 */
export const additionalProjects: readonly AdditionalProject[] = [];

export function getApprovedAdditionalProjects(): AdditionalProject[] {
  const seen = new Set<string>();
  return additionalProjects.filter((project) => {
    const slug = project.slug.trim();
    if (
      !project.approved ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) ||
      !project.title.trim() ||
      !project.category.trim() ||
      !project.image.src.startsWith("/projects/") ||
      project.image.src.includes("..") ||
      !project.image.alt.trim() ||
      seen.has(slug)
    ) return false;
    seen.add(slug);
    return true;
  }).slice(0, 4);
}
