import React from "react"
import PropTypes from "prop-types"
import "../styles/app.scss"
import Alert from "./alert"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div>
      <Alert />
      <Header />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
