import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-2xl tracking-[0.2em] mb-4">VEYLORA</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lagos-based luxury interior design studio crafting timeless spaces.
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
              <span>+2348022567743</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brown shrink-0" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              aria-label="WhatsApp"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
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
