import { ServicesHero } from "./ServicesHero.jsx"
import { ServicesOverview } from "./ServicesOverview.jsx"
import { CoreServices } from "./CoreServices.jsx"
import { DevelopmentProcess } from "./DevelopmentProcess.jsx"
import { FeaturedProjects } from "./FeaturedProjects.jsx"
import { TechnologyStack } from "./TechnologyStack.jsx"
import { ServicesCTA } from "./ServicesCTA.jsx"

import "./Services.css"

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <ServicesOverview />
      <CoreServices />
      <DevelopmentProcess />
      <FeaturedProjects />
      <TechnologyStack />
      <ServicesCTA />
    </main>
  )
}