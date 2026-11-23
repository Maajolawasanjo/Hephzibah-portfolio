import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { aboutContent } from "@/content/about";
import { site } from "@/config/site";

/** One biography with a visual counterweight; the full process has its own section. */
export function About() {
  return (
    <Section id="about" compact aria-labelledby="about-heading" className="bg-soft">
      <Container>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
          <div>
            <Heading id="about-heading" level={2} size="lg">
              Hi, I&apos;m Hephzibah.
            </Heading>
            <Text variant="lead" className="mt-5 max-w-[53ch]">
              {aboutContent.intro}
            </Text>
            <Text className="mt-5 max-w-[65ch]">
              {aboutContent.body[0]}
            </Text>
            <Text className="mt-4 max-w-[65ch]">
              {aboutContent.body[1]}
            </Text>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-[1.25rem] bg-brand-burgundy p-8 text-brand-cream sm:p-11 lg:min-h-[370px]">
            <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[42px] border-brand-cream/15" />
            <Text variant="label" className="relative !text-brand-cream/80">A creative perspective</Text>
            <p className="relative mt-10 max-w-[18ch] font-display text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-[1.16] tracking-[-0.035em]">
              Understand the person. Find the idea. Make the design memorable.
            </p>
            <Text variant="small" className="relative mt-8 !text-brand-cream/80">
              {site.brand} · {site.location}
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}
