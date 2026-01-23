import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaBook } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'M.Sc. in Software Systems',
      institution: 'Kongu Engineering College',
      period: '2022 - 2027',
      location: 'Erode, Tamil Nadu',
      gpa: '8.02/10.0',
      status: 'Current',
      description: 'Comprehensive 5-year integrated master\'s program specializing in software systems with hands-on experience in full-stack development, AI/ML, and modern DevOps practices.',
      relevantCourses: [
        'Data Structures and Algorithms',
        'Software Engineering',
        'Database Management Systems',
        'Web Technologies',
        'Machine Learning',
        'DevOps',
        'Object-Oriented Programming',
        'Computer Networks'
      ]
    },
    {
      id: 2,
      degree: 'Class XII (Higher Secondary)',
      institution: 'Bharathiyar CBSE School',
      period: '2020 - 2022',
      location: 'Attur, Tamil Nadu',
      gpa: '76% (380/500)',
      status: 'Completed',
      description: 'Science stream education with Mathematics, Physics, Chemistry, and Computer Science, building strong analytical and technical foundation.',
      relevantCourses: [
        'Biology',
        'Physics',
        'Chemistry',
        'Computer Science',
        'English'
      ]
    },
    {
      id: 3,
      degree: 'Class X (Secondary School)',
      institution: 'Jaivins Academy CBSE School',
      period: '2019 - 2020',
      location: 'Attur, Tamil Nadu',
      gpa: '73% (365/500)',
      status: 'Completed',
      description: 'Foundational secondary education with balanced curriculum covering core subjects and early exposure to computer applications.',
      relevantCourses: [
        'Mathematics',
        'Science',
        'Tamil',
        'English',
        'Social Studies'
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="education-section" id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic background and educational achievements
          </p>
        </motion.div>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`education-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <motion.div 
                className="education-card"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="education-header">
                  <div className="institution-info">
                    <div className="institution-details">
                      <h3 className="degree-title">{edu.degree}</h3>
                      <h4 className="institution-name">{edu.institution}</h4>
                    </div>
                  </div>
                  <div className={`status-badge ${edu.status.toLowerCase()}`}>
                    {edu.status}
                  </div>
                </div>

                <div className="education-meta">
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="meta-item">
                    <FaTrophy className="meta-icon" />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>

                <p className="education-description">{edu.description}</p>

                <div className="education-details">
                  <div className="detail-section">
                    <h5><FaBook className="section-icon" /> Relevant Coursework:</h5>
                    <div className="courses-grid">
                      {edu.relevantCourses.map(course => (
                        <span key={course} className="course-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Educational Journey Summary */}
        <motion.div 
          className="study-philosophy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="philosophy-content">
            <h3>My Educational Journey</h3>
            <p>
              From building foundational knowledge in secondary school to pursuing advanced software systems, 
              my educational timeline reflects a consistent commitment to growth and learning. Each phase has 
              contributed to developing both technical expertise and leadership skills, with hands-on projects, 
              internships, and active community involvement complementing formal education.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
