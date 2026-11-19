import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import { Mentorship } from "@/components/home/mentorship";
import { MoreWork } from "@/components/home/more-work";
import { Process } from "@/components/home/process";
import { SelectedWork } from "@/components/home/selected-work";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { Toolkit } from "@/components/home/toolkit";

/**
 * Phase 11: conversion destination added after the supporting sections.
 * Testimonials and More Work remain unpublished until approved.
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
      <Contact />
    </>
  );
}
