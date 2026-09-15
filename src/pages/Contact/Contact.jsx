import { ContactHero } from "./ContactHero.jsx"
import { ContactIntroduction } from "./ContactIntroduction.jsx"
import { ContactForm } from "./ContactForm.jsx"
import { ContactInformation } from "./ContactInformation.jsx"
import { ContactCTA } from "./ContactCTA.jsx"

import "./Contact.css"

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactIntroduction />
      <ContactForm />
      <ContactInformation />
      <ContactCTA />
    </>
  )
}