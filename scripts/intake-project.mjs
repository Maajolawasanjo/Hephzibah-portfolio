import { mkdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const categoryOptions = [
  "Brand Identity",
  "Logo Design",
  "Visual Identity",
  "Creative Direction",
];

export function isValidSlug(slug) {
  return (
    typeof slug === "string" &&
    slug.length >= 2 &&
    slug.length <= 60 &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
  );
}

export function emptyProjectDraft(slug) {
  return {
    slug,
    title: "",
    category: "",
    summary: "",
    year: null,
    role: "",
    background: "",
    challenge: "",
    approach: "",
    solution: "",
    deliverables: [],
    outcome: "",
    cover: { filename: "", alt: "", caption: "" },
    gallery: [],
    permission: {
      ownerReviewed: false,
      clientPortfolioPermission: false,
      artworkRightsVerified: false,
      caseStudyApproved: false,
    },
  };
}

/**
 * Creates an untracked LOCAL draft. It never writes to src/content or
 * public/projects, and never turns on an approval/publishing flag.
 */
export async function createProjectDraft(slug, baseDirectory = process.cwd()) {
  if (!isValidSlug(slug)) {
    throw new Error("Use a unique lowercase hyphenated slug (2–60 characters).");
  }
  const root = resolve(baseDirectory, "private-intake");
  const projectDirectory = join(root, slug);
  await mkdir(root, { recursive: true });
  // Deliberately fail rather than overwrite an owner's existing draft.
  await mkdir(projectDirectory);
  await mkdir(join(projectDirectory, "artwork"));
  const draft = emptyProjectDraft(slug);
  await writeFile(
    join(projectDirectory, "project.json"),
    JSON.stringify(draft, null, 2) + "\n",
    { flag: "wx" }
  );
  await writeFile(
    join(projectDirectory, "README.txt"),
    [
      "HEPHIE CREATIVES — PRIVATE PROJECT INTAKE",
      "",
      "1. Fill project.json using only real, owner-verified project details.",
      "2. Put permitted original imagery in this folder's artwork directory.",
      "3. Set the cover and gallery filename/alt fields in project.json.",
      "4. Obtain explicit client/publication and artwork usage permissions.",
      "5. After owner review, update approval fields truthfully.",
      "6. Run: npm run intake:check -- " + slug,
      "7. Only after it passes, integrate through a separate reviewed PR.",
      "",
      "This directory is gitignored. Do not force-add it to public GitHub.",
      "Never publish client names, assets or permissions without authorization.",
      "",
    ].join("\n"),
    { flag: "wx" }
  );
  return projectDirectory;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const slug = process.argv[2];
  try {
    const folder = await createProjectDraft(slug);
    console.log("Private project intake created: " + folder);
    console.log("Fill project.json and artwork/ before running intake:check.");
  } catch (error) {
    console.error("Cannot create project intake: " + error.message);
    process.exitCode = 1;
  }
}
