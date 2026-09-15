import {
  LuLayoutTemplate,
  LuServer,
  LuDatabase,
  LuPenTool,
  LuTerminal,
  LuCloud,
} from "react-icons/lu"

import { Container } from "../layout/Container.jsx"

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../ui/Card.jsx"

import "./TechnologyStackSection.css"

const defaultTechnologyGroups = [
  {
    icon: LuLayoutTemplate,
    title: "Frontend",
    description:
      "Technologies used to build responsive and interactive user interfaces.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vite",
    ],
  },
  {
    icon: LuServer,
    title: "Backend",
    description:
      "Tools used to build server-side applications, APIs, and application logic.",
    technologies: [
      "Node.js",
      "Express.js",
    ],
  },
  {
    icon: LuDatabase,
    title: "Database",
    description:
      "Technologies used for application data, persistence, and database management.",
    technologies: [
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    icon: LuPenTool,
    title: "Design & Planning",
    description:
      "Tools used to plan interfaces, systems, workflows, and application structure.",
    technologies: [
      "Figma",
      "Draw.io",
    ],
  },
  {
    icon: LuTerminal,
    title: "Development & Testing",
    description:
      "Tools used throughout development, version control, API testing, and debugging.",
    technologies: [
      "Visual Studio Code",
      "Git",
      "GitHub",
      "Postman",
      "Thunder Client",
    ],
  },
  {
    icon: LuCloud,
    title: "Deployment",
    description:
      "Platforms used to deploy applications and make digital products accessible.",
    technologies: [
      "Vercel",
      "Render",
    ],
  },
]

export function TechnologyStackSection({
  id = "technology-stack",
  eyebrow = "Technology Stack",
  title = "Modern technology, chosen with purpose.",
  description =
    "Visionaire Code uses practical technologies selected according to the needs of each project, with attention to maintainability, usefulness, scalability, and continuous learning.",
  technologyGroups = defaultTechnologyGroups,
  showPrinciple = true,
  principle =
    "Technology serves the project. The project does not exist to showcase technology.",
  className = "",
}) {
  return (
    <section
      id={id}
      className={`technology-stack-section ${className}`.trim()}
      aria-labelledby={`${id}-title`}
    >
      <Container>
        {/* Header */}
        <header className="technology-stack-section__header">
          <div className="technology-stack-section__heading">
            <p className="technology-stack-section__eyebrow">
              {eyebrow}
            </p>

            <h2
              id={`${id}-title`}
              className="technology-stack-section__title"
            >
              {title}
            </h2>
          </div>

          <div className="technology-stack-section__introduction">
            <p>{description}</p>
          </div>
        </header>

        {/* Technology Groups */}
        <div className="technology-stack-section__grid">
          {technologyGroups.map((group) => {
            const Icon = group.icon

            return (
              <Card
                key={group.title}
                variant="default"
                padding="default"
                className="technology-stack-section__card"
              >
                <CardHeader className="technology-stack-section__card-header">
                  <span
                    className="technology-stack-section__card-icon"
                    aria-hidden="true"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                    />
                  </span>
                </CardHeader>

                <CardContent className="technology-stack-section__card-content">
                  <h3 className="technology-stack-section__group-title">
                    {group.title}
                  </h3>

                  {group.description && (
                    <p className="technology-stack-section__group-description">
                      {group.description}
                    </p>
                  )}

                  <div
                    className="technology-stack-section__technologies"
                    aria-label={`${group.title} technologies`}
                  >
                    {group.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="technology-stack-section__technology"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="technology-stack-section__card-footer">
                  <span className="technology-stack-section__card-line" />

                  <span
                    className="technology-stack-section__card-mark"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Principle */}
        {showPrinciple && (
          <div className="technology-stack-section__principle">
            <p>
              <strong>Technology serves the project.</strong>{" "}
              {principle.replace(
                "Technology serves the project. ",
                ""
              )}
            </p>
          </div>
        )}
      </Container>
    </section>
  )
}