import { Download } from "lucide-react";
import { education, experience, languages, training } from "@/data/resume";
import { site } from "@/lib/site";

export default function Experience() {
  return (
    <section id="experience" className="bg-soft py-32 text-ink">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              05 — Experience
            </span>
            <h2 className="font-serif text-4xl text-primary md:text-6xl">Where I&apos;ve worked &amp; learned</h2>
          </div>
          <a
            href={site.cv}
            download
            className="interactive-el group inline-flex items-center gap-3 self-start rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest text-warm transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive-dark md:self-auto"
          >
            <Download className="h-4 w-4" />
            <span>Download CV</span>
            <span className="text-[10px] font-normal opacity-70">PDF</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="mb-8 text-xs font-semibold uppercase tracking-widest text-primary">Experience</h3>
            <ol className="relative space-y-12 border-l border-line pl-8">
              {experience.map((job) => (
                <li key={job.org} className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-primary ${
                      job.current ? "bg-primary" : "bg-soft"
                    }`}
                  />
                  <p className="mb-1 text-xs uppercase tracking-widest text-muted">
                    {job.period}
                    {job.current && (
                      <span className="ml-3 rounded-full bg-primary px-2 py-0.5 text-[10px] text-warm">Current</span>
                    )}
                  </p>
                  <h4 className="font-serif text-2xl text-primary md:text-3xl">{job.role}</h4>
                  <p className="mb-4 text-sm font-medium text-ink">{job.org}</p>
                  <ul className="space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-body">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-dark" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-10 lg:col-span-5">
            <div className="rounded-2xl border border-line bg-warm p-8">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Education</h3>
              <p className="mb-1 text-xs uppercase tracking-widest text-muted">{education.period}</p>
              <h4 className="font-serif text-2xl text-primary">{education.degree}</h4>
              <p className="mt-1 text-sm text-body">{education.school}</p>
            </div>

            <div className="rounded-2xl border border-line bg-warm p-8">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Training</h3>
              <p className="mb-1 text-xs uppercase tracking-widest text-muted">{training.period}</p>
              <h4 className="font-serif text-2xl text-primary">{training.title}</h4>
              <p className="mt-1 text-sm font-medium text-ink">{training.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-body">{training.text}</p>
            </div>

            <div className="rounded-2xl border border-line bg-warm p-8">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Languages</h3>
              <ul className="space-y-2">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-baseline justify-between border-b border-line pb-2 text-sm last:border-0">
                    <span className="font-medium text-ink">{l.name}</span>
                    <span className="text-body">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
