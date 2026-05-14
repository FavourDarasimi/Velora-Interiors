import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function WhatsAppSection() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}`;

  return (
    <section className="py-20 bg-mild-gray/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Need a Faster Response?
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We&rsquo;re just a message away. Chat with our team directly on
              WhatsApp for quick inquiries and consultations.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-sm tracking-[0.15em] uppercase hover:bg-[#25D366]/90 transition-colors rounded-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with Us on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
