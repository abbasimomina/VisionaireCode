import "./About.css"

import { AboutHero } from "./AboutHero.jsx"
import { BrandStory } from "./BrandStory.jsx"
import { MissionVision } from "./MissionVision.jsx"
import { CoreValues } from "./CoreValues.jsx"
import { DevelopmentPhilosophy } from "./DevelopmentPhilosophy.jsx"
import { TechnologiesTools } from "./TechnologiesTools.jsx"
import { AboutCTA } from "./AboutCTA.jsx"

export default function About() {
  return (
    <>
      <AboutHero />
      <BrandStory />
      <MissionVision />
      <CoreValues />
      <DevelopmentPhilosophy />
      <TechnologiesTools />
      <AboutCTA />
    </>
  )
}