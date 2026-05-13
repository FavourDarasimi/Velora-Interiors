import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] min-h-[500px]">
      <Image
        src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=80"
        alt="Luxury interior design studio"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <Reveal>
            <span className="text-xs tracking-[0.15em] uppercase text-gold-light">
              About
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white mt-4 mb-5">
              Our Story
            </h1>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <p className="text-white/80 max-w-xl mx-auto leading-relaxed text-lg">
              Creating interiors that embody elegance, craftsmanship, and
              timeless beauty since 2012.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
