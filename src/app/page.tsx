import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { Mentorship } from "@/components/home/mentorship";
import { MoreWork } from "@/components/home/more-work";
import { Process } from "@/components/home/process";
import { SelectedWork } from "@/components/home/selected-work";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { Toolkit } from "@/components/home/toolkit";

/**
 * Phase 10: process, creative disciplines and one-on-one mentorship appear
 * alongside existing work, services, and About content.
 * Testimonials and More Work are gated behind verified actual content.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <Process />
      <Toolkit />
      <Mentorship />
      <Testimonials />
      <MoreWork />
    </>
  );
}
