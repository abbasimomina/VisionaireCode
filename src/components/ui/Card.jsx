export function Card({
  children,
  variant = "default",
  padding = "default",
  interactive = false,
  visual = null,
  className = "",
  ...props
}) {
  const classes = [
    "card",
    `card--${variant}`,
    `card--padding-${padding}`,
    visual && "card--has-visual",
    interactive && "card--interactive",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <article className={classes} {...props}>
      {visual}
      {children}
    </article>
  )
}

export function CardHeader({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={`card__header ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={`card__content ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardFooter({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={`card__footer ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardMedia({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={`card__media ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardVisual({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  return (
    <div
      className={`card__visual card__visual--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}