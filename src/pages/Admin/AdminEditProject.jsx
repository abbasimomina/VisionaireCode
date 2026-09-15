import { useEffect, useState } from "react"
import {
  useNavigate,
  useParams,
} from "react-router-dom"

import {
  getProjectById,
  updateProject,
} from "../../api/projectService.js"

import AdminProjectForm from "../../components/common/AdminProjectForm.jsx"

import "./Admin.css"

const AdminEditProject = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true)
        setError("")

        const data = await getProjectById(id)

        setProject(data)
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Unable to load project."
        )
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [id])

  const handleSubmit = async (projectData) => {
    try {
      setSubmitting(true)
      setError("")

      await updateProject(id, projectData)

      navigate("/admin/projects", {
        replace: true,
      })
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to update project."
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AdminProjectForm
      key={project?._id ?? "edit-project"}
      mode="edit"
      initialData={project}
      loading={loading}
      submitting={submitting}
      error={error}
      onSubmit={handleSubmit}
    />
  )
}

export default AdminEditProject