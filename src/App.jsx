import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SiteLayout } from "./layouts/SiteLayout.jsx";

import AdminLogin from "./pages/Admin/AdminLogin.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AdminCreateProject from "./pages/Admin/AdminCreateProject.jsx"
import AdminEditProject from "./pages/Admin/AdminEditProject.jsx"
import AdminProjects from "./pages/Admin/AdminProjects.jsx"
import AdminContacts from "./pages/Admin/AdminContacts.jsx";
import AdminContactDetails from "./pages/Admin/AdminContactDetails.jsx";

import AdminLayout from "./pages/Admin/AdminLayout.jsx";
import AdminProtectedRoute from "./routes/AdminProtectedRoute.jsx";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Services from "./pages/Services/Services.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails.jsx";
import Contact from "./pages/Contact/Contact.jsx";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ==========================================
            Public Website Routes
        ========================================== */}

        <Route element={<SiteLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/projects/:slug"
            element={<ProjectDetails />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Route>


        {/* ==========================================
            Admin Authentication
        ========================================== */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />


        {/* ==========================================
            Protected Admin Routes
        ========================================== */}

        <Route element={<AdminProtectedRoute />}>

          <Route
            path="/admin"
            element={<AdminLayout />}
          >

            <Route
              path="dashboard"
              element={<AdminDashboard />}
            />

            <Route
              path="projects"
              element={<AdminProjects />}
            />

            <Route
              path="projects/new"
              element={<AdminCreateProject />}
            />

            <Route
              path="projects/edit/:id"
              element={<AdminEditProject />}
            />

            <Route
              path="contacts"
              element={<AdminContacts />}
            />

            <Route
              path="contacts/:id"
              element={<AdminContactDetails />}
            />

          </Route>

        </Route>

      </Routes>

    </BrowserRouter>
  );
}


export default App;