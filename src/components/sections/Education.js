import React, { memo } from 'react';
import Section from '../shared/Section';
import '../styles/Experience.css';

const Education = () => {
  // Education data sorted in descending chronological order (most recent first)
  const educationData = [
    {
      id: 1,
      company: "Kongu Engineering College",
      role: "M.Sc. in Software Systems",
      duration: "2022 - 2027",
      location: "Erode, Tamil Nadu",
      summary: "Comprehensive 5-year integrated master's program specializing in software systems with hands-on experience in full-stack development, AI/ML, and modern DevOps practices.",
      highlights: [
        "Specializing in software systems with focus on AI/ML and DevOps",
        "Hands-on experience in full-stack development",
        "Strong foundation in Data Structures, Algorithms, and Software Engineering",
        "Current CGPA: 8.02/10.0"
      ],
      techStack: ["Data Structures", "Algorithms", "Machine Learning", "DevOps", "Web Technologies", "DBMS"],
      metrics: [{ value: "8.02/10.0", label: "CGPA" }],
      status: "Current"
    },
    {
      id: 2,
      company: "Bharathiyar CBSE School",
      role: "Class XII (Higher Secondary)",
      duration: "2020 - 2022",
      location: "Attur, Tamil Nadu",
      summary: "Science stream education with Mathematics, Physics, Chemistry, and Computer Science, building strong analytical and technical foundation.",
      highlights: [
        "Science stream with Mathematics, Physics, Chemistry, and Computer Science",
        "Built strong analytical and technical foundation",
        "Scored 76% (380/500)"
      ],
      techStack: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      metrics: [{ value: "76%", label: "Percentage" }],
      status: "Completed"
    },
    {
      id: 3,
      company: "Jaivins Academy CBSE School",
      role: "Class X (Secondary School)",
      duration: "2019 - 2020",
      location: "Attur, Tamil Nadu",
      summary: "Foundational secondary education with balanced curriculum covering core subjects and early exposure to computer applications.",
      highlights: [
        "Balanced curriculum covering core academic subjects",
        "Early exposure to computer applications",
        "Scored 73% (365/500)"
      ],
      techStack: ["Mathematics", "Science", "English", "Tamil", "Social Studies"],
      metrics: [{ value: "73%", label: "Percentage" }],
      status: "Completed"
    }
  ];

  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic background and qualifications"
      className="education-section"
    >
      <div className="experience-container">
        {/* Center Timeline Line */}
        <div className="experience-center-line" />
        
        {/* Education Cards with Mirror Layout */}
        <div className="experience-mirror-layout">
          {educationData.map((edu, index) => {
            const isOdd = index % 2 === 0; // Odd position (0, 2, 4...) goes left
            return (
              <div 
                key={edu.id} 
                className={`experience-row ${isOdd ? 'row-left' : 'row-right'}`}
              >
                {/* Timeline Dot */}
                <div className={`experience-timeline-dot ${isOdd ? 'dot-left' : 'dot-right'}`} />
                
                {/* Education Card */}
                <div className={`experience-card-compact ${isOdd ? 'card-left' : 'card-right'}`}>
                  <div className="experience-card-inner">
                    {/* Header */}
                    <div className="experience-header-compact">
                      <div className="experience-role-section">
                        <span className="experience-role">{edu.role}</span>
                        <span className="experience-company">{edu.company}</span>
                      </div>
                      <div className="experience-meta-compact">
                        <span className="experience-duration">{edu.duration}</span>
                        <span className="experience-location">{edu.location}</span>
                      </div>
                    </div>
                    
                    {/* Summary */}
                    <p className="experience-summary-compact">{edu.summary}</p>
                    
                    {/* Metrics */}
                    {edu.metrics && edu.metrics.length > 0 && (
                      <div className="experience-metrics-compact">
                        {edu.metrics.map((item, idx) => (
                          <span key={idx} className="experience-metric-tag">
                            {item.value} {item.label}
                          </span>
                        ))}
                        <span className={`status-badge ${edu.status.toLowerCase()}`}>
                          {edu.status}
                        </span>
                      </div>
                    )}
                    
                    {/* Highlights */}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <ul className="experience-highlights-compact">
                        {edu.highlights.map((point, idx) => (
                          <li key={idx} className="experience-highlight-item">
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {/* Tech Stack */}
                    {edu.techStack && edu.techStack.length > 0 && (
                      <div className="experience-tech-compact">
                        {edu.techStack.map((tech, idx) => (
                          <span key={idx} className="experience-tech-tag">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default memo(Education);
