import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Heading, Text } from "./typography";

export type SectionHeadingProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> & {
  title: ReactNode;
  eyebrow?: string;
  description?: ReactNode;
  action?: ReactNode;
  titleId?: string;
  level?: 2 | 3;
};

/** A flexible editorial heading without imposing a grid on every section. */
export function SectionHeading({
  title,
  eyebrow,
  description,
  action,
  titleId,
  level = 2,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end",
        className
      )}
      {...props}
    >
      <div className="min-w-0">
        {eyebrow && (
          <Text variant="label" muted className="mb-5">
            {eyebrow}
          </Text>
        )}
        <Heading level={level} size={level === 2 ? "lg" : "md"} id={titleId}>
          {title}
        </Heading>
        {description && (
          <Text variant="lead" muted className="mt-5">
            {description}
          </Text>
        )}
      </div>
      {action && <div className="md:justify-self-end">{action}</div>}
    </div>
  );
}
