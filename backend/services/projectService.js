import Project from "../models/Project.js";


// Get all projects

const getAllProjects = async () => {
  return await Project.find().sort({ createdAt: -1 });
};


// Get project by slug

const getProjectBySlug = async (slug) => {
  return await Project.findOne({ slug });
};


// Get project by ID

const getProjectById = async (id) => {
  return await Project.findById(id);
};


// Create project

const createProject = async (projectData) => {
  return await Project.create(projectData);
};


// Update project

const updateProject = async (id, projectData) => {
  return await Project.findByIdAndUpdate(
    id,
    projectData,
    {
      new: true,
      runValidators: true,
    }
  );
};


// Delete project

const deleteProject = async (id) => {
  return await Project.findByIdAndDelete(id);
};


export {
  getAllProjects,
  getProjectBySlug,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};