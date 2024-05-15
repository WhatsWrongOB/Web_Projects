"use client";

import { createProject } from "@/lib/actions";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    githubLink: "",
    liveLink: "",
    techStack: [],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        const file = fileReader.result;
        setFormData({ ...formData, image: file });
      };
      fileReader.readAsDataURL(file);
    } else if (name === "techStack") {
      const techStack = value.split(",").map((tech) => tech.trim());
      setFormData({ ...formData, [name]: techStack });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, image, githubLink, liveLink, techStack } =
      formData;

    try {
      setLoading(true);

      const data = await createProject({
        title,
        description,
        image,
        githubLink,
        liveLink,
        techStack,
      });

      if (data.success) toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

    setFormData({
      title: "",
      description: "",
      image: null,
      githubLink: "",
      liveLink: "",
      techStack: [],
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Title"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          id="description"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Github Link"
          id="githubLink"
          name="githubLink"
          value={formData.githubLink}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Live Link"
          id="liveLink"
          name="liveLink"
          value={formData.liveLink}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Tech Stack"
          id="techStack"
          name="techStack"
          value={formData.techStack.join(", ")}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-button">
        {loading ? "Creating.." : "Create"}
      </button>
    </form>
  );
}
