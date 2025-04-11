import React from "react";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";

const Navbar = () => {
  const TABS = ["Home", "About", "Services", "Contact"];

  const handleNavClick = (tab) => {
    const section = document.getElementById(tab.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <div className="flex flex-row w-full fixed top-0 left-0 z-50 bg-black/5 backdrop-blur-md h-14">
        <AnimatedBackground
          defaultValue={TABS[0]}
          className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
          enableHover
        >
          {TABS.map((tab, index) => (
            <button
              key={index}
              data-id={tab}
              type="button"
              className="px-2 py-4 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              onClick={() => {handleNavClick(tab)}}
            >
              {tab}
            </button>
          ))}
        </AnimatedBackground>
      </div>
    </>
  );
};

export default Navbar;
