import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

type Props = { title: string; live: string; code: string; dark?: boolean };

export default function ProjectLinks({ title, live, code, dark }: Props) {
  const primary = dark
    ? "bg-warm text-primary hover:bg-accent hover:text-ink"
    : "bg-primary text-warm hover:bg-olive-dark";
  const secondary = dark
    ? "border border-warm/60 text-warm hover:border-accent hover:bg-warm/10 hover:text-accent"
    : "border border-primary text-primary hover:bg-soft";
  const base =
    "group/link interactive-el inline-flex items-center gap-3 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open the ${title} live demo (opens in a new tab)`}
        className={`${base} shadow-sm ${primary}`}
      >
        <ExternalLink className="h-4 w-4" />
        <span>Live Demo</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
      </a>
      <a
        href={code}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} source code on GitHub (opens in a new tab)`}
        className={`${base} ${secondary}`}
      >
        <GithubIcon className="h-4 w-4" />
        <span>View Code</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
      </a>
    </div>
  );
}
