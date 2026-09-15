import api from "./api.js";


// Get all projects

const getAllProjects = async () => {
  const response = await api.get("/projects");

  return response.data.data;
};


// Get project by slug

const getProjectBySlug = async (slug) => {
  const response = await api.get(
    `/projects/slug/${slug}`
  );

  return response.data.data;
};


// Get project by ID

const getProjectById = async (id) => {
  const response = await api.get(
    `/projects/id/${id}`
  );

  return response.data.data;
};


// Create project

const createProject = async (projectData) => {
  const response = await api.post(
    "/projects",
    projectData
  );

  return response.data.data;
};


// Update project

const updateProject = async (id, projectData) => {
  const response = await api.put(
    `/projects/id/${id}`,
    projectData
  );

  return response.data.data;
};


// Delete project

const deleteProject = async (id) => {
  const response = await api.delete(
    `/projects/id/${id}`
  );

  return response.data.data;
};


export {
  getAllProjects,
  getProjectBySlug,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};