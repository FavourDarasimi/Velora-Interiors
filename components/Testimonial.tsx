import Image from "next/image";
import type { Testimonial } from "@/lib/data";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="group p-8 border border-gray-200 hover:border-brown hover:scale-105 transition-all duration-300 rounded-lg">
      <p className="text-gray-600 leading-relaxed mb-6 italic group-hover:text-brown">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="font-medium text-foreground group-hover:text-brown text-sm">
            {testimonial.name}
          </p>
          <p className="text-gray-400 text-xs group-hover:text-brown">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
