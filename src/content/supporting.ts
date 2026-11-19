/**
 * Phase 10: editorial process, creative disciplines and mentorship.
 * These describe an approach, not a guaranteed fixed commercial workflow.
 */
export const processSteps = [
  {
    number: "01",
    title: "Discover",
    summary:
      "Begin with the business, its story, its audience and the direction it wants to take.",
  },
  {
    number: "02",
    title: "Define",
    summary:
      "Translate those conversations into a clear creative direction and shared visual focus.",
  },
  {
    number: "03",
    title: "Design",
    summary:
      "Explore and refine deliberate visual choices that bring the identity together.",
  },
  {
    number: "04",
    title: "Refine & deliver",
    summary:
      "Review the details and prepare the work for consistent use across its intended touchpoints.",
  },
] as const;

export const toolkitDisciplines = [
  {
    number: "01",
    name: "Identity & layout",
    detail: "Visual systems, typography, logos and considered compositions.",
  },
  {
    number: "02",
    name: "Image-making",
    detail: "Photography and original imagery that support the brand narrative.",
  },
  {
    number: "03",
    name: "Visual content",
    detail: "Social creative, moving images and content adapted to its audience.",
  },
] as const;

export type ApprovedTool = {
  name: string;
  category: string;
  approved: boolean;
};

/** Only publish named software after Hephzibah confirms actual proficiency. */
export const namedTools: readonly ApprovedTool[] = [];

export function getApprovedTools(): ApprovedTool[] {
  const seen = new Set<string>();
  return namedTools.filter((tool) => {
    const key = tool.name.trim().toLowerCase();
    if (!tool.approved || !key || !tool.category.trim() || seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

export const mentorshipContent = {
  eyebrow: "07 / Teaching & mentorship",
  heading: "Sharing the craft.",
  statement:
    "Beyond client projects, I share what I’ve learned about design with aspiring creatives through one-on-one teaching.",
  detail:
    "Good design grows through curiosity, practice and asking better questions. My aim is to help emerging designers think purposefully about the work they create.",
} as const;
