export function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "right",
  ariaLabel,
  className = "",
  as: Component = "button",
  ...props
}) {
  const isIconOnly = variant === "icon" && !children

  const classes = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    loading && "button--loading",
    isIconOnly && "button--icon-only",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const content = loading ? (
    <span
      className="button__loader"
      aria-hidden="true"
    />
  ) : (
    <>
      {icon && iconPosition === "left" && (
        <span
          className="button__icon"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}

      {children && (
        <span className="button__label">
          {children}
        </span>
      )}

      {icon && (iconPosition === "right" || isIconOnly) && (
        <span
          className="button__icon"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
    </>
  )

  if (Component === "button") {
    return (
      <button
        type={type}
        className={classes}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        aria-busy={loading || undefined}
        {...props}
      >
        {content}
      </button>
    )
  }

  return (
    <Component
      className={classes}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
      aria-disabled={disabled || undefined}
      {...props}
    >
      {content}
    </Component>
  )
}