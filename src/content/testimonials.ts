/**
 * Only publish genuine, client-approved testimony with explicit attribution
 * permission. There are no authenticated testimonials in this project yet.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  context?: string;
  approved: boolean;
  attributionPermission: boolean;
};

export const testimonials: readonly Testimonial[] = [];

export function getApprovedTestimonials(): Testimonial[] {
  return testimonials
    .filter(
      (item) =>
        item.approved &&
        item.attributionPermission &&
        Boolean(item.quote.trim() && item.name.trim() && item.role.trim())
    )
    .slice(0, 3);
}
