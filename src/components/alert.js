import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaLongArrowAltRight } from "react-icons/fa"

export default function Alert() {
  return (
    <div className="alert">
      <div className="container">
        <AniLink paintDrip to="/hire" hex="#145d88" duration={0.6}>
          <medium>
            <span role="img" aria-label="Hey!">
              👋
            </span>{" "}
            <span>Are you hiring? Learn more about my qualifications!</span>
            <FaLongArrowAltRight />
          </medium>
        </AniLink>
      </div>
    </div>
  )
}
