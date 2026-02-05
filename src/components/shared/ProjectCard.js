import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({
  title = "Project Title",
  description = "Project description goes here.",
  features = [],
  tech = [],
  github = "#",
}) {
  return (
    <div className="project-card">
      {/* GitHub Icon */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-github-icon"
      >
        <FaGithub size={22} />
      </a>

      {/* Title */}
      <h3 className="project-card-title">
        {title}
      </h3>

      {/* Description */}
      <p className="project-card-description">
        {description}
      </p>

      {/* Features */}
      {features.length > 0 && (
        <>
          <h4 className="project-features-title">
            Key Features
          </h4>

          <ul className="project-features-list">
            {features.map((feature, index) => (
              <li
                key={index}
                className="project-feature-item"
              >
                <span className="project-feature-bullet">▸</span>
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Tech Stack */}
      {tech.length > 0 && (
        <div className="project-tech-stack">
          {tech.map((item, index) => (
            <span
              key={index}
              className="project-tech-tag"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
