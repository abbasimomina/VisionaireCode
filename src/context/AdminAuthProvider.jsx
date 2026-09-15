import {
  useEffect,
  useState,
} from "react"

import {
  loginAdmin,
  getCurrentAdmin,
} from "../api/adminAuthService.js"

import { AdminAuthContext } from "./AdminAuthContext.js"

export function AdminAuthProvider({ children }) {
  const [admin, setAdmin] = useState(null)
  const [token, setToken] = useState(
    localStorage.getItem("adminToken")
  )
  const [loading, setLoading] = useState(true)

  // ==========================================
  // Restore Admin Session
  // ==========================================

  useEffect(() => {
    const restoreSession = async () => {
      if (!token) {
        setLoading(false)
        return
      }

      try {
        const currentAdmin = await getCurrentAdmin()

        setAdmin(currentAdmin)
      } catch {
        localStorage.removeItem("adminToken")
        setToken(null)
        setAdmin(null)
      } finally {
        setLoading(false)
      }
    }

    restoreSession()
  }, [token])

  // ==========================================
  // Admin Login
  // ==========================================

  const login = async (email, password) => {
    const data = await loginAdmin({
      email,
      password,
    })

    localStorage.setItem("adminToken", data.token)

    setToken(data.token)
    setAdmin(data.admin)

    return data
  }

  // ==========================================
  // Admin Logout
  // ==========================================

  const logout = () => {
    localStorage.removeItem("adminToken")

    setToken(null)
    setAdmin(null)
  }

  // ==========================================
  // Context Value
  // ==========================================

  const value = {
    admin,
    token,
    loading,
    isAuthenticated: Boolean(admin && token),
    login,
    logout,
  }

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  )
}