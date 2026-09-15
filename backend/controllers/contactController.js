import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from "../services/contactService.js";

import {
  sendSuccess,
  sendError,
} from "../utilities/apiResponse.js";


// Get all contact inquiries

const getContacts = async (req, res, next) => {
  try {
    const contacts = await getAllContacts();

    return sendSuccess(
      res,
      200,
      "Contact inquiries retrieved successfully",
      contacts
    );
  } catch (error) {
    next(error);
  }
};


// Get contact inquiry by ID

const getContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    const contact = await getContactById(id);

    if (!contact) {
      return sendError(
        res,
        404,
        "Contact inquiry not found"
      );
    }

    return sendSuccess(
      res,
      200,
      "Contact inquiry retrieved successfully",
      contact
    );
  } catch (error) {
    next(error);
  }
};


// Create contact inquiry

const createNewContact = async (req, res, next) => {
  try {
    const contact = await createContact(req.body);

    return sendSuccess(
      res,
      201,
      "Your inquiry has been submitted successfully",
      contact
    );
  } catch (error) {
    next(error);
  }
};


// Update contact inquiry

const updateExistingContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    const contact = await updateContact(
      id,
      req.body
    );

    if (!contact) {
      return sendError(
        res,
        404,
        "Contact inquiry not found"
      );
    }

    return sendSuccess(
      res,
      200,
      "Contact inquiry updated successfully",
      contact
    );
  } catch (error) {
    next(error);
  }
};


// Delete contact inquiry

const deleteExistingContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    const contact = await deleteContact(id);

    if (!contact) {
      return sendError(
        res,
        404,
        "Contact inquiry not found"
      );
    }

    return sendSuccess(
      res,
      200,
      "Contact inquiry deleted successfully",
      contact
    );
  } catch (error) {
    next(error);
  }
};


export {
  getContacts,
  getContact,
  createNewContact,
  updateExistingContact,
  deleteExistingContact,
};