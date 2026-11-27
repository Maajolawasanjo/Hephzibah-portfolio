import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: "default" | "inverse";
  compact?: boolean;
};

/** Semantic section with shared responsive vertical rhythm. */
export function Section({
  tone = "default",
  compact = false,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "layout-section",
        compact && "layout-section--support",
        tone === "inverse" && "theme-inverse",
        className
      )}
      {...props}
    />
  );
}
