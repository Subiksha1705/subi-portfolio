import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaHeart, FaArrowUp, FaHome, FaUser, FaCode, FaBriefcase,
  FaCertificate, FaGraduationCap, FaUsers, FaTrophy
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
    { id: 'hero', label: 'Home', icon: <FaHome /> },
    { id: 'projects', label: 'Projects', icon: <FaCode /> },
    { id: 'skills', label: 'Skills', icon: <FaUser /> },
    { id: 'internships', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'certifications', label: 'Certifications', icon: <FaCertificate /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'leadership', label: 'Leadership', icon: <FaUsers /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/subiksha1705',
      icon: <FaGithub />,
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/subikshapr',
      icon: <FaLinkedin />,
      color: '#0077B5'
    },
    {
      name: 'Email',
      url: 'mailto:subiksharameshkanna@gmail.com?subject=Portfolio Contact&body=Hello Subiksha,',
      icon: <FaEnvelope />,
      color: '#EA4335'
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: 'subiksharameshkanna@gmail.com',
      href: 'mailto:subiksharameshkanna@gmail.com?subject=Portfolio Contact&body=Hello Subiksha,'
    },
    {
      icon: <FaMapMarkerAlt />,
      text: 'Bengaluru, Karnataka',
      href: null
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Brand Section */}
            <motion.div 
              className="footer-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="brand-name">Subiksha</h3>
              <p className="brand-tagline">
                Full Stack Developer & Computer Science Student
              </p>
              <p className="brand-description">
                Passionate about creating innovative solutions through code, 
                constantly learning and growing in the world of technology.
              </p>
              
              {/* Social Links */}
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--social-color': social.color }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: `0 0 20px ${social.color}40`
                    }}
                  >
                    {social.icon}
                    <span className="social-tooltip">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div 
              className="footer-nav"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4>Quick Navigation</h4>
              <ul className="nav-links">
                {navigationLinks.map((link, index) => (
                  <motion.li 
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="nav-link"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="footer-contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4>Contact Information</h4>
              <div className="contact-list">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="contact-item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="contact-icon">
                      {contact.icon}
                    </div>
                    {contact.href ? (
                      <a href={contact.href} className="contact-text">
                        {contact.text}
                      </a>
                    ) : (
                      <span className="contact-text">{contact.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowUp />
          </motion.button>

          {/* Footer Bottom */}
          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>
                  © {new Date().getFullYear()} subiksharameshkanna. All rights reserved.<br />
                subiksharameshkanna@gmail.com</p>
              </div>

              <div className="footer-actions">
                
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
