import {
  LuCircleAlert,
  LuLightbulb,
} from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"
import { Section } from "../../components/layout/Section.jsx"
import { Card } from "../../components/ui/Card.jsx"

const ProjectProblemSolution = ({ project }) => {
  const hasProblem = Boolean(project.problem)
  const hasSolution = Boolean(project.solution)

  if (!hasProblem && !hasSolution) {
    return null
  }

  return (
    <Section
      className="project-problem-solution"
      aria-labelledby="project-problem-solution-title"
    >
      <Container>
        <header className="project-problem-solution__header">
          <div className="project-problem-solution__heading">
            <p className="project-problem-solution__eyebrow">
              From Problem to Product
            </p>

            <h2
              id="project-problem-solution-title"
              className="project-problem-solution__title"
            >
              The Challenge &amp; Solution
            </h2>
          </div>
        </header>

        <div className="project-problem-solution__grid">
          {hasProblem && (
            <Card
              variant="default"
              padding="default"
              className="project-problem-solution__card"
            >
              <div className="project-problem-solution__card-header">
                <span
                  className="project-problem-solution__icon"
                  aria-hidden="true"
                >
                  <LuCircleAlert size={20} strokeWidth={1.8} />
                </span>
              </div>

              <div className="project-problem-solution__card-content">
                <p className="project-problem-solution__label">
                  The Challenge
                </p>

                <p className="project-problem-solution__description">
                  {project.problem}
                </p>
              </div>

              <footer className="project-problem-solution__card-footer">
                <span className="project-problem-solution__line" />

                <span
                  className="project-problem-solution__mark"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </footer>
            </Card>
          )}

          {hasSolution && (
            <Card
              variant="default"
              padding="default"
              className="project-problem-solution__card project-problem-solution__card--solution"
            >
              <div className="project-problem-solution__card-header">
                <span
                  className="project-problem-solution__icon"
                  aria-hidden="true"
                >
                  <LuLightbulb size={20} strokeWidth={1.8} />
                </span>
              </div>

              <div className="project-problem-solution__card-content">
                <p className="project-problem-solution__label">
                  The Solution
                </p>

                <p className="project-problem-solution__description">
                  {project.solution}
                </p>
              </div>

              <footer className="project-problem-solution__card-footer">
                <span className="project-problem-solution__line" />

                <span
                  className="project-problem-solution__mark"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </footer>
            </Card>
          )}
        </div>
      </Container>
    </Section>
  )
}

export default ProjectProblemSolution