import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaTwitter, FaGithub, FaDev, FaEnvelope } from "react-icons/fa"

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
            My name is Justin Juno. I'm an infinitely curious JavaScript
            developer with a passion for serving the classroom and helping
            teachers champion digital environments.
          </p>
          <ul className="header__social">
            <li>
              <FaGithub />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaDev />
            </li>
            <li>
              <FaEnvelope />
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
      avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
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
