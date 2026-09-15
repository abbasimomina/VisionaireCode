import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useAdminAuth } from "../../context/useAdminAuth.jsx"

import { Container } from "../../components/layout/Container.jsx"
import { Button } from "../../components/ui/Button.jsx"
import {
  FormField,
  Input,
} from "../../components/ui/Form.jsx"

import "./Admin.css"

const AdminLogin = () => {
  const navigate = useNavigate()
  const { login } = useAdminAuth()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (error) {
      setError("")
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setLoading(true)
      setError("")

      await login(
        formData.email,
        formData.password
      )

      navigate("/admin/dashboard", {
        replace: true,
      })
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to sign in. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="admin-login">
      <div className="admin-login__background" aria-hidden="true">
        <span className="admin-login__background-grid" />
        <span className="admin-login__background-glow" />
      </div>

      <Container>
        <div className="admin-login__layout">
          <div className="admin-login__intro">
            <p className="admin-login__eyebrow">
              Visionaire Code
            </p>

            <h1 className="admin-login__title">
              Administration
              <span>Workspace</span>
            </h1>

            <p className="admin-login__description">
              Sign in to manage projects, content, and
              administrative data for Visionaire Code.
            </p>
          </div>

          <div className="admin-login__panel">
            <header className="admin-login__panel-header">
              <p className="admin-login__panel-eyebrow">
                Secure Access
              </p>

              <h2 className="admin-login__panel-title">
                Admin Login
              </h2>

              <p className="admin-login__panel-description">
                Enter your administrator credentials to
                continue.
              </p>
            </header>

            <form
              className="admin-login__form"
              onSubmit={handleSubmit}
            >
              <div className="admin-login__fields">
                <FormField
                  label="Email address"
                  htmlFor="admin-email"
                  required
                >
                  <Input
                    id="admin-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="admin@visionairecode.com"
                    autoComplete="email"
                    required
                  />
                </FormField>

                <FormField
                  label="Password"
                  htmlFor="admin-password"
                  required
                >
                  <Input
                    id="admin-password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                  />
                </FormField>
              </div>

              {error && (
                <p
                  className="admin-login__error"
                  role="alert"
                >
                  {error}
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <footer className="admin-login__panel-footer">
              <span className="admin-login__footer-line" />

              <span>
                Visionaire Code Administration
              </span>
            </footer>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default AdminLogin