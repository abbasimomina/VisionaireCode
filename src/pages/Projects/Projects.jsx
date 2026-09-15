import { ProjectsHero } from "./ProjectsHero.jsx"
import { ProjectsOverview } from "./ProjectsOverview.jsx"
import { FeaturedProjects } from "./FeaturedProjects.jsx"
import { ProjectGrid } from "./ProjectGrid.jsx"
import { ProjectsCTA } from "./ProjectsCTA.jsx"

import "./Projects.css"

export default function Projects() {
  return (
    <>
      <ProjectsHero />
      <ProjectsOverview />
      <FeaturedProjects />
      <ProjectGrid />
      <ProjectsCTA />
    </>
  )
}