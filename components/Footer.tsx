import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-2xl tracking-[0.2em] mb-4">VEYLORA</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Luxury interior design studio crafting timeless spaces.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.15em] uppercase text-gold mb-4">
            Navigation
          </h4>
          <nav className="space-y-3">
            {["About", "Services", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.15em] uppercase text-gold mb-4">
            Services
          </h4>
          <nav className="space-y-3">
            {["Residential", "Commercial", "Consultation"].map((item) => (
              <Link
                key={item}
                href="/services"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.15em] uppercase text-gold mb-4">
            Contact
          </h4>
          <div className="space-y-3 text-sm text-gray-400">
            <p>hello@veylora.com</p>
            <p>+1 (555) 123-4567</p>
            <p>London, United Kingdom</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Veylora Interiors. All rights
        reserved.
      </div>
    </footer>
  );
}
