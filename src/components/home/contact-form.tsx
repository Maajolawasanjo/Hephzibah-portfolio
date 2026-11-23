"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/typography";
import { site } from "@/config/site";
import { buildInquiryMailto, isValidContactEmail } from "@/lib/contact";

export function ContactForm({ recipient }: { recipient: string | null }) {
  const [composerOpened, setComposerOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!recipient || !isValidContactEmail(recipient)) return;

    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") ?? "").trim().slice(0, 100);
    const senderEmail = String(values.get("email") ?? "").trim().slice(0, 254);
    const service = String(values.get("service") ?? "").trim().slice(0, 100);
    const message = String(values.get("message") ?? "").trim().slice(0, 3000);

    if (!name || !isValidContactEmail(senderEmail) || !service || !message) {
      return;
    }

    const url = buildInquiryMailto(recipient, {
      name,
      senderEmail,
      service,
      message,
    });

    // Mailto opens the visitor's email composer. It does NOT send an email.
    window.location.href = url;
    setComposerOpened(true);
  }

  const fieldClass =
    "motion-field w-full min-h-12 rounded-[var(--radius-control)] border border-rule bg-paper px-4 py-3 text-ink outline-offset-4 placeholder:text-muted focus-visible:outline-2";
  const labelClass = "mb-2 block text-base font-medium";

  return (
    <form onSubmit={onSubmit}>
      <fieldset disabled={!recipient} aria-describedby={!recipient ? "contact-status" : undefined} className="space-y-6">
        <legend className="sr-only">Professional enquiry details</legend>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="inquiry-name" className={labelClass}>
            Your name
          </label>
          <input
            id="inquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            className={fieldClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="inquiry-email" className={labelClass}>
            Your email address
          </label>
          <input
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiry-service" className={labelClass}>
          What would you like help with?
        </label>
        <select
          id="inquiry-service"
          name="service"
          required
          defaultValue=""
          className={fieldClass}
        >
          <option value="" disabled>
            Choose an area of interest
          </option>
          {site.services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="inquiry-message" className={labelClass}>
          Tell me about your project
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={6}
          minLength={10}
          maxLength={3000}
          required
          className={fieldClass + " resize-y"}
          placeholder="A little about your business, your goals, and what you have in mind…"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-5 border-t border-rule pt-6">
        <div className="max-w-[43ch]">
          <Text variant="small" muted>
            This opens your email application with a prepared message.
            Review and send it there. This website does not store or
            submit your information.
          </Text>
        </div>
        <Button type="submit" size="lg" disabled={!recipient}>
          Prepare my inquiry <span aria-hidden="true">↗</span>
        </Button>
      </div>

      </fieldset>

      {composerOpened && (
        <p role="status" className="text-sm leading-relaxed">
          Your email application may have opened a draft. Please send it
          from there; this form has not sent anything automatically.
          If no email app opened, use the email address shown alongside
          this form.
        </p>
      )}
    </form>
  );
}
