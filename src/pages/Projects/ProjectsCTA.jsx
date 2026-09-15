import { CTASection } from "../../components/common/CTASection.jsx"

export function ProjectsCTA() {
  return (
    <CTASection
      id="projects-cta"
      eyebrow="Have a project in mind?"
      title="Have Something to Build?"
      description="Have an idea in mind? Let's discuss what you want to build and how we can make it real."
      primaryAction={{
        label: "Discuss a Project",
        href: "/contact",
      }}
      secondaryAction={{
        label: "Explore Services",
        href: "/services",
      }}
    />
  )
}