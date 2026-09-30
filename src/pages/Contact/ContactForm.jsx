import { useState } from "react"

import { createContact } from "../../api/contactService.js"

import { Container } from "../../components/layout/Container.jsx"
import {
  FormField,
  Input,
  Select,
  Textarea,
} from "../../components/ui/Form.jsx"
import { Button } from "../../components/ui/Button.jsx"

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  subject: "",
  message: "",
}

export function ContactForm() {
  const [formData, setFormData] = useState(initialFormData)

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))

    if (status.success || status.error) {
      setStatus({
        loading: false,
        success: "",
        error: "",
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setStatus({
      loading: true,
      success: "",
      error: "",
    })

    try {
      await createContact(formData)

      setStatus({
        loading: false,
        success:
          "Thank you for reaching out. Your project inquiry has been submitted successfully. We will get back to you soon.",
        error: "",
      })

      setFormData(initialFormData)
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error:
          error.response?.data?.message ||
          "Unable to submit your inquiry. Please try again.",
      })
    }
  }

  return (
    <section
      id="contact-form"
      className="contact-form-section background-soft"
      aria-labelledby="contact-form-title"
    >
      <Container>
        <header className="contact-form-section__header">
          <div className="contact-form-section__heading">
            <p className="contact-form-section__eyebrow">
              Project Inquiry
            </p>

            <h2
              id="contact-form-title"
              className="contact-form-section__title"
            >
              Tell us about your project.
            </h2>
          </div>

          <div className="contact-form-section__introduction">
            <p>
              Share the essentials about your idea, requirements,
              or current challenge. We will use them to understand
              where to start.
            </p>
          </div>
        </header>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="contact-form__grid">
            <FormField
              label="Full name"
              htmlFor="contact-name"
              required
            >
              <Input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your full name"
                autoComplete="name"
                minLength={2}
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField
              label="Email address"
              htmlFor="contact-email"
              required
            >
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={150}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField
              label="Phone number"
              htmlFor="contact-phone"
            >
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+92 300 1234567"
                autoComplete="tel"
                maxLength={30}
                value={formData.phone}
                onChange={handleChange}
              />
            </FormField>

            <FormField
              label="Company / organization"
              htmlFor="contact-company"
            >
              <Input
                id="contact-company"
                name="company"
                type="text"
                placeholder="Business or organization (Optional)"
                autoComplete="organization"
                maxLength={150}
                value={formData.company}
                onChange={handleChange}
              />
            </FormField>

            <FormField
              label="Project type"
              htmlFor="contact-project-type"
              required
            >
              <Select
                id="contact-project-type"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a project type
                </option>

                <option value="business-website">
                  Business Website
                </option>

                <option value="web-application">
                  Custom Web Application
                </option>

                <option value="educational-platform">
                  Educational Platform
                </option>

                <option value="administrative-dashboard">
                  Administrative Dashboard
                </option>

                <option value="ui-implementation">
                  UI Implementation
                </option>

                <option value="maintenance-enhancements">
                  Website Maintenance & Enhancements
                </option>

                <option value="other">
                  Other
                </option>
              </Select>
            </FormField>

            <FormField
              label="Project budget"
              htmlFor="contact-budget"
            >
              <Select
                id="contact-budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">
                  Budget range
                </option>

                <option value="under-50k">
                  Under Rs. 50,000
                </option>

                <option value="50k-100k">
                  Rs. 50,000 – 100,000
                </option>

                <option value="100k-250k">
                  Rs. 100,000 – 250,000
                </option>

                <option value="250k-plus">
                  Rs. 250,000+
                </option>

                <option value="not-sure">
                  Not sure yet
                </option>
              </Select>
            </FormField>

            <FormField
              label="Preferred timeline"
              htmlFor="contact-timeline"
            >
              <Select
                id="contact-timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="">
                  Timeline
                </option>

                <option value="asap">
                  As soon as possible
                </option>

                <option value="1-4-weeks">
                  Within 1–4 weeks
                </option>

                <option value="1-2-months">
                  Within 1–2 months
                </option>

                <option value="2-3-months">
                  Within 2–3 months
                </option>

                <option value="flexible">
                  Flexible
                </option>
              </Select>
            </FormField>

            <FormField
              label="Subject"
              htmlFor="contact-subject"
            >
              <Input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss? (Optional)"
                maxLength={200}
                value={formData.subject}
                onChange={handleChange}
              />
            </FormField>

            <div className="contact-form__message">
              <FormField
                label="Tell us about your project"
                htmlFor="contact-message"
                required
              >
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project, requirements, goals, or questions..."
                  rows={6}
                  minLength={10}
                  maxLength={5000}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormField>
            </div>
          </div>

          {status.success && (
            <div
              className="contact-form__feedback contact-form__feedback--success"
              role="status"
            >
              <p>{status.success}</p>
            </div>
          )}

          {status.error && (
            <div
              className="contact-form__feedback contact-form__feedback--error"
              role="alert"
            >
              <p>{status.error}</p>
            </div>
          )}

          <div className="contact-form__footer">
            <span className="contact-form__footer-line" />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status.loading}
            >
              {status.loading
                ? "Submitting..."
                : "Discuss Your Project"}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  )
}