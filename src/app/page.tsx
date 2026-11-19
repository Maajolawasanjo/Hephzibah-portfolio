import { FocusStrip } from "@/components/home/focus-strip";
import { Hero } from "@/components/home/hero";
import { WorkPlaceholder } from "@/components/home/work-placeholder";

/**
 * Phase 05 — real homepage hero with honest destinations for current navigation.
 * The selected work gallery is intentionally deferred to Phase 06.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FocusStrip />
      <WorkPlaceholder />
    </>
  );
}
