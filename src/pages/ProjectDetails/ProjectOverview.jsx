import { Container } from "../../components/layout/Container.jsx"
import { Section } from "../../components/layout/Section.jsx"

const ProjectOverview = ({ project }) => {
  const overview = project.overview

  if (!overview) {
    return null
  }

  return (
    <Section
      id="project-overview"
      className="project-overview"
      aria-labelledby="project-overview-title"
    >
      <Container>
        <div className="project-overview__layout">
          <header className="project-overview__heading">
            <p className="project-overview__eyebrow">Overview</p>

            <h2
              id="project-overview-title"
              className="project-overview__title"
            >
              Project Overview
            </h2>
          </header>

          <div className="project-overview__content">
            <p className="project-overview__description">
              {overview}
            </p>

            {project.targetUsers?.length > 0 && (
              <div className="project-overview__users">
                <p className="project-overview__users-label">
                  Designed for
                </p>

                <div className="project-overview__user-list">
                  {project.targetUsers.map((user, index) => (
                    <span
                      key={`${user}-${index}`}
                      className="project-overview__user"
                    >
                      {user}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ProjectOverview