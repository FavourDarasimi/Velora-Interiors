import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function ServicesHero() {
  return (
    <section className="relative h-[70vh] min-h-[500px]">
      <Image
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
        alt="Luxury interior design services"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 md:px-6">
          <Reveal>
            <span className="text-xs tracking-[0.15em] uppercase text-gold-light">
              Services
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white mt-4 mb-5">
              What We Do
            </h1>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <p className="text-white/80 max-w-xl mx-auto leading-relaxed text-lg">
              Comprehensive interior design services tailored to your vision,
              from concept to completion.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
