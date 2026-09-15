import "dotenv/config"
import bcrypt from "bcryptjs"
import mongoose from "mongoose"

import Admin from "../models/Admin.js"


// ==========================================
// Create First Admin
// ==========================================

const createFirstAdmin = async () => {
  try {
    // ----------------------------------------
    // Validate Environment Variables
    // ----------------------------------------

    const adminName = process.env.ADMIN_NAME
    const adminEmail = process.env.ADMIN_EMAIL
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminName || !adminEmail || !adminPassword) {
      throw new Error(
        "ADMIN_NAME, ADMIN_EMAIL, and ADMIN_PASSWORD must be defined in the environment."
      )
    }


    // ----------------------------------------
    // Validate Password
    // ----------------------------------------

    if (adminPassword.length < 8) {
      throw new Error(
        "ADMIN_PASSWORD must be at least 8 characters long."
      )
    }


    // ----------------------------------------
    // Connect To MongoDB
    // ----------------------------------------

    await mongoose.connect(process.env.MONGODB_URI)

    console.log("MongoDB connected.")


    // ----------------------------------------
    // Check Existing Admin
    // ----------------------------------------

    const existingAdmin = await Admin.findOne({
      email: adminEmail,
    })

    if (existingAdmin) {
      console.log(
        "An admin with this email already exists."
      )

      return
    }


    // ----------------------------------------
    // Hash Password
    // ----------------------------------------

    const hashedPassword = await bcrypt.hash(
      adminPassword,
      12
    )


    // ----------------------------------------
    // Create Admin
    // ----------------------------------------

    const admin = await Admin.create({
      name: adminName,
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
      isActive: true,
    })


    // ----------------------------------------
    // Success
    // ----------------------------------------

    console.log("First admin created successfully.")

    console.log({
      id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
    })
  } catch (error) {
    console.error("First admin creation failed:")
    console.error(error)

    process.exitCode = 1
  } finally {
    // ----------------------------------------
    // Close MongoDB Connection
    // ----------------------------------------

    await mongoose.connection.close()
  }
}


createFirstAdmin()