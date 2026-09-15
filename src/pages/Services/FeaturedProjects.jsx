import { FeaturedProjectsSection } from "../../components/common/FeaturedProjectsSection.jsx"

export function FeaturedProjects() {
  return (
    <FeaturedProjectsSection
      id="featured-projects"
      eyebrow="Featured Work"
      title="Projects built around real problems."
      description="Explore selected projects from the Visionaire Code ecosystem. Each project represents a practical software challenge, considered design decisions, and an ongoing development process."
      showHeaderAction={false}
      showFooterAction
    />
  )
}