import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function CaseStudy() {
  return (
    <section id="project-detail" className="bg-soft py-32 text-ink">
      <div className="mx-auto max-w-5xl px-6">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          05 — Case Study
        </span>
        <h2 className="mb-6 max-w-2xl font-serif text-4xl text-primary md:text-6xl">
          Profolio: A Portfolio Template Marketplace
        </h2>
        <p className="mb-12 text-lg leading-relaxed text-muted">
          An in-depth look at how I built a portfolio platform showcasing ready-made website templates using
          Next.js, MongoDB, and Prisma to make template discovery simple, polished, and fast.
        </p>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-warm p-8">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">The Challenge</h3>
            <p className="text-sm leading-relaxed text-body">
              Finding a polished portfolio template is often only the first step. Users still need a simple way
              to explore different styles, understand what each template offers, and turn one into a
              personalized website.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-warm p-8">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">The Approach</h3>
            <p className="text-sm leading-relaxed text-body">
              I built Profolio as a template marketplace where users can explore ready-made designs and build a
              portfolio around their needs. I developed the responsive interface with Next.js and React, while
              MongoDB, Prisma, and NextAuth handled data, authentication, and user flows.
            </p>
          </div>
        </div>

        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-warm">
          <Image
            src="/images/image.png"
            alt="Profolio homepage and template gallery interface"
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="text-center">
          <a
            href="#works"
            className="interactive-el inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-accent-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Works</span>
          </a>
        </div>
      </div>
    </section>
  );
}
