const validateContact = (req, res, next) => {
  const {
    name,
    email,
    projectType,
    message,
  } = req.body;

  // ==========================================
  // Required Fields
  // ==========================================

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({
      success: false,
      message:
        "Name, email, project type, and message are required.",
    });
  }


  // ==========================================
  // Name Validation
  // ==========================================

  if (name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: "Name must contain at least 2 characters.",
    });
  }


  // ==========================================
  // Email Validation
  // ==========================================

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address.",
    });
  }


  // ==========================================
  // Project Type Validation
  // ==========================================

  if (projectType.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: "Project type cannot be empty.",
    });
  }


  // ==========================================
  // Message Validation
  // ==========================================

  if (message.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message:
        "Message must contain at least 10 characters.",
    });
  }


  // ==========================================
  // Continue
  // ==========================================

  next();
};


export { validateContact };
