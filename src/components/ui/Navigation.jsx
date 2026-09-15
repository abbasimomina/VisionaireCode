import { NavLink } from "react-router-dom"

import { Button } from "./Button"

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
]

export function Navigation({
  isOpen = false,
  onNavigate,
}) {
  return (
    <nav
      id="primary-navigation"
      className={`navigation ${isOpen ? "navigation--open" : ""}`}
      aria-label="Primary navigation"
    >
      <ul className="navigation__list">
        {navigationItems.map(({ label, href }) => (
          <li
            key={href}
            className="navigation__item"
          >
            <NavLink
              to={href}
              end={href === "/"}
              className="navigation__link"
              onClick={onNavigate}
            >
                <>
                  <span className="navigation__label">
                    {label}
                  </span>
                </>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="navigation__mobile-action">
        <Button
          as={NavLink}
          to="/contact"
          variant="primary"
          size="md"
          onClick={onNavigate}
        >
          Start a Conversation
        </Button>
      </div>
    </nav>
  )
}