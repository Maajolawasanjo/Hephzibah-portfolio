import { expect, test } from "@playwright/test";

test("professional sections show verified experience, learning and tools", async ({ page }) => {
  await page.goto("/");
  for (const id of ["experience", "skills", "education", "toolkit", "services"]) {
    await expect(page.locator("#" + id)).toHaveCount(1);
  }
  await expect(page.locator("#experience").getByRole("heading", { name: "PROMIXRS" })).toBeVisible();
  await expect(page.locator("#experience").getByRole("heading", { name: "SYNERY" })).toBeVisible();
  await expect(page.locator("#experience").getByRole("heading", { name: "SHELLY" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "TS Academy" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Apex Academy" })).toBeVisible();
  await expect(page.getByText("NUTM", { exact: true })).toBeVisible();
  await expect(page.getByText("Adobe Photoshop")).toBeVisible();
  await expect(page.getByText("Adobe Illustrator")).toBeVisible();
  await expect(page.getByText("PixelLab")).toBeVisible();
});

test("unapproved contact destination cannot collect or submit information", async ({ page }) => {
  await page.goto("/#contact");
  await expect(page.locator("#contact form")).toHaveCount(0);
  await expect(page.locator("#contact").getByRole("heading", { level: 2, name: /Let's make your next idea/ })).toBeVisible();
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
});

test("unified Satoshi type system and premium palette are configured", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('link[rel="stylesheet"][href*="api.fontshare.com/v2/css"]')).toHaveCount(1);
  const styles = await page.evaluate(() => {
    const computed = getComputedStyle(document.body);
    const root = getComputedStyle(document.documentElement);
    return {
      bodyFont: computed.fontFamily,
      displayFont: root.getPropertyValue("--font-display-stack"),
      burgundy: root.getPropertyValue("--brand-burgundy").trim().toLowerCase(),
      cream: root.getPropertyValue("--brand-cream").trim().toLowerCase(),
    };
  });
  expect(styles.bodyFont).toContain("Satoshi");
  expect(styles.displayFont).toContain("Satoshi");
  expect(styles.burgundy).toBe("#66001f");
  expect(styles.cream).toBe("#fefcef");
});
