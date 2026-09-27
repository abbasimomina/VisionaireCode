import { Container } from "../layout/Container.jsx"
import { Button } from "../ui/Button.jsx"

import "./CTASection.css"

export function CTASection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  className = "",
  id,
}) {
  const titleId = id ? `${id}-title` : undefined

  return (
    <section
      id={id}
      className={`cta-section ${className}`.trim()}
      aria-labelledby={titleId}
    >
      <Container>
        <div className="cta-section__surface">
          <div
            className="cta-section__background"
            aria-hidden="true"
          >
            <span className="cta-section__glow" />
            <span className="cta-section__grid" />
          </div>

          <div className="cta-section__content">
            {eyebrow && (
              <p className="cta-section__eyebrow">
                {eyebrow}
              </p>
            )}

            <h2
              id={titleId}
              className="cta-section__title"
            >
              {title}
            </h2>

            {description && (
              <p className="cta-section__description">
                {description}
              </p>
            )}

            {(primaryAction || secondaryAction) && (
              <div className="cta-section__actions">
                {primaryAction && (
                  <Button
                    as="a"
                    href={primaryAction.href}
                    variant={primaryAction.variant || "primary"}
                    size={primaryAction.size || "md"}
                  >
                    {primaryAction.label}
                  </Button>
                )}

                {secondaryAction && (
                  <Button
                    as="a"
                    href={secondaryAction.href}
                    variant={secondaryAction.variant || "secondary"}
                    size={secondaryAction.size || "md"}
                  >
                    {secondaryAction.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
