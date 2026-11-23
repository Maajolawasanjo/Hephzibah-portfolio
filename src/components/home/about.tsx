import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { aboutContent } from "@/content/about";
import { professionalProfile } from "@/content/professional";
import { site } from "@/config/site";

/** No unlicensed portrait, fake credential or decorative placeholder. */
export function About() {
  return (
    <Section id="about" compact aria-labelledby="about-heading">
      <Container>
        <div data-reveal="up" className="grid gap-8 border-t border-rule pt-9 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Text variant="label" muted>About the designer</Text>
            <Text className="mt-5 max-w-[30ch] font-medium">
              {site.name}
            </Text>
            <Text variant="small" muted className="mt-1">
              {site.role} · {site.location}
            </Text>
          </div>
          <div className="lg:col-span-8">
            <Heading id="about-heading" level={2} size="lg" className="max-w-[21ch]">
              Behind every design is a decision.
            </Heading>
            <Text variant="lead" className="mt-6 max-w-[57ch]">
              {professionalProfile.introduction}
            </Text>
            <div className="mt-8 grid gap-6 border-t border-rule pt-7 md:grid-cols-2 md:gap-10">
              {aboutContent.body.slice(0, 2).map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
              ))}
            </div>
            <Text className="mt-5 max-w-[66ch]">
              I combine creative exploration with practical client
              collaboration, using graphic design tools and original visual
              direction to translate ideas into usable brand communication.
            </Text>
          </div>
        </div>

        <div id="about-principles" className="mt-10 grid gap-7 border-t border-rule pt-7 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Heading level={3} size="md">How I approach the work.</Heading>
            <Text variant="small" muted className="mt-3">
              Understanding, intention and consistency.
            </Text>
          </div>
          <ol className="grid gap-5 sm:grid-cols-3 lg:col-span-8">
            {aboutContent.principles.map((principle) => (
              <li key={principle.index} className="border-t border-rule py-5">
                <Text variant="label" muted>{principle.index}</Text>
                <Heading level={3} size="md" className="mt-4">
                  {principle.heading}
                </Heading>
                <Text variant="small" className="mt-3">{principle.copy}</Text>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
