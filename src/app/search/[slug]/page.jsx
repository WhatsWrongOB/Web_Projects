import React from "react";
import Card from "@/components/Card";
import { getProjectByTitle } from "@/lib/actions";


const Search = async ({ params: { slug } }) => {
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

  const projects = await getProjectByTitle(slug);

  return (
    <>
      <section className="projects">
        <div className="projects_page_top">
          <h1>Search Results for "{slug}"</h1>
          <p>Here you can see your searched projects</p>
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
      </section>
    </>
  );
};

export default Search;
