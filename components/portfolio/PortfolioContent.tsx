"use client";

import { useState, useMemo } from "react";
import PortfolioHero from "./PortfolioHero";
import PortfolioIntro from "./PortfolioIntro";
import PortfolioGrid from "./PortfolioGrid";
import FeaturedProject from "./FeaturedProject";
import BeforeAfter from "./BeforeAfter";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import {
  categories,
  portfolioProjects,
  featuredProject,
  beforeAfter,
  portfolioTestimonials,
} from "@/lib/data";

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <PortfolioHero />
      <PortfolioIntro />

      <Reveal>
        <section className="px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 pb-2 border-b border-gray-100">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 text-sm tracking-wide transition-colors duration-300 rounded-lg ${
                    activeCategory === category
                      ? "bg-brown text-white"
                      : "text-gray-500 hover:text-brown border border-gray-200 hover:border-brown"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <PortfolioGrid projects={filteredProjects} />

      <FeaturedProject project={featuredProject} />

      <BeforeAfter data={beforeAfter} />

      <Reveal>
        <div className="w-full mx-auto  px-4 md:px-6">
          <CTA />
        </div>
      </Reveal>
    </>
  );
}
