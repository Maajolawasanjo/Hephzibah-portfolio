import { expect, test } from "@playwright/test";

test("V5 hero is full bleed, typographically dominant and links to meaningful sections", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  const hero = page.locator("#home");
  await expect(hero.getByRole("heading", { level: 1 })).toContainText("Design with purpose.");
  await expect(hero.getByRole("heading", { level: 1 })).toContainText("Create with character.");
  await expect(hero.getByRole("link", { name: /Explore my work/ })).toHaveAttribute(
    "href", "/#selected-work"
  );
  await expect(hero.getByRole("link", { name: /Get to know me/ })).toHaveAttribute(
    "href", "/#about"
  );
  await expect(hero.locator(".hephie-hero-photo")).toHaveCount(1);
  await expect(hero.locator("[data-editorial-asset]")).toHaveCount(0);

  const style = await hero.evaluate((node) => {
    const photo = node.querySelector<HTMLElement>(".hephie-hero-photo")!;
    const rect = node.getBoundingClientRect();
    return {
      left: rect.left,
      right: rect.right,
      viewport: document.documentElement.clientWidth,
      background: getComputedStyle(photo).backgroundImage,
    };
  });
  expect(style.left).toBeGreaterThanOrEqual(-1);
  expect(style.right).toBeLessThanOrEqual(style.viewport + 1);
  expect(style.background).toContain("brand-identity.webp");
});

test("V5 About and Process remain complete and use unboxed editorial layouts", async ({ page }) => {
  await page.goto("/");
  const about = page.locator("#about");
  const process = page.locator("#process");

  await expect(about.getByRole("heading", { level: 2 })).toContainText(
    "A designer who listens before she creates."
  );
  await expect(about.locator("ol > li")).toHaveCount(3);
  await expect(process.getByRole("heading", { level: 2, name: "My design process." })).toBeVisible();
  await expect(process.locator("ol > li")).toHaveCount(4);
  await expect(process.locator("ol > li .rounded-full")).toHaveCount(0);
});

test("V5 professional sections retain complete information and light-only brand palette", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#skills article")).toHaveCount(6);
  await expect(page.locator("#education article")).toHaveCount(3);
  await expect(page.locator("#toolkit li")).toHaveCount(3);

  const palette = await page.evaluate(() => {
    const root = getComputedStyle(document.documentElement);
    return {
      burgundy: root.getPropertyValue("--brand-burgundy").trim(),
      cream: root.getPropertyValue("--brand-cream").trim(),
      scheme: root.colorScheme,
    };
  });
  expect(palette.burgundy.toLowerCase()).toBe("#66001f");
  expect(palette.cream.toLowerCase()).toBe("#fefcef");
  expect(palette.scheme).toContain("light");
});

for (const width of [320, 375, 768, 1024, 1440]) {
  test("V5 page does not scroll sideways at " + width + "px", async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.locator("footer").scrollIntoViewIfNeeded();

    const widths = await page.evaluate(() => ({
      document: document.documentElement.scrollWidth,
      viewport: document.documentElement.clientWidth,
    }));
    expect(widths.document).toBeLessThanOrEqual(widths.viewport + 1);
  });
}
