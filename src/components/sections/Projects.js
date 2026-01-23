import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFilter } from 'react-icons/fa';
import { projectImages } from '../../utils/imageUtils';
import Section from '../shared/Section';
import Card from '../shared/Card';
import Button from '../shared/Button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'KEC Hostel Management System',
      description: 'Comprehensive hostel management system serving students, reducing leave application processing time by 80% and complaint resolution time by 50%',
      image: projectImages.project1,
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      category: 'fullstack',
      github: 'https://github.com/Subiksha1705/Kec_Hostel',
      features: ['Data Entry Automation', 'Leave Management', 'Admin Dashboard']
    },
    {
      id: 2,
      title: 'Calm Sphere: Mental Health Chatbot',
      description: 'AI-powered mental health chatbot with personalized support and mood tracking features',
      image: projectImages.project2,
      tags: ['Streamlit', 'MongoDB', 'Hugging Face', 'LLaMA 3', 'Python'],
      category: 'ai',
      github: 'https://github.com/Subiksha1705/Calm_Sphere',
      features: ['LLaMA 3 Integration', 'Mood Tracking', '85% User Satisfaction']
    },
    {
      id: 3,
      title: 'LIGHTSON: Financial Independence Tracker',
      description: 'Cross-platform mobile app with 40+ beta users, helping track expenses and calculate FIRE numbers with 95% accuracy',
      image: projectImages.project3,
      tags: ['React Native', 'MongoDB', 'Node.js', 'Express'],
      category: 'mobile',
      github: 'https://github.com/Subiksha1705/LIGHTSON',
      features: ['Expense Tracking', 'FIRE Calculator', '4.8/5 Rating']
    },
    {
      id: 4,
      title: 'Anology - Antique Art E-Commerce Platform',
      description: 'Full-stack e-commerce website for antique art sales with secure user authentication and dynamic product catalog',
      image: projectImages.project4,
      tags: ['React', 'Node.js', 'Docker', 'Helm', 'Kubernetes'],
      category: 'fullstack',
      github: 'https://github.com/Subiksha1705/Anology_ecommerce',
      features: ['Secure Authentication', 'Dynamic Catalog', 'Docker Deployment']
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A showcase of my technical skills and creative problem-solving abilities"
      className="projects-section"
    >
      {/* Filter Buttons */}
      <motion.div
        className="project-filters"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FaFilter className="filter-icon" />
        {filters.map(filter => (
          <Button
            key={filter.key}
            className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </Button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="projects-grid"
        key={activeFilter}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map(project => (
          <Card
            key={project.id}
            className="project-card"
          >
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <a href={project.github} className="project-github-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
              <p className="project-description">{project.description}</p>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
};

export default memo(Projects);
