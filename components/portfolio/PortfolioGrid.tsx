import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { PortfolioProject } from "@/lib/data";

export default function PortfolioGrid({
  projects,
}: {
  projects: PortfolioProject[];
}) {
  if (projects.length === 0) {
    return (
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center py-16">
          <p className="text-gray-400 text-lg">No projects in this category yet.</p>
        </div>
      </section>
    );
  }

  return (
    <Reveal>
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden aspect-4/3 rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-xs tracking-[0.15em] uppercase text-brown-light">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl text-white mt-1">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">
                      {project.location}
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:hidden">
                  <span className="text-xs tracking-[0.15em] uppercase text-brown">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-lg text-foreground mt-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
