import {
  LuPanelsTopLeft,
  LuCode,
  LuGraduationCap,
  LuLayoutDashboard,
  LuPalette,
  LuRefreshCw,
} from "react-icons/lu"

import { CoreServicesSection } from "../../components/common/CoreServicesSection.jsx"

const discussionTypes = [
  {
    icon: LuPanelsTopLeft,
    title: "Business Websites",
    description:
      "Professional, responsive websites designed around your organization, audience, and goals.",
  },
  {
    icon: LuCode,
    title: "Web Applications",
    description:
      "Custom applications built around specific workflows, requirements, and operational needs.",
  },
  {
    icon: LuGraduationCap,
    title: "Educational Platforms",
    description:
      "Software solutions for academic, administrative, student, and educational workflows.",
  },
  {
    icon: LuLayoutDashboard,
    title: "Dashboards",
    description:
      "Centralized interfaces for managing information, monitoring operations, and understanding data.",
  },
  {
    icon: LuPalette,
    title: "UI Implementation",
    description:
      "Responsive, component-based implementation of approved interfaces and design systems.",
  },
  {
    icon: LuRefreshCw,
    title: "Improvements & Maintenance",
    description:
      "UI improvements, fixes, enhancements, modernization, and ongoing development for existing software.",
  },
]

export function ContactIntroduction() {
  return (
    <CoreServicesSection
      id="contact-introduction"
      eyebrow="What Can We Discuss?"
      title="Start with the problem, idea, or requirement."
      description="Whether you are starting something new or improving an existing product, share what you are trying to achieve. The technical direction can be explored from there."
      services={discussionTypes}
      className="contact-introduction background-primary"
    />
  )
}