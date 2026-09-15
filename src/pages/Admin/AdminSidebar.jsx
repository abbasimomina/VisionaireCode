import {
  LuFolderKanban,
  LuLayoutDashboard,
  LuLogOut,
  LuMail,
} from "react-icons/lu"
import { NavLink } from "react-router-dom"

import { useAdminAuth } from "../../context/useAdminAuth.jsx"

const AdminSidebar = () => {
  const { admin, logout } = useAdminAuth()

  const navigation = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: LuLayoutDashboard,
    },
    {
      label: "Projects",
      path: "/admin/projects",
      icon: LuFolderKanban,
    },
    {
      label: "Contacts",
      path: "/admin/contacts",
      icon: LuMail,
    },
  ]

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__header">
        <div className="admin-sidebar__brand">
          <span className="admin-sidebar__brand-name">
            Visionaire Code
          </span>

          <span className="admin-sidebar__brand-label">
            Administration
          </span>
        </div>
      </div>

      <nav
        className="admin-sidebar__navigation"
        aria-label="Admin navigation"
      >
        <p className="admin-sidebar__navigation-label">
          Workspace
        </p>

        <div className="admin-sidebar__navigation-list">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin/dashboard"}
                className={({ isActive }) =>
                  `admin-sidebar__link ${
                    isActive
                      ? "admin-sidebar__link--active"
                      : ""
                  }`
                }
              >
                <span
                  className="admin-sidebar__link-icon"
                  aria-hidden="true"
                >
                  <Icon size={18} strokeWidth={1.8} />
                </span>

                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </div>
      </nav>

      <div className="admin-sidebar__footer">
        {admin && (
          <div className="admin-sidebar__account">
            <div className="admin-sidebar__account-avatar">
              {(admin.name || "A")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div className="admin-sidebar__account-info">
              <span className="admin-sidebar__account-name">
                {admin.name}
              </span>

              <span className="admin-sidebar__account-role">
                Administrator
              </span>
            </div>
          </div>
        )}

        <button
          type="button"
          className="admin-sidebar__logout"
          onClick={logout}
        >
          <LuLogOut
            size={17}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default AdminSidebar