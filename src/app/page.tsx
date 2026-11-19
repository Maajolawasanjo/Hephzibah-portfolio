import { FocusStrip } from "@/components/home/focus-strip";
import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";

/**
 * Phase 06 — actual selected-work gallery architecture, populated only
 * when approved real artwork and project details are provided.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FocusStrip />
      <SelectedWork />
    </>
  );
}
