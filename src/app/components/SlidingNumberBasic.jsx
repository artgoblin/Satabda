import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { SlidingNumber } from "@/components/motion-primitives/sliding-number";

const SlidingNumberBasic = ({ iconValue }) => {
  const [value, setValue] = useState(0);
  const [exp, setExp] = useState(0);

  // Use refs to avoid re-creating intervals on every render
  const valueRef = useRef(value);
  const expRef = useRef(exp);
  const strengthTarget = iconValue?.current?.strength ?? 100;
  const expTarget = iconValue?.current?.experience ?? 2;

  useEffect(() => {
    valueRef.current = value;
    expRef.current = exp;
  }, [value, exp]);

  useEffect(() => {
    // Start both counters only once (on mount)
    if (value >= strengthTarget && exp >= expTarget) return;

    // Slower, smooth animation: ~1.5s total for strength (100 steps)
    const strengthStepTime = 15; // ~100 steps × 15ms = 1.5s
    // Experience has fewer steps (e.g., 2.5), so slower per-step
    const expStepTime = 80; // ~25 steps × 80ms = 2s (for 2.5 → 0.1 increments)

    const strengthInterval = setInterval(() => {
      if (valueRef.current < strengthTarget) {
        setValue((prev) => Math.min(prev + 1, strengthTarget));
      } else {
        clearInterval(strengthInterval);
      }
    }, strengthStepTime);

    const expInterval = setInterval(() => {
      if (expRef.current < expTarget) {
        // Increment by 0.1 for decimal experience (e.g., 2.5 years)
        setExp((prev) =>
          Math.min(parseFloat((prev + 0.2).toFixed(1)), expTarget)
        );
      } else {
        clearInterval(expInterval);
      }
    }, expStepTime);

    return () => {
      clearInterval(strengthInterval);
      clearInterval(expInterval);
    };
  }, [strengthTarget, expTarget]); // Only run once on mount (or if targets change)

  return (
    <div className="flex items-center justify-center w-full h-full">
      {/* Beautiful, spacious oval container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center p-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-8 py-6 shadow-2xl backdrop-blur-sm border border-white/10"
      >
         {/* Title - React */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="text-white font-bold text-xl mb-4"
        >
          {iconValue.current.title}
        </motion.div>
        {/* Experience Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex items-baseline gap-1 mb-3"
        >
          <span className="text-white text-lg font-medium">Experience</span>
          <SlidingNumber
            value={exp}
            className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl mx-1"
          />
          <span className="text-white text-lg font-medium">yrs</span>
        </motion.div>
        {/* Strength Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex items-baseline gap-1"
        >
          <span className="text-white text-lg font-medium">Strength</span>
          <SlidingNumber
            value={value}
            className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl mx-1"
          />
          <span className="text-white text-lg font-medium">%</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SlidingNumberBasic;
