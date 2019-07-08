import React from "react"
import PropTypes from "prop-types"
import "../styles/app.scss"

export default function Layout({ children }) {
  return <div>{children}</div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
