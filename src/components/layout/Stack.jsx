export function Stack({
  children,
  gap = "standard",
  align = "stretch",
  justify = "start",
  className = "",
}) {
  return (
    <div
      className={[
        "stack",
        `stack--gap-${gap}`,
        `stack--align-${align}`,
        `stack--justify-${justify}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  )
}