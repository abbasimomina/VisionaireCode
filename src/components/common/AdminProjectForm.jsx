import { useState } from "react";
import { LuArrowLeft, LuImage, LuPlus, LuSave, LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";

import { Button } from "../../components/ui/Button.jsx";
import {
  Checkbox,
  FormField,
  Input,
  Select,
  Textarea,
} from "../../components/ui/Form.jsx";

const createEmptyFeature = () => ({
  title: "",
  description: "",
});

const createEmptyRole = () => ({
  name: "",
  description: "",
});

const createEmptyChallenge = () => ({
  challenge: "",
  solution: "",
});

const createInitialFormData = () => ({
  title: "",
  shortDescription: "",
  description: "",
  category: "",
  projectType: "",
  status: "Completed",
  featured: false,
  thumbnail: "",
  heroImage: "",
  images: [],
  liveUrl: "",
  githubUrl: "",
  technologies: [],
  overview: "",
  problem: "",
  solution: "",
  targetUsers: [],
  features: [createEmptyFeature()],
  roles: [],
  architecture: {
    frontend: "",
    backend: "",
    database: "",
    api: "",
  },
  security: "",
  performance: "",
  testing: "",
  deployment: "",
  challenges: [],
  lessonsLearned: [],
  limitations: [],
  futureImprovements: [],
});

const normalizeProject = (project) => ({
  title: project?.title || "",
  shortDescription: project?.shortDescription || "",
  description: project?.description || "",
  category: project?.category || "",
  projectType: project?.projectType || "",
  status: project?.status || "Completed",
  featured: Boolean(project?.featured),
  thumbnail: project?.thumbnail || "",
  heroImage: project?.heroImage || "",
  images: Array.isArray(project?.images) ? project.images : [],
  liveUrl: project?.liveUrl || "",
  githubUrl: project?.githubUrl || "",
  technologies: Array.isArray(project?.technologies)
    ? project.technologies
    : [],
  overview: project?.overview || "",
  problem: project?.problem || "",
  solution: project?.solution || "",
  targetUsers: Array.isArray(project?.targetUsers) ? project.targetUsers : [],
  features:
    Array.isArray(project?.features) && project.features.length
      ? project.features.map((feature) => ({
          title: feature?.title || "",
          description: feature?.description || "",
        }))
      : [createEmptyFeature()],
  roles: Array.isArray(project?.roles)
    ? project.roles.map((role) => ({
        name: role?.name || "",
        description: role?.description || "",
      }))
    : [],
  architecture: {
    frontend: project?.architecture?.frontend || "",
    backend: project?.architecture?.backend || "",
    database: project?.architecture?.database || "",
    api: project?.architecture?.api || "",
  },
  security: project?.security || "",
  performance: project?.performance || "",
  testing: project?.testing || "",
  deployment: project?.deployment || "",
  challenges: Array.isArray(project?.challenges)
    ? project.challenges.map((item) => ({
        challenge: item?.challenge || "",
        solution: item?.solution || "",
      }))
    : [],
  lessonsLearned: Array.isArray(project?.lessonsLearned)
    ? project.lessonsLearned
    : [],
  limitations: Array.isArray(project?.limitations) ? project.limitations : [],
  futureImprovements: Array.isArray(project?.futureImprovements)
    ? project.futureImprovements
    : [],
});

const AdminProjectForm = ({
  mode = "create",
  initialData = null,
  loading = false,
  submitting = false,
  error = "",
  onSubmit,
}) => {
  const [formData, setFormData] = useState(() =>
    initialData ? normalizeProject(initialData) : createInitialFormData(),
  );

  const [fieldErrors, setFieldErrors] = useState({});

  const isEditMode = mode === "edit";

  const updateField = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setFieldErrors((current) => ({
      ...current,
      [field]: "",
    }));
  };

  const updateArchitecture = (field, value) => {
    setFormData((current) => ({
      ...current,
      architecture: {
        ...current.architecture,
        [field]: value,
      },
    }));
  };

  const updateArrayItem = (field, index, value) => {
    setFormData((current) => ({
      ...current,
      [field]: current[field].map((item, itemIndex) =>
        itemIndex === index ? value : item,
      ),
    }));
  };

  const addStringItem = (field) => {
    setFormData((current) => ({
      ...current,
      [field]: [...current[field], ""],
    }));
  };

  const removeStringItem = (field, index) => {
    setFormData((current) => ({
      ...current,
      [field]: current[field].filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const updateObjectItem = (field, index, property, value) => {
    setFormData((current) => ({
      ...current,
      [field]: current[field].map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              [property]: value,
            }
          : item,
      ),
    }));
  };

  const addObjectItem = (field, factory) => {
    setFormData((current) => ({
      ...current,
      [field]: [...current[field], factory()],
    }));
  };

  const removeObjectItem = (field, index) => {
    setFormData((current) => ({
      ...current,
      [field]: current[field].filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.title.trim()) {
      errors.title = "Project title is required.";
    }
    if (!formData.description.trim()) {
      errors.description = "Project description is required.";
    }
    if (!formData.category.trim()) {
      errors.category = "Project category is required.";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    const cleanData = {
      ...formData,
      images: formData.images.filter((item) => item.trim()),
      technologies: formData.technologies.filter((item) => item.trim()),
      targetUsers: formData.targetUsers.filter((item) => item.trim()),
      lessonsLearned: formData.lessonsLearned.filter((item) => item.trim()),
      limitations: formData.limitations.filter((item) => item.trim()),
      futureImprovements: formData.futureImprovements.filter((item) =>
        item.trim(),
      ),
      features: formData.features.filter(
        (item) => item.title.trim() || item.description.trim(),
      ),
      roles: formData.roles.filter(
        (item) => item.name.trim() || item.description.trim(),
      ),
      challenges: formData.challenges.filter(
        (item) => item.challenge.trim() || item.solution.trim(),
      ),
    };
    await onSubmit(cleanData);
  };

  if (loading) {
    return (
      <main className="admin-page admin-project-form-page">
        <div className="admin-page__container">
          <div className="admin-state">
            <h1 className="admin-state__title">Loading project...</h1>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-page admin-project-form-page">
      <div className="admin-page__container">
        <header className="admin-project-form__header">
          <div className="admin-project-form__heading">
            <Link to="/admin/projects" className="admin-project-form__back">
              <LuArrowLeft size={16} strokeWidth={1.8} aria-hidden="true" />
              <span>Projects</span>
            </Link>

            <h1 className="admin-project-form__title">
              {isEditMode ? "Edit Project" : "Add Project"}
            </h1>

            <p className="admin-project-form__subtitle">
              {isEditMode
                ? "Update the project information and portfolio content."
                : "Add a project to your Visionaire Code portfolio."}
            </p>
          </div>
        </header>

        {error && <div className="admin-project-form__error">{error}</div>}

        <form className="admin-project-form" onSubmit={handleSubmit}>
          <section className="admin-form-section">
            <div className="admin-form-section__header">
              <h2>Basic Information</h2>
              <p>Define the main identity and classification of the project.</p>
            </div>

            <div className="admin-form-section__body">
              <div className="admin-form-grid admin-form-grid--two">
                <FormField
                  label="Title"
                  htmlFor="project-title"
                  required
                  error={fieldErrors.title}
                >
                  <Input
                    id="project-title"
                    value={formData.title}
                    onChange={(event) =>
                      updateField("title", event.target.value)
                    }
                    placeholder="e.g. Visionaire EduCore"
                    error={Boolean(fieldErrors.title)}
                  />
                </FormField>

                <FormField
                  label="Category"
                  htmlFor="project-category"
                  required
                  error={fieldErrors.category}
                >
                  <Input
                    id="project-category"
                    value={formData.category}
                    onChange={(event) =>
                      updateField("category", event.target.value)
                    }
                    placeholder="e.g. Educational Platform"
                    error={Boolean(fieldErrors.category)}
                  />
                </FormField>
              </div>

              <FormField
                label="Short Description"
                htmlFor="project-short-description"
              >
                <Textarea
                  id="project-short-description"
                  rows={3}
                  value={formData.shortDescription}
                  onChange={(event) =>
                    updateField("shortDescription", event.target.value)
                  }
                  placeholder="A concise description used in project cards and previews."
                />
              </FormField>

              <FormField
                label="Description"
                htmlFor="project-description"
                required
                error={fieldErrors.description}
              >
                <Textarea
                  id="project-description"
                  rows={6}
                  value={formData.description}
                  onChange={(event) =>
                    updateField("description", event.target.value)
                  }
                  placeholder="Describe the project in detail."
                  error={Boolean(fieldErrors.description)}
                />
              </FormField>

              <div className="admin-form-grid admin-form-grid--two">
                <FormField label="Project Type" htmlFor="project-type">
                  <Input
                    id="project-type"
                    value={formData.projectType}
                    onChange={(event) =>
                      updateField("projectType", event.target.value)
                    }
                    placeholder="e.g. Full-Stack Web Application"
                  />
                </FormField>

                <FormField label="Status" htmlFor="project-status">
                  <Select
                    id="project-status"
                    value={formData.status}
                    onChange={(event) =>
                      updateField("status", event.target.value)
                    }
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Planned">Planned</option>
                  </Select>
                </FormField>
              </div>

              <Checkbox
                id="project-featured"
                label="Featured project"
                description="Show this project in featured project sections."
                checked={formData.featured}
                onChange={(event) =>
                  updateField("featured", event.target.checked)
                }
              />
            </div>
          </section>

          <section className="admin-form-section">
            <div className="admin-form-section__header">
              <h2>Project Media</h2>
              <p>Add the images used across project previews and details.</p>
            </div>

            <div className="admin-form-section__body">
              <FormField label="Thumbnail URL" htmlFor="project-thumbnail">
                <Input
                  id="project-thumbnail"
                  type="url"
                  value={formData.thumbnail}
                  onChange={(event) =>
                    updateField("thumbnail", event.target.value)
                  }
                  placeholder="https://..."
                />
              </FormField>

              <FormField label="Hero Image URL" htmlFor="project-hero-image">
                <Input
                  id="project-hero-image"
                  type="url"
                  value={formData.heroImage}
                  onChange={(event) =>
                    updateField("heroImage", event.target.value)
                  }
                  placeholder="https://..."
                />
              </FormField>

              <StringListField
                label="Additional Images"
                description="Add image URLs for the project gallery."
                items={formData.images}
                field="images"
                placeholder="https://..."
                onAdd={() => addStringItem("images")}
                onChange={(index, value) =>
                  updateArrayItem("images", index, value)
                }
                onRemove={(index) => removeStringItem("images", index)}
              />
            </div>
          </section>

          <section className="admin-form-section">
            <div className="admin-form-section__header">
              <h2>Project Links</h2>
              <p>Connect the project to its public and source destinations.</p>
            </div>

            <div className="admin-form-section__body">
              <div className="admin-form-grid admin-form-grid--two">
                <FormField label="Live URL" htmlFor="project-live-url">
                  <Input
                    id="project-live-url"
                    type="url"
                    value={formData.liveUrl}
                    onChange={(event) =>
                      updateField("liveUrl", event.target.value)
                    }
                    placeholder="https://..."
                  />
                </FormField>

                <FormField label="GitHub URL" htmlFor="project-github-url">
                  <Input
                    id="project-github-url"
                    type="url"
                    value={formData.githubUrl}
                    onChange={(event) =>
                      updateField("githubUrl", event.target.value)
                    }
                    placeholder="https://github.com/..."
                  />
                </FormField>
              </div>
            </div>
          </section>

          <section className="admin-form-section">
            <div className="admin-form-section__header">
              <h2>Technologies</h2>
              <p>List the technologies and tools used in the project.</p>
            </div>

            <div className="admin-form-section__body">
              <StringListField
                label="Technology"
                items={formData.technologies}
                field="technologies"
                placeholder="e.g. React"
                onAdd={() => addStringItem("technologies")}
                onChange={(index, value) =>
                  updateArrayItem("technologies", index, value)
                }
                onRemove={(index) => removeStringItem("technologies", index)}
              />
            </div>
          </section>

          <section className="admin-form-section">
            <div className="admin-form-section__header">
              <h2>Project Overview</h2>
              <p>
                Explain the project context, problem, solution, and intended
                users.
              </p>
            </div>

            <div className="admin-form-section__body">
              <FormField label="Overview" htmlFor="project-overview">
                <Textarea
                  id="project-overview"
                  rows={6}
                  value={formData.overview}
                  onChange={(event) =>
                    updateField("overview", event.target.value)
                  }
                  placeholder="Explain what the project is and what it aims to accomplish."
                />
              </FormField>

              <FormField label="Problem" htmlFor="project-problem">
                <Textarea
                  id="project-problem"
                  rows={6}
                  value={formData.problem}
                  onChange={(event) =>
                    updateField("problem", event.target.value)
                  }
                  placeholder="What problem does the project address?"
                />
              </FormField>

              <FormField label="Solution" htmlFor="project-solution">
                <Textarea
                  id="project-solution"
                  rows={6}
                  value={formData.solution}
                  onChange={(event) =>
                    updateField("solution", event.target.value)
                  }
                  placeholder="How does the project solve the problem?"
                />
              </FormField>

              <StringListField
                label="Target Users"
                items={formData.targetUsers}
                field="targetUsers"
                placeholder="e.g. School administrators"
                onAdd={() => addStringItem("targetUsers")}
                onChange={(index, value) =>
                  updateArrayItem("targetUsers", index, value)
                }
                onRemove={(index) => removeStringItem("targetUsers", index)}
              />
            </div>
          </section>

          <section className="admin-form-section">
            <div className="admin-form-section__header">
              <h2>Features</h2>
              <p>
                Define the major features presented on the project details page.
              </p>
            </div>

            <div className="admin-form-section__body">
              <ObjectListField
                items={formData.features}
                emptyMessage="No features added."
                addLabel="Add Feature"
                onAdd={() => addObjectItem("features", createEmptyFeature)}
                onRemove={(index) => removeObjectItem("features", index)}
                renderItem={(item, index) => (
                  <div className="admin-repeatable__fields">
                    <FormField
                      label="Feature Title"
                      htmlFor={`feature-title-${index}`}
                    >
                      <Input
                        id={`feature-title-${index}`}
                        value={item.title}
                        onChange={(event) =>
                          updateObjectItem(
                            "features",
                            index,
                            "title",
                            event.target.value,
                          )
                        }
                        placeholder="e.g. Role-based Access"
                      />
                    </FormField>

                    <FormField
                      label="Description"
                      htmlFor={`feature-description-${index}`}
                    >
                      <Textarea
                        id={`feature-description-${index}`}
                        rows={4}
                        value={item.description}
                        onChange={(event) =>
                          updateObjectItem(
                            "features",
                            index,
                            "description",
                            event.target.value,
                          )
                        }
                        placeholder="Describe the feature."
                      />
                    </FormField>
                  </div>
                )}
              />
            </div>
          </section>

          <section className="admin-form-section">
            <div className="admin-form-section__header">
              <h2>User Roles</h2>
              <p>
                Describe the roles and access levels supported by the project.
              </p>
            </div>

            <div className="admin-form-section__body">
              <ObjectListField
                items={formData.roles}
                emptyMessage="No roles added."
                addLabel="Add Role"
                onAdd={() => addObjectItem("roles", createEmptyRole)}
                onRemove={(index) => removeObjectItem("roles", index)}
                renderItem={(item, index) => (
                  <div className="admin-repeatable__fields">
                    <FormField label="Role Name" htmlFor={`role-name-${index}`}>
                      <Input
                        id={`role-name-${index}`}
                        value={item.name}
                        onChange={(event) =>
                          updateObjectItem(
                            "roles",
                            index,
                            "name",
                            event.target.value,
                          )
                        }
                        placeholder="e.g. Administrator"
                      />
                    </FormField>

                    <FormField
                      label="Description"
                      htmlFor={`role-description-${index}`}
                    >
                      <Textarea
                        id={`role-description-${index}`}
                        rows={4}
                        value={item.description}
                        onChange={(event) =>
                          updateObjectItem(
                            "roles",
                            index,
                            "description",
                            event.target.value,
                          )
                        }
                        placeholder="Describe this role and its responsibilities."
                      />
                    </FormField>
                  </div>
                )}
              />
            </div>
          </section>

          <section className="admin-form-section">
            <div className="admin-form-section__header">
              <h2>Architecture</h2>
              <p>Document the main technical layers of the project.</p>
            </div>

            <div className="admin-form-section__body">
              <div className="admin-form-grid admin-form-grid--two">
                <FormField label="Frontend" htmlFor="architecture-frontend">
                  <Input
                    id="architecture-frontend"
                    value={formData.architecture.frontend}
                    onChange={(event) =>
                      updateArchitecture("frontend", event.target.value)
                    }
                    placeholder="e.g. React + Vite"
                  />
                </FormField>

                <FormField label="Backend" htmlFor="architecture-backend">
                  <Input
                    id="architecture-backend"
                    value={formData.architecture.backend}
                    onChange={(event) =>
                      updateArchitecture("backend", event.target.value)
                    }
                    placeholder="e.g. Node.js + Express"
                  />
                </FormField>

                <FormField label="Database" htmlFor="architecture-database">
                  <Input
                    id="architecture-database"
                    value={formData.architecture.database}
                    onChange={(event) =>
                      updateArchitecture("database", event.target.value)
                    }
                    placeholder="e.g. MongoDB"
                  />
                </FormField>

                <FormField label="API" htmlFor="architecture-api">
                  <Input
                    id="architecture-api"
                    value={formData.architecture.api}
                    onChange={(event) =>
                      updateArchitecture("api", event.target.value)
                    }
                    placeholder="e.g. REST API"
                  />
                </FormField>
              </div>
            </div>
          </section>

          <section className="admin-form-section">
            <div className="admin-form-section__header">
              <h2>Technical Details</h2>
              <p>Document security, performance, testing, and deployment.</p>
            </div>

            <div className="admin-form-section__body">
              <FormField label="Security" htmlFor="project-security">
                <Textarea
                  id="project-security"
                  rows={5}
                  value={formData.security}
                  onChange={(event) =>
                    updateField("security", event.target.value)
                  }
                  placeholder="Describe security practices and protections."
                />
              </FormField>

              <FormField label="Performance" htmlFor="project-performance">
                <Textarea
                  id="project-performance"
                  rows={5}
                  value={formData.performance}
                  onChange={(event) =>
                    updateField("performance", event.target.value)
                  }
                  placeholder="Describe performance considerations and optimizations."
                />
              </FormField>

              <FormField label="Testing" htmlFor="project-testing">
                <Textarea
                  id="project-testing"
                  rows={5}
                  value={formData.testing}
                  onChange={(event) =>
                    updateField("testing", event.target.value)
                  }
                  placeholder="Describe testing and quality assurance."
                />
              </FormField>

              <FormField label="Deployment" htmlFor="project-deployment">
                <Textarea
                  id="project-deployment"
                  rows={5}
                  value={formData.deployment}
                  onChange={(event) =>
                    updateField("deployment", event.target.value)
                  }
                  placeholder="Describe how the project is deployed."
                />
              </FormField>
            </div>
          </section>

          <section className="admin-form-section">
            <div className="admin-form-section__header">
              <h2>Challenges</h2>
              <p>
                Document important development challenges and how they were
                addressed.
              </p>
            </div>

            <div className="admin-form-section__body">
              <ObjectListField
                items={formData.challenges}
                emptyMessage="No challenges added."
                addLabel="Add Challenge"
                onAdd={() => addObjectItem("challenges", createEmptyChallenge)}
                onRemove={(index) => removeObjectItem("challenges", index)}
                renderItem={(item, index) => (
                  <div className="admin-repeatable__fields">
                    <FormField label="Challenge" htmlFor={`challenge-${index}`}>
                      <Textarea
                        id={`challenge-${index}`}
                        rows={4}
                        value={item.challenge}
                        onChange={(event) =>
                          updateObjectItem(
                            "challenges",
                            index,
                            "challenge",
                            event.target.value,
                          )
                        }
                        placeholder="What challenge did you face?"
                      />
                    </FormField>

                    <FormField
                      label="Solution"
                      htmlFor={`challenge-solution-${index}`}
                    >
                      <Textarea
                        id={`challenge-solution-${index}`}
                        rows={4}
                        value={item.solution}
                        onChange={(event) =>
                          updateObjectItem(
                            "challenges",
                            index,
                            "solution",
                            event.target.value,
                          )
                        }
                        placeholder="How was the challenge addressed?"
                      />
                    </FormField>
                  </div>
                )}
              />
            </div>
          </section>

          <section className="admin-form-section">
            <div className="admin-form-section__header">
              <h2>Project Evaluation</h2>
              <p>
                Capture lessons, limitations, and possible future improvements.
              </p>
            </div>

            <div className="admin-form-section__body">
              <StringListField
                label="Lessons Learned"
                items={formData.lessonsLearned}
                field="lessonsLearned"
                placeholder="What did you learn from this project?"
                onAdd={() => addStringItem("lessonsLearned")}
                onChange={(index, value) =>
                  updateArrayItem("lessonsLearned", index, value)
                }
                onRemove={(index) => removeStringItem("lessonsLearned", index)}
              />

              <StringListField
                label="Limitations"
                items={formData.limitations}
                field="limitations"
                placeholder="What are the current limitations?"
                onAdd={() => addStringItem("limitations")}
                onChange={(index, value) =>
                  updateArrayItem("limitations", index, value)
                }
                onRemove={(index) => removeStringItem("limitations", index)}
              />

              <StringListField
                label="Future Improvements"
                items={formData.futureImprovements}
                field="futureImprovements"
                placeholder="What could be improved in the future?"
                onAdd={() => addStringItem("futureImprovements")}
                onChange={(index, value) =>
                  updateArrayItem("futureImprovements", index, value)
                }
                onRemove={(index) =>
                  removeStringItem("futureImprovements", index)
                }
              />
            </div>
          </section>

          <div className="admin-project-form__actions">
            <Button
              as={Link}
              to="/admin/projects"
              variant="secondary"
              size="sm"
              type="button"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="primary"
              size="sm"
              disabled={submitting}
            >
              <LuSave size={16} strokeWidth={1.8} aria-hidden="true" />

              <span>
                {submitting
                  ? isEditMode
                    ? "Saving..."
                    : "Creating..."
                  : isEditMode
                    ? "Save Changes"
                    : "Create Project"}
              </span>
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

const StringListField = ({
  label,
  description,
  items,
  placeholder,
  onAdd,
  onChange,
  onRemove,
}) => {
  return (
    <div className="admin-repeatable">
      <div className="admin-repeatable__header">
        <div>
          <h3>{label}</h3>

          {description && <p>{description}</p>}
        </div>

        <Button type="button" variant="secondary" size="sm" onClick={onAdd}>
          <LuPlus size={15} strokeWidth={1.8} aria-hidden="true" />
          <span>Add</span>
        </Button>
      </div>

      {items.length === 0 ? (
        <div className="admin-repeatable__empty">No items added.</div>
      ) : (
        <div className="admin-repeatable__list">
          {items.map((item, index) => (
            <div className="admin-repeatable__row" key={`${label}-${index}`}>
              <Input
                value={item}
                onChange={(event) => onChange(index, event.target.value)}
                placeholder={placeholder}
              />

              <button
                type="button"
                className="admin-repeatable__remove"
                onClick={() => onRemove(index)}
                aria-label={`Remove ${label} item`}
              >
                <LuTrash2 size={16} strokeWidth={1.8} aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ObjectListField = ({
  items,
  emptyMessage,
  addLabel,
  onAdd,
  onRemove,
  renderItem,
}) => {
  return (
    <div className="admin-repeatable">
      <div className="admin-repeatable__list">
        {items.length === 0 ? (
          <div className="admin-repeatable__empty">{emptyMessage}</div>
        ) : (
          items.map((item, index) => (
            <div className="admin-repeatable__item" key={`repeatable-${index}`}>
              <div className="admin-repeatable__item-header">
                <span>Entry</span>

                <button
                  type="button"
                  className="admin-repeatable__remove"
                  onClick={() => onRemove(index)}
                  aria-label="Remove entry"
                >
                  <LuTrash2 size={16} strokeWidth={1.8} aria-hidden="true" />
                </button>
              </div>

              {renderItem(item, index)}
            </div>
          ))
        )}
      </div>

      <Button type="button" variant="secondary" size="sm" onClick={onAdd}>
        <LuPlus size={15} strokeWidth={1.8} aria-hidden="true" />
        <span>{addLabel}</span>
      </Button>
    </div>
  );
};

export default AdminProjectForm;