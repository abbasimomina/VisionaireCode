import {
  LuGithub,
  LuLinkedin,
  LuMail,
} from "react-icons/lu"

import { Container } from "../../components/layout/Container.jsx"

const contactMethods = [
  {
    id: "email",
    icon: LuMail,
    title: "Email",
    value: "hello@visionairecode.com",
    href: "mailto:hello@visionairecode.com",
  },
  {
    id: "linkedin",
    icon: LuLinkedin,
    title: "LinkedIn",
    value: "Visionaire Code",
    href: "https://www.linkedin.com/",
    external: true,
  },
  {
    id: "github",
    icon: LuGithub,
    title: "GitHub",
    value: "Visionaire Code on GitHub",
    href: "https://github.com/",
    external: true,
  },
]

export function ContactInformation() {
  return (
    <section
      id="contact-information"
      className="contact-information background-primary"
      aria-labelledby="contact-information-title"
    >
      <Container>
        <div className="contact-information__layout">
          <header className="contact-information__header">
            <p className="contact-information__eyebrow">
              Other Ways to Connect
            </p>

            <h2
              id="contact-information-title"
              className="contact-information__title"
            >
              Connect with Visionaire Code.
            </h2>

            <p className="contact-information__introduction">
              Prefer a direct channel? Reach us through email or
              explore our professional and development presence.
            </p>
          </header>

          <div className="contact-information__list">
            {contactMethods.map((method) => {
              const Icon = method.icon

              return (
                <a
                  key={method.id}
                  href={method.href}
                  className="contact-information__item"
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
                  <span
                    className="contact-information__icon"
                    aria-hidden="true"
                  >
                    <Icon strokeWidth={1.5} />
                  </span>

                  <span className="contact-information__content">
                    <span className="contact-information__label">
                      {method.title}
                    </span>

                    <span className="contact-information__value">
                      {method.value}
                    </span>
                  </span>

                  <span
                    className="contact-information__arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}