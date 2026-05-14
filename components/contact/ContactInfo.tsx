import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { contactInfo } from "@/lib/data";
import Reveal from "@/components/Reveal";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
  },
  { icon: MapPin, label: "Studio", value: contactInfo.studio },
  { icon: Clock, label: "Working Hours", value: contactInfo.hours },
];

export default function ContactInfo() {
  return (
    <Reveal>
      <div className="space-y-8">
        <div>
          <h3 className="font-serif text-2xl text-foreground mb-2">
            Get in Touch
          </h3>
          <div className="w-10 h-px bg-brown mb-5" />
          <p className="text-gray-500 leading-relaxed">
            We&rsquo;d love to hear from you. Reach out through any of the
            channels below.
          </p>
        </div>
        <div className="space-y-6">
          {details.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full  border border-brown flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-brown" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-brown transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
