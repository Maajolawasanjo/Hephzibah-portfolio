import { readFile, lstat } from "node:fs/promises";
import { join, resolve, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { categoryOptions, isValidSlug } from "./intake-project.mjs";

const imageName = /^[a-z0-9][a-z0-9._-]*\.(?:avif|webp|png|jpe?g)$/i;
const maxFileSize = 3 * 1024 * 1024;
const requiredTextFields = [
  "title", "summary", "role", "background",
  "challenge", "approach", "solution",
];
const requiredPermissions = [
  "ownerReviewed", "clientPortfolioPermission",
  "artworkRightsVerified", "caseStudyApproved",
];

export async function validateProjectDraft(
  draft,
  projectDirectory,
  { checkFiles = true } = {}
) {
  const issues = [];
  const add = (message) => issues.push(message);
  if (!draft || typeof draft !== "object" || Array.isArray(draft)) {
    return ["project.json must contain a JSON object"];
  }

  if (!isValidSlug(draft.slug) || basename(projectDirectory) !== draft.slug) {
    add("slug must match the draft folder and be lowercase hyphenated");
  }

  for (const key of requiredTextFields) {
    if (typeof draft[key] !== "string" || !draft[key].trim()) {
      add(key + " needs factual project details");
    }
  }

  if (!categoryOptions.includes(draft.category)) {
    add("category must be one of: " + categoryOptions.join(", "));
  }
  if (
    draft.year !== null &&
    draft.year !== undefined &&
    (!Number.isInteger(draft.year) || draft.year < 1900 || draft.year > new Date().getFullYear() + 1)
  ) {
    add("year must be a plausible numeric year or null");
  }

  if (!Array.isArray(draft.deliverables) ||
      draft.deliverables.length === 0 ||
      draft.deliverables.some((item) => typeof item !== "string" || !item.trim())) {
    add("deliverables requires at least one genuine nonempty item");
  }

  if (draft.outcome && typeof draft.outcome !== "string") {
    add("outcome must be optional text, never invented figures");
  }

  for (const key of requiredPermissions) {
    if (draft.permission?.[key] !== true) {
      add("permission." + key + " requires explicit owner confirmation");
    }
  }

  async function checkImage(image, label) {
    if (!image || typeof image !== "object") {
      add(label + " requires an image object");
      return;
    }
    const name = image.filename;
    if (
      typeof name !== "string" ||
      !imageName.test(name) ||
      name.includes("..") ||
      name.includes("/") ||
      name.includes("\\")
    ) {
      add(label + " requires a safe optimized image filename (not a path)");
      return;
    }
    if (typeof image.alt !== "string" || !image.alt.trim()) {
      add(label + " requires a meaningful image description");
    }
    if (!checkFiles) return;
    const imagePath = join(projectDirectory, "artwork", name);
    try {
      const stat = await lstat(imagePath);
      if (!stat.isFile() || stat.isSymbolicLink()) {
        add(label + " must be a regular image file");
      } else if (stat.size > maxFileSize) {
        add(label + " exceeds the 3 MiB maximum");
      } else if (stat.size === 0) {
        add(label + " is empty");
      }
    } catch {
      add(label + " referenced artwork is missing: " + name);
    }
  }

  await checkImage(draft.cover, "cover");

  if (!Array.isArray(draft.gallery) || draft.gallery.length === 0) {
    add("gallery requires at least one genuine approved artwork image");
  } else {
    const used = new Set();
    for (const [i, image] of draft.gallery.entries()) {
      await checkImage(image, "gallery item " + (i + 1));
      if (image && typeof image.filename === "string") {
        if (used.has(image.filename)) add("gallery repeats artwork filename: " + image.filename);
        used.add(image.filename);
      }
    }
  }

  return issues;
}

export async function checkProjectIntake(slug, baseDirectory = process.cwd()) {
  if (!isValidSlug(slug)) throw new Error("Invalid lowercase project slug.");
  const folder = resolve(baseDirectory, "private-intake", slug);
  const json = await readFile(join(folder, "project.json"), "utf8");
  const draft = JSON.parse(json);
  return validateProjectDraft(draft, folder);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const slug = process.argv[2];
  try {
    const issues = await checkProjectIntake(slug);
    if (issues.length) {
      console.error("Project intake requires review (" + issues.length + " items):");
      for (const issue of issues) console.error("- " + issue);
      process.exitCode = 1;
    } else {
      console.log("Project intake is complete for owner review: " + slug);
      console.log("Nothing was published. Integrate through a separate reviewed change.");
    }
  } catch (error) {
    console.error("Project intake check failed: " + error.message);
    process.exitCode = 1;
  }
}
