import { Link } from "react-router-dom"

import { Container } from "../layout/Container.jsx"
import { Button } from "../ui/Button.jsx"

import "./HeroSection.css"

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  visual,
  mobileVisual = "background",
  className = "",
}) {
  return (
    <section
      className={`hero-section background-atmosphere ${className}`.trim()}
      aria-labelledby="hero-section-title"
    >
      <Container>
        <div className="hero-section__content">
          <div className="hero-section__copy">
            {eyebrow && (
              <p className="hero-section__eyebrow">{eyebrow}</p>
            )}

            <h1
              id="hero-section-title"
              className="hero-section__title"
            >
              {title}
            </h1>

            {description && (
              <p className="hero-section__description">
                {description}
              </p>
            )}

            {(primaryAction || secondaryAction) && (
              <div className="hero-section__actions">
                {primaryAction && (
                  <Button
                    as={Link}
                    to={primaryAction.href}
                    variant={primaryAction.variant || "primary"}
                    size={primaryAction.size || "lg"}
                  >
                    {primaryAction.label}
                  </Button>
                )}

                {secondaryAction && (
                  <Button
                    as={Link}
                    to={secondaryAction.href}
                    variant={secondaryAction.variant || "secondary"}
                    size={secondaryAction.size || "lg"}
                  >
                    {secondaryAction.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {visual && (
            <div
              className={`hero-section__visual hero-section__visual--mobile-${mobileVisual}`}
              aria-hidden="true"
            >
              {visual}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}