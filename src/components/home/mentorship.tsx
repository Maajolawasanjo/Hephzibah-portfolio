import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { mentorshipContent } from "@/content/supporting";

/**
 * Founder-provided biography mentions teaching aspiring designers one on one.
 * No classes, fees, schedules, external booking destinations or outcomes are
 * asserted without separate approval.
 */
export function Mentorship() {
  return (
    <Section compact id="mentorship" aria-labelledby="mentorship-heading">
      <Container>
        <div data-reveal="up" className="grid gap-10 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Text variant="label" muted>
              {mentorshipContent.eyebrow}
            </Text>
            <div
              aria-hidden="true"
              className="mt-10 flex aspect-[4/3] items-end overflow-hidden bg-brand-burgundy p-7 text-brand-cream sm:p-9"
            >
              <span className="decorative-type block max-w-full font-display font-bold">
                Learn.
                <span className="block">Create.</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 lg:pt-10">
            <Heading
              level={2}
              size="xl"
              id="mentorship-heading"
              className="max-w-[14ch]"
            >
              {mentorshipContent.heading}
            </Heading>
            <Text variant="lead" className="mt-8 max-w-[48ch]">
              {mentorshipContent.statement}
            </Text>
            <Text className="mt-6 max-w-[60ch]" muted>
              {mentorshipContent.detail}
            </Text>
            <Link
              href="/#about"
              className="mt-9 inline-flex min-h-11 items-center gap-3 rounded-[var(--radius-control)] text-sm font-medium underline underline-offset-8"
            >
              More about me <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
