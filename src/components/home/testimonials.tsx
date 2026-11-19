import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { getApprovedTestimonials } from "@/content/testimonials";

/**
 * The entire section is withheld until genuine, attributed, authorized
 * testimonials exist. No placeholder endorsement is shown to visitors.
 */
export function Testimonials() {
  const items = getApprovedTestimonials();

  if (items.length === 0) return null;

  return (
    <Section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      compact
    >
      <Container>
        <div className="grid gap-8 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Text variant="label" muted>
              08 / Client perspectives
            </Text>
          </div>
          <div className="lg:col-span-8">
            <Heading id="testimonials-heading" level={2} size="lg">
              In their words.
            </Heading>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.name + item.quote}
              className="flex flex-col justify-between gap-12 border-t border-rule py-6"
            >
              <blockquote>
                <Text variant="lead">
                  “{item.quote}”
                </Text>
              </blockquote>
              <figcaption className="border-t border-rule pt-5">
                <Text variant="small" className="font-semibold">
                  {item.name}
                </Text>
                <Text variant="small" muted>
                  {item.role}
                  {item.context ? " · " + item.context : ""}
                </Text>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
