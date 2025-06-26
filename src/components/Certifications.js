import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaFilter, FaCalendarAlt, FaExternalLinkAlt, FaAward, FaMicrosoft, FaTimes } from 'react-icons/fa';
import { SiCoursera, SiUdemy, SiGoogle, SiAmazon, SiOracle, SiNvidia, SiLinkedin, SiInfosys } from 'react-icons/si';
import './styles/Timeline.css';

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  // Reset modal state when component unmounts or when navigating away
  useEffect(() => {
    return () => {
      setSelectedCert(null);
    };
  }, []);

  // Also reset modal state when the component is hidden/shown
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setSelectedCert(null);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Handle filter change with proper state management
  const handleFilterChange = (filterKey) => {
    setActiveFilter(filterKey);
  };

  const certifications = [
    {
      id: 1,
      title: 'DevOps foundations: The core principles and practices',
      issuer: 'Microsoft',
      platform: 'microsoft',
      date: 'June 21, 2025',
      validUntil: 'Lifetime',
      description: 'Learning path completion in DevOps foundations covering core principles and practices with all module assessments passed.',
      skills: ['DevOps', 'CI/CD', 'Infrastructure', 'Automation', 'Monitoring'],
      icon: <FaMicrosoft />,
      color: '#00BCF2',
      verifyUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/SubikshaPR-6432/PLNDWKM4?sharingId=69F5C02F89BBF7F3',
      imageFile: 'DEVOPS.png'
    },
    {
      id: 2,
      title: 'Oracle APEX Cloud Developer Certified Professional',
      issuer: 'Oracle University',
      platform: 'oracle',
      date: 'May 15, 2025',
      validUntil: 'Lifetime',
      description: 'Oracle Certified Professional Certificate of Recognition for Oracle APEX Cloud Developer Certified Professional.',
      skills: ['Oracle APEX', 'PL/SQL', 'Database Design', 'Cloud Development', 'Low-Code'],
      icon: <SiOracle />,
      color: '#F80000',
      imageFile: 'ORACLE APEX CLOUD.png'
    },
    {
      id: 3,
      title: 'Fundamentals of Deep Learning',
      issuer: 'NVIDIA',
      platform: 'nvidia',
      date: 'May 29, 2025',
      validUntil: 'Lifetime',
      description: 'Certificate of Competency for demonstrating competence in the completion of Fundamentals of Deep Learning with core concepts and practical applications.',
      skills: ['Deep Learning', 'Neural Networks', 'AI', 'Computer Vision', 'Machine Learning'],
      icon: <SiNvidia />,
      color: '#76B900',
      imageFile: 'DEEP LEARNING.png'
    },
    {
      id: 4,
      title: 'Introduction to Business Intelligence',
      issuer: 'Infosys Springboard',
      platform: 'infosys',
      date: 'August 3, 2024',
      validUntil: 'Lifetime',
      description: 'Course Completion Certificate for successfully completing Introduction to Business Intelligence.',
      skills: ['Business Intelligence', 'Data Analysis', 'Reporting', 'Analytics', 'SQL'],
      icon: <SiInfosys />,
      color: '#007ACC',
      imageFile: 'ISB BUSSINESS.png'
    },
    {
      id: 5,
      title: 'Projects on Bootstrap',
      issuer: 'Infosys Springboard',
      platform: 'infosys',
      date: 'July 22, 2024',
      validUntil: 'Lifetime',
      description: 'Course Completion Certificate for successfully completing Projects on Bootstrap.',
      skills: ['Bootstrap', 'Responsive Design', 'CSS Framework', 'Frontend', 'Web Development'],
      icon: <SiInfosys />,
      color: '#007ACC',
      imageFile: 'ISB BOOTSTRAP.png'
    },
    {
      id: 6,
      title: 'Agile Scrum in Practice',
      issuer: 'Infosys Springboard',
      platform: 'infosys',
      date: 'August 18, 2024',
      validUntil: 'Lifetime',
      description: 'Course Completion Certificate for successfully completing Agile Scrum in Practice.',
      skills: ['Agile', 'Scrum', 'Project Management', 'Sprint Planning', 'Team Collaboration'],
      icon: <SiInfosys />,
      color: '#007ACC',
      imageFile: 'ISB AGILE.png'
    },
    {
      id: 7,
      title: 'Web Development Fundamentals',
      issuer: 'IBM SkillsBuild',
      platform: 'ibm',
      date: 'June 20, 2025',
      validUntil: 'Lifetime',
      description: 'This badge was issued to SUBIKSHA P R for Web Development Fundamentals by IBM SkillsBuild.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Frontend'],
      icon: <FaCertificate />,
      color: '#1F70C1',
      verifyUrl: 'https://lnkd.in/dTFHE9ZZ',
      imageFile: 'WEB DEV IBM.png'
    },
    {
      id: 8,
      title: 'Introduction to Large Language Models',
      issuer: 'LinkedIn Learning',
      platform: 'linkedin',
      date: 'June 18, 2025',
      validUntil: 'Lifetime',
      description: 'Certificate of completion for Introduction to Large Language Models course.',
      skills: ['LLM', 'NLP', 'AI', 'Machine Learning', 'Language Models'],
      icon: <SiLinkedin />,
      color: '#0077B5',
      verifyUrl: 'https://www.linkedin.com/learning/certificates/b4d2cadb8a4ff4c3c9239dc2b9c6ddb4888eb92aca52353bfe5b224fda1c07cc',
      imageFile: 'LLM.png'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Certifications' },
    { key: 'infosys', label: 'Infosys' },
    { key: 'microsoft', label: 'Microsoft' },
    { key: 'ibm', label: 'IBM' },
    { key: 'linkedin', label: 'LinkedIn Learning' },
    { key: 'oracle', label: 'Oracle' },
    { key: 'nvidia', label: 'NVIDIA' }
  ];

  const filteredCertifications = React.useMemo(() => {
    if (activeFilter === 'all') {
      return certifications;
    }
    const filtered = certifications.filter(cert => cert.platform === activeFilter);
    return filtered;
  }, [activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and continuous learning accomplishments
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="certification-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaFilter className="filter-icon" />
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => handleFilterChange(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter} // Force re-render when filter changes
        >
          <AnimatePresence mode="wait">
            {filteredCertifications.map(cert => (
              <motion.div
                key={`${activeFilter}-${cert.id}`} // Unique key for each filter state
                className="certification-card"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  transition: { duration: 0.3 } 
                }}
                onClick={() => setSelectedCert(cert)}
                style={{ cursor: 'pointer' }}
              >
              <div className="cert-header">
                <div 
                  className="cert-icon"
                  style={{ color: cert.color }}
                >
                  {cert.icon}
                </div>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>

                <div className="cert-meta">
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  <div className="meta-item">
                    <FaAward className="meta-icon" />
                    <span>Valid: {cert.validUntil}</span>
                  </div>
                </div>

                <div className="cert-skills">
                  <h4>Skills Gained:</h4>
                  <div className="skills-tags">
                    {cert.skills.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="cert-actions">
                  <button 
                    className="verify-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                  >
                    <FaCertificate />
                    View Certificate
                  </button>
                  {cert.verifyUrl && (
                    <a 
                      href={cert.verifyUrl}
                      className="link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt />
                      Link
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* Certificate Image Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className="modal-content certificate-modal"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate view"
                >
                  <FaTimes />
                </button>
                
                <div className="modal-image">
                  <img 
                    src={`/assets/certificates/${selectedCert.imageFile}`}
                    alt={`${selectedCert.title} Certificate`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-fallback" style={{ display: 'none' }}>
                    <FaCertificate />
                    <p>Certificate image not available</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Certification Summary */}
        <motion.div 
          className="certification-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="summary-stats">
            <div className="stat-item">
              <FaCertificate className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">8</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
            <div className="stat-item">
              <SiCoursera className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">6</span>
                <span className="stat-label">Platforms</span>
              </div>
            </div>
            <div className="stat-item">
              <FaAward className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">150+</span>
                <span className="stat-label">Learning Hours</span>
              </div>
            </div>
          </div>

          <div className="learning-commitment">
            <h3>Commitment to Continuous Learning</h3>
            <p>
              I believe in staying current with technology trends and continuously 
              upgrading my skills through professional certifications and courses. 
              Each certification represents not just knowledge gained, but practical 
              skills that I apply in real-world projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
