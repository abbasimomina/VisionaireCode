import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    // ==========================================
    // Basic Project Information
    // ==========================================

    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    shortDescription: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    projectType: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["Completed", "In Progress", "Planned"],
      default: "Completed",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    // ==========================================
    // Project Media
    // ==========================================

    thumbnail: {
      type: String,
      trim: true,
    },

    heroImage: {
      type: String,
      trim: true,
    },

    images: [
      {
        type: String,
        trim: true,
      },
    ],

    // ==========================================
    // Project Links
    // ==========================================

    liveUrl: {
      type: String,
      trim: true,
    },

    githubUrl: {
      type: String,
      trim: true,
    },

    // ==========================================
    // Technologies
    // ==========================================

    technologies: [
      {
        type: String,
        trim: true,
      },
    ],

    // ==========================================
    // Project Overview
    // ==========================================

    overview: {
      type: String,
      trim: true,
    },

    problem: {
      type: String,
      trim: true,
    },

    solution: {
      type: String,
      trim: true,
    },

    targetUsers: [
      {
        type: String,
        trim: true,
      },
    ],

    // ==========================================
    // Features
    // ==========================================

    features: [
      {
        title: {
          type: String,
          trim: true,
        },

        description: {
          type: String,
          trim: true,
        },
      },
    ],

    // ==========================================
    // User Roles
    // ==========================================

    roles: [
      {
        name: {
          type: String,
          trim: true,
        },

        description: {
          type: String,
          trim: true,
        },
      },
    ],

    // ==========================================
    // Architecture
    // ==========================================

    architecture: {
      frontend: {
        type: String,
        trim: true,
      },

      backend: {
        type: String,
        trim: true,
      },

      database: {
        type: String,
        trim: true,
      },

      api: {
        type: String,
        trim: true,
      },
    },

    // ==========================================
    // Security
    // ==========================================

    security: {
      type: String,
      trim: true,
    },

    // ==========================================
    // Performance
    // ==========================================

    performance: {
      type: String,
      trim: true,
    },

    // ==========================================
    // Testing & Quality Assurance
    // ==========================================

    testing: {
      type: String,
      trim: true,
    },

    // ==========================================
    // Deployment
    // ==========================================

    deployment: {
      type: String,
      trim: true,
    },

    // ==========================================
    // Challenges
    // ==========================================

    challenges: [
      {
        challenge: {
          type: String,
          trim: true,
        },

        solution: {
          type: String,
          trim: true,
        },
      },
    ],

    // ==========================================
    // Project Evaluation
    // ==========================================

    lessonsLearned: [
      {
        type: String,
        trim: true,
      },
    ],

    limitations: [
      {
        type: String,
        trim: true,
      },
    ],

    futureImprovements: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Project = mongoose.model("Project", projectSchema);

export default Project;