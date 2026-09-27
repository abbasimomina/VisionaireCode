import {
  LuLayoutTemplate,
  LuServer,
  LuDatabase,
  LuPenTool,
  LuTerminal,
  LuCloud,
} from "react-icons/lu"

import { Container } from "../layout/Container.jsx"

import "./TechnologyStackSection.css"

const defaultTechnologyGroups = [
  {
    icon: LuLayoutTemplate,
    title: "Frontend",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Vite"],
  },
  {
    icon: LuServer,
    title: "Backend",
    technologies: ["Node.js", "Express.js"],
  },
  {
    icon: LuDatabase,
    title: "Database",
    technologies: ["MongoDB", "Mongoose"],
  },
  {
    icon: LuPenTool,
    title: "Design & Planning",
    technologies: ["Figma", "Draw.io"],
  },
  {
    icon: LuTerminal,
    title: "Development & Testing",
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
    technologies: ["Vercel", "Render"],
  },
]

export function TechnologyStackSection({
  id = "technology-stack",
  eyebrow = "Technology Stack",
  title = "Modern technology, chosen with purpose.",
  description =
    "We use practical, modern technologies to build reliable digital products that are maintainable and ready to grow.",
  technologyGroups = defaultTechnologyGroups,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`technology-stack-section background-soft ${className}`.trim()}
      aria-labelledby={`${id}-title`}
    >
      <Container>
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

        <div className="technology-stack-section__grid">
          {technologyGroups.map((group) => {
            const Icon = group.icon

            return (
              <article
                key={group.title}
                className="technology-stack-section__group"
              >
                <div
                  className="technology-stack-section__visual"
                  aria-hidden="true"
                >
                  <Icon strokeWidth={1.1} />
                </div>

                <div className="technology-stack-section__content">
                  <h3 className="technology-stack-section__group-title">
                    {group.title}
                  </h3>

                  <div className="technology-stack-section__technologies">
                    {group.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="technology-stack-section__technology"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}