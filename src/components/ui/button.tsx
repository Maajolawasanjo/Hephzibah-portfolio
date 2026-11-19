import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type LinkButtonProps = SharedProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "children" | "href"
  > & {
    href: string;
  };

export type ButtonProps = NativeButtonProps | LinkButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary: "border border-transparent bg-cta text-cta-text hover:opacity-90",
  secondary: "border border-ink bg-transparent text-ink hover:bg-soft",
  text: "border border-transparent bg-transparent text-ink hover:underline underline-offset-4",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-base",
};

/**
 * Accessible anchor or native button with identical styling.
 * - Give href for navigation.
 * - Omit href for actions; defaults to type="button".
 * - For submit actions, set type="submit".
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex max-w-full items-center justify-center gap-2 rounded-[var(--radius-control)] font-medium",
    "transition-[opacity,background-color,transform] duration-[var(--motion-fast)] ease-[var(--motion-ease)]",
    "motion-reduce:transition-none active:translate-y-px",
    "disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      {...buttonProps}
      type={buttonProps.type ?? "button"}
      className={classes}
    >
      {children}
    </button>
  );
}
