export function Container({
  children,
  size = "page",
  className = "",
}) {
  return (
    <div className={`container container--${size} ${className}`.trim()}>
      {children}
    </div>
  )
}