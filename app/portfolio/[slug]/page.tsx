import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/lib/data";
import CTA from "@/components/CTA";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = portfolioProjects
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
            <span className="text-xs tracking-[0.15em] uppercase text-brown-light">
              {project.category}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white mt-3 mb-2">
              {project.title}
            </h1>
            <p className="text-white/70 text-lg">{project.location}</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {project.story && (
        <section className="py-24 px-6 md:px-12 bg-mild-gray/50">
          <div className="max-w-3xl mx-auto space-y-16">
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-brown font-medium">
                The Challenge
              </span>
              <p className="text-gray-600 mt-4 leading-relaxed text-lg">
                {project.story.challenge}
              </p>
            </div>
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-brown font-medium">
                Our Solution
              </span>
              <p className="text-gray-600 mt-4 leading-relaxed text-lg">
                {project.story.solution}
              </p>
            </div>
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-brown font-medium">
                The Result
              </span>
              <p className="text-gray-600 mt-4 leading-relaxed text-lg">
                {project.story.result}
              </p>
            </div>
          </div>
        </section>
      )}

      {project.materials && (
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs tracking-[0.15em] uppercase text-brown font-medium">
              Materials Used
            </span>
            <div className="flex flex-wrap gap-3 mt-6">
              {project.materials.map((material) => (
                <span
                  key={material}
                  className="px-6 py-2.5 border border-gray-300 text-sm text-gray-600 tracking-wide rounded-lg"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.images.length > 1 && (
        <section className="py-24 px-6 md:px-12 bg-mild-gray/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title} — view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.15em] uppercase text-brown">
                Explore More
              </span>
              <h2 className="font-serif text-4xl text-foreground mt-3">
                Related Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/portfolio/${p.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="mt-5">
                    <span className="text-xs tracking-[0.15em] uppercase text-brown">
                      {p.category}
                    </span>
                    <h3 className="font-serif text-xl text-foreground mt-1">
                      {p.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{p.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto mb-16 px-6 md:px-12">
        <CTA />
      </div>
    </>
  );
}
