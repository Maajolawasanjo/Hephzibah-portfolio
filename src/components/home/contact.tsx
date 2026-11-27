import Link from "next/link";
import { ContactForm } from "@/components/home/contact-form";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { getPublicContactEmail } from "@/lib/contact";
import { site } from "@/config/site";

/**
 * Editorial close with an intentional, useful layout.
 * A form or email CTA is displayed only when an actual public recipient exists.
 */
export function Contact() {
  const email = getPublicContactEmail();

  return (
    <Section id="contact" aria-labelledby="contact-heading" className="bg-brand-cream">
      <Container>
        <Text variant="label" muted className="mb-9">Contact the studio</Text>

        <div className="grid min-w-0 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="min-w-0 lg:col-span-8">
            <Heading id="contact-heading" level={2} size="xl" className="max-w-[15ch] !font-normal !leading-[1.02]">
              Let&apos;s work <span className="font-light opacity-70">together.</span>
            </Heading>
          </div>
          <div className="min-w-0 lg:col-span-4">
            <Text variant="lead" className="max-w-[40ch]">
              A new identity, a fresh idea or a visual story worth telling?
              Here&apos;s where thoughtful collaboration begins.
            </Text>
          </div>
        </div>

        <div className="mt-12 grid min-w-0 gap-12 border-t border-rule pt-10 sm:mt-16 sm:pt-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-24">
          <div className="min-w-0">
            {email ? (
              <div>
                <Text variant="label" muted className="mb-5">Project enquiries</Text>
                <Text className="mb-8 max-w-[57ch]">
                  Tell me about your idea. This form prepares an email draft for your review and sending.
                </Text>
                <ContactForm recipient={email} />
              </div>
            ) : (
              <div id="contact-status">
                <Text variant="label" muted className="mb-5">Creative collaboration</Text>
                <p className="max-w-[20ch] font-display text-[clamp(2rem,3.6vw,3.5rem)] font-normal leading-[1.09] tracking-[-0.05em]">
                  Have a vision in mind? Give it a distinctive identity.
                </p>
                <Text className="mt-6 max-w-[55ch]">
                  Explore the services and creative directions behind Hephie Creatives,
                  from visual identity and campaign design to photography and storytelling.
                </Text>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                  <Link href="/#services" className="inline-flex min-h-11 items-center gap-3 border-b border-current pb-1 text-sm font-semibold hover:opacity-75">
                    Explore services <span aria-hidden="true">↗</span>
                  </Link>
                  <Link href="/#selected-work" className="inline-flex min-h-11 items-center gap-3 border-b border-current pb-1 text-sm font-semibold hover:opacity-75">
                    View creative work <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="min-w-0">
            <Text variant="label" muted className="mb-6">Studio details</Text>
            <div className="border-t border-rule">
              <div className="border-b border-rule py-6">
                <Text variant="label" muted>Based in</Text>
                <Text className="mt-2">{site.location}</Text>
              </div>
              <div className="border-b border-rule py-6">
                <Text variant="label" muted>Creative discipline</Text>
                <Text className="mt-2">{site.role}</Text>
              </div>
              {email ? (
                <div className="border-b border-rule py-6">
                  <Text variant="label" muted>Email</Text>
                  <a href={"mailto:" + email} className="mt-2 inline-block break-all text-base font-medium underline underline-offset-4">{email}</a>
                </div>
              ) : (
                <Text variant="small" muted className="mt-6 max-w-[40ch]">
                  Direct enquiry details will be added when the public contact address is confirmed.
                </Text>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
