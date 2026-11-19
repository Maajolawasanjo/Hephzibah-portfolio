import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Heading, Text } from "@/components/ui/typography";
import { getApprovedAdditionalProjects } from "@/content/more-work";

/**
 * Additional projects are not interchangeable with fake sample cards.
 * Hide this section until real, approved secondary projects are supplied.
 */
export function MoreWork() {
  const projects = getApprovedAdditionalProjects();
  if (projects.length === 0) return null;

  return (
    <Section id="more-work" aria-labelledby="more-work-heading" compact>
      <Container>
        <div className="grid gap-8 border-t border-rule pt-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Text variant="label" muted>09 / More work</Text>
          </div>
          <div className="lg:col-span-8">
            <Heading id="more-work-heading" level={2} size="lg">
              More perspectives.
            </Heading>
            <Text variant="lead" className="mt-5">
              Additional original visual work and creative explorations.
            </Text>
          </div>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              category={project.category}
              image={project.image}
              ratio={project.ratio ?? "landscape"}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              href={project.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
