import Reveal from "@/components/Reveal";
import { values } from "@/lib/data";

export default function Values() {
  return (
    <Reveal>
      <section className="py-24 px-6 bg-mild-gray/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.15em] uppercase text-gold">
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value) => (
              <div key={value.id} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-gold text-2xl font-serif">✦</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
