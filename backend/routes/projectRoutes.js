import express from "express";

import {
  getProjects,
  getProject,
  getProjectByIdController,
  createNewProject,
  updateExistingProject,
  deleteExistingProject,
} from "../controllers/projectController.js";

import { validateProject } from "../middleware/projectValidation.js";
import { protectAdmin } from "../middleware/authValidation.js";

const router = express.Router();


// Get all projects
router.get("/", getProjects);


// Get project by slug
router.get("/slug/:slug", getProject);


// Get project by ID
router.get("/id/:id", getProjectByIdController);


// Create project
router.post("/", protectAdmin, validateProject, createNewProject);


// Update project
router.put("/id/:id", protectAdmin, updateExistingProject);


// Delete project
router.delete("/id/:id", protectAdmin, deleteExistingProject);


export default router;