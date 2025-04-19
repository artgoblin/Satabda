import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/motion-primitives/accordion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import "../../../src/app/globals.css";

const Experience = () => {
  const theme = useSelector((state) => state.theme.color);
  const isDarkMode = theme === "dark";
  return (
    <>
      <h1 className="text-5xl font-extrabold text-transparent mixing bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-5 py-8">
        Experience
      </h1>

      <Accordion
        className="flex w-full flex-col"
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        variants={{
          expanded: {
            opacity: 1,
            scale: 1,
          },
          collapsed: {
            opacity: 0,
            scale: 0.7,
          },
        }}
      >
        {/* IBS Software */}
        <AccordionItem value="ibs-software" className="py-2">
          <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
              <div className="flex items-center justify-between w-full">
                <div className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-black"}`}>IBS Software
                <em className={`text-sm ${isDarkMode ? "text-zinc-300" : "text-zinc-800"} px-3`}>
                    (Full-Time Employee)
                  </em>
                </div>
                <div className={`text-sm ${isDarkMode ? "text-zinc-300" : "text-zinc-800"} flex items-center space-x-4`}>
                  <em>Jun 2023 – Present</em>
                  <a
                    className={`relative rounded-full cursor-pointer p-1 mr-2 ${isDarkMode ? "text-white" : "text-black"} border-1 border-transparent hover:border-pink-500 hover:shadow-[0_0_1px_1px] hover:shadow-pink-500 transition-all duration-300`}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/feed/update/urn:li:activity:7230129443753615361/",
                        "_blank"
                      )
                    }
                  >
                    <FaExternalLinkAlt className="h-4 w-4 mr-1" />
                  </a>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="origin-left">
            <ul className={`pl-6 pr-2 ${isDarkMode ? "text-zinc-300" : "text-zinc-800"} list-disc space-y-2`}>
              <li>
                Developed and deployed 10+ features for an airline SaaS
                platform, reducing bugs by 15% through rigorous testing and
                debugging.
              </li>
              <li>
                Collaborated with cross-functional teams to align development
                with business goals, accelerating delivery timelines.
              </li>
              <li>
                Mentored junior developers, improving code quality and team
                productivity.
              </li>
              <li>
                🏆 Awarded the <strong>"Debutant Award"</strong> for outstanding
                performance and key milestone achievements.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Cognizant */}
        <AccordionItem value="cognizant" className="py-2">
          <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
              <div className="flex ml-2 items-center justify-between w-full">
                <div className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-black"}`}>
                  Cognizant Technology Solutions
                  <em className={`text-sm ${isDarkMode ? "text-zinc-300" : "text-zinc-800"} px-3`}>
                    (Internship)
                  </em>
                </div>
                <div className={`text-sm ${isDarkMode ? "text-zinc-300" : "text-zinc-800"} flex items-center space-x-4`}>
                  <em>Jan 2023 – Apr 2023</em>
                  <a
                    className={`relative rounded-full cursor-pointer p-1 mr-2 ${isDarkMode ? "text-white" : "text-black"} border-1 border-transparent hover:border-pink-500 hover:shadow-[0_0_1px_1px] hover:shadow-pink-500 transition-all duration-300`}
                    onClick={() =>
                      window.open(
                        "/cognizant.pdf",
                        "_blank"
                      )
                    }
                  >
                    <FaExternalLinkAlt className="h-4 w-4 mr-1" />
                  </a>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="origin-left">
            <ul className={`pl-6 pr-2 ${isDarkMode ? "text-zinc-300" : "text-zinc-800"} list-disc space-y-2`}>
              <li>
                Designed and optimized data models using Snowflake and SQL
                Server, improving query performance by 20%.
              </li>
              <li>
                Developed database schemas ensuring data integrity and efficient
                design.
              </li>
              <li>
                Tuned indexes and queries to enhance system performance for a
                small-scale application.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* highradius*/}
        <AccordionItem value="highradius" className="py-2">
          <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
              <div className="flex ml-2 items-center justify-between w-full">
                <div className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-black"}`}>
                  HighRadius
                  <em className={`text-sm ${isDarkMode ? "text-zinc-300" : "text-zinc-800"} px-3`}>
                    (Winter Internship)
                  </em>
                </div>
                <div className={`text-sm ${isDarkMode ? "text-zinc-300" : "text-zinc-800"} flex items-center space-x-4`}>
                  <em>Jan 2022 – Apr 2022</em>
                  <a
                    className={`relative rounded-full cursor-pointer p-1 mr-2 ${isDarkMode ? "text-white" : "text-black"} border-1 border-transparent hover:border-pink-500 hover:shadow-[0_0_1px_1px] hover:shadow-pink-500 transition-all duration-300`}
                    onClick={() =>
                      window.open(
                        "/highradius.pdf",
                        "_blank"
                      )
                    }
                  >
                    <FaExternalLinkAlt className="h-4 w-4 mr-1" />
                  </a>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="origin-left">
            <ul className={`pl-6 pr-2 ${isDarkMode ? "text-zinc-300" : "text-zinc-800"} list-disc space-y-2`}>
              <li>
                Developed and test b2c web application using react and python.
              </li>
              <li>
                integrated Machine learning with the application which helps to notify
                customers about their upcoming payment due dates and also helps to pay
                the bills.
              </li>
              <li>Tuned indexes and queries to enhance system performance.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        {/* pearl thoughts */}
        <AccordionItem value="pearlthoughts" className="py-2">
          <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
              <div className="flex ml-2 items-center justify-between w-full">
                <div className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-black"}`}>
                  PearlThoughts
                  <em className={`text-sm ${isDarkMode ? "text-zinc-300" : "text-zinc-800"} px-3`}>
                    (Summer Internship)
                  </em>
                </div>
                <div className={`text-sm ${isDarkMode ? "text-zinc-300" : "text-zinc-800"} flex items-center space-x-4`}>
                  <em>Aug 2021 – Oct 2021</em>
                  <a
                    className={`relative rounded-full cursor-pointer p-1 mr-2 ${isDarkMode ? "text-white" : "text-black"} border-1 border-transparent hover:border-pink-500 hover:shadow-[0_0_1px_1px] hover:shadow-pink-500 transition-all duration-300`}
                    onClick={() =>
                      window.open(
                        "pearlthought.pdf",
                        "_blank"
                      )
                    }
                  >
                    <FaExternalLinkAlt className="h-4 w-4 mr-1" />
                  </a>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="origin-left">
            <ul className={`pl-6 pr-2 ${isDarkMode ? "text-zinc-300" : "text-zinc-800"} list-disc space-y-2`}>
              <li>Boiler plate code generation using react and Java.</li>
              <li>performance enhancement of the overall application.</li>
              <li>Optimoization of the code base.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Experience;
