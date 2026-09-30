import { useState } from "react"
import {
  LuSearch,
  LuClipboardList,
  LuPenTool,
  LuTerminal,
  LuShieldCheck,
  LuRocket,
  LuRefreshCw,
} from "react-icons/lu"
import { motion as Motion, AnimatePresence } from "framer-motion"

import {
  Card,
  CardContent,
  CardFooter,
  CardVisual,
} from "../ui/Card.jsx"

import { Container } from "../layout/Container.jsx"

import "./DevelopmentProcessSection.css"

const defaultProcessSteps = [
  {
    icon: LuSearch,
    title: "Discovery",
    description:
      "Understand the problem, users, requirements, and constraints before defining the solution.",
  },
  {
    icon: LuClipboardList,
    title: "Planning",
    description:
      "Consider requirements, workflows, architecture, priorities, and technical direction before implementation.",
  },
  {
    icon: LuPenTool,
    title: "Design",
    description:
      "Translate requirements into clear user flows, interfaces, responsive experiences, and system structure.",
  },
  {
    icon: LuTerminal,
    title: "Development",
    description:
      "Build the solution using appropriate technologies and maintainable engineering practices.",
  },
  {
    icon: LuShieldCheck,
    title: "Testing",
    description:
      "Evaluate functionality, responsiveness, usability, and implementation quality.",
  },
  {
    icon: LuRocket,
    title: "Release",
    description:
      "Prepare and deploy the completed solution for its intended environment.",
  },
  {
    icon: LuRefreshCw,
    title: "Improvement",
    description:
      "Use feedback, testing, experience, and new requirements to continuously refine the work.",
  },
]

export function DevelopmentProcessSection({
  id = "development-process",
  eyebrow = "How We Develop",
  title = "From idea to improvement, with purpose.",
  description =
    "We approach each project with clear thinking, purposeful decisions, and room to learn and improve throughout the process.",
  steps = defaultProcessSteps,
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeStep = steps[activeIndex]
  const ActiveIcon = activeStep?.icon

  return (
    <section
      id={id}
      className={`development-process-section background-primary ${className}`.trim()}
      aria-labelledby={`${id}-title`}
    >
      <Container>
        <div className="development-process-section__layout">
          <div className="development-process-section__process">
            <Card
              variant="default"
              padding="default"
              interactive
              className="development-process-section__detail"
              visual={
                <CardVisual variant="service">
                  {ActiveIcon && (
                    <ActiveIcon
                      aria-hidden="true"
                      strokeWidth={1.15}
                    />
                  )}
                </CardVisual>
              }
            >
              <CardContent className="development-process-section__detail-content">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={activeStep?.title}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{
                      duration: 0.22,
                      ease: "easeOut",
                    }}
                  >
                    {/* <p className="development-process-section__detail-eyebrow">
                      Current Stage
                    </p> */}

                    <h3>{activeStep?.title}</h3>

                    <p className="development-process-section__detail-description">
                      {activeStep?.description}
                    </p>
                  </Motion.div>
                </AnimatePresence>
              </CardContent>

              <CardFooter className="development-process-section__detail-footer">
                <span className="development-process-section__detail-line" />

                <span
                  className="development-process-section__detail-mark"
                  aria-hidden="true"
                >
                  +
                </span>
              </CardFooter>
            </Card>

            <div className="development-process-section__path">
              <div
                className="development-process-section__path-line"
                aria-hidden="true"
              />

              <div className="development-process-section__steps">
                {steps.map((step, index) => {
                  const isActive = index === activeIndex

                  return (
                    <button
                      key={step.title}
                      type="button"
                      className={`development-process-section__step ${
                        isActive ? "is-active" : ""
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View ${step.title} stage`}
                      aria-pressed={isActive}
                    >
                      <span
                        className="development-process-section__step-point"
                        aria-hidden="true"
                      >
                        <span />
                      </span>

                      <span className="development-process-section__step-title">
                        {step.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

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
        </div>
      </Container>
    </section>
  )
}
