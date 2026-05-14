import AboutHero from "@/components/about/AboutHero";
import Philosophy from "@/components/about/Philosophy";
import Values from "@/components/about/Values";
import Founder from "@/components/about/Founder";
import Stats from "@/components/about/Stats";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import CTA from "@/components/CTA";

export default function About() {
  return (
    <>
      <AboutHero />
      <Philosophy />
      <Values />
      <Founder />
      <Stats />
      <div className="w-full mx-auto px-4 md:px-6">
        <CTA />
      </div>
    </>
  );
}
