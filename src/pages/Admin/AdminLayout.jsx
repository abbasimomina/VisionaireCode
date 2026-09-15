import { Outlet } from "react-router-dom"

import AdminSidebar from "./AdminSidebar.jsx"
import AdminTopbar from "./AdminTopbar.jsx"

import "./Admin.css"

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-layout__main">
        <AdminTopbar />

        <main className="admin-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout