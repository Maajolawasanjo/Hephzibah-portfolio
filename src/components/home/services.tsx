import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { serviceDetails } from "@/content/services";

/**
 * No repeated sub-sections for scope, audience or visual references.
 * Each service is a single focused offer with a concise optional list.
 */
export function Services() {
  return (
    <Section id="services" compact aria-labelledby="services-heading" className="bg-soft">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
          <Heading id="services-heading" level={2} size="lg">
            What I create.
          </Heading>
          <Text className="max-w-[48ch]">
            Creative services for businesses and individuals who want an identity
            that feels clear, distinctive and consistent.
          </Text>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {serviceDetails.map((service) => (
            <article
              key={service.id}
              id={service.id}
              aria-labelledby={service.id + "-heading"}
              className="flex min-w-0 flex-col rounded-xl bg-brand-cream p-6 sm:p-8"
            >
              <span className="text-sm font-semibold opacity-60">{service.number}</span>
              <Heading id={service.id + "-heading"} level={3} size="md" className="mt-4">
                {service.title}
              </Heading>
              <Text className="mt-3 max-w-[50ch]">{service.summary}</Text>
              <ul className="mt-5 flex flex-col gap-2">
                {service.possibleDeliverables.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-burgundy" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
