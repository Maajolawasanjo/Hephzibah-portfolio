import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import { Mentorship } from "@/components/home/mentorship";
import { MoreWork } from "@/components/home/more-work";
import { ProfessionalEducation, ProfessionalExperience, ProfessionalSkills } from "@/components/home/professional-profile";
import { Process } from "@/components/home/process";
import { SelectedWork } from "@/components/home/selected-work";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { Toolkit } from "@/components/home/toolkit";

/** V3: retain every substantive main section; remove noisy internal subdivisions. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <ProfessionalExperience />
      <ProfessionalSkills />
      <Toolkit />
      <Services />
      <ProfessionalEducation />
      <Process />
      <Mentorship />
      <Testimonials />
      <MoreWork />
      <Contact />
    </>
  );
}
