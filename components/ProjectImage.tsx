import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = { project: Project; sizes: string; className?: string; priority?: boolean };

/** Project screenshot, or a typographic panel when no screenshot is available. */
export default function ProjectImage({ project, sizes, className = "", priority }: Props) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
      />
    );
  }
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-olive-dark p-8 text-center">
      <span className="text-xs uppercase tracking-[0.3em] text-accent-light">{project.category}</span>
      <span className="font-serif text-4xl leading-tight text-warm md:text-6xl">{project.title}</span>
    </div>
  );
}
