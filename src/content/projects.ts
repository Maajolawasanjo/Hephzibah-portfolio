import type { MediaRatio } from "@/components/ui/media-frame";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  ratio?: MediaRatio;
};

export type ProjectCaseStudy = {
  /** Both the project AND its case study must be explicitly approved. */
  approved: boolean;
  role: string;
  background: string;
  challenge: string;
  approach: string;
  solution: string;
  deliverables: string[];
  /** Do not invent business results. Omit this entirely without evidence. */
  outcome?: string;
  /** Genuine visuals only, in the order the narrative should show them. */
  gallery: ProjectImage[];
};

export type SelectedProject = {
  slug: string;
  title: string;
  category:
    | "Brand Identity"
    | "Logo Design"
    | "Visual Identity"
    | "Creative Direction";
  summary: string;
  year?: number;
  cover: ProjectImage;
  ratio?: MediaRatio;
  order: number;
  approved: boolean;
  caseStudy?: ProjectCaseStudy;
};

export type PublishedCaseStudy = SelectedProject & {
  caseStudy: ProjectCaseStudy;
};

/**
 * Empty until Hephzibah supplies approved real artwork and project details.
 * See docs/CASE_STUDIES.md for requirements before publishing any entries.
 */
export const selectedProjects: readonly SelectedProject[] = [];

const validSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function validImage(image: ProjectImage): boolean {
  return (
    image.src.startsWith("/projects/") &&
    !image.src.includes("..") &&
    image.alt.trim().length > 0
  );
}

/** Return approved projects only, unique and editorially ordered. */
export function getSelectedProjects(): SelectedProject[] {
  const seen = new Set<string>();
  return selectedProjects
    .filter((project) => project.approved)
    .sort((a, b) => a.order - b.order)
    .filter((project) => {
      if (
        !validSlug.test(project.slug) ||
        !project.title.trim() ||
        !project.summary.trim() ||
        !validImage(project.cover) ||
        seen.has(project.slug)
      ) {
        return false;
      }
      seen.add(project.slug);
      return true;
    })
    .slice(0, 8);
}

/**
 * A public case study requires a published project, explicit case-study
 * approval, complete factual copy, deliverables and original images.
 */
function isPublishedCaseStudy(
  project: SelectedProject
): project is PublishedCaseStudy {
  const study = project.caseStudy;
  return Boolean(
    study?.approved &&
      study.role.trim() &&
      study.background.trim() &&
      study.challenge.trim() &&
      study.approach.trim() &&
      study.solution.trim() &&
      study.deliverables.length > 0 &&
      study.deliverables.every((item) => item.trim().length > 0) &&
      study.gallery.length > 0 &&
      study.gallery.every(validImage)
  );
}

/** Only these cases receive public static routes. */
export function getPublishedCaseStudies(): PublishedCaseStudy[] {
  return getSelectedProjects().filter(isPublishedCaseStudy);
}

export function getPublishedCaseStudy(
  slug: string
): PublishedCaseStudy | undefined {
  return getPublishedCaseStudies().find((project) => project.slug === slug);
}
