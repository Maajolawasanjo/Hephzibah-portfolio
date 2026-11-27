import Link from "next/link";
import { ContactForm } from "@/components/home/contact-form";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { getPublicContactEmail } from "@/lib/contact";
import { site } from "@/config/site";

/**
 * A single editorial invitation, not a second collection of service cards.
 * The seal is decorative. Only an explicitly approved email is public.
 */
export function Contact() {
  const email = getPublicContactEmail();

  return (
    <Section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-brand-cream"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6">
          <Text variant="label" muted>
            Let&apos;s collaborate
          </Text>
          <Text variant="small" muted>
            Hephie Creatives · Lagos, Nigeria
          </Text>
        </div>

        <div className="grid min-w-0 items-center gap-14 pb-16 pt-14 sm:gap-16 sm:pb-20 sm:pt-20 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-14 lg:pb-24 lg:pt-24">
          <div className="min-w-0">
            <Heading
              id="contact-heading"
              level={2}
              size="xl"
              className="max-w-[16ch] !text-[clamp(3rem,6.5vw,6.9rem)] !font-normal !leading-[1.02] !tracking-[-0.06em]"
            >
              Let&apos;s make your next idea
              <span className="block font-light text-brand-burgundy/65">
                impossible to ignore.
              </span>
            </Heading>

            <Text variant="lead" className="mt-9 max-w-[49ch] sm:mt-11">
              Building something new or ready for a fresh direction? I create
              identities and visual stories that leave a lasting impression.
            </Text>

            {email ? (
              <a
                href={"mailto:" + email + "?subject=" + encodeURIComponent("Let's work together — Hephie Creatives")}
                className="mt-9 inline-flex min-h-12 items-center gap-6 border-b border-brand-burgundy pb-2 text-base font-medium transition-opacity hover:opacity-75 motion-reduce:transition-none"
              >
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <Link
                href="/#process"
                className="mt-9 inline-flex min-h-12 items-center gap-6 border-b border-brand-burgundy pb-2 text-base font-medium transition-opacity hover:opacity-75 motion-reduce:transition-none"
              >
                Discover my approach <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>

          <div
            aria-hidden="true"
            className="relative mx-auto flex aspect-square w-full max-w-[19rem] items-center justify-center sm:max-w-[23rem] lg:max-w-[26rem]"
          >
            <div className="absolute inset-0 rounded-full border border-brand-burgundy/25" />
            <div className="absolute inset-[10%] rounded-full border border-brand-burgundy/15" />
            <div className="absolute inset-[21%] rounded-full border border-brand-burgundy/20" />
            <span className="font-display text-[clamp(6rem,11vw,11rem)] font-light leading-none tracking-[-0.09em]">
              H.
            </span>
            <span className="absolute bottom-[14%] text-[0.62rem] font-semibold uppercase tracking-[0.19em]">
              Hephie Creatives
            </span>
          </div>
        </div>

        {email && (
          <div className="grid min-w-0 gap-8 border-t border-rule py-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1.42fr)] lg:gap-16">
            <div>
              <Text variant="label" muted>Project enquiries</Text>
              <p className="mt-5 max-w-[22ch] font-display text-[clamp(1.65rem,2.7vw,2.75rem)] font-normal leading-[1.14] tracking-[-0.04em]">
                Tell me what you&apos;re dreaming up.
              </p>
              <Text variant="small" muted className="mt-4 max-w-[43ch]">
                This opens a prepared email in your own email application for
                you to review and send.
              </Text>
            </div>
            <ContactForm recipient={email} />
          </div>
        )}

        <div className="grid min-w-0 gap-8 border-t border-rule pt-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:pt-10">
          <div>
            <Text variant="label" muted>Based in</Text>
            <Text className="mt-3">{site.location}</Text>
          </div>
          <div>
            <Text variant="label" muted>Creative practice</Text>
            <Text className="mt-3 max-w-[35ch]">
              {site.role}
            </Text>
            {email && (
              <a
                href={"mailto:" + email}
                className="mt-4 inline-flex break-all text-sm font-medium underline underline-offset-4"
              >
                {email}
              </a>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
