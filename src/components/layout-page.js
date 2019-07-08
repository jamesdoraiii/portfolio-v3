import React from "react"
import PropTypes from "prop-types"
import "../styles/app.scss"
import Alert from "./alert"
import Header from "./header"
import Footer from "./footer"

export default function LayoutPage({ children }) {
  return (
    <div>
      <Alert />
      <Header />
      <main className="page">{children}</main>
      <Footer />
    </div>
  )
}

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
}
