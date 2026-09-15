import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { createProject } from "../../api/projectService.js"

import AdminProjectForm from "../../components/common/AdminProjectForm.jsx"

import "./Admin.css"

const AdminCreateProject = () => {
  const navigate = useNavigate()

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (projectData) => {
    try {
      setSubmitting(true)
      setError("")

      await createProject(projectData)

      navigate("/admin/projects", {
        replace: true,
      })
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to create project."
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AdminProjectForm
      mode="create"
      submitting={submitting}
      error={error}
      onSubmit={handleSubmit}
    />
  )
}

export default AdminCreateProject