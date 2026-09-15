import { HeroSection } from "../../components/common/HeroSection.jsx"

function ProjectsHeroVisual() {
  return (
    <div className="projects-hero-visual">

      <div className="projects-hero-visual__window">

        {/* Window Header */}
        <div className="projects-hero-visual__header">

          <div className="projects-hero-visual__controls">
            <span />
            <span />
            <span />
          </div>

          <span className="projects-hero-visual__brand">
            Visionaire EduCore
          </span>

          <span className="projects-hero-visual__status">
            Project Preview
          </span>

        </div>


        {/* Interface */}
        <div className="projects-hero-visual__body">

          {/* Sidebar */}
          <div className="projects-hero-visual__sidebar">

            <div className="projects-hero-visual__brand-mark">
              VC
            </div>

            <div className="projects-hero-visual__sidebar-items">

              <span className="projects-hero-visual__sidebar-item projects-hero-visual__sidebar-item--active" />
              <span className="projects-hero-visual__sidebar-item" />
              <span className="projects-hero-visual__sidebar-item" />
              <span className="projects-hero-visual__sidebar-item" />
              <span className="projects-hero-visual__sidebar-item" />

            </div>

          </div>


          {/* Workspace */}
          <div className="projects-hero-visual__workspace">

            {/* Workspace Header */}
            <div className="projects-hero-visual__workspace-header">

              <div className="projects-hero-visual__workspace-heading">

                <span className="projects-hero-visual__micro-label">
                  PROJECT OVERVIEW
                </span>

                <span className="projects-hero-visual__heading-line" />

              </div>

              <div className="projects-hero-visual__profile" />

            </div>


            {/* Project Metrics */}
            <div className="projects-hero-visual__stats">

              <div className="projects-hero-visual__stat-card">
                <span />
                <span />
                <strong />
              </div>

              <div className="projects-hero-visual__stat-card">
                <span />
                <span />
                <strong />
              </div>

              <div className="projects-hero-visual__stat-card">
                <span />
                <span />
                <strong />
              </div>

            </div>


            {/* Main Project Panel */}
            <div className="projects-hero-visual__panel">

              <div className="projects-hero-visual__panel-header">
                <span />
                <span />
              </div>

              <div className="projects-hero-visual__chart">

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

      {/* Floating Project Card */}
      <div className="projects-hero-visual__floating-card">

        <span className="projects-hero-visual__floating-label">
          Featured Project
        </span>

        <strong className="projects-hero-visual__floating-value">
          Visionaire EduCore
        </strong>

        <span className="projects-hero-visual__floating-status">
          Digital Product
        </span>

      </div>

    </div>
  )
}


export function ProjectsHero() {
  return (
    <HeroSection
      eyebrow="Software · Projects"
      title="Software built with purpose."
      description="Explore our websites, applications, dashboards, and digital products, and see the thinking behind how they were designed and built."
      primaryAction={{
        label: "Explore Projects",
        href: "#featured-projects",
      }}
      secondaryAction={{
        label: "Discuss a Project",
        href: "/contact",
      }}
      visual={<ProjectsHeroVisual />}
      className="projects-hero"
    />
  )
}