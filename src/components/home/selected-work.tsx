import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { getPublishedCaseStudy, getSelectedProjects } from "@/content/projects";

/**
 * Selected Work is retained as a main section, but deliberately never
 * passes third-party illustrative mockups off as client portfolio pieces.
 */
export function SelectedWork() {
  const projects = getSelectedProjects();
  return (
    <Section id="selected-work" compact aria-labelledby="selected-work-heading">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <Heading id="selected-work-heading" level={2} size="lg">
            Selected work.
          </Heading>
          <Text className="max-w-[48ch]">
            Visual identities and graphic design made with intention.
            Each published project will tell the story behind the result.
          </Text>
        </div>

        {projects.length ? (
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                category={project.category}
                year={project.year}
                image={project.cover}
                href={getPublishedCaseStudy(project.slug) ? "/work/" + project.slug : undefined}
                ratio={project.ratio ?? (index === 0 ? "wide" : "landscape")}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={index === 0 ? "md:col-span-2" : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col gap-5 rounded-xl bg-soft px-6 py-7 md:flex-row md:items-center md:justify-between md:gap-10">
            <Text className="max-w-[60ch]">
              Original client projects are being prepared for publication.
              Until the approved artwork is ready, explore the experience
              and creative skills behind the practice.
            </Text>
            <Button href="/#experience" variant="secondary" className="shrink-0">
              See my experience <span aria-hidden="true">↗</span>
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
