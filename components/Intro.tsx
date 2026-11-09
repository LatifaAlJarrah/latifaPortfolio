const pillars = [
  { title: "Approach", text: "I focus on understanding the user, the purpose behind each interface, and the details that make an experience intuitive and easy to use." },
  { title: "Development", text: "I turn designs into responsive, reusable interfaces using React, Next.js, TypeScript, and modern front-end practices." },
  { title: "Quality", text: "I care about clean code, responsive layouts, accessibility, performance, and consistent experiences across devices." },
];

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-soft py-32 text-ink">
      <div className="mx-auto max-w-5xl px-6">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          01 — Introduction
        </span>
        <blockquote>
          <p className="font-serif text-4xl leading-[1.15] md:text-6xl lg:text-7xl">
            “I build thoughtful interfaces where design meets technology.”
          </p>
        </blockquote>
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-line pt-12 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">{p.title}</h3>
              <p className="text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
