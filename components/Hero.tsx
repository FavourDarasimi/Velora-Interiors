"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
          alt="Luxury living room interior"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className=" z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
        >
          Elegant Interiors,
          <br />
          Timeless Design
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Transforming spaces into works of art with a refined blend of luxury
          and minimalism.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            href="/consultation"
            className="inline-block px-10 py-4 bg-brown text-white text-sm tracking-[0.15em] uppercase hover:bg-brown/90 transition-colors rounded-lg"
          >
            Book a Consultation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10 w-full max-w-4xl px-4 md:px-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { value: "12+", label: "Years Experience" },
              { value: "200+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "15+", label: "Awards Received" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center py-6 bg-black/30 backdrop-blur-sm"
              >
                <p className="font-serif  text-2xl sm:text-3xl text-brown-light mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-white/70 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
