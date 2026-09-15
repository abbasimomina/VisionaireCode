import Admin from "../models/Admin.js";


// ==========================================
// Get Admin By Email
// ==========================================

const getAdminByEmail = async (email) => {
  return await Admin.findOne({
    email: email.toLowerCase().trim(),
  });
};


// ==========================================
// Get Admin By ID
// ==========================================

const getAdminById = async (id) => {
  return await Admin.findById(id);
};


// ==========================================
// Create Admin
// ==========================================

const createAdmin = async (adminData) => {
  return await Admin.create(adminData);
};


// ==========================================
// Update Last Login
// ==========================================

const updateLastLogin = async (id) => {
  return await Admin.findByIdAndUpdate(
    id,
    {
      lastLogin: new Date(),
    },
    {
      new: true,
    }
  );
};


// ==========================================
// Update Admin
// ==========================================

const updateAdmin = async (id, adminData) => {
  return await Admin.findByIdAndUpdate(
    id,
    adminData,
    {
      new: true,
      runValidators: true,
    }
  );
};


// ==========================================
// Delete Admin
// ==========================================

const deleteAdmin = async (id) => {
  return await Admin.findByIdAndDelete(id);
};


export {
  getAdminByEmail,
  getAdminById,
  createAdmin,
  updateLastLogin,
  updateAdmin,
  deleteAdmin,
};