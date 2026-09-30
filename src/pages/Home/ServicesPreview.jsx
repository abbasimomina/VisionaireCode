import { CoreServicesSection } from "../../components/common/CoreServicesSection.jsx"

import {
  LuPanelsTopLeft,
  LuCode,
  LuServer,
  LuLayoutDashboard,
  LuPalette,
  LuRefreshCw,
} from "react-icons/lu"

const services = [
  {
    icon: LuPanelsTopLeft,
    title: "Custom Web Application Development",
    description:
      "Modern, scalable web applications tailored to specific requirements, workflows, and user needs.",
  },
  {
    icon: LuCode,
    title: "Frontend Development",
    description:
      "Responsive and user-friendly interfaces built with modern web technologies and thoughtful interaction patterns.",
  },
  {
    icon: LuServer,
    title: "Backend Development",
    description:
      "Secure and maintainable server-side applications, APIs, and data systems designed for reliable operation.",
  },
  {
    icon: LuLayoutDashboard,
    title: "Dashboard Development",
    description:
      "Administrative and analytics dashboards that turn complex information and workflows into intuitive interfaces.",
  },
  {
    icon: LuPalette,
    title: "UI Implementation",
    description:
      "Thoughtful interface designs translated into responsive, accessible, and functional web experiences.",
  },
  {
    icon: LuRefreshCw,
    title: "Website Maintenance & Improvements",
    description:
      "Ongoing updates, refinements, bug fixes, and improvements that help existing digital products evolve.",
  },
]

export function ServicesPreview() {
  return (
    <CoreServicesSection
      id="services-preview"
      className="background-soft"
      eyebrow="What We Build"
      title="Digital solutions designed around real needs."
      description="From focused websites to larger digital platforms, Visionaire Code creates software experiences that combine thoughtful design with practical development."
      services={services}
      showButton
      buttonLabel="View All Services"
      buttonTo="/services"
    />
  )
}