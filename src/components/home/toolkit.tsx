import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { EditorialImage } from "@/components/ui/editorial-image";
import { getApprovedTools } from "@/content/supporting";
import type { EditorialMediaKey } from "@/content/editorial-media";

const softwareImages: Record<string, EditorialMediaKey> = {
  "Adobe Photoshop": "photoshop",
  "Adobe Illustrator": "illustrator",
  PixelLab: "pixellab",
};

/** A quiet, ruled software index rather than three large UI cards. */
export function Toolkit() {
  const tools = getApprovedTools();
  if (!tools.length) return null;

  return (
    <Section id="toolkit" compact aria-labelledby="toolkit-heading" className="bg-brand-cream">
      <Container>
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)] lg:items-end lg:gap-16">
          <div className="min-w-0">
            <Text variant="label" muted className="mb-7">Tools of the craft</Text>
            <Heading id="toolkit-heading" level={2} size="lg">
              My creative tools.
            </Heading>
          </div>
          <Text variant="lead" className="max-w-[42ch]">
            The applications I use to bring visual ideas from concept to execution.
          </Text>
        </div>

        <ul className="mt-12 grid min-w-0 gap-x-10 sm:mt-16 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <li
              key={tool.name}
              className="flex min-w-0 items-center gap-5 border-t border-rule py-7 sm:py-9"
            >
              {softwareImages[tool.name] && (
                <EditorialImage
                  asset={softwareImages[tool.name]}
                  sizes="72px"
                  showCaption={false}
                  fit="contain"
                  className="w-[64px] shrink-0 sm:w-[72px]"
                  imageClassName="!border-0 !bg-transparent !p-0"
                />
              )}
              <div className="min-w-0">
                <Text variant="label" muted className="mb-2">
                  {String(index + 1).padStart(2, "0")}
                </Text>
                <h3 className="break-words font-display text-[clamp(1.15rem,1.65vw,1.5rem)] font-medium leading-tight tracking-[-0.03em]">
                  {tool.name}
                </h3>
                <Text variant="small" muted className="mt-2">{tool.category}</Text>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
