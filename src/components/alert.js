import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaLongArrowAltRight } from "react-icons/fa"

export default function Alert() {
  return (
    <div className="alert">
      <div className="container">
        <AniLink paintDrip to="/hire" hex="#6633cc" duration={0.6}>
          <small>
            <span role="img" aria-label="Hey!">
              👋
            </span>{" "}
            <span>Are you hiring? I'm seeking remote opportunities!</span>
            <FaLongArrowAltRight />
          </small>
        </AniLink>
      </div>
    </div>
  )
}
