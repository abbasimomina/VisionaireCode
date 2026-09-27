import {
  LuBraces,
  LuDatabase,
  LuGlobe,
  LuServer,
} from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"
import { Section } from "../../components/layout/Section.jsx"
import { Card } from "../../components/ui/Card.jsx"
import { Slider } from "../../components/ui/Slider.jsx"

const ProjectArchitecture = ({ project }) => {
  const architecture = project.architecture

  if (!architecture) {
    return null
  }

  const architectureItems = [
    {
      key: "frontend",
      title: "Frontend",
      value: architecture.frontend,
      icon: LuGlobe,
    },
    {
      key: "backend",
      title: "Backend",
      value: architecture.backend,
      icon: LuServer,
    },
    {
      key: "database",
      title: "Database",
      value: architecture.database,
      icon: LuDatabase,
    },
    {
      key: "api",
      title: "API",
      value: architecture.api,
      icon: LuBraces,
    },
  ]

  const availableItems = architectureItems.filter(
    (item) => item.value
  )

  if (!availableItems.length) {
    return null
  }

  return (
    <Section
      className="project-architecture"
      aria-labelledby="project-architecture-title"
    >
      <Container>
        <header className="project-architecture__header">
          <div className="project-architecture__heading">
            <p className="project-architecture__eyebrow">
              System Design
            </p>

            <h2
              id="project-architecture-title"
              className="project-architecture__title"
            >
              Architecture
            </h2>
          </div>
        </header>

        <Slider
          ariaLabel="Project architecture"
          previousLabel="Previous architecture layer"
          nextLabel="Next architecture layer"
          className="project-architecture__slider"
        >
          {availableItems.map((item) => {
            const Icon = item.icon

            return (
              <Card
                key={item.key}
                variant="default"
                padding="default"
                className="project-architecture__card"
              >
                <div className="project-architecture__card-header">
                  <span
                    className="project-architecture__icon"
                    aria-hidden="true"
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="project-architecture__card-content">
                  <h3 className="project-architecture__card-title">
                    {item.title}
                  </h3>

                  <p className="project-architecture__card-description">
                    {item.value}
                  </p>
                </div>

                <footer className="project-architecture__card-footer">
                  <span className="project-architecture__line" />

                  <span
                    className="project-architecture__mark"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </footer>
              </Card>
            )
          })}
        </Slider>
      </Container>
    </Section>
  )
}

export default ProjectArchitecture