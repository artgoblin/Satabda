import { useState, useEffect, useRef } from "react";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import Bubble from "./Bubble";
import Navbar from "./Navbar";
import '../../../src/app/globals.css';

const LandingPanel = () => {
  const [bubbles, setBubbles] = useState([]);
  const containerRef = useRef(null);

  const texts = [
    "Full-Stack Developer",
    "Web Developer",
    "Tech Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const generateBubbles = () => {
      const bubbleCount = Math.floor(window.innerWidth / 20); // More bubbles on wider screens

      setBubbles(
        Array.from({ length: bubbleCount }, (i) => ({
          id: i,
          size: Math.random() * 100 + 20, // 20-120px
          left: Math.random() * 100,
          duration: Math.random() * 20 + 10, // 10-30 seconds
          delay: Math.random() * 15, // 0-15 seconds delay
        }))
      );
    };

    generateBubbles();
    window.addEventListener("resize", generateBubbles);

    return () => window.removeEventListener("resize", generateBubbles);
  }, []);

  return (
    <>
      <Navbar />
      <section
        id="home"
        ref={containerRef}
        className="custom-background relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden text-white px-4 text-center"
      >
        {/* Lava Lamp Bubbles */}
        {bubbles.map((bubble) => (
          <Bubble
            key={bubble.id}
            size={bubble.size}
            left={bubble.left}
            duration={bubble.duration}
            delay={bubble.delay}
          />
        ))}

        <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-600/30 via-black to-black blur-2xl animate-pulse opacity-30" />

        <h1 className="z-10 text-5xl md:text-7xl font-extrabold leading-tight tracking-wide">
          Hi, I'm{" "}
          <span className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
            Satabda
          </span>
        </h1>

        <div className="z-10 text-2xl md:text-4xl mt-4 font-medium inline-flex">
          I'm a&nbsp;
          <TextLoop
            className="overflow-y-clip"
            transition={{
              type: "spring",
              stiffness: 800,
              damping: 70,
              mass: 10,
            }}
            variants={{
              initial: {
                y: 20,
                rotateX: 90,
                opacity: 0,
                filter: "blur(4px)",
              },
              animate: {
                y: 0,
                rotateX: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
              exit: {
                y: -20,
                rotateX: -90,
                opacity: 0,
                filter: "blur(4px)",
              },
            }}
          >
            {texts.map((text, idx) => (
              <span key={idx} className="text-red-400 font-semibold">
                {text}
              </span>
            ))}
          </TextLoop>
        </div>

        <button className="z-10 mt-10 px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-500 hover:text-black transition duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]">
          View my work ↓
        </button>
      </section>
    </>
  );
}

export default LandingPanel;
