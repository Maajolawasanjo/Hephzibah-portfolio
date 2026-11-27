import { expect, test } from "@playwright/test";

const assets = [
  "brand-identity",
  "logo-design",
  "photography",
  "photoshop",
  "illustrator",
  "pixellab",
] as const;

test("all six supplied assets remain available as WebP resources", async ({ request }) => {
  for (const asset of assets) {
    const response = await request.get("/editorial/" + asset + ".webp");
    expect(response.status(), "asset " + asset).toBe(200);
    expect(response.headers()["content-type"]).toContain("image/webp");
  }
});

test("V5 labels illustrative hero artwork and does not publish unapproved portfolio work", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#home .hephie-hero-photo")).toHaveCount(2);
  await expect(page.locator("#home [data-editorial-asset]")).toHaveCount(0);
  await expect(page.locator("#home").getByRole("heading", { level: 1 })).toBeVisible();
  for (const asset of ["photoshop", "illustrator", "pixellab"]) {
    const item = page.locator("#toolkit [data-editorial-asset='" + asset + "']");
    await expect(item).toHaveCount(1);
    await expect(item.locator("img")).toHaveAttribute("alt", /\S+/);
  }
  const pendingPortfolio = page.locator("#selected-work").getByText("Portfolio archive / In preparation");
  if (await pendingPortfolio.count()) {
    await expect(page.locator("#selected-work [data-editorial-asset='branding']")).toHaveCount(1);
    await expect(
      page.locator("#selected-work").getByText(
        "Illustrative brand identity reference — not a Hephie Creatives client project."
      )
    ).toBeVisible();
  } else {
    await expect(page.locator("#selected-work [data-editorial-asset]")).toHaveCount(0);
  }
  await expect(page.locator('[data-editorial-asset="logo"]')).toHaveCount(0);
  await expect(page.locator('a[href^="/work/"]')).toHaveCount(0);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});

test("V5 preserves the core design and career sections without duplicate nested process blocks", async ({ page }) => {
  await page.goto("/");
  const ids = [
    "home",
    "selected-work",
    "about",
    "experience",
    "skills",
    "toolkit",
    "services",
    "education",
    "process",
    "mentorship",
    "contact",
  ];
  for (const id of ids) {
    await expect(page.locator("section#" + id)).toHaveCount(1);
  }
  await expect(page.getByRole("heading", { name: "My design process." })).toHaveCount(1);
  await expect(page.getByRole("heading", { name: "Sharing the craft." })).toHaveCount(1);
  await expect(page.locator("#about-principles")).toHaveCount(0);
});
