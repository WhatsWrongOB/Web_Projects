import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProjectById } from "@/lib/actions";

const page = async ({ params: { id } }) => {
  const project = await getProjectById(id);

  if (!project) console.log("Project not found");

  return (
   <>
    <section className="project_details">
      <div className="project_details_container">
        <h1>{project.title}</h1>
        <div className="project_details_img">
          <Image src={project.image} height={350} width={800} alt="todo" />
        </div>
        <h2 className="used">Technology Used</h2>
        <div className="filters">
          {project.techStack.map((item, i) => (
            <span className="tech project_tech" key={i}>
              {item}
            </span>
          ))}
        </div>
        <h3>Project description</h3>
        <p>{project.description}</p>
        <h3>Live demo (Preview)</h3>
        <Link href={project.liveLink}>
          <button className="detail_btn">Live demo</button>
        </Link>
        <h3>Source code (Github)</h3>
        <Link href={project.githubLink}>
          <button className="detail_btn detail_2_btn">Source code</button>
        </Link>
      </div>
    </section>
   </>
  );
};

export default page;
