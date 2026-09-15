const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
};

const errorHandler = (error, res) => {
  console.error(error);

  // Duplicate key error
  if (error.code === 11000) {
    const duplicateField = Object.keys(error.keyPattern || {})[0];

    return res.status(409).json({
      success: false,
      message: `${duplicateField || "Resource"} already exists`,
    });
  }

  // Mongoose validation error
  if (error.name === "ValidationError") {
    const errors = Object.values(error.errors).map(
      (item) => item.message
    );

    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  // Invalid MongoDB ObjectId
  if (error.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid resource ID",
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};

export {
  notFound,
  errorHandler,
};