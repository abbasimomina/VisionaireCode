import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    // ==========================================
    // Admin Information
    // ==========================================

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
    },

    // ==========================================
    // Admin Role
    // ==========================================

    role: {
      type: String,
      enum: ["admin"],
      default: "admin",
    },

    // ==========================================
    // Account Status
    // ==========================================

    isActive: {
      type: Boolean,
      default: true,
    },

    // ==========================================
    // Last Login
    // ==========================================

    lastLogin: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
