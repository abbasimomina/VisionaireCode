import { CTASection } from "../../components/common/CTASection.jsx"

export function AboutCTA() {
  return (
    <CTASection
      id="about-cta"
      className="background-soft"
      eyebrow="Explore the Work"
      title="See What We Build."
      description="Explore our work and see how we turn ideas into thoughtful digital products."
      primaryAction={{
        label: "Explore Projects",
        href: "/projects",
      }}
      secondaryAction={{
        label: "Start a Conversation",
        href: "/contact",
      }}
    />
  )
}