import { useState, useEffect } from "react";
import { TextLoop } from '@/components/motion-primitives/text-loop';

export default function LandingPanel() {
  const texts = [
    "Full-Stack Developer",
    "Web Developer",
    "Tech Enthusiast",
    "Problem Solver",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentText = texts[currentTextIndex];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden text-white px-4 text-center">

      <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-600/30 via-black to-black blur-2xl animate-pulse opacity-30" />

      <h1 className="z-10 text-5xl md:text-7xl font-extrabold leading-tight tracking-wide">
        Hi, I'm{' '}
        <span className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
          Satabda
        </span>
      </h1>

      <p className="z-10 text-2xl md:text-4xl mt-4 font-medium inline-flex">
        I'm a&nbsp;
        <TextLoop
          className="overflow-y-clip"
          transition={{
            type: 'spring',
            stiffness: 800,
            damping: 70,
            mass: 10,
          }}
          variants={{
            initial: {
              y: 20,
              rotateX: 90,
              opacity: 0,
              filter: 'blur(4px)',
            },
            animate: {
              y: 0,
              rotateX: 0,
              opacity: 1,
              filter: 'blur(0px)',
            },
            exit: {
              y: -20,
              rotateX: -90,
              opacity: 0,
              filter: 'blur(4px)',
            },
          }}
        >
          {texts.map((text, idx) => (
            <span key={idx} className="text-red-400 font-semibold">
              {text}
            </span>
          ))}
        </TextLoop>
      </p>

      <button className="z-10 mt-10 px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-500 hover:text-black transition duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]">
        View my work ↓
      </button>
    </section>
  );
}
