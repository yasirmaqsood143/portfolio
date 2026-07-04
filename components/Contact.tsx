"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0f172a] to-[#0a1628] px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something High-Converting Together
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your online presence? Let's connect and build something amazing.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {/* Phone Card */}
          <motion.a
            variants={itemVariants}
            href="tel:+923447864656"
            className="bg-[#111d32] border border-[#1e3a5f] rounded-xl p-8 text-center hover:-translate-y-2 hover:border-teal-500/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-teal-500/10 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
              <Phone className="text-teal-400" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Phone / WhatsApp</h3>
            <p className="text-gray-400 group-hover:text-teal-300 transition-colors">+92 344 7864656</p>
          </motion.a>

          {/* Email Card */}
          <motion.a
            variants={itemVariants}
            href="mailto:yasirmaqsood143@gmail.com"
            className="bg-[#111d32] border border-[#1e3a5f] rounded-xl p-8 text-center hover:-translate-y-2 hover:border-teal-500/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-teal-500/10 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
              <Mail className="text-teal-400" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 group-hover:text-teal-300 transition-colors">yasirmaqsood143@gmail.com</p>
          </motion.a>

          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            className="bg-[#111d32] border border-[#1e3a5f] rounded-xl p-8 text-center hover:-translate-y-2 hover:border-teal-500/50 transition-all duration-300 group cursor-default"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-teal-500/10 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
              <MapPin className="text-teal-400" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-gray-400">Faisalabad, Pakistan</p>
          </motion.div>
        </motion.div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://wa.me/923447864656"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#25D366]/20 hover:-translate-y-1"
          >
            <MessageCircle size={24} />
            Chat With Me Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
