import {
  LuGauge,
  LuShieldCheck,
  LuTestTube,
  LuUsers,
} from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"
import { Section } from "../../components/layout/Section.jsx"
import { Card } from "../../components/ui/Card.jsx"
import { Slider } from "../../components/ui/Slider.jsx"

const ProjectTechnicalDetails = ({ project }) => {
  const hasTechnologies = project.technologies?.length > 0
  const hasRoles = project.roles?.length > 0

  const qualityDetails = [
    {
      key: "security",
      title: "Security",
      value: project.security,
      icon: LuShieldCheck,
    },
    {
      key: "performance",
      title: "Performance",
      value: project.performance,
      icon: LuGauge,
    },
    {
      key: "testing",
      title: "Testing",
      value: project.testing,
      icon: LuTestTube,
    },
  ].filter((detail) => detail.value)

  if (!hasTechnologies && !hasRoles && !qualityDetails.length) {
    return null
  }

  return (
    <Section
      className="project-technical-details"
      aria-labelledby="project-technical-details-title"
    >
      <Container>
        <header className="project-technical-details__header">
          <div className="project-technical-details__heading">
            <p className="project-technical-details__eyebrow">
              Implementation
            </p>

            <h2
              id="project-technical-details-title"
              className="project-technical-details__title"
            >
              Technical Details
            </h2>
          </div>
        </header>

        <div className="project-technical-details__content">
          {hasTechnologies && (
            <div className="project-technical-details__technologies">
              {project.technologies.map((technology, index) => (
                <span
                  key={`${technology}-${index}`}
                  className="project-technical-details__technology"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}

          {hasRoles && (
            <div className="project-technical-details__group">
              <h3 className="project-technical-details__group-title">
                Roles &amp; Access
              </h3>

              <Slider
                ariaLabel="Roles and access"
                previousLabel="Previous roles"
                nextLabel="Next roles"
                className="project-technical-details__slider"
              >
                {project.roles.map((role, index) => (
                  <Card
                    key={`${role.name}-${index}`}
                    variant="default"
                    padding="default"
                    className="project-technical-details__card"
                  >
                    <div className="project-technical-details__card-header">
                      <span
                        className="project-technical-details__card-icon"
                        aria-hidden="true"
                      >
                        <LuUsers size={18} strokeWidth={1.8} />
                      </span>
                    </div>

                    <div className="project-technical-details__card-content">
                      <h4>{role.name}</h4>

                      {role.description && (
                        <p>{role.description}</p>
                      )}
                    </div>

                    <footer className="project-technical-details__card-footer">
                      <span className="project-technical-details__line" />

                      <span
                        className="project-technical-details__mark"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </footer>
                  </Card>
                ))}
              </Slider>
            </div>
          )}

          {qualityDetails.length > 0 && (
            <div className="project-technical-details__group">
              <h3 className="project-technical-details__group-title">
                Quality &amp; Reliability
              </h3>

              <Slider
                ariaLabel="Quality and reliability"
                previousLabel="Previous quality details"
                nextLabel="Next quality details"
                className="project-technical-details__slider"
              >
                {qualityDetails.map((detail) => {
                  const Icon = detail.icon

                  return (
                    <Card
                      key={detail.key}
                      variant="default"
                      padding="default"
                      className="project-technical-details__card"
                    >
                      <div className="project-technical-details__card-header">
                        <span
                          className="project-technical-details__card-icon"
                          aria-hidden="true"
                        >
                          <Icon size={18} strokeWidth={1.8} />
                        </span>
                      </div>

                      <div className="project-technical-details__card-content">
                        <h4>{detail.title}</h4>

                        <p>{detail.value}</p>
                      </div>

                      <footer className="project-technical-details__card-footer">
                        <span className="project-technical-details__line" />

                        <span
                          className="project-technical-details__mark"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </footer>
                    </Card>
                  )
                })}
              </Slider>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

export default ProjectTechnicalDetails