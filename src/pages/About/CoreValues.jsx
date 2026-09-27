import {
  LuBadgeCheck,
  LuBookOpen,
  LuUsers,
  LuShieldCheck,
  LuSparkles,
  LuTrendingUp,
} from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"

import {
  Card,
  CardContent,
  CardFooter,
  CardVisual,
} from "../../components/ui/Card.jsx"

import { Slider } from "../../components/ui/Slider.jsx"

const coreValues = [
  {
    icon: LuBadgeCheck,
    title: "Quality",
    description:
      "Build software with attention to detail, reliability, and maintainability.",
  },
  {
    icon: LuBookOpen,
    title: "Continuous Learning",
    description:
      "Continuously improve technical knowledge, skills, and development processes.",
  },
  {
    icon: LuUsers,
    title: "User-Centered Thinking",
    description:
      "Prioritize usability, accessibility, clarity, and the real needs of users.",
  },
  {
    icon: LuShieldCheck,
    title: "Integrity",
    description:
      "Communicate honestly and represent work, capabilities, and outcomes accurately.",
  },
  {
    icon: LuSparkles,
    title: "Simplicity",
    description:
      "Prefer clear and purposeful solutions over unnecessary complexity.",
  },
  {
    icon: LuTrendingUp,
    title: "Growth",
    description:
      "Continuously improve projects, capabilities, and development practices.",
  },
]


export function CoreValues() {
  return (
    <section
      className="core-values"
      aria-labelledby="core-values-heading"
    >
      <Container>
        <header className="core-values__header">
          <div className="core-values__heading">
            <p className="core-values__eyebrow">
              What We Value
            </p>

            <h2
              id="core-values-heading"
              className="core-values__title"
            >
              Principles that shape the work.
            </h2>
          </div>

          <div className="core-values__introduction">
            <p>
              These principles influence how Visionaire Code approaches
              software, design, learning, and professional work.
            </p>
          </div>
        </header>

        <Slider
          ariaLabel="Core values"
          previousLabel="Previous values"
          nextLabel="Next values"
          className="core-values__slider"
        >
          {coreValues.map((value) => {
            const Icon = value.icon

            return (
              <Card
                key={value.title}
                variant="default"
                padding="default"
                interactive
                className="core-values__card"
                visual={
                  <CardVisual variant="service">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.15}
                    />
                  </CardVisual>
                }
              >
                <CardContent className="core-values__card-content">
                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
                </CardContent>

                <CardFooter className="core-values__card-footer">
                  <span className="core-values__card-line" />

                  <span
                    className="core-values__card-mark"
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