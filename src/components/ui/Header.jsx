import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { Navigation } from "./Navigation.jsx"
import { Button } from "./Button.jsx"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = ""
      return
    }

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  function handleToggleMenu() {
    setIsMenuOpen((current) => !current)
  }

  function handleNavigate() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">

          <Link
            to="/"
            className="site-header__brand"
            aria-label="Visionaire Code home"
          >
            <span className="site-header__brand-name">
              Visionaire Code
            </span>
          </Link>

          <Navigation
            isOpen={isMenuOpen}
            onNavigate={handleNavigate}
          />

          <div className="site-header__action">
            <Button
              as={Link}
              to="/contact"
              variant="primary"
              size="md"
            >
              Start a Conversation
            </Button>
          </div>

          <button
            type="button"
            className="site-header__menu-toggle"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={handleToggleMenu}
          >
            <span
              className="site-header__menu-icon"
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </span>
          </button>

        </div>
      </div>
    </header>
  )
}