import { ContactForm } from "@/components/home/contact-form";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { getPublicContactEmail } from "@/lib/contact";
import { site } from "@/config/site";

/**
 * The form is visible for design review, but all fields and submission
 * remain disabled until the owner confirms a real public recipient.
 */
export function Contact() {
  const email = getPublicContactEmail();

  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <Container>
        <div className="grid gap-7 border-t border-rule pt-9 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Text variant="label" muted>Work together</Text>
            <Text className="mt-5 max-w-[30ch]">
              Whether you are building a brand or looking to hire
              a visual designer, start with a conversation.
            </Text>
          </div>
          <div className="lg:col-span-8">
            <Heading level={2} size="lg" id="contact-heading" className="max-w-[18ch]">
              Let’s build something worth remembering.
            </Heading>
            <Text variant="lead" className="mt-5 max-w-[55ch]">
              Share the opportunity, project brief or creative challenge.
              A focused conversation is the best starting point for work
              that feels considered and authentic.
            </Text>
          </div>
        </div>

        <div className="mt-9 grid gap-5 border-y border-rule py-7 sm:grid-cols-2">
          <div>
            <Text variant="label" muted>For employers & teams</Text>
            <Heading level={3} size="md" className="mt-3">Hire a designer</Heading>
            <Text className="mt-3 max-w-[44ch]">
              Opportunities involving brand identity, design
              execution and visual storytelling.
            </Text>
          </div>
          <div>
            <Text variant="label" muted>For businesses & individuals</Text>
            <Heading level={3} size="md" className="mt-3">Start a creative project</Heading>
            <Text className="mt-3 max-w-[44ch]">
              Logo design, personal branding, visual identity
              and content for your business or professional presence.
            </Text>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Text variant="label" muted>Get in touch</Text>
            {email ? (
              <>
                <a
                  href={"mailto:" + email}
                  className="mt-4 block break-all text-lg font-semibold underline underline-offset-8"
                >
                  {email}
                </a>
                <Text variant="small" muted className="mt-4">
                  The enquiry form prepares a message in your email
                  application. You review and send it there.
                </Text>
              </>
            ) : (
              <div id="contact-status" className="mt-4 max-w-[40ch]">
                <Text className="font-semibold">
                  The public inquiry email is being finalized.
                </Text>
                <Text variant="small" muted className="mt-3">
                  The form is shown for preview but cannot collect or
                  send messages until an approved inbox is connected.
                </Text>
              </div>
            )}
            <Text variant="small" muted className="mt-7 border-t border-rule pt-4">
              {site.brand} · {site.location}
            </Text>
          </div>
          <div className="lg:col-span-8">
            <Heading level={3} size="md" className="mb-5">
              Tell me about your enquiry
            </Heading>
            <ContactForm recipient={email} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
