import React from "react"
import PropTypes from "prop-types"
import "../styles/app.scss"
import Alert from "./alert"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div>
      <Alert />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
