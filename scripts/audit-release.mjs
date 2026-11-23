import { existsSync, readdirSync, readFileSync } from "node:fs";
import { loadTypeScriptContent } from "./lib/load-portfolio-content.mjs";
import { spawnSync } from "node:child_process";
import { join, resolve } from "node:path";

/**
 * Release-preflight checks for explicit owner-approved prerequisites.
 * The default mode reports blockers but lets staging CI run.
 * Use --strict as a deployment gate after all approvals are obtained.
 *
 * This is not a substitute for visual, accessibility or legal sign-off.
 */
const strict = process.argv.includes("--strict");
const cwd = process.cwd();
const problems = [];
const ready = [];
const skip = [];

function required(name, valid, detail) {
  if (valid) ready.push(name);
  else problems.push({ name, detail });
}

function hasFiles(root, extensions) {
  const folder = resolve(cwd, root);
  if (!existsSync(folder)) return false;
  const queue = [folder];
  while (queue.length) {
    const dir = queue.pop();
    for (const child of readdirSync(dir, { withFileTypes: true })) {
      const file = join(dir, child.name);
      if (child.isDirectory()) queue.push(file);
      else if (child.isFile() && extensions.some((ext) => file.toLowerCase().endsWith(ext))) {
        return true;
      }
    }
  }
  return false;
}

/**
 * npm install may create an UNTRACKED lockfile in CI. Only the committed
 * lockfile is reproducible across fresh checkouts and release environments.
 */
function hasCommittedLockfile() {
  const result = spawnSync(
    "git",
    ["ls-files", "--error-unmatch", "--", "package-lock.json"],
    { cwd, encoding: "utf8" }
  );
  return result.status === 0;
}

function validApprovedDomain() {
  if (!process.env.NEXT_PUBLIC_SITE_URL) return false;
  try {
    const u = new URL(process.env.NEXT_PUBLIC_SITE_URL);
    return (
      u.protocol === "https:" &&
      u.hostname.includes(".") &&
      !u.hostname.endsWith(".vercel.app") &&
      u.hostname !== "localhost" &&
      u.pathname === "/" &&
      !u.search &&
      !u.hash &&
      !u.port &&
      !u.username &&
      !u.password
    );
  } catch {
    return false;
  }
}

function validEmail() {
  const e = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";
  return (
    e.length >= 6 &&
    e.length <= 254 &&
    !/[\r\n]/.test(e) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
  );
}

const { getPublishedCaseStudies } = await loadTypeScriptContent("src/content/projects.ts");
required(
  "Actual complete, approved case studies",
  getPublishedCaseStudies().length > 0,
  "Publish at least one real project with an approved, complete case study and original imagery."
);
required(
  "Optimized original portfolio artwork",
  hasFiles("public/projects", [".webp", ".avif", ".jpg", ".jpeg", ".png"]),
  "Add permitted, optimized original covers and project galleries."
);
required(
  "Satoshi typography source configured",
  readFileSync(resolve(cwd, "src/app/layout.tsx"), "utf8").includes("api.fontshare.com/v2/css?f[]=satoshi@") &&
    readFileSync(resolve(cwd, "src/styles/tokens.css"), "utf8").includes('"Satoshi"'),
  "Use the official Fontshare Satoshi CSS source, verify actual loading on devices, and honor the ITF font license."
);
required(
  "Confirmed public contact",
  process.env.CONTACT_EMAIL_APPROVED === "true" && validEmail(),
  "Confirm the public inquiry address and configure it in Vercel environment settings."
);
required(
  "Verified custom production domain",
  validApprovedDomain(),
  "Provide an owner-controlled HTTPS custom domain. Vercel-generated URLs are not accepted."
);
required(
  "Content owner approval",
  process.env.SITE_CONTENT_APPROVED === "true",
  "Hephzibah must review and approve biography, services, project work and image rights."
);
required(
  "Explicit launch authorization",
  process.env.SITE_LAUNCH_APPROVED === "true",
  "Owner must explicitly authorize publication before enabling search indexing."
);
required(
  "Committed npm lockfile",
  hasCommittedLockfile(),
  "Generate, verify and COMMIT package-lock.json; move CI to npm ci."
);
required(
  "Manual release QA sign-off",
  process.env.RELEASE_QA_APPROVED === "true",
  "Sign off real-device, screen-reader, browser, contact and performance checks."
);

skip.push("Manual browser/Safari/Firefox/VoiceOver/NVDA and real-device QA");
skip.push("Real-deployment Core Web Vitals and image crop review");
skip.push("Social preview artwork, favicon and final brand review");
skip.push("Production DNS/TLS, contact mail handler and deployment protection checks");

console.log("Hephie Creatives — release preflight");
console.log("Mode: " + (strict ? "strict" : "informational"));
console.log("Verified by local inputs: " + ready.length);
ready.forEach((label) => console.log("PASS: " + label));
console.log("Unmet prerequisites: " + problems.length);
problems.forEach(({ name, detail }) => console.log("BLOCKED: " + name + " — " + detail));
console.log("Manual review still required: " + skip.length);
skip.forEach((item) => console.log("REVIEW: " + item));
if (strict && problems.length) {
  console.error("NOT READY: Manual sign-off and release prerequisites remain open.");
  process.exitCode = 1;
}
