import { About } from "@/components/home/about";
import { FocusStrip } from "@/components/home/focus-strip";
import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";

/**
 * Phase 08 homepage: introduction, capability index, curated-work
 * architecture, and Hephzibah's editorial biography and philosophy.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FocusStrip />
      <SelectedWork />
      <About />
    </>
  );
}
