import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.id}`} className="group block">
      <div className="relative overflow-hidden aspect-3/2 rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      </div>
      <div className="mt-5">
        <span className="text-xs tracking-[0.15em] uppercase text-brown">
          {project.category}
        </span>
        <h3 className="font-serif text-xl text-foreground mt-1">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
