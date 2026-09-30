import { HeroSection } from "../../components/common/HeroSection.jsx"

function AboutHeroVisual() {
  return (
    <div className="about-hero-visual">

      <div className="about-hero-visual__frame">

        {/* Window Header */}
        <div className="about-hero-visual__header">

          <div className="about-hero-visual__controls">
            <span />
            <span />
            <span />
          </div>

          <span className="about-hero-visual__brand">
            Visionaire Code
          </span>

        </div>


        {/* Interface */}
        <div className="about-hero-visual__content">

          {/* Sidebar */}
          <div className="about-hero-visual__sidebar">

            <span className="about-hero-visual__sidebar-item about-hero-visual__sidebar-item--active" />
            <span className="about-hero-visual__sidebar-item" />
            <span className="about-hero-visual__sidebar-item" />
            <span className="about-hero-visual__sidebar-item" />

          </div>


          {/* Main Interface */}
          <div className="about-hero-visual__main">

            <div className="about-hero-visual__heading">
              <span className="about-hero-visual__heading-large" />
              <span className="about-hero-visual__heading-medium" />
            </div>


            {/* Principles */}
            <div className="about-hero-visual__principles">

              <div className="about-hero-visual__principle">
                <span className="about-hero-visual__principle-icon" />
                <div>
                  <span className="about-hero-visual__principle-title" />
                  <span className="about-hero-visual__principle-line" />
                </div>
              </div>

              <div className="about-hero-visual__principle">
                <span className="about-hero-visual__principle-icon" />
                <div>
                  <span className="about-hero-visual__principle-title" />
                  <span className="about-hero-visual__principle-line" />
                </div>
              </div>

              <div className="about-hero-visual__principle">
                <span className="about-hero-visual__principle-icon" />
                <div>
                  <span className="about-hero-visual__principle-title" />
                  <span className="about-hero-visual__principle-line" />
                </div>
              </div>

            </div>


            {/* Code / Engineering Panel */}
            <div className="about-hero-visual__code-panel">

              <div className="about-hero-visual__code-header">
                <span />
                <span />
              </div>

              <div className="about-hero-visual__code-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Floating Philosophy Card */}
      <div className="about-hero-visual__floating-card">

        <span className="about-hero-visual__floating-label">
          Our Approach
        </span>

        <strong className="about-hero-visual__floating-value">
          Purposeful Engineering
        </strong>

        <span className="about-hero-visual__floating-status">
          Design · Build · Improve
        </span>

      </div>

    </div>
  )
}


export function AboutHero() {
  return (
    <HeroSection
      eyebrow="Visionaire Code · About"
      title="Thoughtful software, built with purpose."
      description="Visionaire Code builds practical digital experiences through thoughtful design, purposeful engineering, and continuous improvement."
      primaryAction={{
        label: "Explore Projects",
        href: "/projects",
      }}
      secondaryAction={{
        label: "Start a Conversation",
        href: "/contact",
      }}
      visual={<AboutHeroVisual />}
      mobileVisual="background"
      className="about-hero"
    />
  )
}