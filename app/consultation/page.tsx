import { Check } from "lucide-react";
import ConsultationForm from "@/components/consultation/ConsultationForm";

const benefits = [
  "Project discussion",
  "Space requirements review",
  "Style & inspiration exploration",
  "Timeline and budget guidance",
];

export default function Consultation() {
  return (
    <>
      <section className="py-20 md:py-28 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="space-y-10 md:sticky md:top-28">
              <div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                  Book Your{" "}
                  <span className="text-brown">Design Consultation</span>
                </h1>
                <div className="w-12 h-px bg-brown mt-6 mb-6" />
                <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                  Let&rsquo;s discuss your vision, goals, and how Veylora
                  Interiors can create a space tailored to your lifestyle.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-5">
                  What Happens Next
                </h3>
                <ul className="space-y-3">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-brown/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brown" />
                      </span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-neutral-100">
                <div>
                  <p className="font-serif text-2xl md:text-3xl text-brown">
                    120+
                  </p>
                  <p className="text-sm text-gray-500">Projects Completed</p>
                </div>
                <div>
                  <p className="font-serif text-2xl md:text-3xl text-brown">
                    95%
                  </p>
                  <p className="text-sm text-gray-500">Client Satisfaction</p>
                </div>
                <div>
                  <p className="font-serif text-2xl md:text-3xl text-brown">
                    8+
                  </p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
              </div>
            </div>
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
