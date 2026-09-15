export function FormField({
  label,
  htmlFor,
  children,
  description,
  error,
  required = false,
  className = "",
  ...props
}) {
  const classes = [
    "form-field",
    error && "form-field--error",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={classes} {...props}>
      {label && (
        <label
          className="form-field__label"
          htmlFor={htmlFor}
        >
          {label}

          {required && (
            <span
              className="form-field__required"
              aria-hidden="true"
            >
              *
            </span>
          )}
        </label>
      )}

      {description && !error && (
        <p className="form-field__description">
          {description}
        </p>
      )}

      {children}

      {error && (
        <ValidationMessage>
          {error}
        </ValidationMessage>
      )}
    </div>
  )
}

export function Input({
  id,
  type = "text",
  size = "default",
  error = false,
  className = "",
  ...props
}) {
  const classes = [
    "form-control",
    "form-control--input",
    `form-control--${size}`,
    error && "form-control--error",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <input
      id={id}
      type={type}
      className={classes}
      aria-invalid={error || undefined}
      {...props}
    />
  )
}

export function Textarea({
  id,
  size = "default",
  error = false,
  className = "",
  ...props
}) {
  const classes = [
    "form-control",
    "form-control--textarea",
    `form-control--${size}`,
    error && "form-control--error",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <textarea
      id={id}
      className={classes}
      aria-invalid={error || undefined}
      {...props}
    />
  )
}

export function Select({
  id,
  size = "default",
  error = false,
  className = "",
  children,
  ...props
}) {
  const classes = [
    "form-control",
    "form-control--select",
    `form-control--${size}`,
    error && "form-control--error",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <select
      id={id}
      className={classes}
      aria-invalid={error || undefined}
      {...props}
    >
      {children}
    </select>
  )
}

export function Checkbox({
  id,
  label,
  description,
  className = "",
  ...props
}) {
  return (
    <label
      className={`form-check ${className}`.trim()}
      htmlFor={id}
    >
      <input
        id={id}
        type="checkbox"
        className="form-check__control"
        {...props}
      />

      <span
        className="form-check__indicator"
        aria-hidden="true"
      />

      <span className="form-check__content">
        <span className="form-check__label">
          {label}
        </span>

        {description && (
          <span className="form-check__description">
            {description}
          </span>
        )}
      </span>
    </label>
  )
}

export function Radio({
  id,
  name,
  label,
  description,
  className = "",
  ...props
}) {
  return (
    <label
      className={`form-check ${className}`.trim()}
      htmlFor={id}
    >
      <input
        id={id}
        name={name}
        type="radio"
        className="form-check__control"
        {...props}
      />

      <span
        className="form-check__indicator"
        aria-hidden="true"
      />

      <span className="form-check__content">
        <span className="form-check__label">
          {label}
        </span>

        {description && (
          <span className="form-check__description">
            {description}
          </span>
        )}
      </span>
    </label>
  )
}

export function ValidationMessage({
  children,
  type = "error",
  className = "",
  ...props
}) {
  const classes = [
    "validation-message",
    `validation-message--${type}`,
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <p
      className={classes}
      role={type === "error" ? "alert" : undefined}
      {...props}
    >
      {children}
    </p>
  )
}