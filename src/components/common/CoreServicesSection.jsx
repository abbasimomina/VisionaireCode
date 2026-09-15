import { Link } from "react-router-dom"

import {
  LuPanelsTopLeft,
  LuCode,
  LuServer,
  LuLayoutDashboard,
  LuPalette,
  LuRefreshCw,
} from "react-icons/lu"

import { Container } from "../layout/Container.jsx"

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../ui/Card.jsx"

import { Button } from "../ui/Button.jsx"

import "./CoreServicesSection.css"

const defaultServices = [
  {
    icon: LuPanelsTopLeft,
    title: "Custom Web Application Development",
    description:
      "Modern, scalable web applications tailored to specific requirements, workflows, and user needs.",
  },
  {
    icon: LuCode,
    title: "Frontend Development",
    description:
      "Responsive and user-friendly interfaces built with modern web technologies and thoughtful interaction patterns.",
  },
  {
    icon: LuServer,
    title: "Backend Development",
    description:
      "Secure and maintainable server-side applications, APIs, and data systems designed for reliable operation.",
  },
  {
    icon: LuLayoutDashboard,
    title: "Dashboard Development",
    description:
      "Administrative and analytics dashboards that turn complex information and workflows into intuitive interfaces.",
  },
  {
    icon: LuPalette,
    title: "UI Implementation",
    description:
      "Thoughtful interface designs translated into responsive, accessible, and functional web experiences.",
  },
  {
    icon: LuRefreshCw,
    title: "Website Maintenance & Improvements",
    description:
      "Ongoing updates, refinements, bug fixes, and improvements that help existing digital products evolve.",
  },
]

export function CoreServicesSection({
  id = "core-services",
  eyebrow = "Core Services",
  title = "Digital solutions designed around real needs.",
  description =
    "From focused websites to larger digital platforms, Visionaire Code creates software experiences that combine thoughtful design with practical development.",
  services = defaultServices,
  showButton = false,
  buttonLabel = "View All Services",
  buttonTo = "/services",
  detailed = false,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`core-services-section ${
        detailed ? "core-services-section--detailed" : ""
      } ${className}`.trim()}
      aria-labelledby={`${id}-title`}
    >
      <Container>
        <header className="core-services-section__header">
          <div className="core-services-section__heading">
            <p className="core-services-section__eyebrow">
              {eyebrow}
            </p>

            <h2
              id={`${id}-title`}
              className="core-services-section__title"
            >
              {title}
            </h2>
          </div>

          <div className="core-services-section__introduction">
            <p>{description}</p>

            {showButton && (
              <Button
                as={Link}
                to={buttonTo}
                variant="secondary"
                size="md"
              >
                {buttonLabel}
              </Button>
            )}
          </div>
        </header>

        <div className="core-services-section__grid">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Card
                key={service.title}
                variant="default"
                padding="default"
                interactive
                className="core-services-section__card"
              >
                <CardHeader className="core-services-section__card-header">
                  <span
                    className="core-services-section__card-icon"
                    aria-hidden="true"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                    />
                  </span>
                </CardHeader>

                <CardContent className="core-services-section__card-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                </CardContent>

                <CardFooter className="core-services-section__card-footer">
                  <span className="core-services-section__card-line" />
                    <span
                      className="core-services-section__card-mark"
                      aria-hidden="true"
                    >
                      +
                    </span>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}