import express from "express";

import {
  getContacts,
  getContact,
  createNewContact,
  updateExistingContact,
  deleteExistingContact,
} from "../controllers/contactController.js";

import { validateContact } from "../middleware/contactValidation.js";
import { protectAdmin } from "../middleware/authValidation.js";

const router = express.Router();


// Get all contact inquiries
router.get("/", protectAdmin, getContacts);


// Get contact inquiry by ID
router.get("/id/:id", protectAdmin, getContact);


// Create contact inquiry
router.post("/", validateContact, createNewContact);


// Update contact inquiry
router.put("/id/:id", protectAdmin, updateExistingContact);


// Delete contact inquiry
router.delete("/id/:id", protectAdmin, deleteExistingContact);


export default router;