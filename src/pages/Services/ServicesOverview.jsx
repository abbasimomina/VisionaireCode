import {
  LuBrain,
  LuPenTool,
  LuTerminal,
  LuTrendingUp,
  LuRefreshCw,
} from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"

import {
  Card,
  CardContent,
  CardFooter,
  CardVisual,
} from "../../components/ui/Card.jsx"

import { Slider } from "../../components/ui/Slider.jsx"

const principles = [
  {
    icon: LuBrain,
    title: "Understand First",
    description:
      "Requirements and objectives come before implementation. Understanding the problem creates a stronger foundation for the solution.",
  },
  {
    icon: LuPenTool,
    title: "Design Intentionally",
    description:
      "Interfaces and workflows are planned around users, clarity, accessibility, and the goals the software needs to support.",
  },
  {
    icon: LuTerminal,
    title: "Build for Maintainability",
    description:
      "Solutions should remain understandable, organized, and manageable as requirements evolve.",
  },
  {
    icon: LuTrendingUp,
    title: "Develop for Growth",
    description:
      "Architecture and implementation should allow appropriate future expansion without introducing unnecessary complexity.",
  },
  {
    icon: LuRefreshCw,
    title: "Refine Continuously",
    description:
      "Testing, feedback, experimentation, and iteration help improve both the software and the development process.",
  },
]

export function ServicesOverview() {
  return (
    <section
      className="services-overview background-primary"
      aria-labelledby="services-overview-title"
    >
      <Container>
        <header className="services-overview__header">
          <div className="services-overview__heading">
            <p className="services-overview__eyebrow">
              Our Approach
            </p>

            <h2
              id="services-overview-title"
              className="services-overview__title"
            >
              Software development starts with understanding the problem.
            </h2>
          </div>

          <div className="services-overview__introduction">
            <p>
              Visionaire Code approaches each project by first
              understanding the problem, users, requirements, and
              intended outcome before deciding how the solution
              should be implemented.
            </p>
          </div>
        </header>

        <Slider
          ariaLabel="Development principles"
          previousLabel="Previous principles"
          nextLabel="Next principles"
          className="services-overview__slider"
        >
          {principles.map((principle) => {
            const Icon = principle.icon

            return (
              <Card
                key={principle.title}
                variant="default"
                padding="default"
                interactive
                className="services-overview__card"
                visual={
                  <CardVisual variant="service">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.15}
                    />
                  </CardVisual>
                }
              >
                <CardContent className="services-overview__card-content">
                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>
                </CardContent>

                <CardFooter className="services-overview__card-footer">
                  <span className="services-overview__card-line" />

                  <span
                    className="services-overview__card-mark"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </CardFooter>
              </Card>
            )
          })}
        </Slider>
      </Container>
    </section>
  )
}