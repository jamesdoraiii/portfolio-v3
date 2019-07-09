import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
            teachers champion digital environments.{" "}
            <Link to="/about">Learn more.</Link>
          </p>
          <ul className="header__social">
            <li className="grow">
              <a
                href="https://github.com/edtechdeveloper"
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="grow">
              <a
                href="https://twitter.com/edtechdeveloper"
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="grow">
              <a
                href="https://dev.to/edtechdeveloper"
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                <FaDev />
              </a>
            </li>
            <li className="grow">
              <a
                href="mailto:justin@edtechdeveloper.com"
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
