import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesMetrics from "@/components/services/ServicesMetrics";
import Process from "@/components/services/Process";
import ServicesTestimonials from "@/components/services/ServicesTestimonials";
import CTA from "@/components/CTA";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesMetrics />
      <Process />
      <ServicesTestimonials />
      <div className="max-w-7xl mx-auto my-10 px-4 md:px-6">
        <CTA />
      </div>
    </>
  );
}
