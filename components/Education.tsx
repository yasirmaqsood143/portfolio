"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="py-16 bg-[#0a1628] px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
          <div className="h-1 w-16 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#111d32] border border-[#1e3a5f] rounded-xl p-6 hover:-translate-y-1 hover:border-teal-500/30 transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-3 bg-teal-500/10 rounded-lg shrink-0">
                <GraduationCap className="text-teal-400" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <p className="text-teal-400 text-sm font-medium">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
