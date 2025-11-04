import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-16 bg-gradient-to-b from-neutral-950 p-1 via-neutral-900 to-neutral-950">
      <h1 className="my-20 text-center text-3xl sm:text-4xl font-semibold tracking-wide text-white">
        About
        <span className="text-neutral-400"> Me</span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-16 gap-10">
        
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-105 transition-transform duration-500 ease-in-out">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base lg:text-md tracking-wide px-2">
              {ABOUT_TEXT}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-5 sm:px-8 sm:py-3 rounded-xl bg-neutral-100 text-neutral-900 font-semibold hover:bg-white transition-colors duration-300 text-sm sm:text-base"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
