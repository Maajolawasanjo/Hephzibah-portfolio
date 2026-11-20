import { expect, test } from "@playwright/test";

test("mobile contact navigation works without runtime errors", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 375, height: 812 });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open navigation menu" });
  await toggle.click();

  const nav = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(nav).toBeVisible();
  await nav.getByRole("link", { name: "Contact", exact: true }).click();

  await expect(page).toHaveURL(/\/#contact$/);
  await expect(nav).toBeHidden();
  await expect(page.locator("#contact-heading")).toBeVisible();
  await expect(page.locator("#contact-heading")).toBeInViewport();

  const overflow = await page.evaluate(() => ({
    document: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }));
  expect(overflow.document).toBeLessThanOrEqual(overflow.viewport + 1);
  expect(errors, "No unhandled browser runtime errors").toEqual([]);
});

test("keyboard focus remains visible at the first navigation step", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to main content" });
  await expect(skip).toBeFocused();
  const visibility = await skip.evaluate((node) => {
    const computed = window.getComputedStyle(node);
    const rect = node.getBoundingClientRect();
    return {
      opacity: computed.opacity,
      hidden: computed.visibility === "hidden",
      top: rect.top,
      width: rect.width,
    };
  });
  expect(visibility.opacity).not.toBe("0");
  expect(visibility.hidden).toBe(false);
  expect(visibility.top).toBeGreaterThanOrEqual(0);
  expect(visibility.width).toBeGreaterThan(0);
});
