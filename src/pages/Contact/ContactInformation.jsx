import {
  LuGithub,
  LuLinkedin,
  LuMail,
} from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"
import { Card } from "../../components/ui/Card.jsx"

const contactMethods = [
  {
    id: "email",
    icon: LuMail,
    title: "Email",
    description:
      "For project inquiries, collaboration, or general questions, send us a message by email.",
    value: "hello@visionairecode.com",
    href: "mailto:hello@visionairecode.com",
  },
  {
    id: "linkedin",
    icon: LuLinkedin,
    title: "LinkedIn",
    description:
      "Connect with Visionaire Code for professional updates, projects, and development work.",
    value: "Visionaire Code",
    href: "https://www.linkedin.com/",
    external: true,
  },
  {
    id: "github",
    icon: LuGithub,
    title: "GitHub",
    description:
      "Explore selected software projects, experiments, and development work.",
    value: "Visionaire Code on GitHub",
    href: "https://github.com/",
    external: true,
  },
]

export function ContactInformation() {
  return (
    <section
      id="contact-information"
      className="contact-information"
      aria-labelledby="contact-information-title"
    >
      <Container>
        <header className="contact-information__header">
          <div className="contact-information__heading">
            <p className="contact-information__eyebrow">
              Other Ways to Connect
            </p>

            <h2
              id="contact-information-title"
              className="contact-information__title"
            >
              Prefer another way to reach us?
            </h2>
          </div>

          <div className="contact-information__introduction">
            <p>
              If a project form is not the right fit, you can also
              connect through the channels below.
            </p>
          </div>
        </header>

        <div className="contact-information__grid">
          {contactMethods.map((method) => {
            const Icon = method.icon

            return (
              <Card
                key={method.id}
                variant="default"
                padding="default"
                className="contact-information__card"
              >
                <div className="contact-information__card-header">
                  <span
                    className="contact-information__icon"
                    aria-hidden="true"
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="contact-information__card-content">
                  <h3>{method.title}</h3>

                  <p>{method.description}</p>
                </div>

                <div className="contact-information__card-footer">
                  <a
                    href={method.href}
                    className="contact-information__link"
                    target={method.external ? "_blank" : undefined}
                    rel={
                      method.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={
                      method.external
                        ? `${method.value} (opens in a new tab)`
                        : method.value
                    }
                  >
                    <span>{method.value}</span>

                    <span
                      className="contact-information__arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}