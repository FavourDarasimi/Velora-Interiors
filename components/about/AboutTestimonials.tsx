import Reveal from "@/components/Reveal";
import TestimonialCard from "@/components/Testimonial";
import { testimonials } from "@/lib/data";

export default function AboutTestimonials() {
  return (
    <Reveal>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.15em] uppercase text-gold">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
              Trusted by Our Clients
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
