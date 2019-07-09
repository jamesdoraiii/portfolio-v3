import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaRegFileAlt } from "react-icons/fa"

export default function PageNav() {
  return (
    <ul className="page__nav">
      <li>
        <AniLink paintDrip to="/" hex="#6633cc" duration={0.6}>
          <button>View Portfolio</button>
        </AniLink>
      </li>
      <li>
        <a
          href="https://github.com/edtechdeveloper"
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          <FaRegFileAlt />
          <span>View Resume</span>
        </a>
      </li>
    </ul>
  )
}