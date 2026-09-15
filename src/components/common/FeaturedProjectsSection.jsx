
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getAllProjects } from "../../api/projectService.js"

import { Container } from "../layout/Container.jsx"
import { Card } from "../ui/Card.jsx"
import { Button } from "../ui/Button.jsx"

import "./FeaturedProjectsSection.css"


function ProjectPreview({ project }) {
  return (
    <div className="featured-projects__preview">
      {project.thumbnail || project.heroImage ? (
        <img
          src={project.thumbnail || project.heroImage}
          alt=""
          className="featured-projects__image"
        />
      ) : (
        <div
          className="featured-projects__browser"
          aria-hidden="true"
        >
          <div className="featured-projects__browser-bar">
            <span />
            <span />
            <span />
          </div>

          <div className="featured-projects__interface">
            <div className="featured-projects__interface-sidebar">
              <span className="featured-projects__sidebar-line featured-projects__sidebar-line--active" />
              <span className="featured-projects__sidebar-line" />
              <span className="featured-projects__sidebar-line" />
              <span className="featured-projects__sidebar-line" />
            </div>

            <div className="featured-projects__interface-content">
              <div className="featured-projects__interface-heading">
                <span />
                <span />
              </div>

              <div className="featured-projects__metrics">
                <span />
                <span />
                <span />
              </div>

              <div className="featured-projects__chart">
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
        <span className="featured-projects__status">
          {project.status}
        </span>
      )}
    </div>
  )
}


export function FeaturedProjectsSection({
  id = "featured-projects",
  eyebrow = "Featured Work",
  title = "Projects built around real problems.",
  description =
    "Explore selected projects from the Visionaire Code ecosystem. Each project represents a practical software challenge, considered design decisions, and an ongoing development process.",
  actionLabel = "View All Projects",
  actionHref = "/projects",
  showHeaderAction = false,
  showFooterAction = true,
  limit = 3,
  className = "",
}) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadFeaturedProjects = async () => {
      try {
        setLoading(true)
        setError(null)

        const projectData = await getAllProjects()

        if (!Array.isArray(projectData)) {
          throw new Error("Invalid projects response")
        }

        const featuredProjects = projectData
          .filter((project) => project.featured === true)
          .slice(0, limit)

        setProjects(featuredProjects)
      } catch (error) {
        console.error(
          "Failed to load featured projects:",
          error
        )

        setError("Unable to load featured projects.")
      } finally {
        setLoading(false)
      }
    }

    loadFeaturedProjects()
  }, [limit])

  return (
    <section
      id={id}
      className={`featured-projects ${className}`.trim()}
      aria-labelledby={`${id}-title`}
    >
      <Container>
        <header className="featured-projects__header">
          <div className="featured-projects__heading">
            <p className="featured-projects__eyebrow">
              {eyebrow}
            </p>

            <h2
              id={`${id}-title`}
              className="featured-projects__title"
            >
              {title}
            </h2>
          </div>

          <div className="featured-projects__introduction">
            <p>
              {description}
            </p>

            {showHeaderAction && (
              <Button
                as={Link}
                to={actionHref}
                variant="secondary"
                size="md"
              >
                {actionLabel}
              </Button>
            )}
          </div>
        </header>

        {loading && (
          <div className="featured-projects__state">
            <p>Loading featured projects...</p>
          </div>
        )}

        {!loading && error && (
          <div className="featured-projects__state">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="featured-projects__state">
            <p>No featured projects available.</p>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="featured-projects__grid">
            {projects.map((project) => (
              <Card
                key={project._id}
                className="featured-projects__card"
              >
                <div className="featured-projects__card-content">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="featured-projects__link"
                    aria-label={`View details for ${project.title}`}
                  >
                    <ProjectPreview project={project} />

                    <div className="featured-projects__body">
                      <div className="featured-projects__meta">
                        {project.category && (
                          <span className="featured-projects__category">
                            {project.category}
                          </span>
                        )}
                      </div>

                      <h3 className="featured-projects__name">
                        {project.title}
                      </h3>

                      <p className="featured-projects__description">
                        {project.shortDescription ||
                          project.description}
                      </p>

                      {project.technologies?.length > 0 && (
                        <div
                          className="featured-projects__technologies"
                          aria-label={`Technologies used for ${project.title}`}
                        >
                          {project.technologies
                            .slice(0, 4)
                            .map((technology) => (
                              <span
                                key={technology}
                                className="featured-projects__technology"
                              >
                                {technology}
                              </span>
                            ))}
                        </div>
                      )}

                      <span className="featured-projects__action">
                        <span>
                          View Case Study
                        </span>

                        <span
                          className="featured-projects__action-icon"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}

        {showFooterAction && (
          <div className="featured-projects__footer">
            <Button
              as={Link}
              to={actionHref}
              variant="secondary"
              size="md"
            >
              {actionLabel}
            </Button>
          </div>
        )}
      </Container>
    </section>
  )
}