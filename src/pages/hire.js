import React from "react"
import Layout from "../components/layout-page"
import SEO from "../components/seo"
import PageNav from "../components/page-nav"

export default function HirePage() {
  return (
    <Layout>
      <SEO title="Hire" />
      <div className="container">
        <div className="hire page__content">
          <h2>What I'm looking for:</h2>
          <p>
            I am searching for front-end/full stack developer opportunities with
            a preference towards working in React. I am actively seeking a work
            environment where I have the privelege of working alongside other
            talented individuals. I am a team player and think being able to
            learn from and teach others while collaborating on a project is one
            of the best parts of working in this industry. I would like a
            position where I have the opportunity to work on a variety of
            different projects and be exposed to new technologies frequently. I
            am a lifelong learner and would love any position that allows me to
            continually expand my skillset.
          </p>
          <div className="hire__skills">
            <h3>Technical Abilities:</h3>
            <ul>
              <li>
                <strong>Programming Languages:</strong> Javascript, Python,
                Java, HTML5, CSS3, C#.
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <strong>JavaScript Specialties:</strong> ES5/6, React, Angular
                7, Node, TypeScript, NextJS.
              </li>
              <li>
                <strong>Database Interaction:</strong> Postgres, PgAdmin, Rest
                API, GraphQL, Apollo, SQL, Microsoft Access, Postman, Express,
                Postgraphile, GraphiQL.
              </li>
              <li>
                <strong>Development Methodologies:</strong> Agile, Scrum,
                Waterfall
              </li>
              <li>
                <strong>Miscellaneous:</strong> Git, JSON, Android Studio,
                Excel, VSCode.
              </li>
            </ul>
          </div>

          <div className="hire__skills">
            <h3>Education:</h3>
            <ul>
              <li>
                <strong>Indiana University:</strong>
                <ul>
                  <li>Bachelor of Science in Informatics</li>
                  <li>Minor: Business</li>
                  <li>Graduated May 2018</li>
                </ul>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <strong>Eleven Fifty Academy:</strong>
                <ul>
                  <li>Javascript Cohort</li>
                  <li>
                    600+ hours of experience with Javascript and relevant
                    libraries/frameworks.
                  </li>
                  <li>Graduated May 2019</li>
                </ul>
              </li>
            </ul>
          </div>

          <PageNav />
        </div>
      </div>
    </Layout>
  )
}
