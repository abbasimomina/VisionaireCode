import {
  LuSearch,
  LuPenTool,
  LuTerminal,
  LuFileText,
  LuClipboardCheck,
  LuRefreshCw,
} from "react-icons/lu"

import { DevelopmentProcessSection } from "../../components/common/DevelopmentProcessSection.jsx"

const projectProcessSteps = [
  {
    icon: LuSearch,
    title: "Research & Planning",
    description:
      "Understand the project goals, requirements, users, constraints, and technical direction.",
  },
  {
    icon: LuPenTool,
    title: "Design",
    description:
      "Translate the requirements into user flows, interfaces, responsive layouts, and visual structure.",
  },
  {
    icon: LuTerminal,
    title: "Development",
    description:
      "Implement the project using appropriate technologies, reusable structures, and practical engineering practices.",
  },
  {
    icon: LuFileText,
    title: "Documentation",
    description:
      "Document important decisions, architecture, workflows, features, and implementation details.",
  },
  {
    icon: LuClipboardCheck,
    title: "Evaluation",
    description:
      "Review the project through testing, usability checks, technical evaluation, and practical feedback.",
  },
  {
    icon: LuRefreshCw,
    title: "Continuous Improvement",
    description:
      "Refine the project based on findings, experience, feedback, and opportunities for improvement.",
  },
]

export function ProjectsOverview() {
  return (
    <DevelopmentProcessSection
      id="project-process"
      eyebrow="Project Approach"
      title="How ideas become working software."
      description="Projects are approached as practical opportunities to research, design, build, evaluate, document, and improve through hands-on experience."
      steps={projectProcessSteps}
      loopLabel="Continuous improvement"
    />
  )
}