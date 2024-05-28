"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ project }) => {
  return (
    <div className="card">
      <Link href={`/projects/${project._id}`}>
        <Image
          className="card_image"
          src={project.image}
          alt="card"
          height={100}
          width={100}
        />
      </Link>
      <div className="content">
        <Link href={`/projects/${project._id}`}>
          <div className="heading">
            <h2>{project.title}</h2>
          </div>
          {/* <p>{project.description}</p> */}
        </Link>
        <div className="stack">
          {project.techStack.map((item, i) => (
            <span className="tech" key={i}>
              {item}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project._id}`}>
          <button className="card_btn">View</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
