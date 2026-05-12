import type { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group p-10 border border-gray-200 hover:bg-black  hover:scale-105 transition-all duration-300">
      <div className="w-8 h-px bg-gold mb-6" />
      <h3 className="font-serif font-semibold group-hover:text-gold text-xl text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-gray-500 group-hover:text-gold text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
