"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden bg-mild-gray/50">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute -top-24 -left-24 w-120 h-120 text-brown/4"
          viewBox="0 0 300 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M0 150 Q 75 0, 150 150 T 300 150" />
          <path d="M0 200 Q 75 50, 150 200 T 300 200" />
          <path d="M0 100 Q 75 -50, 150 100 T 300 100" />
          <path d="M0 250 Q 75 100, 150 250 T 300 250" />
        </svg>
        <svg
          className="absolute -bottom-24 -right-24 w-120 h-120 text-brown/4 rotate-180"
          viewBox="0 0 300 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M0 150 Q 75 0, 150 150 T 300 150" />
          <path d="M0 200 Q 75 50, 150 200 T 300 200" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -6 }}
          whileInView={{ opacity: 1, x: 0, rotate: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block absolute left-0 xl:-left-8 top-1/2 -translate-y-1/2 w-56 xl:w-64"
        >
          <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl bg-white">
            <Image
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=90"
              alt="Luxury Living Room"
              fill
              className="object-cover"
              sizes="256px"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase">
                Residential Project
              </p>
              <p className="text-white font-serif text-base mt-1">
                Luxury Living Room
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 6 }}
          whileInView={{ opacity: 1, x: 0, rotate: 6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block absolute right-0 xl:-right-8 top-1/2 -translate-y-1/2 w-56 xl:w-64"
        >
          <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl bg-white">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=95"
              alt="Modern Workspace"
              fill
              className="object-cover"
              sizes="256px"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase">
                Commercial Project
              </p>
              <p className="text-white font-serif text-base mt-1">
                Modern Workspace
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-16 text-center relative">
            <div className="w-10 md:w-12 h-px bg-brown/40 mx-auto mb-6 md:mb-8" />

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-gray-500 mb-8 md:mb-10 max-w-md mx-auto leading-relaxed">
              Let&rsquo;s create something extraordinary together. Book a
              consultation with our design team.
            </p>
            <Link
              href="/consultation"
              className="inline-block w-full sm:w-auto px-6 sm:px-8 md:px-12 py-4 bg-brown text-white text-sm tracking-[0.15em] uppercase hover:bg-brown/90 transition-colors rounded-lg"
            >
              Book a Consultation
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              Trusted by 100+ homeowners &amp; designers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
