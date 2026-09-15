import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  LuMail,
  LuRefreshCw,
  LuEye,
} from "react-icons/lu"

import { getAllContacts } from "../../api/contactService.js"

import { Button } from "../../components/ui/Button.jsx"

import "./Admin.css"

const AdminContacts = () => {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchContacts = async () => {
    try {
      setLoading(true)
      setError("")

      const data = await getAllContacts()

      setContacts(data)
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to load contact inquiries."
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  const formatDate = (date) => {
    if (!date) {
      return "—"
    }

    return new Date(date).toLocaleDateString(
      undefined,
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    )
  }

  return (
    <main className="admin-page admin-contacts">
      <div className="admin-page__container">
        <header className="admin-contacts__header">
          <div className="admin-contacts__heading">
            <div className="admin-contacts__title-row">
              <h1 className="admin-contacts__title">
                Contact Inquiries
              </h1>

              {!loading && !error && (
                <span className="admin-contacts__count">
                  {contacts.length}
                </span>
              )}
            </div>

            <p className="admin-contacts__subtitle">
              Review incoming project inquiries.
            </p>
          </div>

          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={fetchContacts}
            disabled={loading}
          >
            <LuRefreshCw
              size={15}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <span>
              {loading ? "Refreshing" : "Refresh"}
            </span>
          </Button>
        </header>

        {loading && (
          <div className="admin-state">
            <div className="admin-state__icon">
              <LuMail
                size={20}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            <h2 className="admin-state__title">
              Loading inquiries...
            </h2>
          </div>
        )}

        {!loading && error && (
          <div className="admin-contacts__error">
            <div className="admin-contacts__error-icon">
              <LuMail
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            <span>{error}</span>
          </div>
        )}

        {!loading &&
          !error &&
          contacts.length === 0 && (
            <div className="admin-contacts__empty">
              <div className="admin-contacts__empty-icon">
                <LuMail
                  size={21}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h2>No inquiries yet</h2>

                <p>
                  New contact submissions will appear here.
                </p>
              </div>
            </div>
          )}

        {!loading &&
          !error &&
          contacts.length > 0 && (
            <section
              className="admin-contacts__table-section"
              aria-label="Contact inquiries"
            >
              <div className="admin-contacts__table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Project</th>
                      <th>Budget</th>
                      <th>Timeline</th>
                      <th>Status</th>
                      <th>Submitted</th>
                      <th>
                        <span className="admin-table__action-heading">
                          Action
                        </span>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact._id}>
                        <td>
                          <div className="admin-table__person">
                            <span className="admin-table__avatar">
                              {(contact.name || "A")
                                .charAt(0)
                                .toUpperCase()}
                            </span>

                            <span className="admin-table__name">
                              {contact.name}
                            </span>
                          </div>
                        </td>

                        <td>
                          <span className="admin-table__email">
                            {contact.email}
                          </span>
                        </td>

                        <td>
                            {contact.company}
                        </td>

                        <td>
                          <span className="admin-table__project">
                            {contact.projectType || "—"}
                          </span>
                        </td>

                        <td>
                          {contact.budget || "—"}
                        </td>

                        <td>
                          {contact.timeline || "—"}
                        </td>

                        <td>
                          {contact.status || "—"}
                        </td>

                        <td>
                          <span className="admin-table__date">
                            {formatDate(contact.createdAt)}
                          </span>
                        </td>

                        <td>
                          <Button
                            as={Link}
                            to={`/admin/contacts/${contact._id}`}
                            variant="secondary"
                            size="sm"
                            aria-label={`View inquiry from ${contact.name}`}
                          >
                            <LuEye
                              size={15}
                              strokeWidth={1.8}
                              aria-hidden="true"
                            />

                            <span>View</span>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
      </div>
    </main>
  )
}

export default AdminContacts
