import Reveal from "@/components/Reveal";

export default function Philosophy() {
  return (
    <Reveal>
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs tracking-[0.15em] uppercase text-gold">
            Our Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3 mb-5">
            The Art of Refined Living
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-gray-500 leading-relaxed mb-6">
            At Veylora, we believe interior design is more than decoration
            &mdash; it is an expression of identity. Every space we create is a
            careful balance of form and feeling, informed by the way light
            moves, materials age, and people inhabit a room.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Our approach is rooted in quiet luxury: refined simplicity,
            impeccable craftsmanship, and a deep respect for the architectural
            narrative of each space. We don&rsquo;t follow trends &mdash; we
            create enduring environments that age gracefully.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
