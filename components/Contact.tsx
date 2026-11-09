import { Mail } from "lucide-react";
import { site } from "@/lib/site";
import ContactForm from "./ContactForm";
import { GithubIcon, LinkedinIcon } from "./icons";

const linkCls = "interactive-el flex items-center gap-2 transition-colors hover:text-accent";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-primary py-32 text-warm">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            06 — Get in touch
          </span>
          <h2 className="mb-4 font-serif text-4xl md:text-6xl">Let&apos;s create something meaningful.</h2>
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-soft md:text-base">
            Have a project, idea or opportunity in mind? I&apos;d love to hear about it. Currently open to
            exciting opportunities and freelance projects.
          </p>
        </div>

        <ContactForm />

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-soft">
          <a href={`mailto:${site.email}`} className={linkCls}>
            <Mail className="h-4 w-4 text-accent" />
            <span>{site.email}</span>
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>
            <LinkedinIcon className="h-4 w-4 text-accent" />
            <span>LinkedIn</span>
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className={linkCls}>
            <GithubIcon className="h-4 w-4 text-accent" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
