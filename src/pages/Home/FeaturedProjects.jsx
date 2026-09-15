import { FeaturedProjectsSection } from "../../components/common/FeaturedProjectsSection.jsx"

export function FeaturedProjects() {
  return (
    <FeaturedProjectsSection
      id="featured-projects"
      eyebrow="Selected Work"
      title="Practical software built with purpose."
      description="Explore selected projects to see how thoughtful design, technology, and structured development come together to create useful digital products."
      showHeaderAction
      showFooterAction={false}
    />
  )
}