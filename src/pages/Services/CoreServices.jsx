import { CoreServicesSection } from "../../components/common/CoreServicesSection.jsx"

import {
  LuPanelsTopLeft,
  LuCode,
  LuGraduationCap,
  LuLayoutDashboard,
  LuPalette,
  LuRefreshCw,
} from "react-icons/lu"

const services = [
  {
    icon: LuPanelsTopLeft,
    title: "Business Websites",
    description:
      "Professional, responsive websites designed to establish a clear and credible online presence.",
  },
  {
    icon: LuCode,
    title: "Custom Web Applications",
    description:
      "Web applications built around specific workflows, requirements, and user needs.",
  },
  {
    icon: LuGraduationCap,
    title: "Educational Platforms",
    description:
      "Digital systems that support academic, administrative, and educational workflows.",
  },
  {
    icon: LuLayoutDashboard,
    title: "Administrative Dashboards",
    description:
      "Organized dashboards for managing users, information, operations, and data.",
  },
  {
    icon: LuPalette,
    title: "UI Implementation",
    description:
      "Responsive and functional interfaces translated from approved designs and systems.",
  },
  {
    icon: LuRefreshCw,
    title: "Website Maintenance & Enhancements",
    description:
      "Ongoing updates, fixes, refinements, and improvements for existing digital products.",
  },
]

export function CoreServices() {
  return (
    <CoreServicesSection
      id="core-services"
      eyebrow="Core Services"
      title="Solutions built around real requirements."
      description="From professional websites to custom platforms and administrative systems, Visionaire Code focuses on building software around the people, workflows, and problems it needs to serve."
      services={services}
    />
  )
}