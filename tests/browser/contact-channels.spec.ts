import { expect, test } from "@playwright/test";

test("contact section exposes the approved phone and professional social links", async ({ page }) => {
  await page.goto("/#contact");
  const contact = page.locator("#contact");

  await expect(contact.getByRole("link", { name: "+234 8161429116" }))
    .toHaveAttribute("href", "tel:+2348161429116");

  const linkedin = contact.getByRole("link", { name: /Hephzibah Uzorndu on LinkedIn/ });
  await expect(linkedin).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/hephzibah-uzorndu-333364439/"
  );
  await expect(linkedin).toHaveAttribute("target", "_blank");
  await expect(linkedin).toHaveAttribute("rel", /noopener noreferrer/);

  const instagram = contact.getByRole("link", { name: /Hephie Creatives on Instagram/ });
  await expect(instagram).toHaveAttribute(
    "href",
    "https://www.instagram.com/hephie_creatives/"
  );
  await expect(instagram).toHaveAttribute("target", "_blank");
  await expect(instagram).toHaveAttribute("rel", /noopener noreferrer/);

  // Preview builds without approved email should still provide phone and social channels.
  const publicEmails = contact.locator('a[href^="mailto:"]');
  for (const link of await publicEmails.all()) {
    const href = await link.getAttribute("href");
    expect(href).toContain("okeziba.uzorndu@gmail.com");
  }
});

test("footer exposes both verified social destinations", async ({ page }) => {
  await page.goto("/");
  const footer = page.locator("footer");
  await expect(footer.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/hephzibah-uzorndu-333364439/"
  );
  await expect(footer.getByRole("link", { name: /Instagram/ })).toHaveAttribute(
    "href",
    "https://www.instagram.com/hephie_creatives/"
  );
});
