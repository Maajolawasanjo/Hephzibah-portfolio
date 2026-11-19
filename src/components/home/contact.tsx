import { ContactForm } from "@/components/home/contact-form";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { getPublicContactEmail } from "@/lib/contact";
import { site } from "@/config/site";

/**
 * Phase 11: an intentional editorial conversion section. Email and inquiry
 * controls activate only after the owner approves the public destination.
 */
export function Contact() {
  const email = getPublicContactEmail();

  return (
    <Section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-brand-cream text-brand-burgundy"
    >
      <Container>
        <div data-reveal="up" className="grid gap-10 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Text variant="label" muted className="mb-6">
              10 / Contact
            </Text>
            <Text variant="small" className="max-w-[28ch]">
              Have an idea, a new business, or a brand that needs a
              clearer voice?
            </Text>
          </div>
          <div className="min-w-0 lg:col-span-8">
            <Heading
              level={2}
              size="xl"
              id="contact-heading"
              className="max-w-[13ch] break-words"
            >
              Let’s make something memorable.
            </Heading>
            <Text variant="lead" className="mt-8 max-w-[54ch]">
              Tell me what you are building and where you want your
              brand to go. A good collaboration begins with a conversation.
            </Text>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-rule pt-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Text variant="label" muted className="mb-5">
              Start a conversation
            </Text>
            {email ? (
              <>
                <a
                  href={"mailto:" + email}
                  className="block break-all text-lg font-medium underline underline-offset-8 hover:opacity-80"
                >
                  {email}
                </a>
                <Text variant="small" muted className="mt-5 max-w-[36ch]">
                  Prefer to write directly? Use the email above.
                  Otherwise, prepare your project message using the form.
                </Text>
              </>
            ) : (
              <>
                <Text variant="lead" className="max-w-[31ch]">
                  The public inquiry email is being finalized.
                </Text>
                <Text variant="small" muted className="mt-5 max-w-[37ch]">
                  Contact details will appear here once confirmed for public
                  use. No inquiry messages are being collected yet.
                </Text>
              </>
            )}
            <div className="mt-10 border-t border-rule pt-5">
              <Text variant="small" muted>
                {site.brand} · {site.location}
              </Text>
            </div>
          </div>

          <div className="lg:col-span-8">
            {email ? (
              <ContactForm recipient={email} />
            ) : (
              <div className="flex min-h-64 flex-col justify-between border border-rule bg-soft p-7 sm:p-10">
                <Text variant="label" muted>
                  Inquiries / Pending approval
                </Text>
                <div>
                  <Heading level={3} size="md">
                    Connection matters.
                  </Heading>
                  <Text className="mt-5 max-w-[55ch]">
                    The inquiry form will become available here when the
                    designer confirms a public email address.
                  </Text>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
