import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { Heading, Text } from "@/components/ui/typography";

/**
 * Phase 03 component review page — NOT the portfolio homepage.
 * No real client projects, links, contact information or photographs are implied.
 */
export default function ComponentPreview() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Container>
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-rule py-6">
          <Text variant="label">Hephie Creatives</Text>
          <Text variant="label" muted>
            Component library / 03
          </Text>
        </header>
      </Container>

      <Section aria-labelledby="preview-intro">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-9">
              <Text variant="label" muted className="mb-7">
                Modern editorial minimalism
              </Text>
              <Heading level={1} size="display" id="preview-intro">
                Made to be
                <span className="block">distinctive.</span>
              </Heading>
            </div>
            <div className="lg:col-span-3">
              <Text variant="lead">
                Reusable, considered details for Hephzibah Uzorndu’s
                portfolio.
              </Text>
              <Text variant="small" muted className="mt-5">
                Development preview only. Final artwork, homepage copy,
                navigation and Alro font integration are still pending.
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
            eyebrow="01 / Interactions"
            title="Buttons & links."
            titleId="buttons-preview"
            description="One shared set of actions, with navigational links and genuine native button behavior."
          />
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#projects-preview" variant="primary">
              View card examples <span aria-hidden="true">↗</span>
            </Button>
            <Button href="#typography-preview" variant="secondary">
              Typography
            </Button>
            <Button href="#inverse-preview" variant="text">
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
            description="The heading system separates semantic levels from visual scale."
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
                Clean composition and expressive type help authentic projects
                stand out.
              </Text>
              <Text muted>
                Alro remains pending licensed webfont files. Until then the
                display stack uses a documented temporary fallback.
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
            eyebrow="03 / Portfolio components"
            title="Work takes the lead."
            titleId="projects-preview"
            description="No fabricated client work. These static cards demonstrate the missing-artwork state until approved projects arrive."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <ProjectCard
              title="Layout sample A"
              category="Component preview only — not a real project"
            />
            <ProjectCard
              title="Layout sample B"
              category="Component preview only — not a real project"
              ratio="wide"
            />
          </div>
        </Container>
      </Section>

      <Section tone="inverse" id="inverse-preview" aria-labelledby="inverse-heading">
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
                Cream typography on burgundy, created from the same semantic
                design tokens.
              </Text>
              <Button variant="primary" href="#preview-intro">
                Return to top ↑
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Container>
        <footer className="flex flex-wrap justify-between gap-4 py-8">
          <Text variant="small">Hephie Creatives / Component preview</Text>
          <Text variant="small" muted>
            Site-wide navigation follows in Phase 04
          </Text>
        </footer>
      </Container>
    </main>
  );
}
