import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary bg-olive-dark py-20 text-warm">
      <div
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center opacity-[0.03]"
        aria-hidden="true"
      >
        <span className="font-serif text-[22vw] tracking-wider">LATIFA</span>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between md:flex-row md:items-end">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Front-End Developer
            </span>
            <p className="font-serif text-4xl md:text-7xl">
              LET&apos;S WORK
              <br />
              TOGETHER.
            </p>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="interactive-el mt-8 inline-block rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-widest text-warm transition-all duration-300 hover:bg-accent hover:text-ink md:mt-0"
          >
            Start a Conversation
          </a>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary pt-8 text-xs text-soft/80 md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <nav className="flex gap-6 uppercase tracking-widest" aria-label="Footer">
            {[["/#home", "Home"], ["/#about", "About"], ["/#works", "Works"], ["/#contact", "Contact"]].map(([h, l]) => (
              <a key={h} href={h} className="transition-colors hover:text-accent">{l}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
