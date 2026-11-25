import { expect, test } from "@playwright/test";

test("selected work is present without publishing illustrative work as a client case study", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("#selected-work");

  await expect(section.getByRole("heading", { name: "Selected work." })).toBeVisible();

  const unpublishedState = section.getByText("Portfolio archive / In preparation");
  if (await unpublishedState.count()) {
    await expect(unpublishedState).toBeVisible();
    await expect(
      section.getByText(
        "Illustrative brand identity reference — not a Hephie Creatives client project."
      )
    ).toBeVisible();
    await expect(section.locator('a[href^="/work/"]')).toHaveCount(0);
    await expect(
      section.getByRole("link", { name: /Explore my experience/i })
    ).toHaveAttribute("href", "/#experience");
    await expect(
      section.getByRole("link", { name: /My design process/i })
    ).toHaveAttribute("href", "/#process");
  } else {
    const publishedCaseLinks = section.locator('a[href^="/work/"]');
    for (const link of await publishedCaseLinks.all()) {
      const href = await link.getAttribute("href");
      expect(href).toMatch(/^\/work\/[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
    await expect(section.locator('[data-editorial-asset="branding"]')).toHaveCount(0);
  }
});

for (const width of [320, 375, 768, 1024, 1440]) {
  test("selected work maintains responsive width at " + width + "px", async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.locator("#selected-work").scrollIntoViewIfNeeded();

    const bounds = await page.locator("#selected-work").evaluate((element) => {
      const viewport = document.documentElement.clientWidth;
      const rect = element.getBoundingClientRect();
      const overflow = document.documentElement.scrollWidth;
      return { viewport, left: rect.left, right: rect.right, overflow };
    });

    expect(bounds.left).toBeGreaterThanOrEqual(-1);
    expect(bounds.right).toBeLessThanOrEqual(bounds.viewport + 1);
    expect(bounds.overflow).toBeLessThanOrEqual(bounds.viewport + 1);
  });
}
