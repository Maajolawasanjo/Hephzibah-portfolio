import { expect, test } from "@playwright/test";

const assets = [
  "brand-identity",
  "logo-design",
  "photography",
  "photoshop",
  "illustrator",
  "pixellab",
] as const;

test("every supplied illustration is in the built site and served as WebP", async ({ page, request }) => {
  await page.goto("/");
  for (const asset of assets) {
    const media = page.locator('[data-editorial-asset="' + (
      asset === "brand-identity" ? "branding" :
      asset === "logo-design" ? "logo" : asset
    ) + '"]');
    await expect(media.first()).toHaveCount(1);
    const image = media.first().locator("img");
    await expect(image).toHaveAttribute("alt", /\S+/);
    const response = await request.get("/editorial/" + asset + ".webp");
    expect(response.status(), "asset: " + asset).toBe(200);
    expect(response.headers()["content-type"]).toContain("image/webp");
  }
});

test("visuals appear in relevant sections without falsely publishing case studies", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#home [data-editorial-asset='branding']")).toHaveCount(1);
  await expect(page.locator("#selected-work [data-editorial-asset='branding']")).toHaveCount(1);
  await expect(page.locator("#selected-work [data-editorial-asset='logo']")).toHaveCount(1);
  await expect(page.locator("#toolkit [data-editorial-asset='photoshop']")).toHaveCount(1);
  await expect(page.locator("#toolkit [data-editorial-asset='illustrator']")).toHaveCount(1);
  await expect(page.locator("#toolkit [data-editorial-asset='pixellab']")).toHaveCount(1);
  await expect(page.locator("#photo-video [data-editorial-asset='photography']")).toHaveCount(1);

  await expect(page.getByText("These are illustrative visual references, not verified client portfolio projects.")).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(page.locator('a[href^="/work/"]')).toHaveCount(0);
});
