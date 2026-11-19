"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { site } from "@/config/site";
import { siteNavigation } from "@/config/navigation";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Keep keyboard users inside the expanded mobile navigation.
    menuRef.current?.querySelector<HTMLAnchorElement>("a[href]")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = Array.from(
        headerRef.current?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])"
        ) ?? []
      ).filter((element) => element.getClientRects().length > 0);

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-rule bg-brand-cream text-brand-burgundy"
    >
      <Container className="relative">
        <div className="flex min-h-20 items-center justify-between gap-5 py-3">
          <Link
            href="/"
            aria-label={site.brand + " — home"}
            className="group min-w-0 shrink-0 rounded-[var(--radius-control)]"
            onClick={() => setIsOpen(false)}
          >
            <span className="block font-display text-[clamp(1.1rem,2vw,1.4rem)] font-bold leading-none tracking-[-0.045em]">
              {site.brand}
            </span>
            <span className="mt-1.5 block text-[0.625rem] font-medium uppercase tracking-[0.13em]">
              {site.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-6 md:flex lg:gap-8"
            aria-label="Primary navigation"
          >
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[var(--radius-control)] text-sm font-medium decoration-1 underline-offset-8 transition-opacity duration-[var(--motion-fast)] hover:underline motion-reduce:transition-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/#selected-work" size="sm">
              Explore work <span aria-hidden="true">↗</span>
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((value) => !value)}
            className="flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-[var(--radius-control)] border border-brand-burgundy px-3 text-sm font-medium md:hidden"
          >
            <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
            <span>{isOpen ? "Close" : "Menu"}</span>
          </button>
        </div>

        {isOpen && (
          <nav
            ref={menuRef}
            id={menuId}
            aria-label="Mobile navigation"
            className="border-t border-rule pb-5 pt-3 md:hidden"
          >
            <ul className="flex flex-col">
              {siteNavigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex min-h-12 items-center justify-between gap-4 rounded-[var(--radius-control)] py-2 text-lg font-medium"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className="text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-rule pt-5">
              <Button
                href="/#selected-work"
                variant="primary"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Explore work <span aria-hidden="true">↗</span>
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
