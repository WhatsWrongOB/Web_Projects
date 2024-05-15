import DashCard from "@/components/DashCard";
import Form from "@/components/Form";
import { getAllProjects } from "@/lib/actions";
import React from "react";

const Admin = async () => {
  const projects = await getAllProjects();

  return (
    <>
      <section className="projects">
        <div className="projects_page_top">
          <h1>Admin Panel 😍</h1>
          <p>Here you csn add and delete projects for web developers</p>
          <div className="filters">
            <span className="tech project_tech">Html</span>
            <span className="tech project_tech">Css</span>
            <span className="tech project_tech">JavaScript</span>
            <span className="tech project_tech">TypeScript</span>
            <span className="tech project_tech">ReactJs</span>
            <span className="tech project_tech">NodeJs</span>
            <span className="tech project_tech">ExpressJs</span>
            <span className="tech project_tech">MongoDB</span>
          </div>
        </div>
        <div className="dash_container">
          <div className="dash_left">
            <Form />
          </div>

          <div className="dash_right">
            {projects &&
              projects.map((item) => (
                <DashCard key={item._id} project={item} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
