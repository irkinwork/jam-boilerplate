import React from "react"
import { Link } from "gatsby"


export default function Layout({ children }) {
  return (
    <div>
      <Link to={`/`}>
        <h3>
          Pandas Eating Lots
        </h3>
      </Link>
      <Link
        to={`/about/`}>
        About
      </Link>
      {children}
    </div>
  )
}