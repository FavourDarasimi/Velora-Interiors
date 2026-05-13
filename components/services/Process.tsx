import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <Reveal>
      <section className="py-24 px-4 md:px-6 bg-foreground text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.15em] uppercase text-brown">
              Our Process
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3">
              How We Bring Your Vision to Life
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {processSteps.map((step) => (
              <div key={step.id} className="text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-brown flex items-center justify-center">
                  <span className="text-brown font-serif text-xl">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
