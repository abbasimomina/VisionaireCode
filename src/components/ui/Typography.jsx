import { createElement } from "react"

const typographyVariants = {
  displaySm: "display display--sm",
  displayMd: "display display--md",
  displayLg: "display display--lg",

  headingSm: "heading heading--sm",
  headingMd: "heading heading--md",
  headingLg: "heading heading--lg",
  headingXl: "heading heading--xl",

  body: "text text--body",
  bodyLarge: "text text--body-lg",
  secondary: "text text--body text--secondary",
  muted: "text text--body text--muted",

  label: "label",
  caption: "caption",
  eyebrow: "eyebrow",
}

export function Typography({
  as: Component = "p",
  variant = "body",
  children,
  className = "",
  ...props
}) {
  const variantClass =
    typographyVariants[variant] ?? typographyVariants.body

  return createElement(
    Component,
    {
      className: `${variantClass} ${className}`.trim(),
      ...props,
    },
    children
  )
}