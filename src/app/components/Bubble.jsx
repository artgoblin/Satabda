
import { motion, useAnimation } from "framer-motion";
import "../../app/globals.css";


const Bubble = ({ size, left, duration, delay }) => {
    return (
      <motion.div
        className="absolute rounded-full bg-gradient-to-br from-red-500 to-purple-600 opacity-20"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          bottom: 0,
        }}
        initial={{ y: 0, opacity: 0 }}
        animate={{
          y: -window.innerHeight * 1.5,
          opacity: [0, 0.2, 0.2, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
    );
  };

  export default Bubble;