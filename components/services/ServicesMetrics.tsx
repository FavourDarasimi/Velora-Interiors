import { serviceMetrics } from "@/lib/data";

export default function ServicesMetrics() {
  return (
    <section className="py-14 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {serviceMetrics.map((metric) => (
            <div key={metric.id} className="text-center">
              <p className="font-serif text-2xl md:text-3xl text-brown mb-1">
                {metric.number}
              </p>
              <p className="text-gray-500 text-xs tracking-wide uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
