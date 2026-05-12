import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { projects, services, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs tracking-[0.15em] uppercase text-gold">
                About
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3 mb-5">
                Crafting Luxury Spaces
              </h2>
              <div className="w-12 h-px bg-gold mx-auto mb-6" />
              <p className="text-gray-500 leading-relaxed">
                At Veylora, we believe every space tells a story. Our
                award-winning team blends contemporary minimalism with timeless
                elegance to create interiors that inspire and endure. From
                private residences to commercial landmarks, we bring vision to
                life.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-24 px-6 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="text-xs tracking-[0.15em] uppercase text-gold">
                Portfolio
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
                Featured Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(0, 4).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="text-xs tracking-[0.15em] uppercase text-gold">
                Services
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
                What We Offer
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-24 px-6 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="text-xs tracking-[0.15em] uppercase text-gold">
                Testimonials
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
                What Our Clients Say
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

      <Reveal>
        <div className="max-w-7xl mx-auto my-10 ">
          <CTA />
        </div>
      </Reveal>
    </>
  );
}
