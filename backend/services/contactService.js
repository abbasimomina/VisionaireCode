import Contact from "../models/Contact.js";


// Get all contact inquiries

const getAllContacts = async () => {
  return await Contact.find().sort({ createdAt: -1 });
};


// Get contact inquiry by ID

const getContactById = async (id) => {
  return await Contact.findById(id);
};


// Create contact inquiry

const createContact = async (contactData) => {
  return await Contact.create(contactData);
};


// Update contact inquiry

const updateContact = async (id, contactData) => {
  return await Contact.findByIdAndUpdate(
    id,
    contactData,
    {
      new: true,
      runValidators: true,
    }
  );
};


// Delete contact inquiry

const deleteContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};


export {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};