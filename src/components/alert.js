import React from "react"
import { Link } from "gatsby"
import { FaLongArrowAltRight } from "react-icons/fa"

export default function Alert() {
  return (
    <div className="alert">
      <div className="container">
        <Link to="/hire">
          <small>
            <span>Are you hiring? I'm seeking remote opportunities!</span>
            <FaLongArrowAltRight />
          </small>
        </Link>
      </div>
    </div>
  )
}
