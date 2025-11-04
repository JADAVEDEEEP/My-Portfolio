import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section className="border-b border-neutral-800 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white py-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-extrabold mb-16 tracking-wide"
      >
        My <span className="text-purple-500">Projects</span>
      </motion.h1>

      <div className="flex flex-col items-center space-y-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-10 rounded-2xl bg-neutral-900 p-6 shadow-lg shadow-purple-900/20 hover:shadow-purple-700/40 hover:scale-[1.02] transition-all duration-300"
          >
            {/* Project Image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={project.image}
              alt={project.title}
              width={300}
              height={300}
              className="rounded-xl object-cover border border-neutral-700 shadow-md"
            />

            {/* Project Info */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-2 text-purple-400">
                {project.title}
              </h3>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="m-1 rounded-lg bg-purple-900/20 px-3 py-1 text-sm font-medium text-purple-300 border border-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
