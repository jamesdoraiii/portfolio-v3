import React from "react"
import { Link } from "gatsby"
import { FaRegFileAlt } from "react-icons/fa"

export default function PageNav() {
  return (
    <ul className="page__nav">
      <li>
        <Link to="/">
          <button>View Portfolio</button>
        </Link>
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
