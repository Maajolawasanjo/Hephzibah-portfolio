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

test("Experience matches the chosen three-card composition and omits dates", async ({ page }) => {
  await page.goto("/");
  const experience = page.locator("#experience");

  await expect(
    experience.getByRole("heading", { level: 2, name: "Creative Experience" })
  ).toBeVisible();

  await expect(experience.locator("article")).toHaveCount(3);
  for (const [name, industry] of [
    ["PROMIXRS", "E-commerce Brand"],
    ["SYNERGY", "Technology Company"],
    ["SHELLY", "Clothing Brand"],
  ]) {
    const card = experience.locator("article").filter({
      has: page.getByRole("heading", { level: 3, name }),
    });
    await expect(card).toHaveCount(1);
    await expect(card.getByText(industry, { exact: true })).toBeVisible();
    await expect(card.getByText("Brand Identity Design")).toBeVisible();
    await expect(card.getByText("Key contributions")).toBeVisible();
    await expect(card.getByRole("list", { name: name + " key contributions" }).locator("li"))
      .toHaveCount(5);
    await expect(card.getByRole("list", { name: name + " creative tools and disciplines" }).locator("li"))
      .toHaveCount(3);
    await expect(card.locator("svg[aria-hidden='true']")).toHaveCount(1);
  }

  await expect(experience.getByText("Beyond logo design.")).toHaveCount(0);
  await expect(experience.getByText(/(?:19|20)[0-9]{2}/)).toHaveCount(0);
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
