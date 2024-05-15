import React from "react";
import { getAllProjects } from "@/lib/actions";
import Card from "@/components/Card";

const Projects = async () => {
  const tech = [
    "Html",
    "Css",
    "JavaScript",
    "TypeScript",
    "ReactJs",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
  ];

  const projects = await getAllProjects();

  return (
    <>
      <section className="projects">
        <div className="projects_page_top">
          <h1>Beginner's Projects 😍</h1>
          <p>Practice these projects and upgrade your web development skills</p>
          <div className="filters">
            {tech.map((tech, i) => (
              <span className="tech project_tech" key={i}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="lower_container">
          {projects &&
            projects.map((project, index) => (
              <Card key={index} project={project} />
            ))}
        </div>
        <div className="view">
          <button>Load more</button>
        </div>
      </section>
    </>
  );
};

export default Projects;
