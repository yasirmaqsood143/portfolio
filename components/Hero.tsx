"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { stats } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById("portfolio");
    if (elem) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 bg-gradient-to-b from-[#0a1628] to-[#0f2441] px-6"
    >
      <motion.div
        className="max-w-4xl mx-auto w-full flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="mb-8 relative">
          <div className="p-1 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 shadow-xl shadow-teal-500/20">
            <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-[#0a1628]">
              <Image
                src="/profile.jpg"
                alt="Yasir Maqsood"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.div variants={itemVariants} className="space-y-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Yasir <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-400">Maqsood</span>
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto">
            Go High Level Expert | Funnel Builder | Web Developer & SEO Specialist
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Results-driven developer with 8+ years of experience building 400+ high-converting funnels and websites across GoHighLevel, WordPress, ClickFunnels, and Simvoly.
        </motion.p>

        {/* Contact Badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <MapPin size={16} className="text-teal-400" />
            <span className="text-sm">Faisalabad, Pakistan</span>
          </div>
          <a href="tel:+923447864656" className="flex items-center gap-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-colors">
            <Phone size={16} className="text-teal-400" />
            <span className="text-sm">+92 344 7864656</span>
          </a>
          <a href="mailto:yasirmaqsood143@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-colors">
            <Mail size={16} className="text-teal-400" />
            <span className="text-sm">yasirmaqsood143@gmail.com</span>
          </a>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#portfolio"
            onClick={scrollToPortfolio}
            className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-teal-500/25 flex items-center justify-center"
          >
            View My Work
          </a>
          <a
            href="https://wa.me/923447864656"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center justify-center shadow-lg shadow-[#25D366]/20"
          >
            Contact Me on WhatsApp
          </a>
        </motion.div>

        {/* Stats Strip */}
        <motion.div variants={itemVariants} className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-[#111d32] border border-[#1e3a5f] rounded-xl p-4 flex flex-col items-center justify-center hover:border-teal-500/30 transition-colors">
              <span className="text-3xl font-bold text-teal-400 mb-1">{stat.value}</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
