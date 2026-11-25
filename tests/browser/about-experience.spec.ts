import { expect, test } from "@playwright/test";

test("About preserves the full approved biography and connects to Design Process", async ({ page }) => {
  await page.goto("/");
  const about = page.locator("#about");

  await expect(
    about.getByRole("heading", { level: 2, name: "A designer who listens before she creates." })
  ).toBeVisible();

  await expect(about.getByText("I’m Hephzibah Uzorndu,", { exact: false })).toBeVisible();
  await expect(about.getByText("I help businesses express who they are", { exact: false })).toBeVisible();
  await expect(about.getByText("My work starts with understanding the business", { exact: false })).toBeVisible();
  await expect(about.getByText("I also bring brand stories into photography and video", { exact: false })).toBeVisible();

  await expect(
    about.getByRole("link", { name: "Explore my design process" })
  ).toHaveAttribute("href", "/#process");

  await expect(page.locator("#process")).toHaveCount(1);
});

test("Experience presents verified independent practice without an invented timeline", async ({ page }) => {
  await page.goto("/");
  const experience = page.locator("#experience");

  await expect(experience.getByRole("heading", { level: 2, name: "Experience." })).toBeVisible();
  await expect(
    experience.getByRole("heading", { level: 3, name: "Independent branding & client projects" })
  ).toBeVisible();
  await expect(experience.getByText("Remote and in-person collaborations")).toBeVisible();
  await expect(
    experience.getByText("I have worked with clients online and face to face", { exact: false })
  ).toBeVisible();
  await expect(experience.locator("article")).toHaveCount(1);
});

for (const width of [320, 375, 768, 1024, 1440]) {
  test("About and Experience retain viewport width at " + width + "px", async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");

    for (const id of ["about", "experience"]) {
      const section = page.locator("#" + id);
      await section.scrollIntoViewIfNeeded();
      const dimensions = await section.evaluate((node) => {
        const bounds = node.getBoundingClientRect();
        return {
          left: bounds.left,
          right: bounds.right,
          viewport: document.documentElement.clientWidth,
          pageWidth: document.documentElement.scrollWidth,
        };
      });
      expect(dimensions.left).toBeGreaterThanOrEqual(-1);
      expect(dimensions.right).toBeLessThanOrEqual(dimensions.viewport + 1);
      expect(dimensions.pageWidth).toBeLessThanOrEqual(dimensions.viewport + 1);
    }
  });
}
