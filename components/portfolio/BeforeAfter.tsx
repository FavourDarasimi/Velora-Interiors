import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { BeforeAfterData } from "@/lib/data";

export default function BeforeAfter({ data }: { data: BeforeAfterData }) {
  return (
    <Reveal>
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.15em] uppercase text-brown">
              Before &amp; After
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
              The Transformation
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-4 leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative aspect-4/3">
              <Image
                src={data.before}
                alt="Before transformation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/90 text-xs tracking-[0.15em] uppercase text-foreground">
                Before
              </div>
            </div>
            <div className="relative aspect-4/3">
              <Image
                src={data.after}
                alt="After transformation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 px-4 py-1.5 bg-brown/90 text-xs tracking-[0.15em] uppercase text-white">
                After
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
