import { site } from "@/config/site";

export type ServiceDetail = {
  id: string;
  number: string;
  title: string;
  summary: string;
  suitableFor: string;
  possibleDeliverables: readonly string[];
};

/**
 * Approved service names come from the brand identity in site.ts.
 * Supporting copy describes potential scope, not fixed deliverables or
 * outcome guarantees. Final service packages need owner approval.
 */
export const serviceDetails: readonly ServiceDetail[] = [
  {
    id: "logo-design",
    number: "01",
    title: site.services[0],
    summary:
      "A distinct visual mark designed to express what a business stands for and work across everyday brand touchpoints.",
    suitableFor:
      "New businesses finding their visual direction or existing brands looking to refine their mark.",
    possibleDeliverables: [
      "Discovery and visual research",
      "Logo exploration and refinement",
      "Primary and alternate logo arrangements",
    ],
  },
  {
    id: "brand-identity",
    number: "02",
    title: site.services[1],
    summary:
      "A coordinated visual language that brings personality and consistency to how a brand presents itself.",
    suitableFor:
      "Businesses that need their logo, typography, colors and visual applications to feel connected.",
    possibleDeliverables: [
      "Identity concept and visual direction",
      "Color and typography guidance",
      "Brand applications and usage guidelines",
    ],
  },
  {
    id: "social-media-branding",
    number: "03",
    title: site.services[2],
    summary:
      "An intentional social presence, with a recognizable style that carries the brand story from one post to the next.",
    suitableFor:
      "Businesses and creators who want a more cohesive look across their social channels.",
    possibleDeliverables: [
      "Social profile visual direction",
      "Reusable post and story layouts",
      "Campaign and announcement templates",
    ],
  },
  {
    id: "photo-video",
    number: "04",
    title: site.services[3],
    summary:
      "Photography and video that help people see the personality, people and experiences behind a brand.",
    suitableFor:
      "Brands seeking original visual content for websites, launches and social storytelling.",
    possibleDeliverables: [
      "Visual concept and shot planning",
      "Brand or product photography",
      "Short-form video and content editing",
    ],
  },
];

export const serviceValue = {
  eyebrow: "The thinking behind the work",
  heading: "Clarity first. Character in every detail.",
  description:
    "The goal is to create visuals that feel true to the business, make sense to its audience, and stay consistent wherever the brand appears.",
} as const;
