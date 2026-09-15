import { createElement } from "react"

export function Section({
  id,
  children,
  spacing = "standard",
  className = "",
  as: Component = "section",
}) {
  return createElement(
    Component,
    {
      id,
      className: `section section--${spacing} ${className}`.trim(),
    },
    children
  )
}