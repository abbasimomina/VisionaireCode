import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {
  getAdminByEmail,
  getAdminById,
  createAdmin,
  updateLastLogin,
} from "../services/adminService.js";
import {
  getAdminDashboardData,
} from "../services/adminDashboardService.js";

import {
  sendSuccess,
  sendError,
} from "../utilities/apiResponse.js";


// ==========================================
// Admin Login
// ==========================================

const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // ----------------------------------------
    // Validate Required Fields
    // ----------------------------------------

    if (!email || !password) {
      return sendError(
        res,
        400,
        "Email and password are required"
      );
    }


    // ----------------------------------------
    // Find Admin
    // ----------------------------------------

    const admin = await getAdminByEmail(email);

    if (!admin) {
      return sendError(
        res,
        401,
        "Invalid email or password"
      );
    }


    // ----------------------------------------
    // Check Account Status
    // ----------------------------------------

    if (!admin.isActive) {
      return sendError(
        res,
        403,
        "Admin account is inactive"
      );
    }


    // ----------------------------------------
    // Verify Password
    // ----------------------------------------

    const isPasswordValid = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isPasswordValid) {
      return sendError(
        res,
        401,
        "Invalid email or password"
      );
    }


    // ----------------------------------------
    // Generate JWT
    // ----------------------------------------

    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );


    // ----------------------------------------
    // Update Last Login
    // ----------------------------------------

    await updateLastLogin(admin._id);


    // ----------------------------------------
    // Remove Password From Response
    // ----------------------------------------

    const adminData = {
      id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      isActive: admin.isActive,
      lastLogin: new Date(),
    };


    return sendSuccess(
      res,
      200,
      "Admin login successful",
      {
        admin: adminData,
        token,
      }
    );
  } catch (error) {
    next(error);
  }
};


// ==========================================
// Get Current Admin
// ==========================================

const getCurrentAdmin = async (req, res, next) => {
  try {
    const admin = await getAdminById(req.admin.id);

    if (!admin) {
      return sendError(
        res,
        404,
        "Admin not found"
      );
    }


    if (!admin.isActive) {
      return sendError(
        res,
        403,
        "Admin account is inactive"
      );
    }


    const adminData = {
      id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      isActive: admin.isActive,
      lastLogin: admin.lastLogin,
    };


    return sendSuccess(
      res,
      200,
      "Admin retrieved successfully",
      adminData
    );
  } catch (error) {
    next(error);
  }
};


// ==========================================
// Create Admin
// ==========================================

const createNewAdmin = async (req, res, next) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;


    // ----------------------------------------
    // Validate Required Fields
    // ----------------------------------------

    if (!name || !email || !password) {
      return sendError(
        res,
        400,
        "Name, email, and password are required"
      );
    }


    // ----------------------------------------
    // Check Existing Admin
    // ----------------------------------------

    const existingAdmin = await getAdminByEmail(email);

    if (existingAdmin) {
      return sendError(
        res,
        409,
        "Admin with this email already exists"
      );
    }


    // ----------------------------------------
    // Hash Password
    // ----------------------------------------

    const hashedPassword = await bcrypt.hash(
      password,
      12
    );


    // ----------------------------------------
    // Create Admin
    // ----------------------------------------

    const admin = await createAdmin({
      name,
      email,
      password: hashedPassword,
    });


    // ----------------------------------------
    // Remove Password From Response
    // ----------------------------------------

    const adminData = {
      id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      isActive: admin.isActive,
      createdAt: admin.createdAt,
    };


    return sendSuccess(
      res,
      201,
      "Admin created successfully",
      adminData
    );
  } catch (error) {
    next(error);
  }
};

// ==========================================
// Admin Dashboard
// ==========================================

const getAdminDashboard = async (req, res, next) => {
  try {
    const dashboard =
      await getAdminDashboardData();

    return sendSuccess(
      res,
      200,
      "Admin dashboard retrieved successfully",
      dashboard
    );
  } catch (error) {
    next(error);
  }
};

export {
  loginAdmin,
  getCurrentAdmin,
  createNewAdmin,
  getAdminDashboard
};