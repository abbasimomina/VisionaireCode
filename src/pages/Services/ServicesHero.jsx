import { HeroSection } from "../../components/common/HeroSection.jsx"

function ServicesHeroVisual() {
  return (
    <div className="services-hero-visual">

      <div className="services-hero-visual__window">

        {/* Window Header */}
        <div className="services-hero-visual__header">

          <div className="services-hero-visual__controls">
            <span />
            <span />
            <span />
          </div>

          <span className="services-hero-visual__brand">
            Visionaire Code
          </span>

          <span className="services-hero-visual__status">
            Services
          </span>

        </div>


        {/* Interface */}
        <div className="services-hero-visual__body">

          {/* Sidebar */}
          <div className="services-hero-visual__sidebar">

            <span className="services-hero-visual__sidebar-item services-hero-visual__sidebar-item--active" />
            <span className="services-hero-visual__sidebar-item" />
            <span className="services-hero-visual__sidebar-item" />
            <span className="services-hero-visual__sidebar-item" />

          </div>


          {/* Dashboard */}
          <div className="services-hero-visual__dashboard">

            {/* Heading */}
            <div className="services-hero-visual__heading">

              <span className="services-hero-visual__heading-large" />
              <span className="services-hero-visual__heading-small" />

            </div>


            {/* Summary Cards */}
            <div className="services-hero-visual__summary">

              <div className="services-hero-visual__summary-card">
                <span />
                <span />
              </div>

              <div className="services-hero-visual__summary-card">
                <span />
                <span />
              </div>

              <div className="services-hero-visual__summary-card">
                <span />
                <span />
              </div>

            </div>


            {/* Main Panel */}
            <div className="services-hero-visual__main-panel">

              <div className="services-hero-visual__chart">

                <span />
                <span />
                <span />
                <span />
                <span />
                <span />

              </div>


              <div className="services-hero-visual__panel-side">

                <span />
                <span />
                <span />

              </div>

            </div>


            {/* Service Rows */}
            <div className="services-hero-visual__rows">

              <span />
              <span />
              <span />

            </div>

          </div>

        </div>

      </div>


      {/* Floating Service Card */}
      <div className="services-hero-visual__floating-card">

        <span className="services-hero-visual__floating-label">
          Software
        </span>

        <strong className="services-hero-visual__floating-value">
          Built around the problem.
        </strong>

      </div>

    </div>
  )
}


export function ServicesHero() {
  return (
    <HeroSection
      eyebrow="Software · Services"
      title="Software solutions built around real needs."
      description="From websites to web applications and dashboards, we build digital solutions around your goals, requirements, and users."
      primaryAction={{
        label: "Discuss a Project",
        href: "/contact",
      }}
      secondaryAction={{
        label: "Explore Projects",
        href: "/projects",
      }}
      visual={<ServicesHeroVisual />}
      className="services-hero"
    />
  )
}