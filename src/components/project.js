import React from "react"
import { FaGithub } from "react-icons/fa"

export default function Project(props) {
  return (
    <div className="project grid page__content">
      <h3>{props.name}</h3>
      <img className="project__image" src={props.image} alt={props.name} />
      <div className="project__overview">
        <h3>Overview:</h3>
        <p>{props.overview}</p>
        <ul className="project__preview">
          {props.href.length < 1 ? null : (
            <li>
              <a
                href={props.href}
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                <button>View Project</button>
              </a>
            </li>
          )}
          {props.source.length < 1 ? null : (
            <li>
              <a
                href={`https://github.com/jamesdoraiii/${props.source}`}
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span>View Source</span>
              </a>
            </li>
          )}
          {props.original.length < 1 ? null : (
            <li>
              <a
                href={props.original}
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                <button>View Original Website</button>
              </a>
            </li>
          )}
        </ul>
        <ul className="project__tech">
          <li>
            <strong>Technologies:</strong>
          </li>
          {props.technology.map((tech, index) => {
            return (
              <li key={index}>
                {index < props.technology.length - 1 ? tech + "," : tech + "."}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="project__role">
        <strong>Roles:</strong>
        <ul>
          {props.roles.map((role, index) => {
            return <li key={index}>{role}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
