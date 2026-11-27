"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { site } from "@/config/site";
import { siteNavigation } from "@/config/navigation";

/**
 * V5 editorial navigation.
 * The header visually joins the burgundy homepage hero, then returns to the
 * light palette when the visitor reaches the cream portfolio sections.
 * The menu remains an accessible disclosure rather than a focus-trapping modal.
 */
export function SiteHeader({ contactReady }: { contactReady: boolean }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [heroIsVisible, setHeroIsVisible] = useState(true);
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const inverse = isHome && heroIsVisible;
  const contactHref = contactReady ? "/#contact" : "/#selected-work";
  const contactLabel = contactReady ? "Start a project" : "Explore work";

  useEffect(() => {
    if (!isHome) return;
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroIsVisible(entry.isIntersecting),
      { rootMargin: "-96px 0px -65% 0px", threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const closeAtDesktop = () => {
      if (media.matches) setIsOpen(false);
    };
    media.addEventListener("change", closeAtDesktop);
    return () => media.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    menuRef.current?.querySelector<HTMLAnchorElement>("a[href]")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setIsOpen(false);
      toggleRef.current?.focus();
    };

    const onFocusIn = (event: FocusEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("focusin", onFocusIn);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className={[
        "sticky top-0 z-50 border-b transition-colors duration-300 motion-reduce:transition-none",
        inverse
          ? "theme-inverse border-brand-cream/20"
          : "border-rule bg-brand-cream text-brand-burgundy",
      ].join(" ")}
    >
      <Container className="relative">
        <div className="flex min-h-[5.5rem] items-center justify-between gap-5 py-3 sm:min-h-24">
          <Link
            href="/"
            aria-label={site.brand + " — home"}
            className="group min-w-0 shrink-0 rounded-[var(--radius-control)]"
            onClick={() => setIsOpen(false)}
          >
            <span className="block font-display text-[clamp(1.25rem,2vw,1.55rem)] font-semibold leading-none tracking-[-0.055em]">
              {site.brand}
            </span>
            <span className="mt-2 block text-[0.65rem] font-medium uppercase tracking-[0.16em] opacity-80">
              {site.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-4 lg:flex xl:gap-7"
            aria-label="Primary navigation"
          >
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="motion-nav-link inline-flex min-h-11 items-center rounded-[var(--radius-control)] text-sm font-medium opacity-80 transition-opacity hover:opacity-100 focus-visible:opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={contactHref} size="sm" className="!min-h-11 !px-5">
              {contactLabel} <span aria-hidden="true">↗</span>
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-[var(--radius-control)] border border-current/50 px-3 text-sm font-medium lg:hidden"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              {isOpen ? "×" : "☰"}
            </span>
            <span>{isOpen ? "Close" : "Menu"}</span>
          </button>
        </div>

        <nav
          ref={menuRef}
          id={menuId}
          hidden={!isOpen}
          aria-label="Mobile navigation"
          className={
            isOpen
              ? "motion-menu-enter max-h-[calc(100dvh-5.5rem)] overflow-y-auto border-t border-current/20 pb-5 pt-3 lg:hidden"
              : "hidden"
          }
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
                  <span aria-hidden="true" className="text-xs opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-current/20 pt-5">
            <Button
              href={contactHref}
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              {contactLabel} <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
