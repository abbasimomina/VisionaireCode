import {
  LuSearch,
  LuClipboardList,
  LuPenTool,
  LuTerminal,
  LuShieldCheck,
  LuRocket,
  LuRefreshCw,
} from "react-icons/lu"

import { DevelopmentProcessSection } from "../../components/common/DevelopmentProcessSection.jsx"

const developmentPhilosophySteps = [
  {
    icon: LuSearch,
    title: "Understand",
    description:
      "Understand the problem, users, requirements, and constraints before defining the solution.",
  },
  {
    icon: LuClipboardList,
    title: "Plan",
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
    title: "Develop",
    description:
      "Build the solution using appropriate technologies and maintainable engineering practices.",
  },
  {
    icon: LuShieldCheck,
    title: "Test",
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
    title: "Improve",
    description:
      "Use feedback, testing, experience, and new requirements to continuously refine the work.",
  },
]

export function DevelopmentPhilosophy() {
  return (
    <DevelopmentProcessSection
      id="development-philosophy"
      className="background-soft"
      eyebrow="Development Philosophy"
      title="A thoughtful process from idea to improvement."
      description="The way software is built matters. We approach each project with clear thinking, purposeful decisions, and room to learn and improve throughout the process."
      steps={developmentPhilosophySteps}
    />
  )
}