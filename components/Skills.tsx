"use client";

import { motion } from "framer-motion";
import { Workflow, Code2, TrendingUp, Plug, Palette, BarChart3, Bot } from "lucide-react";
import { skills } from "@/lib/data";

const icons = [Workflow, Code2, TrendingUp, Plug, Palette, BarChart3, Bot];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0f172a] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skillGroup, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={skillGroup.name}
                variants={cardVariants}
                className="bg-[#111d32] border border-[#1e3a5f] rounded-xl p-6 hover:-translate-y-1 hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-teal-500/10 rounded-lg">
                    <Icon className="text-teal-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillGroup.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="bg-[#0d3b4f]/50 text-teal-300 text-sm px-3 py-1.5 rounded-full border border-teal-900/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
