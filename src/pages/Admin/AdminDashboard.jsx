import { useEffect, useState } from "react"
import {
  LuFolderKanban,
  LuMail,
  LuStar,
  LuTrendingUp,
} from "react-icons/lu"

import { getAdminDashboard } from "../../api/adminService.js"
import { Card } from "../../components/ui/Card.jsx"

import "./Admin.css"

const AdminDashboard = () => {
  const [dashboard, setDashboard] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true)
        setError("")

        const data = await getAdminDashboard()

        setDashboard(data)
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Unable to load admin dashboard."
        )
      } finally {
        setLoading(false)
      }
    }

    fetchDashboard()
  }, [])

  if (loading) {
    return (
      <main className="admin-page admin-dashboard">
        <div className="admin-page__container">
          <div className="admin-state">
            <h1 className="admin-state__title">
              Loading dashboard...
            </h1>
          </div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="admin-page admin-dashboard">
        <div className="admin-page__container">
          <div className="admin-state admin-state--error">
            <h1 className="admin-state__title">
              Unable to load dashboard
            </h1>

            <p className="admin-state__description">
              {error}
            </p>
          </div>
        </div>
      </main>
    )
  }

  if (!dashboard) {
    return (
      <main className="admin-page admin-dashboard">
        <div className="admin-page__container">
          <div className="admin-state">
            <h1 className="admin-state__title">
              Dashboard data unavailable
            </h1>
          </div>
        </div>
      </main>
    )
  }

  const {
    statistics,
    recentProjects,
    recentContacts,
  } = dashboard

  const statisticsCards = [
    {
      label: "Projects",
      value: statistics.totalProjects,
      icon: LuFolderKanban,
    },
    {
      label: "Featured",
      value: statistics.featuredProjects,
      icon: LuStar,
    },
    {
      label: "In Progress",
      value: statistics.inProgressProjects,
      icon: LuTrendingUp,
    },
    {
      label: "Contacts",
      value: statistics.totalContacts,
      icon: LuMail,
    },
  ]

  return (
    <main className="admin-page admin-dashboard">
      <div className="admin-page__container">
        <header className="admin-dashboard__header">
          <h1 className="admin-dashboard__title">
            Dashboard
          </h1>

          <p className="admin-dashboard__subtitle">
            Overview of your workspace
          </p>
        </header>

        <section
          className="admin-dashboard__statistics"
          aria-label="Dashboard statistics"
        >
          {statisticsCards.map((item) => {
            const Icon = item.icon

            return (
              <Card
                key={item.label}
                variant="default"
                padding="default"
                className="admin-dashboard__stat-card"
              >
                <div className="admin-dashboard__stat-icon">
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div className="admin-dashboard__stat-content">
                  <span className="admin-dashboard__stat-value">
                    {item.value}
                  </span>

                  <span className="admin-dashboard__stat-label">
                    {item.label}
                  </span>
                </div>
              </Card>
            )
          })}
        </section>

        <div className="admin-dashboard__activity">
          <section className="admin-dashboard__activity-section">
            <div className="admin-dashboard__section-heading">
              <h2 className="admin-dashboard__section-title">
                Recent Projects
              </h2>

              <span className="admin-dashboard__section-action">
                {recentProjects?.length || 0}
              </span>
            </div>

            {recentProjects?.length > 0 ? (
              <div className="admin-dashboard__cards">
                {recentProjects.map((project) => (
                  <Card
                    key={project._id}
                    variant="default"
                    padding="default"
                    className="admin-dashboard__activity-card"
                  >
                    <div className="admin-dashboard__activity-main">
                      <div className="admin-dashboard__activity-icon">
                        <LuFolderKanban
                          size={17}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="admin-dashboard__activity-info">
                        <h3 className="admin-dashboard__activity-title">
                          {project.title}
                        </h3>

                        <span className="admin-dashboard__activity-meta">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <span className="admin-dashboard__status">
                      {project.status}
                    </span>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="admin-dashboard__empty">
                No projects found.
              </div>
            )}
          </section>

          <section className="admin-dashboard__activity-section">
            <div className="admin-dashboard__section-heading">
              <h2 className="admin-dashboard__section-title">
                Recent Contacts
              </h2>

              <span className="admin-dashboard__section-action">
                {recentContacts?.length || 0}
              </span>
            </div>

            {recentContacts?.length > 0 ? (
              <div className="admin-dashboard__cards">
                {recentContacts.map((contact) => (
                  <Card
                    key={contact._id}
                    variant="default"
                    padding="default"
                    className="admin-dashboard__activity-card"
                  >
                    <div className="admin-dashboard__activity-main">
                      <div className="admin-dashboard__activity-icon">
                        <LuMail
                          size={17}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="admin-dashboard__activity-info">
                        <h3 className="admin-dashboard__activity-title">
                          {contact.name}
                        </h3>

                        <span className="admin-dashboard__activity-meta">
                          {contact.email}
                        </span>

                        <span className="admin-dashboard__activity-type">
                          {contact.projectType}
                        </span>
                      </div>
                    </div>

                    <span className="admin-dashboard__status">
                      {contact.status}
                    </span>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="admin-dashboard__empty">
                No contact inquiries found.
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

export default AdminDashboard
