import type { MediaRatio } from "@/components/ui/media-frame";

/** Only add real projects approved for public display by Hephzibah. */
export type SelectedProject = {
  slug: string;
  title: string;
  category: "Brand Identity" | "Logo Design" | "Visual Identity" | "Creative Direction";
  summary: string;
  year?: number;
  cover: { src: string; alt: string };
  ratio?: MediaRatio;
  order: number;
  approved: boolean;
  /** Phase 07 will create the actual case-study routes. */
  href?: string;
};

/**
 * No approved case-study imagery or project briefs are in the repository yet.
 * Populate from confirmed real work, not mock projects or sample entries.
 */
export const selectedProjects: readonly SelectedProject[] = [];

export function getSelectedProjects(): SelectedProject[] {
  const seen = new Set<string>();
  return selectedProjects
    .filter((project) => project.approved)
    .sort((a, b) => a.order - b.order)
    .filter((project) => {
      if (
        !project.slug.trim() ||
        !project.title.trim() ||
        !project.summary.trim() ||
        !project.cover.alt.trim() ||
        !project.cover.src.startsWith("/projects/") ||
        seen.has(project.slug)
      ) {
        return false;
      }
      seen.add(project.slug);
      return true;
    })
    .slice(0, 8);
}
