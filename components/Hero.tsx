import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-warm pt-20">
      <div className="flex w-full items-center justify-center pb-28">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="flex w-full flex-col items-center gap-8 lg:flex-row">
            <div className="text-center lg:w-1/2 lg:text-left">
              <div
                className="rise mb-6 inline-block rounded-full border border-line bg-soft/80 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted backdrop-blur"
              >
                Front-End Developer
              </div>
              <h1
                className="rise mb-6 text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-6xl lg:text-7xl"
                style={{ animationDelay: "120ms" }}
              >
                Building digital experiences that feel{" "}
                <span className="font-serif italic text-primary">human</span> — with React &amp; Next.js.
              </h1>
              <p
                className="rise mx-auto mb-6 max-w-xl text-sm font-light leading-relaxed text-body md:text-base lg:mx-0"
                style={{ animationDelay: "240ms" }}
              >
                I&apos;m Latifa Al Jarrah. I build responsive, accessible web experiences with React, Next.js,
                TypeScript, and modern front-end technologies.
              </p>
              <div
                className="rise flex flex-col items-center justify-center gap-4 sm:flex-row lg:items-start lg:justify-start"
                style={{ animationDelay: "360ms" }}
              >
                <a
                  href="#works"
                  className="interactive-el group flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-widest text-warm transition-all duration-300 hover:bg-olive-dark sm:w-auto"
                >
                  <span>View My Work</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="interactive-el w-full rounded-full border border-primary px-8 py-4 text-center text-xs font-semibold uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-warm sm:w-auto"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:w-1/2 lg:justify-end">
              <Image
                src="/images/latifa.jpeg"
                alt="Portrait of Latifa Al Jarrah, front-end developer"
                width={1040}
                height={1300}
                priority
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 384px, 288px"
                className="z-20 w-72 rounded-2xl border border-line object-cover shadow-lg mix-blend-multiply md:w-96 lg:w-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
