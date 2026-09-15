import { Link } from "react-router-dom"
import {
  LuCompass,
  LuLayers3,
  LuSettings2,
} from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../components/ui/Card.jsx"

import { Button } from "../../components/ui/Button.jsx"


const principles = [
  {
    icon: LuCompass,
    title: "Purposeful Design",
    description:
      "Interfaces are designed around clarity, usability, and the needs of the people using them.",
  },
  {
    icon: LuLayers3,
    title: "Practical Technology",
    description:
      "Technology is selected to create reliable solutions that remain useful as projects evolve.",
  },
  {
    icon: LuSettings2,
    title: "Built to Grow",
    description:
      "Systems are structured with maintainability, scalability, and future development in mind.",
  },
]

export function AboutPreview() {
  return (
    <section
      className="about-preview"
      aria-labelledby="about-preview-title"
    >
      <Container>
        <div className="about-preview__header">
          <div className="about-preview__heading">
            <p className="about-preview__eyebrow">
              About Visionaire Code
            </p>

            <h2
              id="about-preview-title"
              className="about-preview__title"
            >
              Thoughtful software built around real needs.
            </h2>
          </div>

          <div className="about-preview__introduction">
            <p>
              Visionaire Code focuses on creating modern, useful, and
              maintainable digital experiences through thoughtful design
              and practical technology.
            </p>

            <Button
              as={Link}
              to="/about"
              variant="secondary"
              size="md"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="about-preview__principles">
          {principles.map((principle) => {
            const Icon = principle.icon

            return (
              <Card
                key={principle.title}
                variant="default"
                padding="default"
                className="about-preview__card"
              >
                <CardHeader className="about-preview__card-header">
                  <span
                    className="about-preview__card-icon"
                    aria-hidden="true"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                    />
                  </span>
{/* 
                  <span className="about-preview__card-number">
                    {principle.number}
                  </span> */}
                </CardHeader>

                <CardContent className="about-preview__card-content">
                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>
                </CardContent>

                <CardFooter className="about-preview__card-footer">
                  <span className="about-preview__card-line" />

                  <span
                    className="about-preview__card-mark"
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