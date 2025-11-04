import { RiNodejsLine } from "react-icons/ri"; // Node.js
import { SiExpress } from "react-icons/si"; // Express.js
import { FaHtml5, FaBootstrap } from "react-icons/fa"; // HTML + Bootstrap
import { SiJavascript } from "react-icons/si"; // JavaScript
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 mt-5 p-5 text-center text-3xl sm:text-4xl font-semibold tracking-wide text-white"
      >
        Technologies
      </motion.h1>

      {/* Icons Container */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 px-4 sm:px-6"
      >
        {/* Node.js */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-6 shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all duration-500"
        >
          <RiNodejsLine className="text-6xl sm:text-7xl text-green-400" />
        </motion.div>

        {/* Express.js */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-6 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-500"
        >
          <SiExpress className="text-6xl sm:text-7xl text-gray-300" />
        </motion.div>

        {/* HTML */}
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-6 shadow-[0_0_25px_rgba(255,87,34,0.3)] hover:shadow-[0_0_40px_rgba(255,87,34,0.6)] transition-all duration-500"
        >
          <FaHtml5 className="text-6xl sm:text-7xl text-orange-500" />
        </motion.div>

        {/* Bootstrap */}
        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-6 shadow-[0_0_25px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all duration-500"
        >
          <FaBootstrap className="text-6xl sm:text-7xl text-purple-500" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-6 shadow-[0_0_25px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] transition-all duration-500"
        >
          <SiJavascript className="text-6xl sm:text-7xl text-yellow-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
