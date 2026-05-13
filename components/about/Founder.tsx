import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Founder() {
  return (
    <Reveal>
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
              alt="Veylora design studio workspace"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-gold">
              Meet the Founder
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3 mb-5">
              Elena Veylora
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="text-gray-500 leading-relaxed mb-6">
              With over a decade of experience in luxury interior design, Elena
              founded Veylora Interiors with a singular vision: to create
              spaces that feel as extraordinary as they are livable.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Trained at the Royal College of Art and having worked with leading
              studios across Europe and the Middle East, Elena brings a global
              perspective to every project. Her work has been featured in
              Architectural Digest, Elle Decor, and Wallpaper*.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
