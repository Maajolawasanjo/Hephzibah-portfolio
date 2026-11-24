import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { getPublishedCaseStudy, getSelectedProjects } from "@/content/projects";

/** Keep published work authentic while presenting the section editorially. */
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
          <div className="mt-10 grid gap-x-7 gap-y-12 md:grid-cols-2">
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
          <div className="mt-10 grid gap-6 border-y border-rule py-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-14 lg:py-14">
            <div>
              <Text variant="label" muted>Portfolio in progress</Text>
              <p className="mt-4 max-w-[22ch] font-display text-[clamp(1.65rem,3vw,3rem)] font-semibold leading-[1.12] tracking-[-0.04em]">
                The work deserves to be seen at its best.
              </p>
              <Text className="mt-5 max-w-[52ch]">
                Original client projects are being prepared for publication.
                In the meantime, discover the experience and creative thinking behind the practice.
              </Text>
            </div>
            <Button href="/#experience" variant="secondary" className="justify-self-start !rounded-full">
              Explore my experience <span aria-hidden="true">↗</span>
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
