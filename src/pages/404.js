import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout-page"
import SEO from "../components/seo"
import yodaIMG from "../images/yoda.gif"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Page Found Not!" />
      <div className="container">
        <div className="page__content">
          <h2>404: Page Found Not!</h2>
          <img className="404__image" src={yodaIMG} alt="Page Not Found!" />
          <p>
            The page you are looking for has been moved or no longer exist.{" "}
            <AniLink paintDrip to="/" hex="#6633cc" duration={0.6}>
              Go back home.
            </AniLink>
          </p>
        </div>
      </div>
    </Layout>
  )
}
