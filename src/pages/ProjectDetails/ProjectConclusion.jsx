import {
  LuBookOpen,
  LuCircleAlert,
  LuRefreshCw,
} from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"
import { Section } from "../../components/layout/Section.jsx"
import { Card } from "../../components/ui/Card.jsx"
import { Slider } from "../../components/ui/Slider.jsx"

const ProjectConclusion = ({ project }) => {
  const conclusionItems = [
    {
      key: "lessons",
      title: "Lessons Learned",
      items: project.lessonsLearned,
      icon: LuBookOpen,
    },
    {
      key: "limitations",
      title: "Project Limitations",
      items: project.limitations,
      icon: LuCircleAlert,
    },
    {
      key: "future",
      title: "Future Improvements",
      items: project.futureImprovements,
      icon: LuRefreshCw,
    },
  ].filter((item) => item.items?.length > 0)

  if (!conclusionItems.length) {
    return null
  }

  return (
    <Section
      className="project-conclusion"
      aria-labelledby="project-conclusion-title"
    >
      <Container>
        <header className="project-conclusion__header">
          <div className="project-conclusion__heading">
            <p className="project-conclusion__eyebrow">
              Project Reflection
            </p>

            <h2
              id="project-conclusion-title"
              className="project-conclusion__title"
            >
              What Comes Next
            </h2>
          </div>
        </header>

        <Slider
          ariaLabel="Project conclusion"
          previousLabel="Previous conclusion"
          nextLabel="Next conclusion"
          className="project-conclusion__slider"
        >
          {conclusionItems.map((item) => {
            const Icon = item.icon

            return (
              <Card
                key={item.key}
                variant="default"
                padding="default"
                className="project-conclusion__card"
              >
                <div className="project-conclusion__card-header">
                  <span
                    className="project-conclusion__icon"
                    aria-hidden="true"
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="project-conclusion__card-content">
                  <h3>{item.title}</h3>

                  <ul className="project-conclusion__list">
                    {item.items.map((entry, index) => (
                      <li key={`${item.key}-${index}`}>
                        <span
                          className="project-conclusion__bullet"
                          aria-hidden="true"
                        >
                          —
                        </span>

                        <span>{entry}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <footer className="project-conclusion__card-footer">
                  <span className="project-conclusion__line" />

                  <span
                    className="project-conclusion__mark"
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

export default ProjectConclusion