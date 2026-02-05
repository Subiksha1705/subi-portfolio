import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaLinkedin, FaGithub } from 'react-icons/fa';

const PortfolioFooter = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navigationLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'internships', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'leadership', label: 'Leadership' },

  ];

  return (
    <footer className="portfolio-footer">
      {/* Gradient Glow */}
      <div className="footer-glow" />

      <div className="footer-content">
        {/* Brand Section */}
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="footer-brand-name">Subiksha P R</h2>
          <p className="footer-brand-tagline">Associate Software Engineer</p>
          <p className="footer-brand-description">
            I build clean, scalable, and user-focused digital products using modern web
            technologies, cloud platforms, and AI-driven systems.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          className="footer-nav"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="footer-nav-title">Explore</h3>
          <ul className="footer-nav-list">
            {navigationLinks.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="footer-nav-link"
                >
                  <span>{item.label}</span>
                  <FaArrowUp className="footer-nav-arrow" />
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div 
          className="footer-contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="footer-contact-title">Get in touch</h3>

          <a href="mailto:subiksharameshkanna@gmail.com" className="footer-contact-item">
            <FaEnvelope className="footer-contact-icon" />
            <span>subiksharameshkanna@gmail.com</span>
          </a>

          <a href="https://linkedin.com/in/subikshapr" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
            <FaLinkedin className="footer-contact-icon" />
            <span>linkedin.com/in/subikshapr</span>
          </a>

          <a href="https://github.com/Subiksha1705" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
            <FaGithub className="footer-contact-icon" />
            <span>github.com/Subiksha1705</span>
          </a>

          <div className="footer-contact-item">
            <FaMapMarkerAlt className="footer-contact-icon" />
            <span>Bengaluru, Karnataka</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>© {new Date().getFullYear()} Subiksha. Designed & built with care.</p>
      </motion.div>
    </footer>
  );
};

export default PortfolioFooter;
