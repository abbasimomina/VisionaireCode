import {
  LuChevronRight,
} from "react-icons/lu"
import { useLocation } from "react-router-dom"

import { useAdminAuth } from "../../context/useAdminAuth.jsx"

const AdminTopbar = () => {
  const location = useLocation()
  const { admin } = useAdminAuth()

  const getPageTitle = () => {
    if (location.pathname === "/admin/dashboard") {
      return "Dashboard"
    }

    if (location.pathname.startsWith("/admin/projects")) {
      return "Projects"
    }

    if (location.pathname.startsWith("/admin/contacts")) {
      return "Contacts"
    }

    return "Admin"
  }

  const pageTitle = getPageTitle()

  return (
    <header className="admin-topbar">
      <div className="admin-topbar__page">
        <div className="admin-topbar__breadcrumb">
          <span>Admin</span>

          <LuChevronRight
            size={14}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span className="admin-topbar__breadcrumb-current">
            {pageTitle}
          </span>
        </div>

        <h1 className="admin-topbar__title">
          {pageTitle}
        </h1>
      </div>

      <div className="admin-topbar__account">
        <div className="admin-topbar__account-avatar">
          {(admin?.name || "A")
            .charAt(0)
            .toUpperCase()}
        </div>

        <div className="admin-topbar__account-info">
          <span className="admin-topbar__account-name">
            {admin?.name || "Administrator"}
          </span>

          <span className="admin-topbar__account-role">
            Admin
          </span>
        </div>
      </div>
    </header>
  )
}

export default AdminTopbar