import React, { memo } from 'react';
import Section from '../../components/shared/Section';
import ProjectCard from '../../components/shared/ProjectCard';
import MobileCarousel from '../MobileCarousel';

const MobileProjectsCarousel = () => {
  const projects = [
    {
      id: 1,
      title: 'KEC Hostel Management System',
      description:
        'Comprehensive hostel management system serving students, reducing leave application processing time by 80% and complaint resolution time by 50%',
      features: ['Data Entry Automation', 'Leave Management', 'Admin Dashboard'],
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/Subiksha1705/Kec_Hostel',
    },
    {
      id: 2,
      title: 'Calm Sphere: Mental Health Chatbot',
      description:
        'AI-powered mental health chatbot with personalized support and mood tracking features',
      features: ['LLaMA 3 Integration', 'Mood Tracking', '85% User Satisfaction'],
      tech: ['Streamlit', 'MongoDB', 'Hugging Face', 'LLaMA 3', 'Python'],
      github: 'https://github.com/Subiksha1705/Calm_Sphere',
    },
    {
      id: 3,
      title: 'LIGHTSON: Financial Independence Tracker',
      description:
        'Cross-platform mobile app with 40+ beta users, helping track expenses and calculate FIRE numbers with 95% accuracy',
      features: ['Expense Tracking', 'FIRE Calculator', '4.8/5 Rating'],
      tech: ['React Native', 'MongoDB', 'Node.js', 'Express'],
      github: 'https://github.com/Subiksha1705/LIGHTSON',
    },
  ];

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A showcase of my technical skills and creative problem-solving abilities"
      className="projects-section"
    >
      <MobileCarousel ariaLabel="Featured Projects">
        {projects.map((project) => (
          <div key={project.id} className="mobile-carousel-slide">
            <ProjectCard
              title={project.title}
              description={project.description}
              features={project.features}
              tech={project.tech}
              github={project.github}
            />
          </div>
        ))}
      </MobileCarousel>
    </Section>
  );
};

export default memo(MobileProjectsCarousel);

