import { expect, test } from "@playwright/test";

test("preview has complete but non-indexable metadata", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Hephie Creatives/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /Hephzibah Uzorndu/
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/
  );
  await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute(
    "content",
    "Hephie Creatives"
  );
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
    "content",
    "website"
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary"
  );

  // Domain and editorial materials are not approved for the public launch.
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(0);
});

test("robots.txt excludes public crawling until release approval", async ({ request }) => {
  const response = await request.get("/robots.txt");
  expect(response.ok()).toBe(true);
  const body = await response.text();
  expect(body).toMatch(/User-Agent:\s*\*/i);
  expect(body).toMatch(/Disallow:\s*\//i);
  expect(body).not.toMatch(/Sitemap:/i);
});

test("unreleased sitemap contains no public portfolio URLs", async ({ request }) => {
  const response = await request.get("/sitemap.xml");
  expect(response.ok()).toBe(true);
  const body = await response.text();
  expect(body).toContain("urlset");
  expect(body).not.toContain("<loc>");
  expect(body).not.toContain("/work/");
});

test("no unapproved portfolio assets are requested on the homepage", async ({ page }) => {
  const imageRequests: string[] = [];
  page.on("request", (request) => {
    if (/\/projects\//.test(request.url())) imageRequests.push(request.url());
  });
  await page.goto("/");
  await expect(page.locator("#selected-work")).toBeVisible();
  expect(imageRequests).toEqual([]);
});
