"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0f172a] px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-[#1e3a5f]"></div>

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-5 top-6 w-6 h-6 rounded-full bg-[#0f172a] border-4 border-teal-500 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                </div>

                {/* Content Card */}
                <div className="bg-[#111d32] border border-[#1e3a5f] rounded-xl p-6 md:p-8 hover:border-teal-500/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                        <Briefcase className="text-teal-400 md:hidden" size={20} />
                        {exp.role}
                      </h3>
                      <p className="text-teal-400 font-medium text-lg">{exp.company}</p>
                    </div>
                    <span className="inline-block bg-teal-500/10 text-teal-300 text-sm px-4 py-1.5 rounded-full border border-teal-500/20 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start text-gray-300">
                        <span className="text-teal-500 mr-3 mt-1.5 text-xs">●</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
