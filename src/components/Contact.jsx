import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="border-t border-neutral-800 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-20 px-6 text-white">
      {/* Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7 }}
        className="text-center text-3xl sm:text-4xl font-semibold mb-10 tracking-wide"
      >
        Let’s <span className="text-pink-500">Connect</span>
      </motion.h1>

      {/* Card Container */}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-lg rounded-2xl bg-neutral-900/60 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)] p-8 sm:p-10 border border-neutral-800 hover:shadow-[0_0_35px_rgba(236,72,153,0.2)] transition-shadow duration-500"
      >
        <div className="flex flex-col items-center text-center space-y-4 text-neutral-300 text-sm sm:text-base">
          {/* Address */}
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-md leading-relaxed"
          >
            📍 {CONTACT.address}
          </motion.p>

          {/* Phone Number */}
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="font-medium"
          >
            📞 {CONTACT.phoneNo}
          </motion.p>

          {/* Email */}
          <motion.a
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9 }}
            href={`mailto:${CONTACT.email}`}
            className="border-b border-neutral-600 hover:text-pink-400 hover:border-pink-400 transition-all duration-300"
          >
            ✉️ {CONTACT.email}
          </motion.a>

          {/* Divider Line */}
          <div className="w-16 h-[2px] bg-neutral-700 my-4"></div>

          {/* Social Links */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-6 text-xl sm:text-2xl"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-neutral-400 hover:text-pink-400 transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Note */}
      <p className="text-center text-neutral-600 text-xs mt-10">
        © {new Date().getFullYear()} Deep Jadav. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
