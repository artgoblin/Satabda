import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import {
  FaJava,
  FaPython,
  FaReact,
  FaGitSquare,
  FaDocker,
  FaRegSnowflake,
  FaHtml5,
  FaAws,
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
  SiLangchain,
  SiHibernate,
  SiRedis,
  SiJenkins,
  SiSonarqube,
  SiOllama,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";
import { useSelector } from "react-redux";
import "../../app/globals.css";
import { useState } from "react";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { title: "Java", icon: FaJava, color: "#f89820", strength: 90, experience: 3 },
      { title: "Python", icon: FaPython, color: "#3776AB", strength: 70, experience: 1 },
      { title: "C++", icon: TbBrandCpp, color: "#00599C", strength: 80, experience: 2 },
      { title: "HTML5", icon: FaHtml5, color: "#e34f26", strength: 70, experience: 1 },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { title: "React", icon: FaReact, color: "#61dafb", strength: 85, experience: 3 },
      { title: "Spring Boot", icon: SiSpringboot, color: "#6db33f", strength: 90, experience: 3 },
      { title: "Next.js", icon: RiNextjsFill, color: null, strength: 75, experience: 1 },
      { title: "Redux", icon: TbBrandRedux, color: "#764abc", strength: 85, experience: 3 },
      { title: "Flask", icon: SiFlask, color: "#aaaaaa", strength: 60, experience: 1 },
      { title: "Apollo GraphQL", icon: SiApollographql, color: "#311C87", strength: 85, experience: 3 },
      { title: "LangChain", icon: SiLangchain, color: "#1C3C3C", strength: 75, experience: 1 },
      { title: "Hibernate", icon: SiHibernate, color: "#59666C", strength: 85, experience: 3 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { title: "PostgreSQL", icon: BiLogoPostgresql, color: "#336791", strength: 85, experience: 3 },
      { title: "MySQL", icon: SiMysql, color: "#00758f", strength: 85, experience: 3 },
      { title: "Snowflake", icon: FaRegSnowflake, color: "#56b9ff", strength: 70, experience: 1 },
      { title: "Redis", icon: SiRedis, color: "#DC382D", strength: 75, experience: 2 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { title: "Git", icon: FaGitSquare, color: "#f05033", strength: 85, experience: 3 },
      { title: "GitHub", icon: SiGithub, color: null, strength: 85, experience: 3 },
      { title: "Docker", icon: FaDocker, color: "#0db7ed", strength: 70, experience: 1 },
      { title: "GraphQL", icon: GrGraphQl, color: "#e10098", strength: 85, experience: 3 },
      { title: "Kafka", icon: SiApachekafka, color: null, strength: 80, experience: 3 },
      { title: "AWS", icon: FaAws, color: "#FF9900", strength: 70, experience: 1 },
      { title: "Jenkins", icon: SiJenkins, color: "#D33833", strength: 80, experience: 3 },
      { title: "SonarQube", icon: SiSonarqube, color: "#4E9BCD", strength: 80, experience: 3 },
      { title: "Ollama", icon: SiOllama, color: null, strength: 75, experience: 1 },
    ],
  },
];

const allSkills = skillsData.flatMap((cat) => cat.skills);

const ProgressBar = ({ value, color, isDarkMode }) => (
  <div
    className={`w-full h-2 rounded-full overflow-hidden ${
      isDarkMode ? "bg-white/10" : "bg-black/10"
    }`}
  >
    <motion.div
      className="h-full rounded-full"
      style={{
        background: color
          ? `linear-gradient(90deg, ${color}88, ${color})`
          : isDarkMode
          ? "linear-gradient(90deg, #ffffff44, #ffffff)"
          : "linear-gradient(90deg, #00000044, #000000)",
      }}
      initial={{ width: 0 }}
      whileInView={{ width: `${value}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
    />
  </div>
);

const SkillCard = ({ skill, index, isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;
  const iconColor = skill.color || (isDarkMode ? "#ffffff" : "#000000");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl p-5 cursor-default transition-all duration-300 border ${
        isDarkMode
          ? "bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15]"
          : "bg-black/[0.02] border-black/[0.06] hover:bg-black/[0.05] hover:border-black/[0.12]"
      }`}
      style={{
        backdropFilter: "blur(12px)",
        boxShadow: isHovered
          ? isDarkMode
            ? `0 8px 32px ${skill.color || "#6366f1"}20, 0 0 0 1px ${skill.color || "#6366f1"}15`
            : `0 8px 32px ${skill.color || "#6366f1"}15, 0 0 0 1px ${skill.color || "#6366f1"}10`
          : "none",
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${skill.color || "#6366f1"}12, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <motion.div
            animate={isHovered ? { scale: 1.15, rotate: [0, -8, 8, 0] } : { scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Icon className="text-3xl" style={{ color: iconColor }} />
          </motion.div>
          <span
            className={`font-semibold text-sm ${
              isDarkMode ? "text-white/90" : "text-black/85"
            }`}
          >
            {skill.title}
          </span>
        </div>

        <ProgressBar value={skill.strength} color={skill.color} isDarkMode={isDarkMode} />

        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-medium ${
              isDarkMode ? "text-white/40" : "text-black/40"
            }`}
          >
            {skill.experience} {skill.experience === 1 ? "year" : "years"} exp
          </span>
          <span
            className="text-xs font-bold"
            style={{ color: skill.color || (isDarkMode ? "#a5b4fc" : "#4f46e5") }}
          >
            {skill.strength}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const categoryAccent = {
  Languages: { from: "#f59e0b", to: "#ef4444" },
  Frameworks: { from: "#6366f1", to: "#06b6d4" },
  Databases: { from: "#10b981", to: "#3b82f6" },
  "Tools & Platforms": { from: "#f472b6", to: "#8b5cf6" },
};

const Skills = () => {
  const theme = useSelector((state) => state.theme.color);
  const isDarkMode = theme === "dark";

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 flex flex-col items-center gap-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-3"
      >
        <h2
          className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Skills
        </h2>
        <div
          className="h-1 w-16 rounded-full"
          style={{
            background: "linear-gradient(90deg, #6366f1, #06b6d4)",
          }}
        />
        <p
          className={`text-sm max-w-md text-center ${
            isDarkMode ? "text-white/50" : "text-black/50"
          }`}
        >
          Technologies I work with daily
        </p>
      </motion.div>

      <div className="w-full overflow-hidden">
        <InfiniteSlider speedOnHover={2} gap={32}>
          {allSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div key={i} className="flex items-center gap-2 select-none">
                <Icon
                  className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{
                    color:
                      skill.color || (isDarkMode ? "#ffffff" : "#000000"),
                  }}
                />
                <span
                  className={`text-xs font-medium whitespace-nowrap ${
                    isDarkMode ? "text-white/30" : "text-black/30"
                  }`}
                >
                  {skill.title}
                </span>
              </div>
            );
          })}
        </InfiniteSlider>
      </div>

      {skillsData.map((category, catIdx) => {
        const accent = categoryAccent[category.category] || {
          from: "#6366f1",
          to: "#06b6d4",
        };

        return (
          <motion.div
            key={category.category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="w-full"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-5 w-1 rounded-full"
                style={{
                  background: `linear-gradient(180deg, ${accent.from}, ${accent.to})`,
                }}
              />
              <h3
                className={`text-lg font-bold tracking-wide uppercase ${
                  isDarkMode ? "text-white/70" : "text-black/60"
                }`}
                style={{
                  background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {category.category}
              </h3>
              <div
                className={`flex-1 h-px ${
                  isDarkMode ? "bg-white/[0.06]" : "bg-black/[0.06]"
                }`}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {category.skills.map((skill, idx) => (
                <SkillCard
                  key={skill.title}
                  skill={skill}
                  index={idx}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Skills;
