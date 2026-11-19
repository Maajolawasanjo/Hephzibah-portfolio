import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";
import { Services } from "@/components/home/services";

/**
 * Phase 09 homepage:
 * Hero, actual-work gallery architecture, four confirmed services,
 * value proposition and the founder's editorial biography.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <About />
    </>
  );
}
