import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMdRefreshCircle } from "react-icons/io";
import { FaInstagramSquare, FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";

// SocialLink Component
const SocialLink = ({ href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-300"
  >
    <Icon />
  </a>
);

const Footer = () => {
  const [fact, setFact] = useState("Loading a fun fact...");

  const fetchFact = async () => {
    try {
      const response = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      const data = await response.json();
      setFact(data.text);
    } catch (error) {
      console.error("Failed to fetch fact:", error);
      setFact("Oops! Couldn't load a fact right now.");
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <footer
      id="contact"
      className="mt-20 py-8 px-4 text-center text-white bg-black/70 backdrop-blur-md border-t border-white/10"
    >
      <div className="flex justify-center items-center gap-4 mb-10 text-2xl">
        <SocialLink
          href="https://www.instagram.com/artgoblin_3000/"
          Icon={FaInstagramSquare}
        />
        <SocialLink href="https://github.com/artgoblin" Icon={BsGithub} />
        <SocialLink
          href="https://www.linkedin.com/in/satabda-das-29620a190/"
          Icon={AiFillLinkedin}
        />
        <SocialLink
          href="https://leetcode.com/u/artgoblin3000/"
          Icon={TbBrandLeetcode}
        />
        <SocialLink
          href="https://www.facebook.com/satabda.das.980"
          Icon={FaFacebookF}
        />
      </div>
      <button className="text-sm px-4 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 mb-4">
        Contact
      </button>
      <p className="text-1xl text-red-300/60"><strong>Factinator:</strong></p>
      <div
        className="flex justify-center items-center p-10"
        style={{ maxHeight: "100px", overflowY: "hidden" }}
      >
        <p className="text-lg italic mt-2 text-purple-300">{fact}</p>
      </div>

      <button
        onClick={fetchFact}
        className="mt-4 text-sm px-4 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
      >
        New Fact
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, ease: "linear" }}
          className="inline-block ml-2"
          key={fact}
        >
          <IoMdRefreshCircle />
        </motion.div>
      </button>

      <p className="mt-8 text-xs text-white/40">
        &copy; 2025{" "}
        <a
          href="https://www.instagram.com/artgoblin_3000/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-white"
        >
          artgoblin_3000
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
