const validateProject = (req, res, next) => {
  const {
    title,
    // slug,
    description,
    category,
  } = req.body;

  const errors = [];

  if (!title || !title.trim()) {
    errors.push("Project title is required");
  }

  // if (!slug || !slug.trim()) {
  //   errors.push("Project slug is required");
  // }

  if (!description || !description.trim()) {
    errors.push("Project description is required");
  }

  if (!category || !category.trim()) {
    errors.push("Project category is required");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Project validation failed",
      errors,
    });
  }

  next();
};

export { validateProject };