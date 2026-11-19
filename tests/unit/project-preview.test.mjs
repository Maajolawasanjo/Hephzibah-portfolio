import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createProjectDraft, emptyProjectDraft } from "../../scripts/intake-project.mjs";
import { escapeHtml, previewProjectDraft } from "../../scripts/preview-intake.mjs";

test("preview escapes user-supplied markup and attributes", async () => {
  const root = await mkdtemp(join(tmpdir(), "hephie-private-"));
  try {
    const folder = await createProjectDraft("example-project", root);
    const draft = emptyProjectDraft("example-project");
    draft.title = '<script>alert("xss")</script>';
    draft.summary = "<b>Not approved & under review</b>";
    draft.cover = { filename: "cover.webp", alt: 'Artwork" onload="alert(1)', caption: "<em>Private</em>" };
    await writeFile(join(folder, "artwork", "cover.webp"), "placeholder test data");
    await writeFile(join(folder, "project.json"), JSON.stringify(draft));

    const { destination, issues } = await previewProjectDraft("example-project", root);
    const html = await readFile(destination, "utf8");
    assert.ok(issues.length > 0);
    assert.match(html, /PRIVATE REVIEW — NOT APPROVED FOR PUBLICATION/);
    assert.match(html, /&lt;script&gt;alert\(&quot;xss&quot;\)&lt;\/script&gt;/);
    assert.doesNotMatch(html, /<script>/);
    assert.match(html, /&lt;b&gt;Not approved &amp; under review&lt;\/b&gt;/);
    assert.doesNotMatch(html, /<b>Not approved/);
    assert.match(html, /alt="Artwork&quot; onload=&quot;alert\(1\)"/);
    assert.match(html, /&lt;em&gt;Private&lt;\/em&gt;/);
    assert.match(html, /default-src &#39;none&#39;/);
    assert.match(html, /noindex,nofollow,noarchive/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("incomplete private drafts display review blockers, not pretend approvals", async () => {
  const root = await mkdtemp(join(tmpdir(), "hephie-private-"));
  try {
    await createProjectDraft("first-project", root);
    const { destination, issues } = await previewProjectDraft("first-project", root);
    const markup = await readFile(destination, "utf8");
    assert.ok(destination.endsWith("private-intake/first-project/review.html"));
    assert.ok(issues.some((issue) => issue.includes("permission.ownerReviewed")));
    assert.ok(markup.includes("Pending"));
    assert.ok(markup.includes("No approved gallery images supplied yet."));
    assert.ok(markup.includes("Not supplied for review"));
    assert.doesNotMatch(markup, /<img src=/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("local artwork and owner's draft render without any external network reference", async () => {
  const root = await mkdtemp(join(tmpdir(), "hephie-private-"));
  try {
    const folder = await createProjectDraft("real-design-work", root);
    const draft = emptyProjectDraft("real-design-work");
    draft.title = "Genuine project";
    draft.category = "Brand Identity";
    draft.year = 2026;
    draft.summary = "Verified project summary.";
    draft.cover = { filename: "cover.webp", alt: "Original brand art", caption: "Cover image" };
    draft.gallery = [{ filename: "details.avif", alt: "Detail photograph", caption: "Creative detail" }];
    await writeFile(join(folder, "artwork", "cover.webp"), "fixture cover bytes");
    await writeFile(join(folder, "artwork", "details.avif"), "fixture image bytes");
    await writeFile(join(folder, "project.json"), JSON.stringify(draft));
    const first = await previewProjectDraft("real-design-work", root);
    const html = await readFile(first.destination, "utf8");
    assert.match(html, /src="\.\/artwork\/cover.webp"/);
    assert.match(html, /src="\.\/artwork\/details.avif"/);
    assert.match(html, /Original brand art/);
    assert.match(html, /Creative detail/);
    assert.doesNotMatch(html, /<script|https?:\/\//);
    const unchanged = JSON.parse(await readFile(join(folder, "project.json"), "utf8"));
    assert.deepEqual(unchanged, draft);
    draft.title = "Updated review";
    await writeFile(join(folder, "project.json"), JSON.stringify(draft));
    const second = await previewProjectDraft("real-design-work", root);
    assert.equal(second.destination, first.destination);
    assert.match(await readFile(second.destination, "utf8"), /Updated review/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("unsafe filenames never produce image sources in the preview", async () => {
  const root = await mkdtemp(join(tmpdir(), "hephie-private-"));
  try {
    const folder = await createProjectDraft("unsafe-artwork", root);
    const draft = emptyProjectDraft("unsafe-artwork");
    draft.cover = { filename: "../outside.png", alt: "Invisible" };
    draft.gallery = [{ filename: 'photo" onerror="alert(1).png', alt: "Unsafe" }];
    await writeFile(join(folder, "project.json"), JSON.stringify(draft));
    const { destination } = await previewProjectDraft("unsafe-artwork", root);
    const html = await readFile(destination, "utf8");
    assert.doesNotMatch(html, /<img src=/);
    assert.match(html, /approved artwork or alt text missing/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("html escape utility also protects attributes", () => {
  assert.equal(escapeHtml("a&b'<>\""), "a&amp;b&#39;&lt;&gt;&quot;");
});
