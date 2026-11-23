import { expect, test } from "@playwright/test";

const viewportWidths = [320, 375, 768, 1024, 1440];

test("homepage provides navigable landmarks and valid section destinations", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  await expect(page.locator("main#main-content")).toHaveCount(1);
  await expect(page.locator("body > div header")).toHaveCount(1);
  await expect(page.locator("footer")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");

  const links = page.locator('nav[aria-label="Primary navigation"] a');
  expect(await links.count()).toBe(6);

  for (const link of await links.all()) {
    const href = await link.getAttribute("href");
    expect(href, "primary nav href").toMatch(/^\/#[-\w]+$/);
    const id = href?.slice(2);
    await expect(page.locator("[id=" + JSON.stringify(id) + "]")).toHaveCount(1);
  }

  // Keyboard visitors must be able to skip the repeated navigation.
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to main content" })).toBeFocused();
});

for (const width of viewportWidths) {
  test("no document-level horizontal overflow at " + width + "px", async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.locator("footer").scrollIntoViewIfNeeded();

    const sizes = await page.evaluate(() => ({
      document: document.documentElement.scrollWidth,
      viewport: document.documentElement.clientWidth,
    }));
    expect(sizes.document, "document width at " + width + "px").toBeLessThanOrEqual(
      sizes.viewport + 1
    );
  });
}

test("mobile disclosure supports natural Tab, Escape, and focus exit", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const open = page.getByRole("button", { name: "Open navigation menu" });
  await open.click();

  const nav = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(nav).toBeVisible();
  await expect(page.getByRole("button", { name: "Close navigation menu" })).toHaveAttribute(
    "aria-expanded",
    "true"
  );
  await expect(nav.getByRole("link", { name: "Work", exact: true })).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(open).toBeFocused();
  await expect(nav).toBeHidden();

  await open.click();
  const lastLink = nav.getByRole("link", { name: "View experience" });
  await lastLink.focus();
  await page.keyboard.press("Tab");

  // Disclosure menus are not modal dialogs and must never trap focus.
  await expect(nav).toBeHidden();
  await expect(page.getByRole("link", { name: "Explore my experience" })).toBeFocused();
});

test("menu is hidden at desktop width and interactive nav is visible", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Open navigation menu" })).toBeHidden();
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
});

test("reduced motion preserves content and avoids entrance movement", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();

  const info = await page.evaluate(() => ({
    reduced: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    heroOpacity: getComputedStyle(document.querySelector("h1")!).opacity,
    pendingOpacity: Array.from(document.querySelectorAll<HTMLElement>('[data-reveal-state="pending"]'))
      .every((element) => getComputedStyle(element).opacity === "1"),
  }));
  expect(info.reduced).toBe(true);
  expect(info.heroOpacity).toBe("1");
  expect(info.pendingOpacity).toBe(true);
});

test("inquiry cannot be submitted without an approved public address", async ({ page }) => {
  await page.goto("/#contact");
  await expect(page.getByText("The public inquiry email is being finalized.")).toBeVisible();
  await expect(page.locator('form')).toHaveCount(1);
  await expect(page.getByRole("button", { name: "Prepare my inquiry" })).toBeDisabled();
});

test("root text enlargement retains reasonable page width", async ({ page }) => {
  await page.setViewportSize({ width: 640, height: 900 });
  await page.goto("/");
  await page.evaluate(() => {
    document.documentElement.style.fontSize = "32px";
  });
  const sizes = await page.evaluate(() => ({
    document: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }));
  expect(sizes.document).toBeLessThanOrEqual(sizes.viewport + 1);
});
