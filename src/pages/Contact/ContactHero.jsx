import { HeroSection } from "../../components/common/HeroSection.jsx"

function ContactHeroVisual() {
  return (
    <div className="contact-hero-visual">

      <div className="contact-hero-visual__window">

        {/* Window Header */}
        <div className="contact-hero-visual__header">

          <div className="contact-hero-visual__controls">
            <span />
            <span />
            <span />
          </div>

          <span className="contact-hero-visual__brand">
            Visionaire Code
          </span>

          <span className="contact-hero-visual__status">
            Project Discussion
          </span>

        </div>

        {/* Interface */}
        <div className="contact-hero-visual__body">

          {/* Sidebar */}
          <div className="contact-hero-visual__sidebar">

            <span className="contact-hero-visual__sidebar-item contact-hero-visual__sidebar-item--active" />
            <span className="contact-hero-visual__sidebar-item" />
            <span className="contact-hero-visual__sidebar-item" />
            <span className="contact-hero-visual__sidebar-item" />

          </div>

          {/* Conversation Workspace */}
          <div className="contact-hero-visual__workspace">

            {/* Heading */}
            <div className="contact-hero-visual__heading">

              <span className="contact-hero-visual__heading-label">
                PROJECT INQUIRY
              </span>

              <span className="contact-hero-visual__heading-line" />

              <span className="contact-hero-visual__heading-small" />

            </div>

            {/* Conversation Cards */}
            <div className="contact-hero-visual__messages">

              <div className="contact-hero-visual__message contact-hero-visual__message--primary">

                <span className="contact-hero-visual__message-label" />

                <div className="contact-hero-visual__message-lines">
                  <span />
                  <span />
                  <span />
                </div>

              </div>

              <div className="contact-hero-visual__message contact-hero-visual__message--secondary">

                <span className="contact-hero-visual__message-label" />

                <div className="contact-hero-visual__message-lines">
                  <span />
                  <span />
                </div>

              </div>

            </div>

            {/* Project Details Panel */}
            <div className="contact-hero-visual__details">

              <div className="contact-hero-visual__details-header">
                <span />
                <span />
              </div>

              <div className="contact-hero-visual__details-grid">

                <div className="contact-hero-visual__detail">
                  <span />
                  <strong />
                </div>

                <div className="contact-hero-visual__detail">
                  <span />
                  <strong />
                </div>

                <div className="contact-hero-visual__detail">
                  <span />
                  <strong />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Floating Contact Card */}
      <div className="contact-hero-visual__floating-card">

        <span className="contact-hero-visual__floating-label">
          Next Step
        </span>

        <strong className="contact-hero-visual__floating-value">
          Start the conversation.
        </strong>

        <span className="contact-hero-visual__floating-status">
          Idea · Requirements · Direction
        </span>

      </div>

    </div>
  )
}

export function ContactHero() {
  return (
    <HeroSection
      eyebrow="Software · Contact"
      title="Let's discuss what you're building."
      description="Tell us what you’re building, what you need, and where you want to go. We’ll explore the right approach together."
      primaryAction={{
        label: "Start a Conversation",
        href: "#contact-form",
      }}
      secondaryAction={{
        label: "Explore Services",
        href: "/services",
      }}
      visual={<ContactHeroVisual />}
      className="contact-hero"
    />
  )
}