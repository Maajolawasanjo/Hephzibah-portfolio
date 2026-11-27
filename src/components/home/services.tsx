import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { serviceDetails } from "@/content/services";

/** The services form an editorial index with restrained, meaningful rules. */
export function Services() {
  return (
    <Section id="services" aria-labelledby="services-heading" className="bg-soft">
      <Container>
        <div className="grid min-w-0 gap-7 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            <Text variant="label" muted className="mb-7">Creative services</Text>
            <Heading id="services-heading" level={2} size="lg">
              What I create.
            </Heading>
          </div>
          <Text variant="lead" className="max-w-[43ch] lg:col-span-5">
            Creative services for businesses and individuals who want an identity
            that feels clear, distinctive and consistent.
          </Text>
        </div>

        <div className="mt-12 border-t border-rule sm:mt-16">
          {serviceDetails.map((service) => (
            <article
              key={service.id}
              id={service.id}
              aria-labelledby={service.id + "-heading"}
              className="grid min-w-0 gap-4 border-b border-rule py-8 sm:py-10 lg:grid-cols-[3.5rem_minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12"
            >
              <span className="pt-1 text-xs font-medium text-muted">{service.number}</span>
              <Heading
                id={service.id + "-heading"}
                level={3}
                size="md"
                className="max-w-[18ch] !font-normal"
              >
                {service.title}
              </Heading>
              <div className="min-w-0">
                <Text className="max-w-[51ch]">{service.summary}</Text>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {service.possibleDeliverables.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted">{item}</li>
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
