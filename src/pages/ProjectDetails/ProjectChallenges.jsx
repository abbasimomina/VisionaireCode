import {
  LuLightbulb,
  LuTriangleAlert,
} from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"
import { Section } from "../../components/layout/Section.jsx"
import { Card } from "../../components/ui/Card.jsx"

const ProjectChallenges = ({ project }) => {
  if (!project.challenges?.length) {
    return null
  }

  return (
    <Section
      className="project-challenges"
      aria-labelledby="project-challenges-title"
    >
      <Container>
        <header className="project-challenges__header">
          <div className="project-challenges__heading">
            <p className="project-challenges__eyebrow">
              Engineering Decisions
            </p>

            <h2
              id="project-challenges-title"
              className="project-challenges__title"
            >
              Challenges &amp; Solutions
            </h2>
          </div>

          <div className="project-challenges__introduction">
            <p>
              Key implementation challenges encountered during development
              and the approaches used to address them.
            </p>
          </div>
        </header>

        <div className="project-challenges__list">
          {project.challenges.map((item, index) => (
            <div
              key={`${item.challenge}-${index}`}
              className="project-challenges__pair"
            >
              {/* Challenge Card */}
              <Card
                variant="default"
                padding="default"
                className="project-challenges__card"
              >
                <div className="project-challenges__card-header">
                  <span
                    className="project-challenges__icon"
                    aria-hidden="true"
                  >
                    <LuTriangleAlert
                      size={20}
                      strokeWidth={1.8}
                    />
                  </span>
                </div>

                <div className="project-challenges__card-content">
                  <p className="project-challenges__label">
                    Challenge
                  </p>

                  <h3>{item.challenge}</h3>
                </div>

                <footer className="project-challenges__card-footer">
                  <span className="project-challenges__line" />

                  <span
                    className="project-challenges__mark"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </footer>
              </Card>

              {/* Solution Card */}
              {item.solution && (
                <Card
                  variant="default"
                  padding="default"
                  className="project-challenges__card"
                >
                  <div className="project-challenges__card-header">
                    <span
                      className="project-challenges__icon"
                      aria-hidden="true"
                    >
                      <LuLightbulb
                        size={20}
                        strokeWidth={1.8}
                      />
                    </span>
                  </div>

                  <div className="project-challenges__card-content">
                    <p className="project-challenges__label">
                      Solution
                    </p>

                    <p className="project-challenges__description">
                      {item.solution}
                    </p>
                  </div>

                  <footer className="project-challenges__card-footer">
                    <span className="project-challenges__line" />

                    <span
                      className="project-challenges__mark"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </footer>
                </Card>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default ProjectChallenges