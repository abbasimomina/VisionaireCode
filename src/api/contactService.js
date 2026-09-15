import api from "./api.js";


// ==========================================
// Get All Contact Inquiries
// ==========================================

const getAllContacts = async () => {

  const response = await api.get(
    "/contacts"
  );

  return response.data.data;
};


// ==========================================
// Get Contact Inquiry By ID
// ==========================================

const getContactById = async (id) => {

  const response = await api.get(
    `/contacts/id/${id}`
  );

  return response.data.data;
};


// ==========================================
// Submit Contact Inquiry
// ==========================================

const createContact = async (contactData) => {

  const response = await api.post(
    "/contacts",
    contactData
  );

  return response.data.data;
};


// ==========================================
// Update Contact Inquiry
// ==========================================

const updateContact = async (id, contactData) => {

  const response = await api.put(
    `/contacts/id/${id}`,
    contactData
  );

  return response.data.data;
};


// ==========================================
// Delete Contact Inquiry
// ==========================================

const deleteContact = async (id) => {

  const response = await api.delete(
    `/contacts/id/${id}`
  );

  return response.data.data;
};


export {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};