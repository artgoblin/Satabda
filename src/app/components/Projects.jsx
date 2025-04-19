import { Parallax } from "react-scroll-parallax";
import { FaJava, FaPython, FaReact } from "react-icons/fa6";
import { FaGitSquare } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSpringboot, SiTwilio, SiMysql, SiFlask } from "react-icons/si";
import Skills from "./Skills";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import "../../../src/app/globals.css";

const Projects = () => {
  const theme = useSelector((state) => state.theme.color);
  const isDarkMode = theme === "dark";
  const projects = [
    {
      title: "Restaurant Management System",
      tag: "Full-stack App",
      description:
        "Developed a web-based system to streamline restaurant operations, reducing order processing time by 30%. Integrated user-friendly interfaces with robust backend services, ensuring seamless user experience and reliable data handling.",
      technologies: [SiSpringboot, FaReact, SiMysql, FaGitSquare],
      colorFrom: "from-blue-900/50",
      colorTo: "to-emerald-900/50",
      align: "left",
      link: "https://github.com/artgoblin/restaurant_managment_system_front_end",
    },
    {
      title: "WhatsApp Bot",
      tag: "Automation Tool",
      description:
        "Created a bot to provide COVID-19 information and entertainment features, increasing user engagement by 40%. Enhanced user engagement by incorporating interactive elements like trivia, jokes, and memes.",
      technologies: [FaPython, SiFlask, SiTwilio, FaGitSquare],
      colorFrom: "from-purple-900/50",
      colorTo: "to-red-900/50",
      align: "right",
      link: "https://github.com/artgoblin/botwhatsapp",
    },
    {
      title: "Blogging Platform",
      tag: "Full-stack App",
      description:
        "A responsive blogging platform where users can register, login, and share their thoughts and feelings. Implemented secure authentication and cloud-based media storage for seamless content sharing.",
      technologies: [
        FaJava,
        SiSpringboot,
        FaReact,
        BiLogoPostgresql,
        FaGitSquare,
      ],
      colorFrom: "from-yellow-900/50",
      colorTo: "to-pink-900/50",
      align: "left",
      link: "https://github.com/artgoblin/blogging_site",
    },
    {
      title: "AI Powered Music Player",
      tag: "Desktop Application",
      description:
        "Developed a desktop application that uses AI voice assisted playback system which helps to play music based on user preferences, enhancing the music discovery experience.",
      technologies: [FaPython, FaGitSquare],
      colorFrom: "from-green-900/50",
      colorTo: "to-blue-900/50",
      align: "right",
      link: "https://github.com/artgoblin/Voice-assisted-emotion-based-musicplayer",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          <h1 className="text-5xl font-extrabold text-transparent mixing bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-1 py-15">
            Projects
          </h1>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex ${
                project.align === "right" ? "justify-end" : "justify-start"
              }`}
            >
              <Parallax
                translateX={project.align === "right" ? [25, -5] : [-5, 25]}
                scale={[1, 1.05]}
                className="w-full"
              >
                <div
                  className={`bg-gradient-to-br ${project.colorFrom} ${project.colorTo} p-8 rounded-xl border border-white/10 w-full max-w-4xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl curtain`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className={`text-3xl ${isDarkMode ? "text-white" : "text-zinc-700"} font-bold`}>{project.title}</h3>
                    <span className="bg-black/30 px-3 py-1 rounded-full text-sm">
                      {project.tag}
                    </span>
                  </div>

                  <p
                    className={`flex ${
                      project.align === "right" ? "items-end" : "items-start"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className={"flex justify-center mt-8"}>
                    {project.technologies.map((tech, id) => {
                      const Icon = tech;

                        return (
                        <Icon
                          key={id}
                          className={`text-4xl mx-2 ${isDarkMode ? "text-white" : "text-zinc-700"} hover:${isDarkMode ? "text-purple-500" : "text-white"} transition-colors duration-300`}
                        />
                        );
                    })}
                  </div>

                  <div className="flex justify-center mt-8 gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-400 transition"
                    >
                      Git Hub
                    </a>
                  </div>
                </div>
              </Parallax>
            </div>
          ))}
        </div>
        <div className="justify-center flex">
          <a
            className="p-4 mt-16 bg-gradient-to-r from-blue-500/80 to-green-500/80 text-white-800 hover:scale-[1.05] rounded-full font-medium hover:bg-blue-900 transition-all hover:text-black transition duration-300 flex items-center gap-2"
            href={"https://github.com/artgoblin"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>Learn More</span>
          </a>
        </div>
          <Skills />
      </div>
    </>
  );
};

export default Projects;
