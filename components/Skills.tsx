import { marqueeSkills, skills } from "@/data/projects";

export default function Skills() {
  const row = (
    <div className="flex animate-marquee items-center gap-8" style={{ width: "max-content" }}>
      {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
        <span
          key={`${s}-${i}`}
          className={`px-6 text-2xl md:text-4xl ${
            i % 2 === 0 ? "font-serif italic text-accent-light" : "font-light tracking-wider"
          }`}
        >
          {s}
        </span>
      ))}
    </div>
  );
  return (
    <section id="skills" className="overflow-hidden bg-primary py-28 text-warm">
      <div className="mx-auto mb-16 max-w-7xl px-6 text-center">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
          03 — Expertise
        </span>
        <h2 className="font-serif text-4xl md:text-5xl">Tools I Build With</h2>
      </div>

      {/* Decorative marquee: the grid below carries the same information */}
      <div className="relative flex w-full overflow-hidden whitespace-nowrap border-y border-accent/20 py-4" aria-hidden="true">
        {row}
      </div>

      <ul className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 px-6 sm:grid-cols-3 md:grid-cols-5">
        {skills.map((s) => (
          <li
            key={s.label}
            className="rounded-xl border border-accent/30 p-4 text-center transition-all duration-300 hover:bg-warm hover:text-primary"
          >
            <span className="block text-xs font-medium uppercase tracking-widest">{s.label}</span>
            <span className="mt-1 block font-serif text-sm">{s.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
