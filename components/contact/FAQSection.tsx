"use client";

import { useState } from "react";
import {
  ChevronDown,
  FileText,
  Clock,
  Monitor,
  MapPin,
  Calendar,
  CreditCard,
} from "lucide-react";
import { faqs } from "@/lib/data";
import Reveal from "@/components/Reveal";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Monitor: <Monitor className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
  CreditCard: <CreditCard className="w-5 h-5" />,
};

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 bg-mild-gray/50">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.15em] uppercase text-brown">
              FAQ
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-10 h-px bg-brown mx-auto" />
          </div>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <Reveal key={faq.id}>
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-md">
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                  >
                    <div className="w-10 h-10 rounded-lg bg-soft-gray flex items-center justify-center shrink-0">
                      {iconMap[faq.icon]}
                    </div>
                    <span className="flex-1 font-medium text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-80 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-500 leading-relaxed text-sm border-t border-gray-100 ml-16">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
