import Reveal from "@/components/Reveal";

export default function PortfolioIntro() {
  return (
    <Reveal>
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs tracking-[0.15em] uppercase text-brown">
            Our Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-6">
            Every Space Tells a Story
          </h2>
          <div className="w-12 h-px bg-brown mx-auto mb-8" />
          <p className="text-gray-500 leading-relaxed text-lg">
            We believe great design is deeply personal. Each project in our
            portfolio reflects a unique collaboration â€” blending our clients&rsquo;
            vision with our expertise in composition, materiality, and light. From
            intimate residences to large-scale commercial environments, we
            approach every space with the same dedication: to create interiors
            that feel timeless, intentional, and unmistakably beautiful.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
