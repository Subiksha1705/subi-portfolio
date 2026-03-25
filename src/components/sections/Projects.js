import React, { memo } from 'react';
import Section from '../shared/Section';
import ProjectCard from '../shared/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'KEC Hostel Management System',
      description: 'Comprehensive hostel management system serving students, reducing leave application processing time by 80% and complaint resolution time by 50%',
      features: ['Data Entry Automation', 'Leave Management', 'Admin Dashboard'],
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/Subiksha1705/Kec_Hostel'
    },
    {
      id: 2,
      title: 'Calm Sphere: Mental Health Chatbot',
      description: 'Safe-space mental health chatbot with emotional and risk analysis, plus persistent and temporary chat modes.',
      features: ['Emotional + Risk Analysis', 'Persistent & Temporary Chats', 'Google Sign-In (Firebase)', 'Gemini AI Conversations'],
      tech: ['Next.js', 'FastAPI', 'Firebase', 'Google Gemini', 'Vercel', 'Render', 'Python', 'React'],
      github: 'https://github.com/Subiksha1705/calm.git',
      live: 'https://calm-mocha.vercel.app/chat'
    },
    {
      id: 3,
      title: 'LIGHTSON: Financial Independence Tracker',
      description: 'Cross-platform mobile app with 40+ beta users, helping track expenses and calculate FIRE numbers with 95% accuracy',
      features: ['Expense Tracking', 'FIRE Calculator', '4.8/5 Rating'],
      tech: ['React Native', 'MongoDB', 'Node.js', 'Express'],
      github: 'https://github.com/Subiksha1705/LIGHTSON'
    },
  ];

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A showcase of my technical skills and creative problem-solving abilities"
      className="projects-section"
    >
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            features={project.features}
            tech={project.tech}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </Section>
  );
};

export default memo(Projects);
