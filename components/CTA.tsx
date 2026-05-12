import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="py-24 w-full [--grid:20%] [--grid2:20%] lg:[--grid:20%] lg:[--grid2:10%]"
      style={{
        backgroundImage: [
          "linear-gradient(to right, #e5e7eb 1px, transparent 1px)",
          "linear-gradient(to left, #e5e7eb 1px, transparent 1px)",
          "linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          "linear-gradient(to top, #e5e7eb 1px, transparent 1px)",
          "linear-gradient(to right, #e5e7eb 1px, transparent 1px)",
          "linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: [
          "100% 100%",
          "100% 100%",
          "100% 100%",
          "100% 100%",
          "var(--grid2) var(--grid)",
          "var(--grid) var(--grid)",
        ].join(", "),
        backgroundRepeat: [
          "no-repeat",
          "no-repeat",
          "no-repeat",
          "no-repeat",
          "repeat",
          "repeat",
        ].join(", "),
      }}
    >
      <div className="max-w-3xl mx-auto text-center z-50 px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
          Let&rsquo;s create something extraordinary together. Book a
          consultation with our design team.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-gold text-white text-sm tracking-[0.15em] uppercase hover:bg-gold/90 transition-colors"
        >
          Book Your Consultation
        </Link>
        <p className="text-gray-500 text-sm mt-4">
          Trusted by 100+ homeowners & designers.
        </p>
      </div>
    </section>
  );
}
