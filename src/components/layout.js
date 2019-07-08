import React from "react"
import PropTypes from "prop-types"
import "../styles/app.scss"
import Alert from "./alert"

export default function Layout({ children }) {
  return (
    <div>
      <Alert />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
