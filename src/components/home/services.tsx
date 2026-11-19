import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { serviceDetails, serviceValue } from "@/content/services";

/**
 * Phase 09: service explanations and value proposition.
 * Descriptions are editorial scope illustrations, not fixed-price packages,
 * proven client outcomes or guarantees.
 */
export function Services() {
  return (
    <Section id="services" aria-labelledby="services-heading">
      <Container>
        <div data-reveal="up" className="grid gap-8 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Text variant="label" muted className="mb-6">
              03 / Services
            </Text>
            <Text variant="small" className="max-w-[28ch]">
              Brand identity & visual storytelling
            </Text>
          </div>
          <div className="lg:col-span-8">
            <Heading
              id="services-heading"
              level={2}
              size="xl"
              className="max-w-[15ch]"
            >
              More than a good first impression.
            </Heading>
            <Text variant="lead" className="mt-7 max-w-[55ch]">
              From the first visual idea to the places your brand shows up,
              thoughtful design helps tell a clearer, more recognizable story.
            </Text>
          </div>
        </div>

        <div className="mt-14 lg:mt-20">
          {serviceDetails.map((service) => (
            <article
              key={service.id}
              data-reveal="up"
              id={service.id}
              aria-labelledby={service.id + "-heading"}
              className="grid gap-8 border-t border-rule py-10 sm:py-12 lg:grid-cols-12 lg:gap-12 lg:py-16"
            >
              <div className="lg:col-span-1">
                <Text variant="label" muted>
                  {service.number}
                </Text>
              </div>

              <div className="min-w-0 lg:col-span-6">
                <Heading
                  id={service.id + "-heading"}
                  level={3}
                  size="lg"
                  className="max-w-[16ch] break-words"
                >
                  {service.title}
                </Heading>
                <Text variant="lead" className="mt-6 max-w-[55ch]">
                  {service.summary}
                </Text>
                <Text variant="small" muted className="mt-5 max-w-[55ch]">
                  {service.suitableFor}
                </Text>
              </div>

              <div className="lg:col-span-5 lg:pl-8">
                <Text variant="label" muted className="mb-5">
                  Potential areas of work
                </Text>
                <ul>
                  {service.possibleDeliverables.map((deliverable, index) => (
                    <li
                      key={deliverable}
                      className="flex gap-4 border-t border-rule py-4"
                    >
                      <span
                        aria-hidden="true"
                        className="pt-0.5 text-xs tabular-nums text-muted"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Text variant="body">{deliverable}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div data-reveal="up" className="theme-inverse mt-10 grid gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-12 lg:items-end lg:gap-12 lg:px-14 lg:py-16">
          <div className="lg:col-span-8">
            <Text variant="label" muted className="mb-6">
              {serviceValue.eyebrow}
            </Text>
            <Heading
              level={3}
              size="lg"
              className="max-w-[18ch]"
            >
              {serviceValue.heading}
            </Heading>
            <Text variant="lead" className="mt-7 max-w-[55ch]">
              {serviceValue.description}
            </Text>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button href="/#about" size="lg">
              Meet the designer <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
