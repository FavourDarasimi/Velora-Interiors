import Reveal from "@/components/Reveal";

export default function PortfolioHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] bg-white overflow-hidden">
      <div
        className="absolute inset-0 animate-[hero-pulse_8s_ease-in-out_infinite]"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: [
            "linear-gradient(to right, rgba(139,94,52,0.06) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(139,94,52,0.06) 1px, transparent 1px)",
            "radial-gradient(ellipse at 20% 50%, rgba(139,94,52,0.08) 0%, transparent 60%)",
            "radial-gradient(ellipse at 80% 20%, rgba(139,94,52,0.05) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 80%, rgba(139,94,52,0.06) 0%, transparent 50%)",
          ].join(", "),
          backgroundSize: [
            "60px 60px",
            "60px 60px",
            "100% 100%",
            "100% 100%",
            "100% 100%",
          ].join(", "),
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 md:px-6">
          <Reveal>
            <span className="text-xs tracking-[0.15em] uppercase text-brown">
              Portfolio
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mt-6 mb-6 max-w-4xl leading-tight">
              Curated Spaces Designed with Elegance &amp; Purpose
            </h1>
            <div className="w-16 h-px bg-brown mx-auto mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl">
              A curated selection of our finest work — from private residences to
              commercial landmarks.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
