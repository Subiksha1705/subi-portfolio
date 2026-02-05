import React, { memo } from 'react';
import Section from '../../components/shared/Section';
import MobileCarousel from '../MobileCarousel';
import '../../components/styles/Experience.css';

const MobileExperienceCarousel = () => {
  const experienceData = [
    {
      id: 1,
      company: 'Incresco',
      role: 'Software Engineering Intern',
      duration: 'Jul 2025 – Dec 2025',
      location: 'Bengaluru (On-site)',
      summary:
        'Worked on multiple live, production-grade platforms spanning global education systems, AI-driven applications, and enterprise CRM products.',
      highlights: [
        'Contributed to global student application platform using Next.js and AWS cloud services with OCR-based document processing',
        'Built AI-powered chatbot platform capable of image analysis, document-based responses, and WhatsApp webhook integrations',
        'Executed large-scale data migration from Vtiger involving 50,000+ records across 20,000+ users using structured ETL pipelines',
        'Optimized API workflows and database queries improving system performance and reliability',
      ],
      techStack: ['AWS', 'Node.js', 'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'Next.js', 'Agile'],
    },
    {
      id: 2,
      company: 'Lights Inc',
      role: 'Full Stack Developer Intern',
      duration: 'Sept 2024 – Mar 2025',
      location: 'Erode (Hybrid)',
      summary:
        "Designed and developed LightsOn, a full-stack personal finance web application focused on FIRE (Financial Independence, Retire Early) planning.",
      highlights: [
        'Built and maintained RESTful APIs with proper request validation and authentication logic',
        'Tested and validated APIs using Postman reducing runtime errors',
        'Implemented database-driven features and optimized queries for performance and scalability',
        'Supported users through feature enhancements, bug fixes, and performance improvements',
      ],
      metrics: [{ value: '40+', label: 'Active Users' }],
      techStack: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Postman', 'Git', 'GitHub'],
    },
  ];

  return (
    <Section
      id="internships"
      title="Professional Experience"
      subtitle="My journey through internships and work experiences"
      className="internships-section"
    >
      <MobileCarousel ariaLabel="Professional Experience" adaptiveHeight>
        {experienceData.map((exp) => (
          <div key={exp.id} className="mobile-carousel-slide">
            <div className="experience-card-compact">
              <div className="experience-card-inner">
                <div className="experience-header-compact">
                  <div className="experience-role-section">
                    <span className="experience-role">{exp.role}</span>
                    <span className="experience-company">{exp.company}</span>
                  </div>
                  <div className="experience-meta-compact">
                    <span className="experience-duration">{exp.duration}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>

                <p className="experience-summary-compact">{exp.summary}</p>

                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="experience-metrics-compact">
                    {exp.metrics.map((item, idx) => (
                      <span key={idx} className="experience-metric-tag">
                        {item.value} {item.label}
                      </span>
                    ))}
                  </div>
                )}

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="experience-highlights-compact">
                    {exp.highlights.map((point, idx) => (
                      <li key={idx} className="experience-highlight-item">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="experience-tech-compact">
                    {exp.techStack.map((tech, idx) => (
                      <span key={idx} className="experience-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </MobileCarousel>
    </Section>
  );
};

export default memo(MobileExperienceCarousel);

