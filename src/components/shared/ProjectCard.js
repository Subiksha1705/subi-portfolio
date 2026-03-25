import React from 'react';
import { FaGithub, FaRocket } from 'react-icons/fa';

export default function ProjectCard({
  title = "Project Title",
  description = "Project description goes here.",
  features = [],
  tech = [],
  github = "#",
  live = "",
}) {
  const hasLinks = Boolean(github) || Boolean(live);
  return (
    <div className="project-card">
      {/* Links - only show if provided */}
      {hasLinks && (
        <div className="project-card-links">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-icon project-link-demo"
              aria-label="Live demo"
              data-tooltip="View demo"
            >
              <FaRocket size={20} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-icon project-link-github"
              aria-label="GitHub repository"
              data-tooltip="View GitHub"
            >
              <FaGithub size={22} />
            </a>
          )}
        </div>
      )}

      {/* Title */}
      <h3 className="project-card-title" style={!hasLinks ? { paddingRight: 0 } : {}}>
        {title}
      </h3>

      {/* Description */}
      <p className="project-card-description">
        {description}
      </p>

      {/* Features Section - only for projects */}
      {features.length > 0 && (
        <>
          <h4 className="project-features-title">
            Key Features
          </h4>
          <ul className="project-features-list">
            {features.map((feature, index) => (
              <li
                key={`feature-${index}`}
                className="project-feature-item"
              >
                <span className="project-feature-bullet">▸</span>
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Tech Stack / Skills Section */}
      {tech.length > 0 && (
        <div className="project-tech-stack">
          {tech.map((item, index) => (
            <span
              key={`tech-${index}`}
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
