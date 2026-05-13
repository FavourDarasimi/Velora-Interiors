import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { FeaturedProjectData } from "@/lib/data";

export default function FeaturedProject({
  project,
}: {
  project: FeaturedProjectData;
}) {
  return (
    <Reveal>
      <section className="py-24 px-4 md:px-6 bg-mild-gray/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.15em] uppercase text-brown">
              Featured Project
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
              The Story Behind the Space
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="px-2">
              <span className="text-xs tracking-[0.15em] uppercase text-brown">
                {project.category} &mdash; {project.location}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mt-3 mb-6">
                {project.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-10">
                {project.description}
              </p>

              <div className="space-y-8 mb-10">
                <div>
                  <span className="text-xs tracking-[0.15em] uppercase text-brown">
                    The Challenge
                  </span>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {project.story.challenge}
                  </p>
                </div>
                <div>
                  <span className="text-xs tracking-[0.15em] uppercase text-brown">
                    Our Solution
                  </span>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {project.story.solution}
                  </p>
                </div>
                <div>
                  <span className="text-xs tracking-[0.15em] uppercase text-brown">
                    The Result
                  </span>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {project.story.result}
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <span className="text-xs tracking-[0.15em] uppercase text-brown">
                  Materials Used
                </span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.materials.map((material) => (
                    <span
                      key={material}
                      className="px-4 py-2 border border-gray-200 text-sm text-gray-600 bg-white rounded-lg"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/portfolio/${project.slug}`}
                className="inline-block px-8 py-3 border border-foreground text-foreground text-sm tracking-[0.15em] uppercase hover:bg-foreground hover:text-white transition-colors duration-300 rounded-lg"
              >
                View Full Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
