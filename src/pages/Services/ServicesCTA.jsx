import { CTASection } from "../../components/common/CTASection.jsx"

export function ServicesCTA() {
  return (
    <CTASection
      id="services-cta"
      className="background-soft"
      eyebrow="Start a Project"
      title="Let's Build the Right Solution."
      description="Tell us what you need to build, improve, or solve, and we'll explore the right approach."
      primaryAction={{
        label: "Start a Project",
        href: "/contact",
      }}
      secondaryAction={{
        label: "Explore Projects",
        href: "/projects",
      }}
    />
  )
}