import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { serviceDetails } from "@/content/services";

/** Services read like an editorial index rather than a grid of cards. */
export function Services() {
  return (
    <Section id="services" compact aria-labelledby="services-heading" className="bg-soft">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <Heading id="services-heading" level={2} size="lg">
            What I create.
          </Heading>
          <Text className="max-w-[48ch]">
            Creative services for businesses and individuals who want an identity
            that feels clear, distinctive and consistent.
          </Text>
        </div>
        <div className="mt-10 border-t border-rule">
          {serviceDetails.map((service) => (
            <article
              key={service.id}
              id={service.id}
              aria-labelledby={service.id + "-heading"}
              className="grid min-w-0 gap-4 border-b border-rule py-8 sm:py-10 lg:grid-cols-[4rem_minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-9"
            >
              <span className="pt-1 text-sm font-semibold opacity-60">{service.number}</span>
              <Heading id={service.id + "-heading"} level={3} size="md" className="max-w-[18ch]">
                {service.title}
              </Heading>
              <div className="min-w-0">
                <Text className="max-w-[52ch]">{service.summary}</Text>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {service.possibleDeliverables.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
