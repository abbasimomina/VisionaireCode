import { Link } from "react-router-dom"
import { LuArrowUpRight } from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"
import { Section } from "../../components/layout/Section.jsx"
import { Button } from "../../components/ui/Button.jsx"

const ProjectHero = ({ project }) => {
  const statusClass = project.status
    ? project.status.toLowerCase().replace(/\s+/g, "-")
    : ""

  return (
    <Section
      className="project-hero"
      aria-labelledby="project-hero-title"
    >
      <Container>
        <div className="project-hero__content">
          <div className="project-hero__main">
            <Link
              to="/projects"
              className="project-hero__back"
            >
              <span aria-hidden="true">←</span>
              <span>Back to Projects</span>
            </Link>

            <div className="project-hero__heading">
              {project.category && (
                <p className="project-hero__eyebrow">
                  {project.category}
                </p>
              )}

              <h1
                id="project-hero-title"
                className="project-hero__title"
              >
                {project.title}
              </h1>

              {project.shortDescription && (
                <p className="project-hero__description">
                  {project.shortDescription}
                </p>
              )}
            </div>

            {(project.projectType || project.status) && (
              <div className="project-hero__meta">
                {project.projectType && (
                  <div className="project-hero__meta-item">
                    <span className="project-hero__meta-label">
                      Project Type
                    </span>

                    <span className="project-hero__meta-value">
                      {project.projectType}
                    </span>
                  </div>
                )}

                {project.status && (
                  <div className="project-hero__meta-item">
                    <span className="project-hero__meta-label">
                      Status
                    </span>

                    <span
                      className={`project-hero__status project-hero__status--${statusClass}`}
                    >
                      <span
                        className="project-hero__status-dot"
                        aria-hidden="true"
                      />
                      {project.status}
                    </span>
                  </div>
                )}
              </div>
            )}

            {(project.liveUrl || project.githubUrl) && (
              <div className="project-hero__actions">
                {project.liveUrl && (
                  <Button
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                  >
                    View Live Project
                    <LuArrowUpRight
                      size={16}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                  >
                    View Source
                    <LuArrowUpRight
                      size={16}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </Button>
                )}
              </div>
            )}
          </div>

          {project.heroImage ? (
            <div className="project-hero__media">
              <img
                src={project.heroImage}
                alt={`${project.title} project preview`}
                className="project-hero__image"
              />
            </div>
          ) : (
            <div
              className="project-hero__placeholder"
              aria-hidden="true"
            >
              <div className="project-hero__placeholder-window">
                <div className="project-hero__placeholder-toolbar">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="project-hero__placeholder-content">
                  <div className="project-hero__placeholder-sidebar">
                    <span className="project-hero__placeholder-sidebar-line--active" />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="project-hero__placeholder-main">
                    <span className="project-hero__placeholder-heading" />

                    <div className="project-hero__placeholder-cards">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="project-hero__placeholder-chart">
                      <span />
                    </div>
                  </div>
                </div>
              </div>

              <span className="project-hero__placeholder-label">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

export default ProjectHero