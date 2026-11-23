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

export function Toolkit() {
  const tools = getApprovedTools();
  if (!tools.length) return null;
  return (
    <Section id="toolkit" compact aria-labelledby="toolkit-heading">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-9">
          <Heading id="toolkit-heading" level={2} size="lg">
            My creative tools.
          </Heading>
          <Text className="max-w-[47ch]">
            The applications I use to bring visual ideas from concept to execution.
          </Text>
        </div>
        <ul className="mt-9 grid gap-4 sm:grid-cols-3">
          {tools.map((tool) => (
            <li key={tool.name} className="flex min-w-0 items-center gap-5 rounded-xl bg-soft p-5 md:flex-col md:items-start md:gap-4 md:p-7">
              {softwareImages[tool.name] && (
                <EditorialImage
                  asset={softwareImages[tool.name]}
                  sizes="88px"
                  showCaption={false}
                  fit="contain"
                  className="w-[72px] shrink-0 md:w-[88px]"
                  imageClassName="!border-0 !bg-transparent !p-0"
                />
              )}
              <div>
                <h3 className="text-lg font-bold leading-tight">{tool.name}</h3>
                <Text variant="small" className="mt-1" muted>{tool.category}</Text>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
