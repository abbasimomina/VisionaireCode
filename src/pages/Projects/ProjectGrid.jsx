import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getAllProjects } from "../../api/projectService.js"

import { Container } from "../../components/layout/Container.jsx"
import { Card } from "../../components/ui/Card.jsx"

function ProjectPreview({ project }) {
  return (
    <div className="project-grid__preview">
      {project.thumbnail || project.heroImage ? (
        <img
          src={project.thumbnail || project.heroImage}
          alt=""
          className="project-grid__image"
        />
      ) : (
        <div
          className="project-grid__browser"
          aria-hidden="true"
        >
          <div className="project-grid__browser-bar">
            <span />
            <span />
            <span />
          </div>

          <div className="project-grid__interface">
            <div className="project-grid__interface-sidebar">
              <span className="project-grid__sidebar-line project-grid__sidebar-line--active" />
              <span className="project-grid__sidebar-line" />
              <span className="project-grid__sidebar-line" />
              <span className="project-grid__sidebar-line" />
            </div>

            <div className="project-grid__interface-content">
              <div className="project-grid__interface-heading">
                <span />
                <span />
              </div>

              <div className="project-grid__metrics">
                <span />
                <span />
                <span />
              </div>

              <div className="project-grid__chart">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      )}

      {project.status && (
        <span className="project-grid__status">
          {project.status}
        </span>
      )}
    </div>
  )
}

export function ProjectGrid() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true)
        setError(null)

        const projectData = await getAllProjects()

        if (!Array.isArray(projectData)) {
          throw new Error("Invalid projects response")
        }

        setProjects(projectData)
      } catch (error) {
        console.error(
          "Failed to load project library:",
          error
        )

        setError("Unable to load projects.")
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  return (
    <section
      id="project-library"
      className="project-grid"
      aria-labelledby="project-grid-title"
    >
      <Container>
        <header className="project-grid__header">
          <div className="project-grid__heading">
            <p className="project-grid__eyebrow">
              Project Library
            </p>

            <h2
              id="project-grid-title"
              className="project-grid__title"
            >
              Explore the project library.
            </h2>
          </div>

          <div className="project-grid__introduction">
            <p>
              Browse the software projects currently being developed
              under Visionaire Code. Open a project to explore its
              details, implementation, and development journey.
            </p>
          </div>
        </header>

        {loading && (
          <div className="project-grid__state">
            <p>Loading projects...</p>
          </div>
        )}

        {!loading && error && (
          <div className="project-grid__state">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="project-grid__state">
            <p>No projects are currently available.</p>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="project-grid__items">
            {projects.map((project) => (
              <Card
                key={project._id}
                className="project-grid__card"
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="project-grid__link"
                  aria-label={`View details for ${project.title}`}
                >
                  <ProjectPreview project={project} />

                  <div className="project-grid__body">
                    <div className="project-grid__meta">
                      {project.category && (
                        <span className="project-grid__category">
                          {project.category}
                        </span>
                      )}

                      {project.technologies?.length > 0 && (
                        <span className="project-grid__technology-count">
                          {project.technologies.length} technologies
                        </span>
                      )}
                    </div>

                    <h3 className="project-grid__name">
                      {project.title}
                    </h3>

                    {project.technologies?.length > 0 && (
                      <div
                        className="project-grid__technologies"
                        aria-label={`Technologies used for ${project.title}`}
                      >
                        {project.technologies
                          .slice(0, 3)
                          .map((technology) => (
                            <span
                              key={technology}
                              className="project-grid__technology"
                            >
                              {technology}
                            </span>
                          ))}
                      </div>
                    )}

                    <div className="project-grid__action">
                      <span>View Project</span>

                      <span
                        className="project-grid__action-line"
                        aria-hidden="true"
                      />

                      <span
                        className="project-grid__action-icon"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}