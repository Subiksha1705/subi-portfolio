import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../../Hero.css';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [socialFaded, setSocialFaded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const fullText = 'Associate Software Engineer';

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

    // Scroll detection for social icons fade
    let fadeTimer;
    
    const handleScroll = () => {
      // Hide scroll indicator after first scroll
      setHasScrolled(true);
      
      // User is scrolling - show icons at full opacity
      setSocialFaded(false);
      
      // Clear any existing fade timer
      clearTimeout(fadeTimer);
      
      // Set timer to fade icons after 5 seconds of no scrolling
      fadeTimer = setTimeout(() => {
        setSocialFaded(true);
      }, 5000);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initialize with full visibility
    setSocialFaded(false);
    
    // Start fade timer - fade after 5 seconds of no activity
    fadeTimer = setTimeout(() => {
      setSocialFaded(true);
    }, 5000);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(typingTimer);
      clearTimeout(fadeTimer);
      window.removeEventListener('scroll', handleScroll);
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

        {/* Hero Content - Two Column Layout */}
        <div className="hero-content">
          {/* Left Column: Text Content */}
          <motion.div 
            className="hero-text-section"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.h1 
              className="hero-name"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Subiksha <span className="name-highlight">P R</span>
            </motion.h1>
            
            <motion.h2 
              className="hero-title"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {typingText}
              <span className="typing-cursor">|</span>
            </motion.h2>
            
            <motion.div 
              className="hero-description"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p>
                Associate Software Engineer with 13 months of internship experience 
                working on live, production-grade full-stack systems. Skilled in React, 
                Next.js, Node.js, REST APIs, and cloud infrastructure.
              </p>
            </motion.div>
            
            {/* Resume Button */}
            <motion.a
              href="/assets/subi_tech_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-resume-btn"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div 
            className="hero-image-section"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="profile-image-wrapper">
              {/* Purple circular ring */}
              <div className="profile-image-ring"></div>
              {/* Inner container with overflow hidden */}
              <div className="profile-image-container">
                <img 
                  src="/assets/profile.png" 
                  alt="Subiksha P R"
                  className="profile-image"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Absolute at bottom of hero */}
        <motion.div 
          className={`hero-scroll-indicator ${hasScrolled ? 'hidden' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: hasScrolled ? 0 : 0.7 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="hero-scroll-mouse"></div>
          <span>Scroll</span>
        </motion.div>

        {/* Floating Social Icons */}
        <motion.div 
          className={`floating-social ${socialFaded ? 'faded' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <a href="https://linkedin.com/in/subikshapr" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Subiksha1705" className="social-icon github" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:subiksharameshkanna@gmail.com" className="social-icon email" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
