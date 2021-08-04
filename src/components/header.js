import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import React from "react"

export default function Header() {
  return (
    <header className="header">
      <div className="container grid">
        <div className="header__image remove--on-break">
          <Avatar />
        </div>
        <div className="header__info">
          <h1>Hello World!</h1>
          <p>
            My name is James Dora, and I have been a full time web developer for
            over two years. I have an insatiable appetite for learning new
            things and expanding my skillset. Nothing gives me a stronger sense
            of satisfaction than learning a new technology, implementing it into
            a project, and building a gorgeous, functional, web application that
            can make someone's life just a little easier. <br />{" "}
            <AniLink paintDrip to="/about" hex="#145d88" duration={0.6}>
              Get to know me!
            </AniLink>
          </p>
          <ul className="header__social">
            <li className="grow">
              <a
                href="https://github.com/jamesdoraiii"
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="grow">
              <a
                href="https://www.linkedin.com/in/james-dora-2950b3aa/"
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="grow">
              <a
                href="mailto:jamesdoraiii@gmail.com"
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 728) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.avatarImage.childImageSharp.fluid} />
}
