import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  createProjectDraft,
  emptyProjectDraft,
  isValidSlug,
} from "../../scripts/intake-project.mjs";
import { checkProjectIntake, validateProjectDraft } from "../../scripts/validate-intake.mjs";

test("project slugs disallow path traversal and ambiguous names", () => {
  for (const slug of ["../secret", "Client Name", "UPPER", "-bad", "a", "bad--slug", "folder/name"]) {
    assert.equal(isValidSlug(slug), false, slug);
  }
  assert.equal(isValidSlug("actual-client-project"), true);
});

test("private intake starts unapproved and never overwrites another draft", async () => {
  const home = await mkdtemp(join(tmpdir(), "hephie-intake-"));
  try {
    const folder = await createProjectDraft("owner-verified-project", home);
    const draft = JSON.parse(await readFile(join(folder, "project.json"), "utf8"));
    assert.equal(draft.permission.ownerReviewed, false);
    assert.equal(draft.permission.artworkRightsVerified, false);
    assert.equal(draft.title, "");
    await assert.rejects(() => createProjectDraft("owner-verified-project", home));
    assert.equal(draft.slug, "owner-verified-project");
  } finally {
    await rm(home, { recursive: true, force: true });
  }
});

test("unapproved placeholders are not mistakenly validated as publishable", async () => {
  const draft = emptyProjectDraft("actual-project");
  const issues = await validateProjectDraft(draft, "/virtual/actual-project", {
    checkFiles: false,
  });
  assert.ok(issues.some((issue) => issue.includes("permission.caseStudyApproved")));
  assert.ok(issues.some((issue) => issue.includes("gallery")));
  assert.ok(issues.some((issue) => issue.includes("cover")));
});

test("complete factual draft with approvals and files passes checks", async () => {
  const home = await mkdtemp(join(tmpdir(), "hephie-intake-"));
  try {
    const folder = await createProjectDraft("real-project", home);
    const draft = emptyProjectDraft("real-project");
    draft.title = "Owner-confirmed title";
    draft.category = "Brand Identity";
    draft.summary = "Owner-confirmed description";
    draft.role = "Owner-confirmed role";
    draft.background = "Owner-confirmed brief";
    draft.challenge = "Owner-confirmed challenge";
    draft.approach = "Owner-confirmed approach";
    draft.solution = "Owner-confirmed solution";
    draft.deliverables = ["Owner-confirmed deliverable"];
    draft.cover = { filename: "cover.webp", alt: "Cover artwork", caption: "" };
    draft.gallery = [{ filename: "detail.webp", alt: "Detail artwork", caption: "" }];
    for (const key of Object.keys(draft.permission)) draft.permission[key] = true;
    await writeFile(join(folder, "artwork", "cover.webp"), "test fixture bytes");
    await writeFile(join(folder, "artwork", "detail.webp"), "test fixture bytes");
    await writeFile(join(folder, "project.json"), JSON.stringify(draft));
    const issues = await checkProjectIntake("real-project", home);
    assert.deepEqual(issues, []);
    // Test fixtures are in the OS temporary directory only, not the portfolio.
  } finally {
    await rm(home, { recursive: true, force: true });
  }
});

test("invalid and missing image references fail even with approval flags", async () => {
  const draft = emptyProjectDraft("real-project");
  draft.cover = { filename: "../secret.webp", alt: "Image" };
  draft.gallery = [{ filename: "fake.webp", alt: "" }];
  const issues = await validateProjectDraft(draft, "/virtual/real-project", {
    checkFiles: false,
  });
  assert.ok(issues.some((issue) => issue.includes("safe optimized image filename")));
  assert.ok(issues.some((issue) => issue.includes("meaningful image description")));
});
