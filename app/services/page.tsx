import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesMetrics from "@/components/services/ServicesMetrics";
import Process from "@/components/services/Process";
import CTA from "@/components/CTA";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesMetrics />
      <Process />
      <div className="w-full mx-auto">
        <CTA />
      </div>
    </>
  );
}
