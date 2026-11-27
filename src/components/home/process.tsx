import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { processSteps } from "@/content/supporting";

/** An open three-part ritual composition instead of a grid of step cards. */
export function Process() {
  return (
    <Section
      tone="inverse"
      id="process"
      aria-labelledby="process-heading"
      className="overflow-hidden"
    >
      <Container>
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
          <div className="flex justify-start lg:justify-center">
            <div className="flex aspect-square w-[clamp(11rem,18vw,17rem)] shrink-0 flex-col items-center justify-center rounded-full border border-brand-cream/45">
              <span className="font-display text-[clamp(4rem,7vw,7rem)] font-light leading-none tracking-[-0.07em]">
                {String(processSteps.length).padStart(2, "0")}
              </span>
              <span className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-brand-cream/75">
                Creative stages
              </span>
            </div>
          </div>

          <div className="min-w-0">
            <Text variant="label" className="mb-7 !text-brand-cream/75">
              The creative process
            </Text>
            <Heading
              id="process-heading"
              level={2}
              size="lg"
              className="max-w-[10ch] !font-normal"
            >
              My design process.
            </Heading>
            <Text variant="lead" className="mt-8 max-w-[35ch] !text-brand-cream/85">
              Good design begins with listening and becomes stronger through
              thoughtful exploration, feedback and refinement.
            </Text>
          </div>

          <ol className="min-w-0 border-t border-brand-cream/35">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="grid min-w-0 grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-brand-cream/35 py-5 sm:py-6"
              >
                <span className="pt-1 text-xs font-medium text-brand-cream/70">{step.number}</span>
                <div className="min-w-0">
                  <h3 className="font-display text-[clamp(1.35rem,2.2vw,2rem)] font-normal leading-tight tracking-[-0.04em]">
                    {step.title}
                  </h3>
                  <Text variant="small" className="mt-2 max-w-[40ch] !text-brand-cream/75">
                    {step.summary}
                  </Text>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
