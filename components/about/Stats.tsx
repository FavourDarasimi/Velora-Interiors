import Reveal from "@/components/Reveal";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <Reveal>
      <section className="py-24 px-6 bg-foreground text-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs tracking-[0.15em] uppercase text-gold">
            By the Numbers
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3 mb-16">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <div key={stat.id}>
                <p className="font-serif text-4xl md:text-5xl text-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-white/60 text-sm tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
