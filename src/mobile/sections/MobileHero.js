import React from 'react';
import { motion } from 'framer-motion';
import '../../Hero.css';

export default function MobileHero() {
  return (
    <motion.section
      id="hero"
      className="hero-container visible mobile-hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero-background">
        <div className="floating-particles">
          {[...Array(14)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`} />
          ))}
        </div>
        <div className="hero-particles">
          {[...Array(16)].map((_, i) => (
            <div key={i} className={`hero-particle hero-particle-${i}`} />
          ))}
        </div>
      </div>

      <div className="mobile-hero-content">
        <motion.div
          className="mobile-hero-image"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="profile-image-wrapper" style={{ width: 220, height: 220 }}>
            <div className="profile-image-ring" />
            <div className="profile-image-container">
              <img
                src="/assets/profile.png"
                alt="Subiksha P R"
                className="profile-image"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mobile-hero-text"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="hero-name">
            Subiksha <span className="name-highlight">P R</span>
          </h1>
          <h2 className="hero-title">Associate Software Engineer</h2>
          <div className="hero-description">
            <p>
              Associate Software Engineer with 13 months of internship experience working on live,
              production-grade full-stack systems. Skilled in React, Next.js, Node.js, REST APIs,
              and cloud infrastructure.
            </p>
          </div>
          <a
            href="/assets/subi_tech_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-resume-btn"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
