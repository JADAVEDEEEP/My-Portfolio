import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="border-b border-neutral-800 py-20 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-semibold text-white mb-16"
      >
        Experience
      </motion.h1>

      <div className="flex flex-col items-center gap-10 px-6 lg:px-16">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative w-full max-w-4xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.05)] p-6 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:scale-[1.02] transition-all duration-500"
          >
            {/* Gradient Accent Bar */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-l-2xl"></div>

            {/* Year and Role */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              <p className="text-sm text-neutral-400 mb-2 lg:mb-0">
                {experience.year}
              </p>
              <h3 className="text-xl font-bold text-white">
                {experience.role}{" "}
                <span className="text-purple-400">| {experience.company}</span>
              </h3>
            </div>

            {/* Description */}
            <p className="text-neutral-300 leading-relaxed mb-4">
              {experience.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-purple-700/20 via-pink-700/20 to-blue-700/20 border border-neutral-700 rounded-full text-sm text-purple-300 font-medium backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
