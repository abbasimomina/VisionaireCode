import {
  LuCompass,
  LuSparkles,
} from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"

import {
  Card,
  CardContent,
  CardFooter,
  CardVisual,
} from "../../components/ui/Card.jsx"

const missionVisionItems = [
  {
    icon: LuCompass,
    label: "Mission",
    title: "What we do today",
    description:
      "To design and develop thoughtful software that solves practical problems while balancing usability, quality, and maintainability.",
  },
  {
    icon: LuSparkles,
    label: "Vision",
    title: "What we aim to become",
    description:
      "To grow Visionaire Code into a thoughtful software brand that creates useful, reliable, and meaningful digital products.",
  },
]

export function MissionVision() {
  return (
    <section
      className="mission-vision background-soft"
      aria-labelledby="mission-vision-heading"
    >
      <Container>
        <header className="mission-vision__header">
          <div className="mission-vision__heading">
            <p className="mission-vision__eyebrow">
              Purpose & Direction
            </p>

            <h2
              id="mission-vision-heading"
              className="mission-vision__title"
            >
              Where we are and where we are going.
            </h2>
          </div>

          <div className="mission-vision__introduction">
            <p>
              Our mission defines the work we do today, while our vision
              gives that work a meaningful direction for the future.
            </p>
          </div>
        </header>

        <div className="mission-vision__statements">
          {missionVisionItems.map((item) => {
            const Icon = item.icon

            return (
              <Card
                key={item.label}
                variant="default"
                padding="default"
                interactive
                className="mission-vision__card"
                visual={
                  <CardVisual variant="service">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.15}
                    />
                  </CardVisual>
                }
              >
                <CardContent className="mission-vision__card-content">
                  <p className="mission-vision__label">
                    {item.label}
                  </p>

                  <h3>{item.title}</h3>

                  <p className="mission-vision__description">
                    {item.description}
                  </p>
                </CardContent>

                <CardFooter className="mission-vision__card-footer">
                  <span className="mission-vision__card-line" />

                  <span
                    className="mission-vision__card-mark"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}