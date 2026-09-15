import { Hero } from "./Hero.jsx"
import { AboutPreview } from "./AboutPreview.jsx"
import { ServicesPreview } from "./ServicesPreview.jsx"
import { FeaturedProjects } from "./FeaturedProjects.jsx"
import { TechnologyStack } from "./TechnologyStack.jsx"
import { CTA } from "./CTA.jsx"

import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedProjects />
      <TechnologyStack />
      <CTA />
    </>
  )
}