import React from "react"
import Layout from "../components/layout-page"
import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div className="page__content">
          <h1>Home page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sed suscipit lacus. Donec dolor est, congue a enim ac, sollicitudin
            viverra orci. Aliquam vitae auctor ligula. Praesent eget condimentum
            nibh. Nam dictum quam dui, vel convallis lectus ultrices et. Nulla
            pretium nulla sit amet turpis fringilla, non posuere enim suscipit.
          </p>
        </div>
      </div>
    </Layout>
  )
}
