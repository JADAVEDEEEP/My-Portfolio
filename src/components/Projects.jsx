import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="border-b border-neutral-800 bg-neutral-950 text-white py-16">
      
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.4 }}
        className="text-center text-4xl font-bold mb-12"
      >
        My <span className="text-purple-500">Projects</span>
      </motion.h1>

      <div className="flex flex-col items-center space-y-10">
        {PROJECTS.map((project, index) => (
          
          /* ------------------ PROJECT CARD ------------------ */
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 
                       bg-neutral-900 p-5 rounded-2xl border border-neutral-800 
                       hover:bg-neutral-800 transition-all"
          >

            {/* FULL VISIBLE IMAGE (object-contain) */}
            <div className="flex justify-center items-center w-full">
              <motion.img
                whileHover={{ scale: 1.02 }}
                src={project.image}
                alt={project.title}
                className="w-full h-72 md:h-80 object-contain rounded-xl border border-neutral-700 p-2 bg-neutral-950"
              />
            </div>

            {/* RIGHT SIDE INFO */}
            <div className="text-left flex flex-col justify-center">
              
              {/* Title */}
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                {project.title}
              </h3>

              {/* Small Description */}
              <p className="text-neutral-400 text-sm mb-3 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="m-1 rounded-md bg-purple-900/30 px-3 py-1 text-xs 
                               text-purple-300 border border-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ------------------ MODAL ------------------ */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 
                       max-w-lg w-full text-white shadow-xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="text-right w-full text-neutral-400 hover:text-white text-lg"
            >
              ✖
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-purple-400 mb-3">
              {selectedProject.title}
            </h2>

            {/* Full Description */}
            <p className="text-neutral-300 text-sm mb-4">
              {selectedProject.description}
            </p>

            {/* Technologies */}
            <h3 className="text-md font-semibold text-purple-300 mb-1">
              Technologies Used:
            </h3>

            <div className="flex flex-wrap mb-4">
              {selectedProject.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="m-1 rounded-md bg-purple-900/30 px-2 py-1 text-xs 
                             text-purple-300 border border-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Challenges */}
            {selectedProject.challenges && (
              <>
                <h3 className="text-md font-semibold text-purple-300 mb-1">
                  Problem Solving Challenges:
                </h3>

                <ul className="list-disc list-inside text-xs text-neutral-400 space-y-1">
                  {selectedProject.challenges.map((challenge, i) => (
                    <li key={i}>{challenge}</li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </div>
      )}

    </section>
  );
};

export default Projects;
