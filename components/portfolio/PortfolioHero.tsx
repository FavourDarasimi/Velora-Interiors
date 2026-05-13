import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function PortfolioHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
        alt="Elegant interior design portfolio"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 md:px-6">
          <Reveal>
            <span className="text-xs tracking-[0.15em] uppercase text-brown-light">
              Portfolio
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mt-6 mb-6 max-w-4xl leading-tight">
              Curated Spaces Designed with Elegance &amp; Purpose
            </h1>
            <div className="w-16 h-px bg-brown mx-auto mb-6" />
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl">
              A curated selection of our finest work â€” from private residences to
              commercial landmarks.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
