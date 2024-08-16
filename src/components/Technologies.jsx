
import {RiReactjsLine} from "react-icons/ri"
import { FaMicrosoft } from "react-icons/fa"; // .NET
import { AiOutlineDatabase } from "react-icons/ai"; // SSMS
import { SiJavascript } from "react-icons/si"; // JavaScript
import { FaCode } from "react-icons/fa"; // OOP
import { duration } from "@material-ui/core";
import {motion} from "framer-motion"
import { animate } from "framer-motion";
import transitions from "@material-ui/core/styles/transitions";

const iconVariants =(duration) => ({
    initial :{y :-10},
    animate:{
        y:[10, -10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
            
        }

    }
})

const Technologies = () => {
  return <div className='border-b border-neutral-800 pb-24'>
  <motion.h1 
   whileInView={{opacity:1,y:0}}
   initial={{opacity:0,y:-100}}
   transition={{duration:1.5}}
  className="my-20 text-center text-4xl">Technologies</motion.h1>
  <motion.div 
 whileInView={{opacity:1,x:0}}
 initial={{opacity:0,x:-100}}
 transition={{duration:1.5}}

className="flex flex-wrap items-center justify-center gap-4 ">


   <motion.div
    variants={iconVariants(2.5)}
    initial="intial"
    animate="animate"
    
    className="rounded-2xl border-4 border-neutral-800 p-4">
    <RiReactjsLine className="text-7xl text-green-500"/>
    </motion.div>
    <motion.div
    variants={iconVariants(2.5)}
    initial="intial"
    animate="animate"
    
    className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaMicrosoft className="text-7xl text-purple-500"/>
    </motion.div>
    <motion.div
    variants={iconVariants(4)}
    initial="intial"
    animate="animate"
     className="rounded-2xl border-4 border-neutral-800 p-4">
    <AiOutlineDatabase className="text-7xl text-blue-500"/>
    </motion.div>
    <motion.div 
    variants={iconVariants(3)}
    initial="intial"
    animate="animate"
    className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiJavascript className="text-7xl text-yellow-500"/>
    </motion.div>
    <motion.div 
    variants={iconVariants(5)}
    initial="intial"
    animate="animate"
    className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaCode className="text-7xl text-black-500"/>
    </motion.div>
  </motion.div>
  </div>
  
}
 
export default Technologies