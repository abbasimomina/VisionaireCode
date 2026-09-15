import Project from "../models/Project.js";
import Contact from "../models/Contact.js";


// Get Admin Dashboard Overview

const getAdminDashboardData = async () => {
  const [
    totalProjects,
    featuredProjects,
    inProgressProjects,
    totalContacts,
    recentProjects,
    recentContacts,
  ] = await Promise.all([
    Project.countDocuments(),

    Project.countDocuments({
      featured: true,
    }),

    Project.countDocuments({
      status: "In Progress",
    }),

    Contact.countDocuments(),

    Project.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select(
        "title category status featured createdAt"
      ),

    Contact.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select(
        "name email projectType status createdAt"
      ),
  ]);

  return {
    statistics: {
      totalProjects,
      featuredProjects,
      inProgressProjects,
      totalContacts,
    },

    recentProjects,

    recentContacts,
  };
};


export {
  getAdminDashboardData,
};