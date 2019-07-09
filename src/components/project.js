import React from "react"
import { FaGithub } from "react-icons/fa"

export default function Project(props) {
  return (
    <div className="project grid page__content">
      <h2>{props.name}</h2>
      <img
        className="project__image"
        src="http://placehold.it/1920x1080.jpg"
        alt={props.name}
      />
      <div className="project__overview">
        <h3>Overview:</h3>
        <p>{props.overview}</p>
        <ul className="project__preview">
          <li>
            <button>View Project</button>
          </li>
          <li>
            <FaGithub />
            <span>View Source</span>
          </li>
        </ul>
        <ul className="project__tech">
          <li>
            <strong>Technologies:</strong>
          </li>
          {props.technology.map((tech, index) => {
            return <li key={index}>{tech}</li>
          })}
        </ul>
      </div>
      <div className="project__role">
        <strong>Role:</strong>
        <small>{props.roles}</small>
      </div>
    </div>
  )
}