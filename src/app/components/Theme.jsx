import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

 const Theme = ( {HandleThemeChange,isDarkMode}) => {
    
  return (
    <button
    className="fixed bottom-4 right-4 bg-gradient-to-r rounded-full from-blue-300/80 to-green-300/80 p-3 hover:from-blue-300/100 hover:to-green-300/100 transition-all duration-300 ease-in-out"
    onClick={HandleThemeChange}
  >
    {isDarkMode ? (
      <motion.div
        key="sun"
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.5 }}
      >
        <IoSunny />
      </motion.div>
    ) : (
      <motion.div
        key="moon"
        initial={{ opacity: 0, rotate: 90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: -90 }}
        transition={{ duration: 0.5 }}
      >
        <IoIosMoon />
      </motion.div>
    )}
  </button>
  )
}

export default Theme;
