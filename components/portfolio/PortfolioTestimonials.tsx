import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Testimonial } from "@/lib/data";

export default function PortfolioTestimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <Reveal>
      <section className="py-24 px-4 md:px-6 bg-mild-gray/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.15em] uppercase text-brown">
              Client Words
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-8 border border-gray-200 bg-white rounded-lg"
              >
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
