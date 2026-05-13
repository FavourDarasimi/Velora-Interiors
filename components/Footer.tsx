import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-2xl tracking-[0.2em] mb-4">VEYLORA</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Luxury interior design studio crafting timeless spaces.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.15em] uppercase text-brown mb-4">
            Quick Links
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
          <h4 className="text-xs tracking-[0.15em] uppercase text-brown mb-4">
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
          <h4 className="text-xs tracking-[0.15em] uppercase text-brown mb-4">
            Contact
          </h4>
          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brown shrink-0" />
              <span>hello@veylora.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brown shrink-0" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brown shrink-0" />
              <span>London, United Kingdom</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              aria-label="X (Twitter)"
            >
              <X className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
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
