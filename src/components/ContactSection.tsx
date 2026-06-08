"use client";

import { useState } from "react";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const inputClass =
  "w-full rounded-md border border-surface-2/30 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-shell">
      <SectionHeader kicker="GET IN TOUCH" title="Start a conversation" />

      <div className="mx-auto mt-7 max-w-[620px]">
        {submitted ? (
          <Card className="flex items-center gap-3 text-accent">
            <CheckCircleIcon size={22} weight="bold" aria-hidden />
            <div>
              <p className="font-semibold">Message sent!</p>
              <p className="mt-0.5 text-sm text-muted">Thanks for reaching out — I&apos;ll get back to you soon.</p>
            </div>
          </Card>
        ) : (
          <Card>
            <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Contact form">
              <div className="grid grid-cols-2 gap-4">
                <label className="grid gap-1.5 text-sm font-medium text-foreground/80">
                  First Name
                  <input
                    type="text"
                    name="firstname"
                    required
                    autoComplete="given-name"
                    placeholder="First name"
                    className={inputClass}
                  />
                </label>

                <label className="grid gap-1.5 text-sm font-medium text-foreground/80">
                  Last Name
                  <input
                    type="text"
                    name="lastname"
                    required
                    autoComplete="family-name"
                    placeholder="Last name"
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="grid gap-1.5 text-sm font-medium text-foreground/80">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  className={inputClass}
                />
              </label>

              <label className="grid gap-1.5 text-sm font-medium text-foreground/80">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a bit about your project..."
                  className={inputClass}
                />
              </label>

              <Button type="submit" variant="primary" className="w-fit">
                Send message
              </Button>
            </form>
          </Card>
        )}
      </div>
    </section>
  );
}
