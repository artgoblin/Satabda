import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import {
  FaJava,
  FaPython,
  FaReact,
  FaGitSquare,
  FaDocker,
  FaRegSnowflake,
  FaHtml5,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiSpringboot,
  SiFlask,
  SiApachekafka,
  SiApollographql,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { motion } from "framer-motion";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";
import { useSelector } from "react-redux";
import "../../app/globals.css";
import { useRef, useState } from "react";
import { BorderTrail } from "@/components/motion-primitives/border-trail";
import "react-circular-progressbar/dist/styles.css";
import SlidingNumberBasic from "./SlidingNumberBasic";

const Skills = () => {
  const theme = useSelector((state) => state.theme.color);
  const isDarkMode = theme === "dark";
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const iconValue = useRef({});
  return (
    <>
      <InfiniteSlider speedOnHover={1} gap={24} className=" mb-40">
        <FaReact
          className="text-5xl text-cyan-400 hover:scale-110 transition"
          title="React"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "React.js",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />

        <FaJava
          className="text-5xl text-[#f89820] hover:scale-110 transition"
          title="Java"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Java",
              strength: 90,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiSpringboot
          className="text-5xl text-green-500 hover:scale-110 transition"
          title="Spring Boot"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Springboot",
              strength: 90,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <BiLogoPostgresql
          className="text-5xl text-[#336791] hover:scale-110 transition"
          title="PostgreSQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "PostgresSQl",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaPython
          className="text-5xl text-[#3776AB] hover:scale-110 transition"
          title="Python"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Python",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiFlask
          className="text-5xl text-gray-300 hover:scale-110 transition"
          title="Flask"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Flask",
              strength: 60,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaGitSquare
          className="text-5xl text-[#f05033] hover:scale-110 transition"
          title="Git"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Git",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiGithub
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          }  hover:scale-110 transition`}
          title="GitHub"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "GitHub",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <GrGraphQl
          className="text-5xl text-[#e10098] hover:scale-110 transition"
          title="GraphQL"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Graphql",
              strength: 85,
              experience: 3,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiApachekafka
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          } text-[#231f20] hover:scale-110 transition`}
          title="Kafka"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Kafka",
              strength: 80,
              experience: 3,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaDocker
          className="text-5xl text-[#0db7ed] hover:scale-110 transition"
          title="Docker"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Docker",
              strength: 70,
              experience: 1,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaRegSnowflake
          className="text-5xl text-[#56b9ff] hover:scale-110 transition"
          title="Snowflake"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "SnowFlake",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <TbBrandCpp
          className="text-5xl text-[#00599C] hover:scale-110 transition"
          title="C++"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "React.js",
              strength: 80,
              experience: 2,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiApollographql
          className="text-5xl text-[#311C87] hover:scale-110 transition"
          title="Apollo GraphQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Apollo Graphql",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiMysql
          className="text-5xl text-[#00758f] hover:scale-110 transition"
          title="MySQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "MySQL",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <RiNextjsFill
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          } hover:scale-110 transition`}
          title="Next.js"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Next.js",
              strength: 75,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaHtml5
          className="text-5xl text-[#e34f26] hover:scale-110 transition"
          title="HTML5"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "HTML",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <TbBrandRedux
          className="text-5xl text-[#e34f26] hover:scale-110 transition"
          title="Redux"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Redux",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaReact
          className="text-5xl text-cyan-400 hover:scale-110 transition"
          title="React"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "React.js",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />

        <FaJava
          className="text-5xl text-[#f89820] hover:scale-110 transition"
          title="Java"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Java",
              strength: 90,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiSpringboot
          className="text-5xl text-green-500 hover:scale-110 transition"
          title="Spring Boot"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Springboot",
              strength: 90,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <BiLogoPostgresql
          className="text-5xl text-[#336791] hover:scale-110 transition"
          title="PostgreSQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "PostgresSQl",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaPython
          className="text-5xl text-[#3776AB] hover:scale-110 transition"
          title="Python"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Python",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiFlask
          className="text-5xl text-gray-300 hover:scale-110 transition"
          title="Flask"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Flask",
              strength: 60,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaGitSquare
          className="text-5xl text-[#f05033] hover:scale-110 transition"
          title="Git"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Git",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiGithub
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          }  hover:scale-110 transition`}
          title="GitHub"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "GitHub",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <GrGraphQl
          className="text-5xl text-[#e10098] hover:scale-110 transition"
          title="GraphQL"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Graphql",
              strength: 85,
              experience: 3,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiApachekafka
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          } text-[#231f20] hover:scale-110 transition`}
          title="Kafka"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Kafka",
              strength: 80,
              experience: 3,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaDocker
          className="text-5xl text-[#0db7ed] hover:scale-110 transition"
          title="Docker"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Docker",
              strength: 70,
              experience: 1,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaRegSnowflake
          className="text-5xl text-[#56b9ff] hover:scale-110 transition"
          title="Snowflake"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "SnowFlake",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <TbBrandCpp
          className="text-5xl text-[#00599C] hover:scale-110 transition"
          title="C++"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "React.js",
              strength: 80,
              experience: 2,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiApollographql
          className="text-5xl text-[#311C87] hover:scale-110 transition"
          title="Apollo GraphQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Apollo Graphql",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiMysql
          className="text-5xl text-[#00758f] hover:scale-110 transition"
          title="MySQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "MySQL",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <RiNextjsFill
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          } hover:scale-110 transition`}
          title="Next.js"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Next.js",
              strength: 75,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaHtml5
          className="text-5xl text-[#e34f26] hover:scale-110 transition"
          title="HTML5"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "HTML",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <TbBrandRedux
          className="text-5xl text-[#e34f26] hover:scale-110 transition"
          title="Redux"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Redux",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaReact
          className="text-5xl text-cyan-400 hover:scale-110 transition"
          title="React"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "React.js",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />

        <FaJava
          className="text-5xl text-[#f89820] hover:scale-110 transition"
          title="Java"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Java",
              strength: 90,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiSpringboot
          className="text-5xl text-green-500 hover:scale-110 transition"
          title="Spring Boot"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Springboot",
              strength: 90,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <BiLogoPostgresql
          className="text-5xl text-[#336791] hover:scale-110 transition"
          title="PostgreSQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "PostgresSQl",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaPython
          className="text-5xl text-[#3776AB] hover:scale-110 transition"
          title="Python"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Python",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiFlask
          className="text-5xl text-gray-300 hover:scale-110 transition"
          title="Flask"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Flask",
              strength: 60,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaGitSquare
          className="text-5xl text-[#f05033] hover:scale-110 transition"
          title="Git"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Git",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiGithub
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          }  hover:scale-110 transition`}
          title="GitHub"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "GitHub",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <GrGraphQl
          className="text-5xl text-[#e10098] hover:scale-110 transition"
          title="GraphQL"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Graphql",
              strength: 85,
              experience: 3,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiApachekafka
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          } text-[#231f20] hover:scale-110 transition`}
          title="Kafka"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Kafka",
              strength: 80,
              experience: 3,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaDocker
          className="text-5xl text-[#0db7ed] hover:scale-110 transition"
          title="Docker"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Docker",
              strength: 70,
              experience: 1,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaRegSnowflake
          className="text-5xl text-[#56b9ff] hover:scale-110 transition"
          title="Snowflake"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "SnowFlake",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <TbBrandCpp
          className="text-5xl text-[#00599C] hover:scale-110 transition"
          title="C++"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "React.js",
              strength: 80,
              experience: 2,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiApollographql
          className="text-5xl text-[#311C87] hover:scale-110 transition"
          title="Apollo GraphQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Apollo Graphql",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiMysql
          className="text-5xl text-[#00758f] hover:scale-110 transition"
          title="MySQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "MySQL",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <RiNextjsFill
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          } hover:scale-110 transition`}
          title="Next.js"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Next.js",
              strength: 75,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaHtml5
          className="text-5xl text-[#e34f26] hover:scale-110 transition"
          title="HTML5"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "HTML",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <TbBrandRedux
          className="text-5xl text-[#e34f26] hover:scale-110 transition"
          title="Redux"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Redux",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaReact
          className="text-5xl text-cyan-400 hover:scale-110 transition"
          title="React"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "React.js",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />

        <FaJava
          className="text-5xl text-[#f89820] hover:scale-110 transition"
          title="Java"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Java",
              strength: 90,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiSpringboot
          className="text-5xl text-green-500 hover:scale-110 transition"
          title="Spring Boot"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Springboot",
              strength: 90,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <BiLogoPostgresql
          className="text-5xl text-[#336791] hover:scale-110 transition"
          title="PostgreSQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "PostgresSQl",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaPython
          className="text-5xl text-[#3776AB] hover:scale-110 transition"
          title="Python"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Python",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiFlask
          className="text-5xl text-gray-300 hover:scale-110 transition"
          title="Flask"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Flask",
              strength: 60,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaGitSquare
          className="text-5xl text-[#f05033] hover:scale-110 transition"
          title="Git"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Git",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiGithub
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          }  hover:scale-110 transition`}
          title="GitHub"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "GitHub",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <GrGraphQl
          className="text-5xl text-[#e10098] hover:scale-110 transition"
          title="GraphQL"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Graphql",
              strength: 85,
              experience: 3,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiApachekafka
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          } text-[#231f20] hover:scale-110 transition`}
          title="Kafka"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Kafka",
              strength: 80,
              experience: 3,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaDocker
          className="text-5xl text-[#0db7ed] hover:scale-110 transition"
          title="Docker"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Docker",
              strength: 70,
              experience: 1,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaRegSnowflake
          className="text-5xl text-[#56b9ff] hover:scale-110 transition"
          title="Snowflake"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "SnowFlake",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <TbBrandCpp
          className="text-5xl text-[#00599C] hover:scale-110 transition"
          title="C++"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "React.js",
              strength: 80,
              experience: 2,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiApollographql
          className="text-5xl text-[#311C87] hover:scale-110 transition"
          title="Apollo GraphQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Apollo Graphql",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiMysql
          className="text-5xl text-[#00758f] hover:scale-110 transition"
          title="MySQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "MySQL",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <RiNextjsFill
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          } hover:scale-110 transition`}
          title="Next.js"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Next.js",
              strength: 75,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaHtml5
          className="text-5xl text-[#e34f26] hover:scale-110 transition"
          title="HTML5"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "HTML",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <TbBrandRedux
          className="text-5xl text-[#e34f26] hover:scale-110 transition"
          title="Redux"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Redux",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaReact
          className="text-5xl text-cyan-400 hover:scale-110 transition"
          title="React"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "React.js",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />

        <FaJava
          className="text-5xl text-[#f89820] hover:scale-110 transition"
          title="Java"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Java",
              strength: 90,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiSpringboot
          className="text-5xl text-green-500 hover:scale-110 transition"
          title="Spring Boot"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Springboot",
              strength: 90,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <BiLogoPostgresql
          className="text-5xl text-[#336791] hover:scale-110 transition"
          title="PostgreSQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "PostgresSQl",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaPython
          className="text-5xl text-[#3776AB] hover:scale-110 transition"
          title="Python"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Python",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiFlask
          className="text-5xl text-gray-300 hover:scale-110 transition"
          title="Flask"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Flask",
              strength: 60,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaGitSquare
          className="text-5xl text-[#f05033] hover:scale-110 transition"
          title="Git"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Git",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiGithub
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          }  hover:scale-110 transition`}
          title="GitHub"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "GitHub",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <GrGraphQl
          className="text-5xl text-[#e10098] hover:scale-110 transition"
          title="GraphQL"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Graphql",
              strength: 85,
              experience: 3,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiApachekafka
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          } text-[#231f20] hover:scale-110 transition`}
          title="Kafka"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Kafka",
              strength: 80,
              experience: 3,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaDocker
          className="text-5xl text-[#0db7ed] hover:scale-110 transition"
          title="Docker"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Docker",
              strength: 70,
              experience: 1,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaRegSnowflake
          className="text-5xl text-[#56b9ff] hover:scale-110 transition"
          title="Snowflake"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "SnowFlake",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <TbBrandCpp
          className="text-5xl text-[#00599C] hover:scale-110 transition"
          title="C++"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "React.js",
              strength: 80,
              experience: 2,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiApollographql
          className="text-5xl text-[#311C87] hover:scale-110 transition"
          title="Apollo GraphQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Apollo Graphql",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiMysql
          className="text-5xl text-[#00758f] hover:scale-110 transition"
          title="MySQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "MySQL",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <RiNextjsFill
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          } hover:scale-110 transition`}
          title="Next.js"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Next.js",
              strength: 75,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaHtml5
          className="text-5xl text-[#e34f26] hover:scale-110 transition"
          title="HTML5"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "HTML",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <TbBrandRedux
          className="text-5xl text-[#e34f26] hover:scale-110 transition"
          title="Redux"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Redux",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaReact
          className="text-5xl text-cyan-400 hover:scale-110 transition"
          title="React"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "React.js",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />

        <FaJava
          className="text-5xl text-[#f89820] hover:scale-110 transition"
          title="Java"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Java",
              strength: 90,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiSpringboot
          className="text-5xl text-green-500 hover:scale-110 transition"
          title="Spring Boot"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Springboot",
              strength: 90,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <BiLogoPostgresql
          className="text-5xl text-[#336791] hover:scale-110 transition"
          title="PostgreSQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "PostgresSQl",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaPython
          className="text-5xl text-[#3776AB] hover:scale-110 transition"
          title="Python"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Python",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiFlask
          className="text-5xl text-gray-300 hover:scale-110 transition"
          title="Flask"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Flask",
              strength: 60,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaGitSquare
          className="text-5xl text-[#f05033] hover:scale-110 transition"
          title="Git"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Git",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiGithub
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          }  hover:scale-110 transition`}
          title="GitHub"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "GitHub",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <GrGraphQl
          className="text-5xl text-[#e10098] hover:scale-110 transition"
          title="GraphQL"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Graphql",
              strength: 85,
              experience: 3,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiApachekafka
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          } text-[#231f20] hover:scale-110 transition`}
          title="Kafka"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Kafka",
              strength: 80,
              experience: 3,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaDocker
          className="text-5xl text-[#0db7ed] hover:scale-110 transition"
          title="Docker"
          onMouseEnter={() => {
            iconValue.current = {
              title: "Docker",
              strength: 70,
              experience: 1,
            };
            setIsPopUpOpen(true);
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaRegSnowflake
          className="text-5xl text-[#56b9ff] hover:scale-110 transition"
          title="Snowflake"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "SnowFlake",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <TbBrandCpp
          className="text-5xl text-[#00599C] hover:scale-110 transition"
          title="C++"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "React.js",
              strength: 80,
              experience: 2,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiApollographql
          className="text-5xl text-[#311C87] hover:scale-110 transition"
          title="Apollo GraphQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Apollo Graphql",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <SiMysql
          className="text-5xl text-[#00758f] hover:scale-110 transition"
          title="MySQL"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "MySQL",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <RiNextjsFill
          className={`text-5xl ${
            isDarkMode ? "text-white" : "text-black"
          } hover:scale-110 transition`}
          title="Next.js"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Next.js",
              strength: 75,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <FaHtml5
          className="text-5xl text-[#e34f26] hover:scale-110 transition"
          title="HTML5"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "HTML",
              strength: 70,
              experience: 1,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
        <TbBrandRedux
          className="text-5xl text-[#e34f26] hover:scale-110 transition"
          title="Redux"
          onMouseEnter={() => {
            setIsPopUpOpen(true);
            iconValue.current = {
              title: "Redux",
              strength: 85,
              experience: 3,
            };
          }}
          onMouseLeave={() => {
            setIsPopUpOpen(false);
            iconValue.current = {};
          }}
        />
      </InfiniteSlider>
      {isPopUpOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
            mass: 0.8,
          }}
          className="absolute flex h-[200px] w-[300px] flex-col items-center justify-center rounded-full mt-100 bg-gradient-to-l from-blue-500/30 to-red-500/30 backdrop-blur-sm"
        >
          <BorderTrail
            style={{
              boxShadow:
                "0px 0px 60px 100px rgb(0 0 0 / 50%), 0 0 100px 100px rgb(255 255 255 / 50%), 0 0 200px 90px rgb(255 255 255 / 50%)",
            }}
            size={100}
          />
          <SlidingNumberBasic iconValue={iconValue} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
            mass: 0.8,
          }}
          className="absolute flex h-[200px] w-[300px] flex-col items-center justify-center rounded-full mt-100 bg-gradient-to-l from-blue-500/30 to-red-500/30 backdrop-blur-sm"
        >
          <BorderTrail
            style={{
              boxShadow:
                "0px 0px 60px 100px rgb(0 0 0 / 50%), 0 0 100px 100px rgb(255 255 255 / 50%), 0 0 200px 90px rgb(255 255 255 / 50%)",
            }}
            size={100}
          />
          <h1 className={`text-4xl font-extrabold bg-clip-text      ${
                  isDarkMode ? "text-white" : "text-black"
                }`}>
            Skills
          </h1>
        </motion.div>
      )}
    </>
  );
};

export default Skills;
