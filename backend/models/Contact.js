import mongoose from "mongoose"

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 150,
    },

    phone: {
      type: String,
      trim: true,
      maxlength: 30,
    },

    company: {
      type: String,
      trim: true,
      maxlength: 150,
    },

    projectType: {
      type: String,
      required: true,
      trim: true,
    },

    budget: {
      type: String,
      trim: true,
    },

    timeline: {
      type: String,
      enum: [
        "asap",
        "1-4-weeks",
        "1-2-months",
        "2-3-months",
        "flexible",
      ],
      trim: true,
    },

    subject: {
      type: String,
      trim: true,
      maxlength: 200,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 5000,
    },

    status: {
      type: String,
      enum: [
        "New",
        "Reviewed",
        "Contacted",
        "In Progress",
        "Converted",
        "Closed",
      ],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
)

const Contact = mongoose.model("Contact", contactSchema)

export default Contact