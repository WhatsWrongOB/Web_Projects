"use client";

import { deleteProject } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBitbucket } from "react-icons/fa";
import { toast } from "react-toastify";

const DashCard = ({ project }) => {
  const handleDelete = async (id) => {
    const { message } = await deleteProject(id);
    toast.success(message)
  };

  return (
    <div className="card dash_card">
      <span className="heart" onClick={() => handleDelete(project._id)}>
        <FaBitbucket color="red" size={18} />
      </span>
      <Image
        className="card_image"
        src={project.image}
        alt="card"
        height={200}
        width={200}
      />
      <div className="content">
        <Link href={`/projects/${project._id}`}>
          <div className="heading dash_card_heading">
            <h2>{project.title}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashCard;
