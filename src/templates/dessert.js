import React from "react"

export default function Dessert({ pageContext }) {
  return (
    <div>
	  {pageContext.frontmatter.message}
    </div>
  )
}