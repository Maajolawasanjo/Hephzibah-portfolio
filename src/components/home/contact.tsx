import { ContactForm } from "@/components/home/contact-form";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { getPublicContactEmail } from "@/lib/contact";
import { site } from "@/config/site";

/**
 * The contact chapter follows the open light-panel reference.
 * No form is presented when the public recipient has not been verified.
 */
export function Contact() {
  const email = getPublicContactEmail();
  return (
    <Section id="contact" aria-labelledby="contact-heading" className="bg-brand-cream">
      <Container>
        <Text variant="label" muted className="mb-10">Contact the studio</Text>
        <div className="grid min-w-0 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="min-w-0 lg:col-span-8">
            <Heading
              id="contact-heading"
              level={2}
              size="xl"
              className="max-w-[15ch] !font-normal !leading-[0.99]"
            >
              Let&apos;s work <span className="font-light opacity-70">together.</span>
            </Heading>
          </div>
          <div className="min-w-0 lg:col-span-4 lg:pb-2">
            <Text variant="lead" className="max-w-[37ch]">
              Hiring a designer or starting a creative project? I&apos;d
              love to hear what you have in mind.
            </Text>
          </div>
        </div>

        <div className="mt-14 grid min-w-0 gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-20">
          <div className="min-w-0 bg-soft px-6 py-8 sm:px-10 sm:py-12">
            {email ? (
              <div>
                <Text variant="small" className="mb-6">
                  Share your project details. The form opens a reviewable email draft
                  for you to send from your own mail application.
                </Text>
                <ContactForm recipient={email} />
              </div>
            ) : (
              <div id="contact-status" className="flex min-h-[18rem] flex-col items-start justify-center">
                <Text variant="label" muted className="mb-6">Enquiries</Text>
                <p className="max-w-[29ch] font-display text-[clamp(1.7rem,2.9vw,3rem)] font-normal leading-[1.12] tracking-[-0.045em]">
                  The public inquiry email is being finalized.
                </p>
                <Text className="mt-6 max-w-[52ch]">
                  Enquiries cannot be collected until a verified contact
                  address is connected. My professional experience and
                  services are available to review in the meantime.
                </Text>
                <Button href="/#experience" variant="secondary" className="mt-8">
                  View experience <span aria-hidden="true">↗</span>
                </Button>
              </div>
            )}
          </div>

          <div className="min-w-0 lg:pt-2">
            <Text variant="label" muted className="mb-7">Studio details</Text>
            <div className="border-t border-rule">
              <div className="border-b border-rule py-6">
                <Text variant="label" muted>Location</Text>
                <Text className="mt-3">{site.location}</Text>
              </div>
              <div className="border-b border-rule py-6">
                <Text variant="label" muted>Creative practice</Text>
                <Text className="mt-3">{site.role}</Text>
              </div>
              <div className="border-b border-rule py-6">
                <Text variant="label" muted>Email</Text>
                {email ? (
                  <a href={"mailto:" + email} className="mt-3 inline-block break-all text-base font-medium underline underline-offset-4">
                    {email}
                  </a>
                ) : (
                  <Text className="mt-3">Available after verification</Text>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
