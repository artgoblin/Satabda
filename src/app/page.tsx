"use client";
import { useState, useEffect } from "react";
import Bubble from "../app/components/Bubble";
import Navbar from "../app/components/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";
import LandingPanel from "../app/components/LandingPanel";
import About from "../app/components/About";
import Theme from "../app/components/Theme";
import Projects from "../app/components/Projects";
import Experience from "../app/components/Experience";
import SectionWrapper from "../app/SectionWrapper";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [bubbles, setBubbles] = useState<
    {
      id: number;
      size: number;
      left: number;
      duration: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const generateBubbles = () => {
      const bubbleCount = Math.floor(window.innerWidth / 20);

      setBubbles(
        Array.from({ length: bubbleCount }, (_, i) => ({
          id: i,
          size: Math.random() * 100 + 20,
          left: Math.random() * 100,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 15,
        }))
      );
    };

    generateBubbles();
    window.addEventListener("resize", generateBubbles);

    return () => window.removeEventListener("resize", generateBubbles);
  }, []);
  const HandleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ParallaxProvider>
      {/* Bubbles container that spans the entire page */}
      <div
        className={`fixed top-0 left-0 w-full h-full  
      ${isDarkMode ? "bg-black" : "bg-white"}
      overflow-hidden pointer-events-none z-0`}
      >
        {bubbles.map((bubble) => (
          <Bubble
            key={bubble.id}
            size={bubble.size}
            left={bubble.left}
            duration={bubble.duration}
            delay={bubble.delay}
          />
        ))}
      </div>

      {/* Content sections with higher z-index */}
      <div className="relative z-10">
        <Navbar />
        <SectionWrapper id="home">
          <LandingPanel />
        </SectionWrapper>
        <div className="backdrop-blur-[8px]">
          <SectionWrapper id="about">
            <About />
          </SectionWrapper>
          <SectionWrapper id="works">
            <Projects />
          </SectionWrapper>
          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>
        </div>
        <Theme HandleThemeChange={HandleThemeChange} isDarkMode={isDarkMode} />
      </div>
    </ParallaxProvider>
  );
}
