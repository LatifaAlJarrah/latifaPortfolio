import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectLinks from "@/components/ProjectLinks";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  const title = `${p.title} — ${p.category}`;
  return {
    title,
    description: p.description.slice(0, 158).replace(/\s+\S*$/, "…"),
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { type: "article", url: `/projects/${p.slug}`, title, description: p.description },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      <Cursor />
      <Navbar />
      <main id="main" className="bg-warm pb-24 pt-32 text-ink">
        <article className="mx-auto max-w-5xl px-6">
          <Link
            href="/#works"
            className="interactive-el mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-accent-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>All projects</span>
          </Link>

          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {p.category}
          </span>
          <h1 className="mb-6 font-serif text-5xl text-primary md:text-7xl">{p.title}</h1>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-body md:text-lg">{p.description}</p>
          <div className="mb-12">
            <ProjectLinks title={p.title} live={p.live} code={p.code} />
          </div>

          <div className="relative mb-16 aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-soft">
            <Image
              src={p.image.src}
              alt={p.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <section aria-labelledby="features">
              <h2 id="features" className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
                What&apos;s inside
              </h2>
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-body">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="stack">
              <h2 id="stack" className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
                Built with
              </h2>
              <ul className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-ink">
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <Link
            href={`/projects/${next.slug}`}
            className="interactive-el group mt-20 flex items-center justify-between rounded-2xl border border-line bg-soft p-8 transition-colors hover:bg-primary hover:text-warm"
          >
            <div>
              <span className="mb-1 block text-xs uppercase tracking-widest opacity-70">Next project</span>
              <span className="font-serif text-3xl md:text-4xl">{next.title}</span>
            </div>
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
