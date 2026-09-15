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

const serviceProcessSteps = [
  {
    icon: LuSearch,
    title: "Discovery",
    description:
      "Understand the business, goals, users, requirements, and scope of the project.",
  },
  {
    icon: LuClipboardList,
    title: "Planning",
    description:
      "Define the project structure, workflows, technical direction, priorities, and implementation plan.",
  },
  {
    icon: LuPenTool,
    title: "UI/UX Design",
    description:
      "Create clear user flows, responsive interfaces, and a visual system suited to the project.",
  },
  {
    icon: LuTerminal,
    title: "Development",
    description:
      "Build the solution using appropriate technologies, reusable structures, and maintainable code.",
  },
  {
    icon: LuShieldCheck,
    title: "Testing & Refinement",
    description:
      "Review functionality, responsiveness, usability, and implementation details before release.",
  },
  {
    icon: LuRocket,
    title: "Deployment",
    description:
      "Prepare and deploy the completed website or application to its intended environment.",
  },
  {
    icon: LuRefreshCw,
    title: "Improvement",
    description:
      "Refine the solution based on feedback, changing requirements, and future opportunities.",
  },
]

export function DevelopmentProcess() {
  return (
    <DevelopmentProcessSection
      id="development-process"
      eyebrow="Our Process"
      title="A clear process for building better digital solutions."
      description="Every project follows a structured path from understanding the requirements to building, testing, deploying, and refining the final solution."
      steps={serviceProcessSteps}
      loopLabel="Continuous improvement"
    />
  )
}