import Reveal from "@/components/Reveal";

export default function Stats() {
  return (
    <Reveal>
      <section className="py-24 px-4 md:px-6 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.15em] uppercase text-gold">
            By the Numbers
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3 mb-12">
            Our Impact
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Over{" "}
            <span className="text-gold font-serif text-2xl md:text-3xl">
              12+
            </span>{" "}
            years, we have completed more than{" "}
            <span className="text-gold font-serif text-2xl md:text-3xl">
              200+
            </span>{" "}
            thoughtfully designed spaces across residential and commercial
            interiors — maintaining a{" "}
            <span className="text-gold font-serif text-2xl md:text-3xl">
              98%
            </span>{" "}
            client satisfaction rate and earning{" "}
            <span className="text-gold font-serif text-2xl md:text-3xl">
              15+
            </span>{" "}
            industry awards along the way.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
