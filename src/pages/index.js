import React from "react"
import Layout from "../components/layout-page"
import SEO from "../components/seo"
import Project from "../components/project"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <Project
          name="Mentoring Minds Discovery Engine"
          technology={["React", "Redux", "Styled Components"]}
          overview="The Discovery Engine is a sales tool for our customer-facing teams
            to deliver cohesive and geo-specific product presentations in the
            field and from our office. With this application, team members can
            select their profile and tailor the presentation to fit the needs of
            each customer. Resulting in a personalized experience, that has
            increased sales and customer engagement."
          roles="As the sole developer and designer on this project, I collaborated
              and worked directly with key and cross-departmental stakeholders
              to meet the needs of all teams and to build this application."
        />
      </div>
    </Layout>
  )
}
