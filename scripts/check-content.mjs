import { existsSync, lstatSync, realpathSync } from "node:fs";
import { isAbsolute, relative, resolve } from "node:path";
import { loadTypeScriptContent } from "./lib/load-portfolio-content.mjs";

/**
 * Verify that every APPROVED portfolio image referenced in a source file
 * actually exists on disk; unapproved drafts are deliberately not published.
 */
const portfolio = await loadTypeScriptContent("src/content/projects.ts");
const moreWork = await loadTypeScriptContent("src/content/more-work.ts");
const about = await loadTypeScriptContent("src/content/about.ts");

const errors = [];
const approved = portfolio.getSelectedProjects();
const published = portfolio.getPublishedCaseStudies();
const additional = moreWork.getApprovedAdditionalProjects();
const root = realpathSync(resolve("public"));
const supported = /^\/(projects|about)\/[a-z0-9][a-z0-9/_-]*\.(?:avif|webp|png|jpe?g)$/i;

function checkImage(label, image, directory) {
  const src = image?.src;
  if (
    typeof src !== "string" ||
    !supported.test(src) ||
    !src.startsWith("/" + directory + "/") ||
    !image.alt?.trim() ||
    src.includes("..")
  ) {
    errors.push(label + ": requires a local, optimized, approved image and alt text");
    return;
  }

  const path = resolve("public", src.slice(1));
  const pathRelativeToRoot = relative(root, path);
  if (
    pathRelativeToRoot.startsWith("..") ||
    isAbsolute(pathRelativeToRoot) ||
    !existsSync(path)
  ) {
    errors.push(label + ": referenced image is missing: " + src);
    return;
  }

  const stat = lstatSync(path);
  if (!stat.isFile() || stat.isSymbolicLink()) {
    errors.push(label + ": image reference must be a regular file: " + src);
    return;
  }

  const physical = realpathSync(path);
  const actualRelative = relative(root, physical);
  if (actualRelative.startsWith("..") || isAbsolute(actualRelative)) {
    errors.push(label + ": image resolves outside public directory: " + src);
  }
}

const rawApproved = portfolio.selectedProjects.filter((entry) => entry.approved);
if (rawApproved.length !== approved.length) {
  errors.push("At least one approved featured project has invalid fields, a repeated slug or exceeds the eight-project limit");
}

const publishedSlugs = new Set(published.map((project) => project.slug));
for (const project of approved) {
  const context = "Project " + project.slug;
  checkImage(context + " cover", project.cover, "projects");
  if (project.caseStudy?.approved && !publishedSlugs.has(project.slug)) {
    errors.push(context + ": case study approval requires complete factual narrative and gallery");
  }
  if (project.caseStudy?.approved) {
    for (const [index, image] of project.caseStudy.gallery.entries()) {
      checkImage(context + " gallery " + (index + 1), image, "projects");
    }
  }
}

const rawAdditional = moreWork.additionalProjects.filter((entry) => entry.approved);
if (rawAdditional.length !== additional.length) {
  errors.push("At least one approved additional project has invalid content or a duplicate slug");
}
for (const project of additional) {
  checkImage("Additional project " + project.slug, project.image, "projects");
}

if (about.aboutContent.portrait) {
  checkImage("About portrait", about.aboutContent.portrait, "about");
}

if (errors.length) {
  console.error("Portfolio content validation failed:");
  for (const error of errors) console.error("- " + error);
  process.exitCode = 1;
} else {
  console.log(
    "Portfolio references valid: " +
      approved.length + " featured, " +
      published.length + " published case studies, " +
      additional.length + " additional projects."
  );
}
