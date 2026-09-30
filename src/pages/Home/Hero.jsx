import { HeroSection } from "../../components/common/HeroSection.jsx"

function HomeHeroVisual() {
  return (
    <div className="home-hero-visual">
      <div className="home-hero-visual__window">

        {/* Window Header */}
        <div className="home-hero-visual__topbar">

          <div className="home-hero-visual__controls">
            <span />
            <span />
            <span />
          </div>

          <span className="home-hero-visual__brand">
            Visionaire Code
          </span>

          <span className="home-hero-visual__status">
            Product Development
          </span>

        </div>


        {/* Interface */}
        <div className="home-hero-visual__body">

          <div className="home-hero-visual__sidebar">

            <span className="home-hero-visual__sidebar-item home-hero-visual__sidebar-item--active" />
            <span className="home-hero-visual__sidebar-item" />
            <span className="home-hero-visual__sidebar-item" />
            <span className="home-hero-visual__sidebar-item" />

          </div>


          <div className="home-hero-visual__main">

            {/* Interface Heading */}
            <div className="home-hero-visual__heading">
              <span className="home-hero-visual__heading-line" />
              <span className="home-hero-visual__heading-small" />
            </div>


            {/* Metrics */}
            <div className="home-hero-visual__metrics">

              <div className="home-hero-visual__metric">
                <span />
                <span />
              </div>

              <div className="home-hero-visual__metric">
                <span />
                <span />
              </div>

              <div className="home-hero-visual__metric">
                <span />
                <span />
              </div>

            </div>


            {/* Main Panel */}
            <div className="home-hero-visual__panel">

              <div className="home-hero-visual__panel-header">
                <span />
                <span />
              </div>

              <div className="home-hero-visual__chart">
                <span />
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


        {/* Floating Project Card */}
        <div className="home-hero-visual__floating-card">

          <span className="home-hero-visual__floating-label">
            Current Focus
          </span>

          <strong className="home-hero-visual__floating-value">
            Digital Product
          </strong>

          <span className="home-hero-visual__floating-indicator">
            <span />
            In Development
          </span>

        </div>

      </div>
    </div>
  )
}


export function Hero() {
  return (
    <HeroSection
      eyebrow="Software · Digital Products"
      title="Software that turns ideas into products."
      description="We design and develop modern websites, web applications, dashboards, and digital products with thoughtful design and reliable engineering."
      primaryAction={{
        label: "Start a Project",
        href: "/contact",
      }}
      secondaryAction={{
        label: "View Our Work",
        href: "/projects",
      }}
      visual={<HomeHeroVisual />}
      mobileVisual="background"
    />
  )
}