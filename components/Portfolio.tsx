"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { portfolioCategories, featuredImages } from "@/lib/data";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(portfolioCategories[0].id);

  const activeCategory = portfolioCategories.find((c) => c.id === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-[#0a1628] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Featured Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center md:text-left">
            Featured Funnel Designs
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer border border-[#1e3a5f]"
              >
                <Image
                  src={img}
                  alt={`Featured Work ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium border border-white/50 px-4 py-2 rounded-full">
                    View Design
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tabbed Portfolio Links */}
        <div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                    : "bg-transparent border border-[#1e3a5f] text-gray-300 hover:border-teal-500/50 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {activeCategory?.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#111d32] border border-[#1e3a5f] rounded-xl p-6 hover:border-teal-500/50 hover:-translate-y-1 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-white font-semibold text-lg line-clamp-2 pr-4 group-hover:text-teal-400 transition-colors">
                        {link.displayName}
                      </h4>
                      <ExternalLink className="text-teal-500/50 group-hover:text-teal-400 shrink-0" size={20} />
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs font-medium bg-teal-500/10 text-teal-300 px-2.5 py-1 rounded">
                        {activeCategory.label}
                      </span>
                      <span className="text-sm text-gray-400 group-hover:text-teal-300 transition-colors">
                        Visit Site
                      </span>
                    </div>
                  </a>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
