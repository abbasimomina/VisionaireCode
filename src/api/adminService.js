import api from "./api.js";


// ==========================================
// Get Admin Dashboard
// ==========================================

const getAdminDashboard = async () => {
  const response = await api.get(
    "/admin/dashboard"
  );

  return response.data.data;
};


export {
  getAdminDashboard,
};