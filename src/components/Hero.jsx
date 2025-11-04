import { useNavigate } from "react-router-dom";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/deeprush.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between min-h-[100vh] px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 pt-10">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 text-center lg:text-left z-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
          Deep Jadav
        </h1>

        <h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-slate-300">
          MERN Stack Developer
        </h2>

        <p className="mt-5 max-w-md md:max-w-lg text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-light mx-auto lg:mx-0">
          {HERO_CONTENT}
        </p>

        <div className="mt-6 flex justify-center lg:justify-start gap-3">
          {/* 👇 Navigate to separate projects page */}
          <button
            onClick={() => navigate("/projects")}
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm sm:text-base font-semibold shadow-md hover:shadow-pink-500/40 hover:scale-105 transition-transform"
          >
            View Projects
          </button>

          <a
            href="#contact"
            className="px-4 py-2 sm:px-5 sm:py-2.5 border border-slate-600 text-slate-300 rounded-full text-sm sm:text-base font-semibold hover:bg-slate-800/40 hover:scale-105 transition-transform"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative w-44 sm:w-56 md:w-72 lg:w-[300px] mb-10 lg:mb-0"
      >
        <motion.img
          src={profilePic}
          alt="Deep Jadav"
          className="relative z-10 w-full rounded-full border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-1 shadow-xl"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
