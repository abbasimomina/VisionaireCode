import { LuCheck } from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"
import { Section } from "../../components/layout/Section.jsx"
import { Card } from "../../components/ui/Card.jsx"

const ProjectFeatures = ({ project }) => {
  if (!project.features?.length) {
    return null
  }

  return (
    <Section
      className="project-features"
      aria-labelledby="project-features-title"
    >
      <Container>
        <header className="project-features__header">
          <div className="project-features__heading">
            <p className="project-features__eyebrow">
              Core Capabilities
            </p>

            <h2
              id="project-features-title"
              className="project-features__title"
            >
              Key Features
            </h2>
          </div>

          <div className="project-features__introduction">
            <p>
              The core capabilities designed to support the project's
              users, workflows, and objectives.
            </p>
          </div>
        </header>

        <div className="project-features__grid">
          {project.features.map((feature, index) => (
            <Card
              key={`${feature.title}-${index}`}
              variant="default"
              padding="default"
              className="project-features__card"
            >
              <div className="project-features__card-header">
                <span
                  className="project-features__icon"
                  aria-hidden="true"
                >
                  <LuCheck size={18} strokeWidth={1.9} />
                </span>
              </div>

              <div className="project-features__card-content">
                <h3 className="project-features__card-title">
                  {feature.title}
                </h3>

                {feature.description && (
                  <p className="project-features__card-description">
                    {feature.description}
                  </p>
                )}
              </div>

              <footer className="project-features__card-footer">
                <span className="project-features__line" />

                <span
                  className="project-features__mark"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </footer>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default ProjectFeatures