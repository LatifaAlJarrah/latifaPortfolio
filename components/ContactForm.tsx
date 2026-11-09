"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = { kind: "idle" | "sending" | "ok" | "error"; message?: string };

const field =
  "w-full rounded-lg border border-accent/30 bg-primary/50 px-4 py-3 text-sm text-warm placeholder:text-soft/60 focus:border-accent focus:outline-none transition-colors";
const label = "mb-2 block text-xs uppercase tracking-widest text-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Request failed");
      form.reset();
      setStatus({ kind: "ok", message: "Message sent. Thank you, I'll get back to you soon!" });
    } catch (err) {
      setStatus({
        kind: "error",
        message: `${err instanceof Error ? err.message : "Something went wrong"}. You can also email me at ${site.email}.`,
      });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative mx-auto max-w-2xl space-y-6 rounded-2xl border border-accent/30 bg-olive-dark p-8 md:p-12"
    >
      {/* Honeypot: hidden from people, bots fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your Name</label>
          <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Your Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className={label}>Subject</label>
        <input id="subject" name="subject" required placeholder="Project Inquiry / Freelance" className={field} />
      </div>
      <div>
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" rows={5} required placeholder="Tell me about your vision..." className={`${field} resize-none`} />
      </div>

      <button
        type="submit"
        disabled={status.kind === "sending"}
        className="interactive-el w-full rounded-lg bg-warm py-4 text-xs font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.kind === "sending" ? "Sending…" : "Send Message"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`text-center text-sm ${status.kind === "error" ? "text-red-300" : "text-accent"}`}
      >
        {status.kind === "ok" || status.kind === "error" ? status.message : ""}
      </p>
    </form>
  );
}
