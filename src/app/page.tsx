import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { Heading, Text } from "@/components/ui/typography";

/**
 * Phase 04 preview. This is NOT the final public homepage.
 * The global header, skip link, and footer are now owned by SiteShell.
 */
export default function LayoutPreview() {
  return (
    <div className="bg-paper text-ink">
      <Section aria-labelledby="preview-intro">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-9">
              <Text variant="label" muted className="mb-7">
                Phase 04 / Global layout
              </Text>
              <Heading level={1} size="display" id="preview-intro">
                Made to be
                <span className="block">distinctive.</span>
              </Heading>
            </div>
            <div className="lg:col-span-3">
              <Text variant="lead">
                A unified navigation and component system for Hephzibah
                Uzorndu’s portfolio.
              </Text>
              <Text variant="small" muted className="mt-5">
                This is a design and accessibility preview, not the final
                homepage. The Alro webfont and approved project imagery
                are still pending.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      <Container>
        <Divider />
      </Container>

      <Section aria-labelledby="buttons-preview" compact>
        <Container>
          <SectionHeading
            eyebrow="01 / UI components"
            title="Buttons & links."
            titleId="buttons-preview"
            description="Native interactions and working section links demonstrate the shared component foundation."
          />
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/#projects-preview" variant="primary">
              View card examples <span aria-hidden="true">↗</span>
            </Button>
            <Button href="/#typography-preview" variant="secondary">
              Typography
            </Button>
            <Button href="/#inverse-preview" variant="text">
              Inverse surface →
            </Button>
            <Button disabled>Disabled state</Button>
          </div>
        </Container>
      </Section>

      <Container>
        <Divider />
      </Container>

      <Section aria-labelledby="typography-preview" compact>
        <Container>
          <SectionHeading
            eyebrow="02 / Typography"
            title="Words with character."
            titleId="typography-preview"
            description="Semantic structure is independent from the visual type scale."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Heading level={3} size="xl">
                Type creates
                <span className="block">the rhythm.</span>
              </Heading>
            </div>
            <div className="space-y-5 lg:col-span-5">
              <Text variant="lead">
                Clean composition and expressive type help authentic
                projects stand out.
              </Text>
              <Text muted>
                Alro remains pending licensed webfont files. Until then,
                the display stack uses a temporary, documented fallback.
              </Text>
              <Text variant="label">Detail / Editorial</Text>
            </div>
          </div>
        </Container>
      </Section>

      <Container>
        <Divider />
      </Container>

      <Section aria-labelledby="projects-preview" compact>
        <Container>
          <SectionHeading
            eyebrow="03 / Project previews"
            title="Work takes the lead."
            titleId="projects-preview"
            description="These static sample cards are component previews only, not real client projects."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <ProjectCard
              title="Layout sample A"
              category="Component preview — not a real project"
            />
            <ProjectCard
              title="Layout sample B"
              category="Component preview — not a real project"
              ratio="wide"
            />
          </div>
        </Container>
      </Section>

      <Section
        tone="inverse"
        id="inverse-preview"
        aria-labelledby="inverse-heading"
      >
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Text variant="label" muted className="mb-6">
                04 / Inverse treatment
              </Text>
              <Heading level={2} size="xl" id="inverse-heading">
                A deliberate
                <span className="block">contrast.</span>
              </Heading>
            </div>
            <div className="space-y-6 lg:col-span-4">
              <Text variant="lead">
                Cream typography on burgundy from the same semantic
                design system.
              </Text>
              <Button variant="primary" href="/#preview-intro">
                Return to top ↑
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
