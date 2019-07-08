import React from "react"
import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaDev } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

export default function Header() {
  return (
    <header className="header">
      <div className="container grid">
        <img
          className="header__image remove--on-break"
          src="http://placehold.it/400x400.jpg"
          alt="Justin Juno Profile"
        />
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
