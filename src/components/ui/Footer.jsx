import { Container } from "../layout/Container.jsx"

const exploreLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__main">

          {/* Brand */}
          <div className="site-footer__brand">
            <a
              href="/"
              className="site-footer__brand-name"
              aria-label="Visionaire Code home"
            >
              Visionaire Code
            </a>

            <p className="site-footer__description">
              Modern websites, applications, and digital
              experiences built with clarity and purpose.
            </p>
          </div>

          {/* Navigation */}
          <nav
            className="site-footer__navigation"
            aria-label="Footer navigation"
          >
            <div className="site-footer__group">
              <h2 className="site-footer__group-title">
                Explore
              </h2>

              <ul className="site-footer__links">
                {exploreLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__group">
              <h2 className="site-footer__group-title">
                Connect
              </h2>

              <ul className="site-footer__links">
                <li>
                  <a href="/contact">
                    Get in Touch
                  </a>
                </li>

                {/* <li>
                  <a href="mailto:hello@visionairecode.com">
                    hello@visionairecode.com
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>

        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {year} Visionaire Code. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}