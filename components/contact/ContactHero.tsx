import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function ContactHero() {
  return (
    <section className="relative h-[70vh] min-h-[500px]">
      <Image
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80"
        alt="Contact Velora Interiors"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 md:px-6">
          <Reveal>
            <span className="text-xs tracking-[0.15em] uppercase text-brown-light">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white mt-4 mb-5">
              Let&rsquo;s Talk
            </h1>
            <div className="w-12 h-px bg-brown mx-auto mb-6" />
            <p className="text-white/80 max-w-xl mx-auto leading-relaxed text-lg">
              Ready to bring your vision to life? We&rsquo;d love to hear about
              your project.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
