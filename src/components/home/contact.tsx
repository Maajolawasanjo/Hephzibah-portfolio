import { ContactForm } from "@/components/home/contact-form";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { getPublicContactEmail } from "@/lib/contact";

/**
 * Contact remains a complete top-level section, but never presents a
 * disabled form as though visitors could send messages.
 */
export function Contact() {
  const email = getPublicContactEmail();

  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <Container>
        <div className="grid gap-8 rounded-[1.25rem] bg-brand-burgundy px-6 py-9 text-brand-cream sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 lg:px-14 lg:py-14">
          <div>
            <Heading id="contact-heading" level={2} size="lg">
              Let&apos;s work together.
            </Heading>
            <Text variant="lead" className="mt-5 max-w-[46ch]">
              Hiring a designer or starting a creative project? I&apos;d
              love to hear what you have in mind.
            </Text>
          </div>
          <div className="min-w-0">
            {email ? (
              <>
                <a
                  href={"mailto:" + email}
                  className="block break-all text-lg font-semibold underline underline-offset-8"
                >
                  {email}
                </a>
                <Text variant="small" className="mt-3 !text-brand-cream/80">
                  Tell me about the opportunity or project below. The form
                  opens an email draft for you to review and send.
                </Text>
                <div className="mt-7 rounded-xl bg-brand-cream p-5 text-brand-burgundy sm:p-7">
                  <ContactForm recipient={email} />
                </div>
              </>
            ) : (
              <div id="contact-status" className="rounded-xl bg-brand-cream px-6 py-7 text-brand-burgundy">
                <Text className="font-semibold">
                  The public inquiry email is being finalized.
                </Text>
                <Text className="mt-3">
                  Enquiries cannot be collected until a verified contact
                  address is connected. My professional experience and
                  services are available to review in the meantime.
                </Text>
                <Button href="/#experience" variant="secondary" className="mt-6">
                  View experience <span aria-hidden="true">↗</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
