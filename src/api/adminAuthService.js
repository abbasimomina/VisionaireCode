import api from "./api.js";


// Admin Login
const loginAdmin = async (credentials) => {
  const response = await api.post(
    "/admin/login",
    credentials
  );

  return response.data.data;
};


// Get Current Admin
const getCurrentAdmin = async () => {
  const response = await api.get(
    "/admin/me"
  );

  return response.data.data;
};


// Create Admin
const createAdmin = async (adminData) => {
  const response = await api.post(
    "/admin",
    adminData
  );

  return response.data.data;
};


export {
  loginAdmin,
  getCurrentAdmin,
  createAdmin,
};