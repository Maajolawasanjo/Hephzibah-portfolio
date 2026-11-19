/**
 * Only a syntactically valid, explicitly approved email address can receive
 * public inquiries. The address is configured at build time, not committed.
 */
export function isValidContactEmail(value: string): boolean {
  const email = value.trim();
  return (
    email.length <= 254 &&
    email.length >= 6 &&
    !/[\r\n]/.test(email) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

export function getPublicContactEmail(): string | null {
  if (process.env.CONTACT_EMAIL_APPROVED !== "true") return null;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";
  return isValidContactEmail(email) ? email : null;
}

export type InquiryDetails = {
  name: string;
  senderEmail: string;
  service: string;
  message: string;
};

/** An email draft, not a server-side submission or successful delivery. */
export function buildInquiryMailto(
  recipient: string,
  details: InquiryDetails
): string {
  const subject = "Hephie Creatives inquiry — " + details.service.trim();
  const body = [
    "Hello Hephzibah,",
    "",
    details.message.trim(),
    "",
    "Project interest: " + details.service.trim(),
    "Name: " + details.name.trim(),
    "Reply-to email: " + details.senderEmail.trim(),
  ].join("\n");

  return (
    "mailto:" +
    recipient +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body)
  );
}
