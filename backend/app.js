import express from "express";
import cors from "cors";

import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

import {
  notFound,
  errorHandler,
} from "./middleware/errorMiddleware.js";


const app = express();


// ==========================================
// CORS
// ==========================================

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);


// ==========================================
// Body Parsing
// ==========================================

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);


// ==========================================
// Health Check
// ==========================================

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Visionaire Code API is running",
  });
});


// ==========================================
// Project Routes
// ==========================================

app.use(
  "/api/projects",
  projectRoutes
);


// ==========================================
// Contact Routes
// ==========================================

app.use(
  "/api/contacts",
  contactRoutes
);


// ==========================================
// Admin Routes
// ==========================================

app.use(
  "/api/admin",
  adminRoutes
);


// ==========================================
// 404 Handler
// ==========================================

app.use(notFound);


// ==========================================
// Global Error Handler
// ==========================================

app.use(errorHandler);


export default app;
