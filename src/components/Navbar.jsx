import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <motion.div
     whileInView={{opacity:1,x:0}}
     initial={{opacity:0,x:-100}}
     transition={{duration:1.5}}
    className="flex-shrink-0 items-center">
<img className="mx-2 w-10" src={logo} alt="logo" />           
    </motion.div>
    <motion.div
     whileInView={{opacity:1,x:0}}
     initial={{opacity:0,x:-100}}
     transition={{duration:1.5}}
    className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
        <FaSquareXTwitter/>
    </motion.div>
  </nav>
  
}

export default Navbar
