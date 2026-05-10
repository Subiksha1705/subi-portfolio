import React, { memo } from 'react';
import Section from '../shared/Section';
import ProjectCard from '../shared/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'KEC Hostel Management System',
      description: 'AI-powered multi-tenant hostel platform for educational institutions with role-based portals, streamlining admissions, room allocation, communication, and operations through secure workflows and automation.',
      features: [
        'Role-Based Access Control (RBAC)',
        'Student admissions and room allocation',
        'Leave and complaint management workflows',
        'JWT authentication with access and refresh tokens',
        'Gemini AI chatbot with institution-specific knowledge base'
      ],
      tech: ['Next.js', 'Neon Postgres', 'Prisma ORM', 'Node.js', 'Gemini AI', 'JWT Authentication', 'Vercel Deployment'],
      github: 'https://github.com/Subiksha1705/kec-hostel.git',
      live: 'https://nyroverve.vercel.app/'
    },
    {
      id: 2,
      title: 'Calm Sphere: Mental Health Chatbot',
      description: 'AI-powered mental health chatbot featuring ChatGPT-style interface, temporary chat mode, and voice-to-text support, enabling private conversations, emotional analysis, and guided wellbeing interactions.',
      features: ['Temporary Chat Mode', 'Voice-to-Text Conversations', 'ChatGPT-Style UI', 'Emotional + Risk Analysis', 'Gemini AI Conversations'],
      tech: ['Next.js', 'FastAPI', 'Firebase', 'Google Gemini', 'Vercel', 'Render', 'Python', 'React'],
      github: 'https://github.com/Subiksha1705/calm.git',
      live: 'https://calm-mocha.vercel.app/chat'
    },
    {
      id: 3,
      title: 'LIGHTSON: Financial Independence Tracker',
      description: 'Cross-platform financial tracker for income, expense, and investment management, providing visual representations, actionable insights, and planning tools to support long-term financial independence.',
      features: ['Income Tracking', 'Expense Tracking', 'Investment Tracking', 'Visual Financial Representations', 'FIRE Calculator'],
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
