import jwt from "jsonwebtoken";

import { sendError } from "../utilities/apiResponse.js";


// ==========================================
// Protect Admin Routes
// ==========================================

const protectAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;


    // ----------------------------------------
    // Check Authorization Header
    // ----------------------------------------

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return sendError(
        res,
        401,
        "Authentication required"
      );
    }


    // ----------------------------------------
    // Extract Token
    // ----------------------------------------

    const token = authHeader.split(" ")[1];


    if (!token) {
      return sendError(
        res,
        401,
        "Authentication token is missing"
      );
    }


    // ----------------------------------------
    // Verify Token
    // ----------------------------------------

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );


    // ----------------------------------------
    // Check Admin Role
    // ----------------------------------------

    if (decoded.role !== "admin") {
      return sendError(
        res,
        403,
        "Admin access required"
      );
    }


    // ----------------------------------------
    // Attach Admin To Request
    // ----------------------------------------

    req.admin = {
      id: decoded.id,
      role: decoded.role,
    };


    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return sendError(
        res,
        401,
        "Authentication token has expired"
      );
    }


    if (error.name === "JsonWebTokenError") {
      return sendError(
        res,
        401,
        "Invalid authentication token"
      );
    }


    next(error);
  }
};


export {
  protectAdmin,
};
