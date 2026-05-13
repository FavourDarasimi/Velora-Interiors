import Reveal from "@/components/Reveal";
import { serviceDetails } from "@/lib/data";

export default function ServicesGrid() {
  return (
    <Reveal>
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.15em] uppercase text-gold">
              Our Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
              Comprehensive Design Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-5 leading-relaxed">
              Whether you&rsquo;re reimagining your home or designing a
              commercial landmark, we offer end-to-end interior design solutions
              tailored to your unique vision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceDetails.map((service) => (
              <div
                key={service.id}
                className="group p-10 bg-mild-gray/50 hover:bg-white border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-px bg-gold mb-6" />
                <h3 className="font-serif text-xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <span className="text-gold mt-0.5 shrink-0">&mdash;</span>
                      {feature}
                    </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
