import {
  getAllProjects,
  getProjectBySlug,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../services/projectService.js";

import { sendSuccess, sendError } from "../utilities/apiResponse.js";
import { createSlug } from "../utilities/slugUtility.js";

// Get all projects
const getProjects = async (req, res, next) => {
  try {
    const projects = await getAllProjects();

    return sendSuccess(
      res,
      200,
      "Projects retrieved successfully",
      projects
    );
  } catch (error) {
    next(error);
  }
};


// Get project by slug
const getProject = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const project = await getProjectBySlug(slug);

    if (!project) {
      return sendError(
        res,
        404,
        "Project not found"
      );
    }

    return sendSuccess(
      res,
      200,
      "Project retrieved successfully",
      project
    );
  } catch (error) {
    next(error);
  }
};


// Get project by ID
const getProjectByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const project = await getProjectById(id);

    if (!project) {
      return sendError(
        res,
        404,
        "Project not found"
      );
    }

    return sendSuccess(
      res,
      200,
      "Project retrieved successfully",
      project
    );
  } catch (error) {
    next(error);
  }
};


// Create project
const createNewProject = async (req, res, next) => {
  try {
    const projectData = {
      ...req.body,
      slug: createSlug(req.body.title),
    };

    const project = await createProject(projectData);
    return sendSuccess(
      res,
      201,
      "Project created successfully",
      project
    );
  } catch (error) {
    next(error);
  }
};


// Update project
const updateExistingProject = async (req, res, next) => {
  try {
    const { id } = req.params;

    const project = await updateProject(
      id,
      req.body
    );

    if (!project) {
      return sendError(
        res,
        404,
        "Project not found"
      );
    }

    return sendSuccess(
      res,
      200,
      "Project updated successfully",
      project
    );
  } catch (error) {
    next(error);
  }
};


// Delete project
const deleteExistingProject = async (req, res, next) => {
  try {
    const { id } = req.params;

    const project = await deleteProject(id);

    if (!project) {
      return sendError(
        res,
        404,
        "Project not found"
      );
    }

    return sendSuccess(
      res,
      200,
      "Project deleted successfully",
      project
    );
  } catch (error) {
    next(error);
  }
};


export {
  getProjects,
  getProject,
  getProjectByIdController,
  createNewProject,
  updateExistingProject,
  deleteExistingProject,
};