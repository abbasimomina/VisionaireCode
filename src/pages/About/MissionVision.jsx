import {
  LuCompass,
  LuSparkles,
} from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
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
      className="mission-vision"
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

        <div className="mission-vision__grid">
          {missionVisionItems.map((item) => {
            const Icon = item.icon

            return (
              <Card
                key={item.label}
                variant="default"
                padding="default"
                className="mission-vision__card"
              >
                <CardHeader className="mission-vision__card-header">
                  <span
                    className="mission-vision__card-icon"
                    aria-hidden="true"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                    />
                  </span>

                  {/* <span className="mission-vision__card-number">
                    {item.number}
                  </span> */}
                </CardHeader>

                <CardContent className="mission-vision__card-content">
                  <span className="mission-vision__card-label">
                    {item.label}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
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