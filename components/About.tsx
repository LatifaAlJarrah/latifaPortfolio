import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-warm py-32 text-ink">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              04 — About Latifa
            </span>
            <h2 className="mb-8 font-serif text-4xl leading-[1.15] text-primary md:text-6xl">
              Curious by nature.
              <br />
              Focused on details.
            </h2>
            <div className="mb-8 h-px w-20 bg-line" />
            <p className="mb-6 text-base leading-relaxed text-body">
              I’m a front-end developer who enjoys turning ideas and designs into clean, responsive digital
              experiences. I work mainly with React and Next.js, with a strong focus on usability, reusable
              components, and thoughtful details.
            </p>
            <p className="mb-10 text-base leading-relaxed text-body">
              Beyond code, I’m curious about design, visual systems, and the small details that make an
              interface feel effortless. I’m always learning, experimenting, and looking for better ways to
              build for the web.
            </p>
            <a
              href="#contact"
              className="interactive-el group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-primary hover:text-accent-dark"
            >
              <span>Get in touch</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-soft shadow-sm">
                <Image
                  src="/images/latifa.jpeg"
                  alt="Latifa Al Jarrah smiling, working as a front-end developer"
                  fill
                  sizes="(min-width: 1024px) 50vw, 448px"
                  className="object-cover saturate-[0.85]"
                />
              </div>
              <figure className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-2xl bg-primary p-6 text-warm shadow-lg sm:block">
                <blockquote className="mb-1 font-serif text-lg italic">
                  “Good design isn&apos;t decoration — it&apos;s the difference between a user struggling and a
                  user not even noticing.”
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-widest text-accent">— Latifa</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
