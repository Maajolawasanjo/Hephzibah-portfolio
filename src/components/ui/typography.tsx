import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type HeadingSize = "display" | "xl" | "lg" | "md";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level: 1 | 2 | 3;
  size?: HeadingSize;
};

const headingStyles: Record<HeadingSize, string> = {
  display: "type-display",
  xl: "type-heading-xl",
  lg: "type-heading-lg",
  md: "type-heading-md",
};

/** Semantic heading level is independent of visual size. */
export function Heading({
  level,
  size = "lg",
  className,
  ...props
}: HeadingProps) {
  const Tag = level === 1 ? "h1" : level === 2 ? "h2" : "h3";
  return <Tag className={cn(headingStyles[size], className)} {...props} />;
}

type TextVariant = "lead" | "body" | "small" | "label";

export type TextProps = HTMLAttributes<HTMLElement> & {
  as?: "p" | "span";
  variant?: TextVariant;
  muted?: boolean;
};

const textStyles: Record<TextVariant, string> = {
  lead: "type-lead",
  body: "type-body",
  small: "type-small",
  label: "type-label",
};

export function Text({
  as: Component = "p",
  variant = "body",
  muted = false,
  className,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(textStyles[variant], muted && "text-muted", className)}
      {...props}
    />
  );
}
