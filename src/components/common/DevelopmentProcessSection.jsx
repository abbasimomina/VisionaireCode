import {
  LuSearch,
  LuClipboardList,
  LuPenTool,
  LuTerminal,
  LuShieldCheck,
  LuRocket,
  LuRefreshCw,
} from "react-icons/lu"

import { Container } from "../layout/Container.jsx"

import "./DevelopmentProcessSection.css"

const defaultProcessSteps = [
  {
    icon: LuSearch,
    title: "Discovery",
    description:
      "Understand the goals, users, requirements, problems, and constraints before defining the solution.",
  },
  {
    icon: LuClipboardList,
    title: "Planning",
    description:
      "Define the scope, workflows, architecture, technical direction, and implementation priorities.",
  },
  {
    icon: LuPenTool,
    title: "UI/UX Design",
    description:
      "Plan the information architecture, user flows, interfaces, responsive behavior, and design system.",
  },
  {
    icon: LuTerminal,
    title: "Development",
    description:
      "Build the solution using appropriate technologies, architecture, and practical engineering practices.",
  },
  {
    icon: LuShieldCheck,
    title: "Testing & Refinement",
    description:
      "Verify functionality, responsiveness, usability, interface behavior, and implementation quality.",
  },
  {
    icon: LuRocket,
    title: "Deployment",
    description:
      "Prepare the completed solution for its intended environment and release.",
  },
  {
    icon: LuRefreshCw,
    title: "Improvement",
    description:
      "Continue refining the software when feedback, new requirements, or opportunities for improvement arise.",
  },
]

export function DevelopmentProcessSection({
  id = "development-process",
  eyebrow = "How We Develop",
  title = "From requirements to software, with room to improve.",
  description =
    "A clear development process helps keep the work focused, understandable, and adaptable as a project moves from an initial idea toward a working solution.",
  steps = defaultProcessSteps,
  showLoop = true,
  loopLabel = "Improve continuously",
  className = "",
}) {
  return (
    <section
      id={id}
      className={`development-process-section ${className}`.trim()}
      aria-labelledby={`${id}-title`}
    >
      <Container>
        <header className="development-process-section__header">
          <div className="development-process-section__heading">
            <p className="development-process-section__eyebrow">
              {eyebrow}
            </p>

            <h2
              id={`${id}-title`}
              className="development-process-section__title"
            >
              {title}
            </h2>
          </div>

          <div className="development-process-section__introduction">
            <p>{description}</p>
          </div>
        </header>

        <div className="development-process-section__process">
          <ol
            className="development-process-section__steps"
            aria-label="Development process"
          >
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <li
                  key={step.title}
                  className="development-process-section__step"
                >
                  <div className="development-process-section__marker">
                    <span
                      className="development-process-section__icon"
                      aria-hidden="true"
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                      />
                    </span>
                  </div>

                  <div className="development-process-section__step-content">
                    <h3 className="development-process-section__step-title">
                      {step.title}
                    </h3>

                    <p className="development-process-section__step-description">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <span
                      className="development-process-section__connector"
                      aria-hidden="true"
                    />
                  )}
                </li>
              )
            })}
          </ol>

          {showLoop && (
            <div
              className="development-process-section__loop"
              aria-hidden="true"
            >
              <span className="development-process-section__loop-line" />

              <span className="development-process-section__loop-icon">
                <LuRefreshCw
                  size={16}
                  strokeWidth={1.8}
                />
              </span>

              <span className="development-process-section__loop-label">
                {loopLabel}
              </span>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}