import { useNavigate } from "react-router-dom";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-neutral-900/70 to-neutral-800/50 border-b border-white/10 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 md:px-10 py-3">
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            className="w-8 h-8 rounded-full border border-slate-500 shadow-sm hover:shadow-purple-500/30 transition-all duration-300"
            src={logo}
            alt="logo"
          />
          <span className="text-base font-semibold text-slate-200 tracking-wide">
            Deep Jadav
          </span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-slate-300 text-sm font-medium">
          <button
            onClick={() => navigate("/about")}
            className="hover:text-pink-400 transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => navigate("/projects")}
            className="hover:text-pink-400 transition-colors duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="hover:text-pink-400 transition-colors duration-300"
          >
            Contact
          </button>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 text-xl text-slate-400"
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition-transform duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 hover:scale-110 transition-transform duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 hover:scale-110 transition-transform duration-300"
          >
            <FaSquareXTwitter />
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
