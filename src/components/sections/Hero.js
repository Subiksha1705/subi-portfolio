import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../../Hero.css';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const fullText = 'Full Stack Developer & M.Sc. Software Systems Student';

  useEffect(() => {
    // Loading screen
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Typing animation
    let index = 0;
    const typingTimer = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingTimer);
      }
    }, 100);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(typingTimer);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="loading-animation">
              <div className="pulse-rings">
                <div className="pulse-ring pulse-ring-1"></div>
                <div className="pulse-ring pulse-ring-2"></div>
                <div className="pulse-ring pulse-ring-3"></div>
              </div>
              <div className="center-logo">
                <span className="logo-text">S</span>
              </div>
            </div>
            <h2 className="loading-title">Subiksha Portfolio</h2>
            <p className="loading-subtitle">Crafting digital experiences with passion</p>
            <div className="loading-progress">
              <div className="progress-bar"></div>
            </div>
          </div>
          <div className="loading-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`loading-particle loading-particle-${i}`}></div>
            ))}
          </div>
        </div>
      )}
      
      <motion.div 
        className={`hero-container ${isLoading ? 'hidden' : 'visible'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Animation */}
        <div className="hero-background">
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i}`}></div>
            ))}
          </div>
        </div>

        
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="hero-name">
                <span className="name-highlight">Subiksha P R</span>
              </h1>
              <h2 className="hero-title">
                {typingText}
                <span className="typing-cursor">|</span>
              </h2>
              <div className="hero-description">
                <p>
            Welcome to my portfolio! I am a dedicated Full Stack Developer with hands-on experience in designing, developing, and deploying robust web applications. My expertise spans React, Node.js, Express, and MongoDB, complemented by a strong academic background as an M.Sc. Software Systems student. I am passionate about leveraging technology to deliver innovative, scalable solutions and am eager to collaborate on impactful projects.
                </p>
                
                {/* Download Resume Button */}
              <motion.a
                href="/assets/Subiksha-Resume.pdf"
                download="Subiksha-Resume.pdf"
                className="download-resume-btn"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📄 Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Professional Summary Card */}
          <motion.div 
            className="professional-summary"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h3>Professional Summary</h3>
            <div className="summary-content">
              <p>
                Full Stack Developer with 7 months of industry-level internship experience in designing, 
                developing, and deploying end-to-end web applications. Proficient in building scalable APIs, 
                optimizing frontend performance, and automating deployments with Docker, Kubernetes, and Helm.
              </p>
              
              {/* Contact Information */}
              <div className="contact-info">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>subiksharameshkanna@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Bengaluru, Karnataka</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Social Icons */}
        <motion.div 
          className="floating-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <a href="https://linkedin.com/in/subikshapr" className="social-icon linkedin">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Subiksha1705" className="social-icon github">
            <FaGithub />
          </a>
          <a href="mailto:subiksharameshkanna@gmail.com?subject=Portfolio Contact&body=Hello Subiksha," className="social-icon email" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
