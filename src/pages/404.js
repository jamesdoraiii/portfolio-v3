import React from "react"
import Layout from "../components/layout-page"
import SEO from "../components/seo"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Page Not Found!" />
      <div className="container">
        <div className="page__content">
          <h2>404: Page Not Found!</h2>
          <img
            className="404__image"
            src="https://media.giphy.com/media/3owzWbjLtq0BgNJALC/giphy.gif"
            alt="Page Not Found!"
          />
          <p>The page you are looking for has been moved or no longer exist.</p>
        </div>
      </div>
    </Layout>
  )
}
