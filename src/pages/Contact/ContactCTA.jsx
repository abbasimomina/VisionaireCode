import { CTASection } from "../../components/common/CTASection.jsx"

export function ContactCTA() {
  return (
    <CTASection
      id="contact-cta"
      eyebrow="Start a Conversation"
      title="Ready to Build?"
      description="Tell us what you're building or improving, and let's figure out the right direction together."
      primaryAction={{
        label: "Start a Conversation",
        href: "#contact-form",
      }}
      secondaryAction={{
        label: "Explore Projects",
        href: "/projects",
      }}
    />
  )
}