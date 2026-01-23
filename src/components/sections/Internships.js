import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaUsers, FaTrophy } from 'react-icons/fa';
import { companyLogos } from '../../utils/imageUtils';

const Internships = () => {
  const internships = [
    {
      id: 1,
      company: 'Lights Inc',
      role: 'App Developer Intern',
      period: 'September 2024 - March 2025',
      location: 'Erode, Tamil Nadu',
      logo: companyLogos.techcorp,
      description: 'Developed React-based financial analytics platform serving 40+ users with UI components and backend services for FIRE number computation.',
      highlights: [
        'Built React frontend and Node.js backend for financial analytics platform',
        'Implemented RESTful APIs for data retrieval and processing',
        'Collaborated with cross-functional teams to enhance user experience',
        'Used MongoDB for data storage and retrieval',
        'Used to calculate FIRE numbers',
        'Improved application performance by 30% through optimization',
        'Delivered 5+ features serving 40+ active users',
        'Worked with React, Node.js, Express, MongoDB, and RESTful APIs'

      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="internships-section" id="internships">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-header"
        style={{ textAlign: 'center', padding: '4rem 2rem 2rem' }}
      >
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Hands-on experience gained through internships and collaborative projects
        </p>
      </motion.div>

      <div className="timeline-container">
        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
            {internships.map((internship, index) => (
              <motion.div
                key={internship.id}
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-marker">
                  <FaBuilding />
                </div>
                
                <motion.div 
                  className="timeline-content"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="internship-header">
                    <div className="company-info">
                      <div>
                        <h3 className="company-name">{internship.company}</h3>
                        <h4 className="role-title">{internship.role}</h4>
                      </div>
                    </div>
                  </div>

                  <div className="internship-meta">
                    <div className="meta-item">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{internship.period}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{internship.location}</span>
                    </div>
                  </div>

                  <p className="internship-description">{internship.description}</p>

                  <div className="highlights">
                    <h5><FaCode className="section-icon" /> Key Highlights:</h5>
                    <ul>
                      {internship.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </section>
  );
};

export default Internships;
