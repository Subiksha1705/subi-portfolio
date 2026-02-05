import React from 'react';

export default function ExperienceCard({
  company,
  role,
  duration,
  location,
  summary,
  highlights,
  techStack,
  metrics,
}) {
  return (
    <div className="experience-card">
      {/* Timeline line */}
      <div className="experience-timeline-line" />

      {/* Timeline dot */}
      <div className="experience-timeline-dot" />

      {/* Card */}
      <div className="experience-card-content">
        {/* Header */}
        <div className="experience-header">
          <div>
            <h3 className="experience-role">{role}</h3>
            <p className="experience-company">{company}</p>
          </div>
          <div className="experience-duration">
            {duration} · {location}
          </div>
        </div>

        {/* Summary */}
        <p className="experience-summary">
          {summary}
        </p>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="experience-metrics">
            {metrics.map((item, index) => (
              <div
                key={index}
                className="experience-metric-item"
              >
                <span className="experience-metric-value">
                  {item.value}
                </span>{' '}
                {item.label}
              </div>
            ))}
          </div>
        )}

        {/* Contributions */}
        {highlights && highlights.length > 0 && (
          <ul className="experience-highlights">
            {highlights.map((point, index) => (
              <li key={index} className="experience-highlight-item">
                <span className="experience-highlight-bullet" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        {techStack && techStack.length > 0 && (
          <div className="experience-tech-stack">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="experience-tech-tag"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
