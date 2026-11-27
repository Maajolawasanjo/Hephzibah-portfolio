import { expect, test } from "@playwright/test";

test("contact section exposes WhatsApp and verified social links", async ({ page }) => {
  await page.goto("/#contact");
  const contact = page.locator("#contact");

  await expect(contact.getByText("WhatsApp", { exact: true })).toBeVisible();
  const whatsapp = contact.getByRole("link", { name: /Chat with Hephie Creatives on WhatsApp/ });
  await expect(whatsapp).toHaveAttribute("href", "https://wa.me/2348161429116");
  await expect(whatsapp).toHaveAttribute("target", "_blank");
  await expect(whatsapp).toHaveAttribute("rel", /noopener noreferrer/);
  await expect(page.getByText("Telephone", { exact: true })).toHaveCount(0);
  await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);

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

  // Preview builds without approved email should still provide WhatsApp and social channels.
  const publicEmails = contact.locator('a[href^="mailto:"]');
  for (const link of await publicEmails.all()) {
    const href = await link.getAttribute("href");
    expect(href).toContain("okeziba.uzorndu@gmail.com");
  }
});

test("footer has new editorial layout, WhatsApp CTA and verified social links", async ({ page }) => {
  await page.goto("/");
  const footer = page.locator("footer");
  await expect(footer.getByText("Good ideas deserve", { exact: false })).toBeVisible();
  await expect(footer.getByRole("link", { name: /Let's talk on WhatsApp/ }))
    .toHaveAttribute("href", "https://wa.me/2348161429116");
  await expect(footer.getByRole("link", { name: /WhatsApp: \+234 8161429116/ }))
    .toHaveAttribute("href", "https://wa.me/2348161429116");
  await expect(footer.getByRole("link", { name: /Back to top/ }))
    .toHaveAttribute("href", "/#home");
  await expect(footer.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/hephzibah-uzorndu-333364439/"
  );
  await expect(footer.getByRole("link", { name: /Instagram/ })).toHaveAttribute(
    "href",
    "https://www.instagram.com/hephie_creatives/"
  );
});
