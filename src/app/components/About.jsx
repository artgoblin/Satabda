import { Parallax } from "react-scroll-parallax";
import "../../../src/app/globals.css";

function About() {
  return (
    <div className="flex flex-col items-center min-h-screen py-20 px-4">
      <div className="w-full max-w-4xl">
        <Parallax translateX={[10, -10]} opacity={[0, 1]}>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-10">
            About Me
          </h1>
        </Parallax>
        
        <Parallax translateX={[-10, 10]} opacity={[0, 2]}>
          <div className="text-white text-lg leading-loose space-y-6 p-8">
            <p>
              I'm a passionate Full-Stack Developer with a love for building
              scalable, user-focused web apps using Java, React.js, and Spring
              Boot. I enjoy turning complex problems into clean, efficient
              solutions across both frontend and backend.
            </p>

            <p>Driven by clean code, smart design, and continuous learning.</p>

            <p>
              When I'm not wrangling code, you'll find me pretending to be
              Picasso with a paintbrush, hitting sixes (in my mind) on the
              cricket field, or cooking up dishes that are 50% recipe and 50%
              guesswork.
            </p>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default About;