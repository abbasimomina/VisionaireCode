import { Navigate, Outlet } from "react-router-dom";

import { useAdminAuth } from "../context/useAdminAuth.jsx";

const AdminProtectedRoute = () => {
  const {
    loading,
    isAuthenticated,
  } = useAdminAuth();

  // ==========================================
  // Restore Authentication
  // ==========================================

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  // ==========================================
  // Authentication Check
  // ==========================================

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  // ==========================================
  // Protected Content
  // ==========================================

  return <Outlet />;
};

export default AdminProtectedRoute;