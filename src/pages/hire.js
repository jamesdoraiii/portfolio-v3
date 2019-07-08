import React from "react"
import Layout from "../components/layout-page"
import SEO from "../components/seo"

export default function HirePage() {
  return (
    <Layout>
      <SEO title="Hire" />
      <div className="container">
        <div className="hire page__content">
          <h2>What I'm looking for:</h2>
          <p>
            I'm searching for remote opportunities that will allow me to lead
            and learn from my peers on a daily basis. I'd like to join a diverse
            team and work for a company that values design, work-life balance,
            and personal growth. While I love being part of the educational
            space, I'll happily write code to support any product that makes a
            positive impact and benefits the world of tomorrow.
          </p>
          <div className="hire__skills">
            <h3>What I Know:</h3>
            <ul>
              <li>
                <strong>HTML/CSS:</strong> JSX, SASS, Styled Components, and
                Emotion.
              </li>
              <li>
                <strong>Javascript:</strong> ES5/6, React, Redux, Axios, Gatsby,
                MJML, Jest, and Vue.
              </li>
              <li>
                <strong>CMS/E-Commerce:</strong> WordPress, Shopify, Stripe, and
                GraphCMS.
              </li>
              <li>
                <strong>Tools:</strong> VS Code, JetBrains IDE, Github, Postman,
                Photoshop/Illustrator, and Figma.
              </li>
              <li>
                <strong>Marketing/CRM/Communication:</strong> Marketo,
                MailChimp, Trello, Slack, and BaseCamp.
              </li>
            </ul>
          </div>
          <aside className="hire__learning">
            <h4>Where I Can Grow:</h4>
            <small>
              As a designer turned developer, I've primarily been concerned with
              the presentation layer of most of my applications. That said, I'm
              currently studying and learning more about databases and modern
              tools for querying APIs, such as: Node, AWS, MongoDB, GraphQL, and
              Apollo.
            </small>
          </aside>
        </div>
      </div>
    </Layout>
  )
}
