import { createElement, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  LuArrowLeft,
  LuCalendarDays,
  LuClock3,
  LuDollarSign,
  LuMail,
  LuPhone,
  LuMessageSquare,
  LuSend,
  LuTrash2,
  LuUser,
} from "react-icons/lu"

import {
  getContactById,
  updateContact,
  deleteContact,
} from "../../api/contactService.js"

import { Button } from "../../components/ui/Button.jsx"
import {
  FormField,
  Select,
} from "../../components/ui/Form.jsx"

import "./Admin.css"

const AdminContactDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [contact, setContact] = useState(null)
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true)
        setError("")

        const data = await getContactById(id)

        setContact(data)
        setStatus(data.status || "New")
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Unable to load contact inquiry."
        )
      } finally {
        setLoading(false)
      }
    }

    fetchContact()
  }, [id])

  const handleStatusUpdate = async () => {
    try {
      setSaving(true)
      setError("")
      setSuccess("")

      const updatedContact = await updateContact(id, {
        status,
      })

      setContact(updatedContact)
      setStatus(updatedContact.status)

      setSuccess("Inquiry status updated successfully.")
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to update inquiry."
      )
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this inquiry? This action cannot be undone."
    )

    if (!confirmed) {
      return
    }

    try {
      setDeleting(true)
      setError("")

      await deleteContact(id)

      navigate("/admin/contacts")
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to delete inquiry."
      )

      setDeleting(false)
    }
  }

  const formatDate = (date) => {
    if (!date) {
      return "—"
    }

    return new Date(date).toLocaleString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
  }

  if (loading) {
    return (
      <main className="admin-page admin-contact-details">
        <div className="admin-page__container">
          <div className="admin-state">
            <h1 className="admin-state__title">
              Loading inquiry...
            </h1>
          </div>
        </div>
      </main>
    )
  }

  if (error && !contact) {
    return (
      <main className="admin-page admin-contact-details">
        <div className="admin-page__container">
          <div className="admin-state admin-state--error">
            <h1 className="admin-state__title">
              Unable to load inquiry
            </h1>

            <p className="admin-state__description">
              {error}
            </p>

            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => navigate("/admin/contact")}
            >
              <LuArrowLeft
                size={15}
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <span>Back to Inquiries</span>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  if (!contact) {
    return null
  }

  return (
    <main className="admin-page admin-contact-details">
      <div className="admin-page__container">
        {/* ==========================================
            Header
        ========================================== */}

        <header className="admin-contact-details__header">
          <div className="admin-contact-details__heading">
            <button
              type="button"
              className="admin-contact-details__back"
              onClick={() => navigate("/admin/contacts")}
            >
              <LuArrowLeft
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <span>Contact Inquiries</span>
            </button>

            <div className="admin-contact-details__identity">
              <div className="admin-contact-details__avatar">
                {(contact.name || "A")
                  .charAt(0)
                  .toUpperCase()}
              </div>

              <div className="admin-contact-details__identity-content">
                <h1 className="admin-contact-details__title">
                  {contact.name}
                </h1>

                <a
                  href={`mailto:${contact.email}`}
                  className="admin-contact-details__email"
                >
                  <LuMail
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <span>{contact.email}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="admin-contact-details__header-meta">
            <span className="admin-contact-details__status">
              {contact.status || "New"}
            </span>

            <span className="admin-contact-details__submitted">
              <LuCalendarDays
                size={14}
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <span>
                {formatDate(contact.createdAt)}
              </span>
            </span>
          </div>
        </header>

        {/* ==========================================
            Feedback
        ========================================== */}

        {error && (
          <div className="admin-contact-details__feedback admin-contact-details__feedback--error">
            {error}
          </div>
        )}

        {success && (
          <div className="admin-contact-details__feedback admin-contact-details__feedback--success">
            {success}
          </div>
        )}

        {/* ==========================================
            Main Content
        ========================================== */}

        <div className="admin-contact-details__layout">
          {/* ==========================================
              Inquiry Information
          ========================================== */}

          <section className="admin-contact-details__section">
            <div className="admin-contact-details__section-header">
              <div>
                <h2>Inquiry Information</h2>
                <p>
                  Details provided through the contact form.
                </p>
              </div>
            </div>

            <div className="admin-contact-details__info-grid">
              <DetailItem
                icon={LuUser}
                label="Full Name"
                value={contact.name}
              />

              <DetailItem
                icon={LuMail}
                label="Email Address"
                value={contact.email}
                link={`mailto:${contact.email}`}
              />

              <DetailItem
                icon={LuPhone}
                label="Phone Number"
                value={contact.phone}
                link={`tel:${contact.phone}`}
              />

              <DetailItem
                icon={LuUser}
                label="Company"
                value={contact.company}
              />

              <DetailItem
                icon={LuMessageSquare}
                label="Project Type"
                value={contact.projectType}
              />

              <DetailItem
                icon={LuDollarSign}
                label="Budget"
                value={contact.budget}
              />

              <DetailItem
                icon={LuClock3}
                label="Timeline"
                value={contact.timeline}
              />

              <DetailItem
                icon={LuMessageSquare}
                label="Subject"
                value={contact.subject}
              />
            </div>
          </section>

          {/* ==========================================
              Project Message
          ========================================== */}

          <section className="admin-contact-details__section admin-contact-details__message-section">
            <div className="admin-contact-details__section-header">
              <div>
                <h2>Project Message</h2>
                <p>
                  The inquiry submitted by the client.
                </p>
              </div>

              <LuMessageSquare
                size={19}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            <div className="admin-contact-details__message">
              {contact.message || "No message provided."}
            </div>
          </section>

          {/* ==========================================
              Status
          ========================================== */}

          <section className="admin-contact-details__section">
            <div className="admin-contact-details__section-header">
              <div>
                <h2>Inquiry Status</h2>
                <p>
                  Update the current stage of this inquiry.
                </p>
              </div>
            </div>

            <div className="admin-contact-details__status-control">
              <FormField
                label="Status"
                htmlFor="contact-status"
              >
                <Select
                  id="contact-status"
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value)
                  }
                >
                  <option value="New">New</option>
                  <option value="Reviewing">Reviewing</option>
                  <option value="Contacted">Contacted</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Converted">Converted</option>
                  <option value="Closed">Closed</option>
                </Select>
              </FormField>

              <Button
                type="button"
                variant="primary"
                size="sm"
                onClick={handleStatusUpdate}
                disabled={saving}
              >
                <LuSend
                  size={15}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <span>
                  {saving
                    ? "Saving..."
                    : "Update Status"}
                </span>
              </Button>
            </div>
          </section>

          {/* ==========================================
              Danger Zone
          ========================================== */}

          <section className="admin-contact-details__danger">
            <div className="admin-contact-details__danger-content">
              <div className="admin-contact-details__danger-icon">
                <LuTrash2
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h2>Delete Inquiry</h2>
                <p>
                  Permanently remove this inquiry from the
                  system.
                </p>
              </div>
            </div>

            <Button
              type="button"
              variant="danger"
              size="sm"
              onClick={handleDelete}
              disabled={deleting}
            >
              <LuTrash2
                size={15}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span>
                {deleting
                  ? "Deleting..."
                  : "Delete Inquiry"}
              </span>
            </Button>
          </section>
        </div>
      </div>
    </main>
  )
}

const DetailItem = ({
  icon: Icon,
  label,
  value,
  link,
}) => {
  const displayValue = value || "—"

  return (
    <div className="admin-contact-details__detail">
      <div className="admin-contact-details__detail-label">
        <span className="admin-contact-details__detail-icon">
          {createElement(Icon, {
            size: 15,
            strokeWidth: 1.8,
            "aria-hidden": "true",
          })}
        </span>

        <span>{label}</span>
      </div>

      {link && value ? (
        <a
          href={link}
          className="admin-contact-details__detail-value admin-contact-details__detail-value--link"
        >
          {displayValue}
        </a>
      ) : (
        <span className="admin-contact-details__detail-value">
          {displayValue}
        </span>
      )}
    </div>
  )
}

export default AdminContactDetails