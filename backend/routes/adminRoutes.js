import express from "express";

import {
  loginAdmin,
  getCurrentAdmin,
  createNewAdmin,
  getAdminDashboard
} from "../controllers/adminController.js";

import { protectAdmin } from "../middleware/authValidation.js";

const router = express.Router();


// ==========================================
// Admin Authentication
// ==========================================

// Login
router.post(
  "/login",
  loginAdmin
);


// ==========================================
// Protected Admin Routes
// ==========================================

// Get currently authenticated admin
router.get(
  "/me",
  protectAdmin,
  getCurrentAdmin
);


// ==========================================
// Admin Management
// ==========================================

// Create admin
// Protected so only an authenticated admin
// can create another admin.
router.post(
  "/",
  protectAdmin,
  createNewAdmin
);

// Admin Dashboard
router.get(
  "/dashboard",
  protectAdmin,
  getAdminDashboard
);

export default router;
