"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive reveal enhancer. Without JavaScript, reduced-motion support,
 * or IntersectionObserver, every element remains fully visible.
 */
export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (elements.length === 0) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.dataset.revealState = "visible";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.dataset.revealState = "visible";
            observer.unobserve(element);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    const viewportHeight = window.innerHeight;
    const anchor = window.location.hash
      ? document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
      : null;
    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      if (
        rect.top <= viewportHeight * 0.9 ||
        rect.bottom <= 0 ||
        (anchor !== null &&
          (anchor === element || anchor.contains(element) || element.contains(anchor)))
      ) {
        element.dataset.revealState = "visible";
      } else {
        element.dataset.revealState = "pending";
        observer.observe(element);
      }
    }

    const onPreferenceChange = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      observer.disconnect();
      elements.forEach((element) => {
        element.dataset.revealState = "visible";
      });
    };

    // A keyboard user can reach a link inside a yet-unrevealed section.
    // Reveal that section immediately rather than focusing an invisible link.
    const onFocusIn = (event: FocusEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const element = target.closest<HTMLElement>("[data-reveal]");
      if (!element) return;
      element.dataset.revealState = "visible";
      observer.unobserve(element);
    };

    document.addEventListener("focusin", onFocusIn);
    media.addEventListener("change", onPreferenceChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", onFocusIn);
      media.removeEventListener("change", onPreferenceChange);
      // Always restore content when navigating away or unmounting.
      elements.forEach((element) => {
        element.dataset.revealState = "visible";
      });
    };
  }, [pathname]);

  return null;
}
