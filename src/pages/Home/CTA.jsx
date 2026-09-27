import { CTASection } from "../../components/common/CTASection.jsx"

export function CTA() {
  return (
    <CTASection
      id="home-cta"
      className="background-primary"
      eyebrow="Have a project in mind?"
      title="Let's Build Something Meaningful."
      description="Tell us what you're building, and let's explore the right way to bring it to life."
      primaryAction={{
        label: "Start a Conversation",
        href: "/contact",
      }}
      secondaryAction={{
        label: "Explore Projects",
        href: "/projects",
      }}
    />
  )
}