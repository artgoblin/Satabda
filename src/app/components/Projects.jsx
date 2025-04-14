import { Parallax } from "react-scroll-parallax";

const Projects = () => {
  return (
    <section className="py-32 bg-transparent text-white">
      <div className="container mx-auto px-6">
        <Parallax translateY={[-50, 50]} opacity={[0.5, 1]}>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-10">
            Projects
          </h1>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Parallax translateY={[-30, 30]}>
            <div className="bg-white/10 p-6 rounded-xl shadow-xl hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-4">Project One</h3>
              <p>Full-stack app using Java and Spring Boot.</p>
            </div>
          </Parallax>

          <Parallax translateY={[20, -20]}>
            <div className="bg-white/10 p-6 rounded-xl shadow-xl hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-4">Project Two</h3>
              <p>Interactive UI with React and animations.</p>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default Projects;
