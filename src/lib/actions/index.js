"use server";

import connectDB from "..";
import Project from "../models";

export const getAllProjects = async (limit) => {
  try {
    await connectDB();
    const projects = await Project.find().limit(limit);

    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.log(error.message);
  }
};

export const getProjectById = async (id) => {
  try {
    await connectDB();

    const project = await Project.findById(id);

    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    console.log(error.message);
  }
};

export const getProjectByTitle = async (title) => {
  try {
    await connectDB();

    const project = await Project.find({
      title: { $regex: new RegExp(title, "i") },
    });

    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    console.log(error.message);
  }
};

export const createProject = async ({
  title,
  description,
  image,
  githubLink,
  liveLink,
  techStack,
}) => {
  try {
    const project = await Project.create({
      title,
      image,
      description,
      githubLink,
      liveLink,
      techStack,
    });

    if (!project) throw new Error("Project creation failed");

    return {
      success: true,
      message: "Project created Sucessfully",
    };
  } catch (error) {
    console.log("Server" + error.message);
  }
};

export const deleteProject = async (id) => {
  try {
    if (!id) throw new Error("Id is not defined");

    await connectDB();

    await Project.findByIdAndDelete(id);

    return {
      success: true,
      message: "Project deleted Sucessfully",
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProject = async (
  id,
  { title, description, image, githubLink, liveLink, techStack }
) => {
  try {
    if (!id) throw new Error("Id is not defined");

    await connectDB();

    const project = await Project.findByIdAndUpdate(
      id,
      { title, description, image, githubLink, liveLink, techStack },
      { new: true }
    );

    if (!project) throw new Error("Project updation failed");

    return {
      success: true,
      message: "Project updated successfully",
    };
  } catch (error) {
    console.log(error.message);
  }
};
