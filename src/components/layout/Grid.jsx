export function Grid({
  children,
  columns = "auto",
  gap = "standard",
  className = "",
}) {
  return (
    <div
      className={`grid grid--columns-${columns} grid--gap-${gap} ${className}`.trim()}
    >
      {children}
    </div>
  )
}