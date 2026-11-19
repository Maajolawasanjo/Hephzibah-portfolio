import { lstat, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { isValidSlug } from "./intake-project.mjs";
import { validateProjectDraft } from "./validate-intake.mjs";

const safeFilename = /^[a-z0-9][a-z0-9._-]*\.(?:avif|webp|png|jpe?g)$/i;

export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

function textBlock(value, missing = "Not supplied for review") {
  const text = typeof value === "string" ? value.trim() : "";
  return text
    ? '<p class="body-copy">' + escapeHtml(text) + "</p>"
    : '<p class="missing">' + escapeHtml(missing) + "</p>";
}

function reviewSection(number, title, content) {
  return '<section class="story-section" aria-labelledby="section-' + number + '">' +
    '<div class="section-index">' + number + ' / ' + escapeHtml(title) + "</div>" +
    '<div class="section-body"><h2 id="section-' + number + '">' +
    escapeHtml(title) + "</h2>" + content + "</div></section>";
}

async function imageMarkup(image, folder, label) {
  const filename = image?.filename;
  if (
    typeof filename !== "string" ||
    !safeFilename.test(filename) ||
    filename.includes("..") ||
    typeof image.alt !== "string" ||
    !image.alt.trim()
  ) {
    return '<div class="image-missing" role="note">' +
      escapeHtml(label) + " — approved artwork or alt text missing</div>";
  }

  try {
    const stat = await lstat(join(folder, "artwork", filename));
    if (!stat.isFile() || stat.isSymbolicLink() || stat.size === 0) {
      throw new Error("invalid file");
    }
  } catch {
    return '<div class="image-missing" role="note">' +
      escapeHtml(label) + " — local artwork file missing</div>";
  }

  const src = "./artwork/" + encodeURIComponent(filename);
  const caption = typeof image.caption === "string" ? image.caption.trim() : "";
  return '<figure class="artwork"><img src="' + src + '" alt="' +
    escapeHtml(image.alt) + '" loading="lazy" decoding="async">' +
    (caption ? "<figcaption>" + escapeHtml(caption) + "</figcaption>" : "") +
    "</figure>";
}

export async function renderPrivatePreview(draft, folder, reviewIssues = []) {
  const title = typeof draft.title === "string" && draft.title.trim()
    ? draft.title.trim()
    : "Untitled project";
  const category = typeof draft.category === "string" && draft.category.trim()
    ? draft.category
    : "Category pending";
  const year = Number.isInteger(draft.year) ? String(draft.year) : "Year not supplied";
  const cover = await imageMarkup(draft.cover, folder, "Cover image");

  const gallery = [];
  if (Array.isArray(draft.gallery) && draft.gallery.length > 0) {
    for (const [index, image] of draft.gallery.entries()) {
      gallery.push(await imageMarkup(image, folder, "Gallery image " + (index + 1)));
    }
  } else {
    gallery.push('<p class="missing">No approved gallery images supplied yet.</p>');
  }

  const deliverables = Array.isArray(draft.deliverables)
    ? draft.deliverables.filter((item) => typeof item === "string" && item.trim())
    : [];
  const list = deliverables.length
    ? '<ul class="deliverables">' +
      deliverables.map((item) => "<li>" + escapeHtml(item) + "</li>").join("") +
      "</ul>"
    : '<p class="missing">Confirmed deliverables not supplied.</p>';

  const permissionNames = [
    ["ownerReviewed", "Owner copy and images reviewed"],
    ["clientPortfolioPermission", "Client portfolio display permission"],
    ["artworkRightsVerified", "Artwork display rights confirmed"],
    ["caseStudyApproved", "Complete case study approved"],
  ];
  const permissions = permissionNames.map(([key, label]) => {
    const granted = draft.permission?.[key] === true;
    return '<li><span class="flag ' + (granted ? "yes" : "no") +
      '">' + (granted ? "Marked yes" : "Pending") + "</span>" +
      escapeHtml(label) + "</li>";
  }).join("");

  const issues = reviewIssues.length
    ? "<ul>" + reviewIssues.map((issue) => "<li>" + escapeHtml(issue) + "</li>").join("") + "</ul>"
    : "<p>Fields and files passed automated intake checks. Independent verification of rights and accuracy is still required.</p>";

  const css = [
    ":root{color-scheme:light;--wine:#66001f;--cream:#fefcef;--rule:#66001f33}",
    "*{box-sizing:border-box}html{font-family:Arial,Helvetica,sans-serif;line-height:1.6;background:var(--cream);color:var(--wine)}",
    "body{margin:0}main{max-width:1240px;margin:auto;padding:clamp(20px,5vw,72px)}",
    ".warning{background:var(--wine);color:var(--cream);padding:18px clamp(20px,5vw,72px);font-weight:700;letter-spacing:.05em}",
    ".warning small{display:block;font-weight:400;letter-spacing:0;margin-top:4px}",
    ".eyebrow,.section-index{font-size:12px;text-transform:uppercase;letter-spacing:.18em;font-weight:700}",
    ".hero{padding:64px 0 60px;border-bottom:1px solid var(--rule)}",
    "h1{font-size:clamp(3rem,8vw,7rem);font-weight:750;line-height:1.02;letter-spacing:-.07em;overflow-wrap:anywhere;margin:18px 0 30px}",
    ".meta{display:flex;flex-wrap:wrap;gap:12px;font-size:14px;opacity:.9}",
    ".meta span{border:1px solid var(--rule);padding:7px 12px}",
    ".summary{font-size:clamp(18px,2vw,24px);max-width:70ch;margin-top:28px;white-space:pre-wrap}",
    ".cover{margin:45px 0 65px}.artwork{margin:0}.artwork img{display:block;width:100%;height:auto;max-height:740px;object-fit:contain;background:#eee9e8;border:1px solid var(--rule)}",
    ".artwork figcaption{padding:10px 0;font-size:14px}.image-missing{min-height:260px;display:grid;place-items:center;text-align:center;padding:30px;background:#66001f0f;border:1px dashed var(--wine)}",
    ".story-section{display:grid;grid-template-columns:minmax(150px,1fr) minmax(0,2fr);gap:45px;border-top:1px solid var(--rule);padding:36px 0 55px}",
    ".section-body{min-width:0}h2{font-size:clamp(28px,4vw,48px);line-height:1.12;letter-spacing:-.04em;margin:0 0 22px}",
    ".body-copy{max-width:70ch;white-space:pre-wrap;overflow-wrap:anywhere}",
    ".missing{opacity:.68;font-style:italic}.deliverables{padding-left:22px}.deliverables li{padding:6px 0}",
    ".gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:24px}",
    ".review{background:var(--wine);color:var(--cream);padding:clamp(25px,4vw,55px);margin:55px 0 0}",
    ".review h2{margin:0 0 15px}.review ul{padding-left:20px}.review li{margin:9px 0}",
    ".permission-list{list-style:none;padding:0!important}.permission-list li{display:flex;flex-wrap:wrap;gap:18px;align-items:center;border-top:1px solid #ffffff55;padding-top:14px}",
    ".flag{display:inline-block;padding:2px 9px;border:1px solid currentColor;font-size:12px;min-width:94px;text-align:center}",
    ".yes{color:#e8fddc}.no{color:#ffe6aa}.fine-print{font-size:12px;opacity:.85;margin-top:25px}",
    "@media(max-width:680px){.story-section{display:block}.section-index{margin-bottom:24px}.hero{padding-top:40px}h1{letter-spacing:-.05em}}",
    "@media print{.warning,.review{-webkit-print-color-adjust:exact;print-color-adjust:exact}body{background:white}main{padding:24px}}",
  ].join("\n");

  return [
    "<!doctype html>",
    '<html lang="en"><head><meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width,initial-scale=1">',
    '<meta name="robots" content="noindex,nofollow,noarchive">',
    '<meta name="referrer" content="no-referrer">',
    '<meta http-equiv="Content-Security-Policy" content="default-src &#39;none&#39;; img-src &#39;self&#39; data:; style-src &#39;unsafe-inline&#39;; base-uri &#39;none&#39;; form-action &#39;none&#39;">',
    "<title>PRIVATE REVIEW | " + escapeHtml(title) + " — Hephie Creatives</title>",
    "<style>" + css + "</style></head><body>",
    '<header class="warning">PRIVATE REVIEW — NOT APPROVED FOR PUBLICATION',
    "<small>Local-only draft · Do not upload, share publicly or treat approval flags as proof of rights.</small></header>",
    "<main>",
    '<section class="hero" aria-labelledby="project-title">',
    '<div class="eyebrow">Hephie Creatives / Project review</div>',
    '<h1 id="project-title">' + escapeHtml(title) + "</h1>",
    '<div class="meta"><span>' + escapeHtml(category) + "</span><span>" + year +
      "</span><span>" + escapeHtml(draft.slug) + "</span></div>",
    '<div class="summary">' + textBlock(draft.summary) + "</div></section>",
    '<div class="cover">' + cover + "</div>",
    reviewSection("01", "Background", textBlock(draft.background)),
    reviewSection("02", "The challenge", textBlock(draft.challenge)),
    reviewSection("03", "Creative approach", textBlock(draft.approach)),
    reviewSection("04", "Design solution", textBlock(draft.solution)),
    reviewSection("05", "Design role", textBlock(draft.role)),
    reviewSection("06", "Approved visual work", '<div class="gallery">' + gallery.join("") + "</div>"),
    reviewSection("07", "Deliverables", list),
    draft.outcome ? reviewSection("08", "Documented outcome", textBlock(draft.outcome)) : "",
    '<section class="review" aria-labelledby="review-heading">',
    '<div class="eyebrow">Owner and client approvals</div>',
    '<h2 id="review-heading">Review before any publication.</h2>',
    '<ul class="permission-list">' + permissions + "</ul>",
    '<h3>Automated intake findings (' + reviewIssues.length + ")</h3>",
    issues,
    '<p class="fine-print">This preview is generated from local draft data. No assets, claims or approvals have been verified independently. Only a separate, authorized review may publish a real project.</p>',
    "</section></main></body></html>",
  ].join("\n");
}

/**
 * Generate a static private HTML review file without touching public assets
 * or app content. It works for incomplete drafts to make review easier.
 */
export async function previewProjectDraft(slug, baseDirectory = process.cwd()) {
  if (!isValidSlug(slug)) throw new Error("Invalid lowercase project slug.");
  const folder = resolve(baseDirectory, "private-intake", slug);
  const source = JSON.parse(await readFile(join(folder, "project.json"), "utf8"));
  if (!source || typeof source !== "object" || Array.isArray(source)) {
    throw new Error("project.json must contain a project object.");
  }
  const issues = await validateProjectDraft(source, folder);
  const markup = await renderPrivatePreview(source, folder, issues);
  const destination = join(folder, "review.html");
  await writeFile(destination, markup, { mode: 0o600 });
  return { destination, issues };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const { destination, issues } = await previewProjectDraft(process.argv[2]);
    console.log("PRIVATE review preview created: " + destination);
    console.log("Outstanding intake requirements: " + issues.length);
    console.log("Open review.html locally; it is NOT a published webpage.");
  } catch (error) {
    console.error("Cannot generate preview: " + error.message);
    process.exitCode = 1;
  }
}
