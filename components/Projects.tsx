import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ProjectLinks from "./ProjectLinks";

function TechList({ tech, dark }: { tech: string[]; dark?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
      {tech.map((t) => (
        <li
          key={t}
          className={`rounded-full border px-3 py-1 text-xs ${
            dark ? "border-accent/40 text-warm" : "border-line text-ink"
          }`}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function SplitCard({ p, reverse }: { p: Project; reverse?: boolean }) {
  return (
    <article className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-soft lg:col-span-7 ${
          reverse ? "order-1 lg:order-2" : ""
        }`}
      >
        <Image
          src={p.image.src}
          alt={p.image.alt}
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-left transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className={`flex flex-col justify-center lg:col-span-5 ${reverse ? "order-2 lg:order-1 lg:pr-6" : "lg:pl-6"}`}>
        <span className="mb-2 block text-xs uppercase tracking-widest text-muted">{p.category}</span>
        <h3 className="mb-4 font-serif text-3xl text-primary md:text-4xl">{p.title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-body md:text-base">{p.description}</p>
        <div className="mb-5"><TechList tech={p.tech} /></div>
        <Link
          href={`/projects/${p.slug}`}
          className="interactive-el group/more mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-accent-dark"
        >
          <span>Project details</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover/more:translate-x-1" />
        </Link>
        
        <ProjectLinks title={p.title} live={p.live} code={p.code} />
      </div>
    </article>
  );
}

function BannerCard({ p }: { p: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-olive-dark">
      <Image
        src={p.image.src}
        alt={p.image.alt}
        fill
        sizes="100vw"
        className="object-cover object-top saturate-[0.85] transition-transform duration-700 group-hover:scale-105 group-hover:saturate-100"
      />
      <div className="relative flex min-h-[34rem] flex-col justify-end bg-gradient-to-t from-olive-dark/95 via-olive-dark/60 to-olive-dark/10 p-6 sm:p-8 md:p-12 lg:min-h-[28rem]">
        <span className="mb-2 block text-xs uppercase tracking-widest text-accent">{p.category}</span>
        <h3 className="mb-4 font-serif text-3xl text-warm md:text-5xl">{p.title}</h3>
        <p className="mb-4 max-w-2xl text-sm leading-relaxed text-soft md:text-base">{p.description}</p>
        <Link
          href={`/projects/${p.slug}`}
          className="interactive-el group/more mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent hover:text-warm"
        >
          <span>Project details</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover/more:translate-x-1" />
        </Link>
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <TechList tech={p.tech} dark />
          <ProjectLinks title={p.title} live={p.live} code={p.code} dark />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="works" className="bg-warm py-32 text-ink">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              02 — Portfolio
            </span>
            <h2 className="font-serif text-4xl text-primary md:text-6xl">Selected Work</h2>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:mt-0 md:text-base">
            A selection of projects showcasing my approach to design, development, and problem-solving.
          </p>
        </div>
        <div className="space-y-24">
          {projects.map((p, i) =>
            i === projects.length - 1 && projects.length % 2 === 1 && i > 0 ? (
              <BannerCard key={p.slug} p={p} />
            ) : (
              <SplitCard key={p.slug} p={p} reverse={i % 2 === 1} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
