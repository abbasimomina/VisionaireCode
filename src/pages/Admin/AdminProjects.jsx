import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  LuExternalLink,
  LuFolderKanban,
  LuPencil,
  LuPlus,
  LuStar,
  LuTrash2,
} from "react-icons/lu"

import {
  getAllProjects,
  deleteProject,
} from "../../api/projectService.js"

import { Card } from "../../components/ui/Card.jsx"
import { Button } from "../../components/ui/Button.jsx"

import "./Admin.css"

const AdminProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchProjects = async () => {
    try {
      setLoading(true)
      setError("")

      const data = await getAllProjects()

      setProjects(data)
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to load projects."
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    )

    if (!confirmed) {
      return
    }

    try {
      await deleteProject(id)

      setProjects((currentProjects) =>
        currentProjects.filter(
          (project) => project._id !== id
        )
      )
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to delete project."
      )
    }
  }

  if (loading) {
    return (
      <main className="admin-page admin-projects">
        <div className="admin-page__container">
          <div className="admin-state">
            <h1 className="admin-state__title">
              Loading projects...
            </h1>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="admin-page admin-projects">
      <div className="admin-page__container">
        <header className="admin-projects__header">
          <div className="admin-projects__heading">
            <h1 className="admin-projects__title">
              Projects
            </h1>

            <span className="admin-projects__count">
              {projects.length}
            </span>
          </div>

          <Button
            as={Link}
            to="/admin/projects/new"
            variant="primary"
            size="sm"
          >
            <LuPlus
              size={17}
              strokeWidth={1.8}
              aria-hidden="true"
            />
            <span>Add Project</span>
          </Button>
        </header>

        {error && (
          <div className="admin-projects__error">
            <span>{error}</span>
          </div>
        )}

        {!projects.length && !error && (
          <Card
            variant="default"
            padding="default"
            className="admin-projects__empty"
          >
            <div className="admin-projects__empty-icon">
              <LuFolderKanban
                size={20}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            <div className="admin-projects__empty-content">
              <h2>No projects yet</h2>

              <p>
                Add a project to your portfolio.
              </p>
            </div>

            <Button
              as={Link}
              to="/admin/projects/new"
              variant="secondary"
              size="sm"
            >
              <LuPlus
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <span>Create Project</span>
            </Button>
          </Card>
        )}

        {projects.length > 0 && (
          <section
            className="admin-projects__list"
            aria-label="Projects"
          >
            {projects.map((project) => (
              <Card
                key={project._id}
                variant="default"
                padding="default"
                className="admin-project"
              >
                <div className="admin-project__preview">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                    />
                  ) : (
                    <div className="admin-project__placeholder">
                      <LuFolderKanban
                        size={24}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>

                <div className="admin-project__content">
                  <div className="admin-project__top">
                    <div className="admin-project__meta">
                      <span className="admin-project__category">
                        {project.category}
                      </span>

                      <span className="admin-project__status">
                        {project.status}
                      </span>
                    </div>

                    {project.featured && (
                      <span className="admin-project__featured">
                        <LuStar
                          size={13}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  <h2 className="admin-project__title">
                    {project.title}
                  </h2>

                  <p className="admin-project__description">
                    {project.shortDescription ||
                      project.description}
                  </p>

                  <div className="admin-project__actions">
                    <Button
                      as={Link}
                      to={`/projects/${project.slug}`}
                      variant="tertiary"
                      size="sm"
                    >
                      <LuExternalLink
                        size={15}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      <span>View</span>
                    </Button>

                    <Button
                      as={Link}
                      to={`/admin/projects/edit/${project._id}`}
                      variant="secondary"
                      size="sm"
                    >
                      <LuPencil
                        size={15}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      <span>Edit</span>
                    </Button>

                    <Button
                      type="button"
                      variant="danger"
                      size="sm"
                      onClick={() =>
                        handleDelete(project._id)
                      }
                    >
                      <LuTrash2
                        size={15}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      <span>Delete</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </section>
        )}
      </div>
    </main>
  )
}

export default AdminProjects
