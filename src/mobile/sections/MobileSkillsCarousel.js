import React, { memo } from 'react';
import Section from '../../components/shared/Section';
import ProjectCard from '../../components/shared/ProjectCard';
import MobileCarousel from '../MobileCarousel';

const MobileSkillsCarousel = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      description: 'Core programming languages I use for development',
      skills: ['Python', 'JavaScript', 'Java', 'C', 'C#', 'SQL', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks & Technologies',
      description: 'Frontend and backend frameworks',
      skills: ['React', 'Next.js', 'Node.js', 'React Native', 'Flask', 'Streamlit', 'Bootstrap', 'Express.js'],
    },
    {
      title: 'Databases & CRM Tools',
      description: 'Database management and CRM systems',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle SQL', 'Salesforce Workbench'],
    },
    {
      title: 'DevOps, Cloud & Developer Tools',
      description: 'Cloud platforms, containerization, and CI/CD',
      skills: ['AWS (Core Services)', 'Git', 'GitHub', 'Docker', 'Jenkins', 'Kubernetes', 'Minikube', 'Postman'],
    },
    {
      title: 'AI / ML',
      description: 'Artificial Intelligence and Machine Learning',
      skills: ['Hugging Face', 'LLaMA 3', 'TensorFlow', 'Scikit-learn'],
    },
    {
      title: 'Design & Productivity Tools',
      description: 'Design and development tools',
      skills: ['Figma', 'WordPress', 'VS Code', 'Jupyter Notebook'],
    },
  ];

  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="My technical expertise across various technologies and frameworks"
      className="skills-section"
    >
      <MobileCarousel ariaLabel="Technical Skills">
        {skillCategories.map((category, index) => (
          <div key={index} className="mobile-carousel-slide">
            <ProjectCard
              title={category.title}
              description={category.description}
              tech={category.skills}
              github={null}
            />
          </div>
        ))}
      </MobileCarousel>
    </Section>
  );
};

export default memo(MobileSkillsCarousel);

