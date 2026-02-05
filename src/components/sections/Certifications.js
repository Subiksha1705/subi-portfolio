import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaCalendarAlt, FaExternalLinkAlt, FaAward, FaTimes } from 'react-icons/fa';
import { certificationImages } from '../../utils/imageUtils';
import OptimizedImage from '../shared/OptimizedImage';
import Section from '../shared/Section';
import '../styles/Timeline.css';
import { certificationsData } from '../../data/certifications';

// Dynamic count functions
const getTotalCerts = () => certificationsData.length;
const getUniquePlatforms = () => new Set(certificationsData.map(cert => cert.issuer)).size;

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  // Reset modal state when component unmounts
  useEffect(() => {
    return () => {
      setSelectedCert(null);
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Reset modal on page visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Optionally refresh verification URL here
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Get unique issuers for filter buttons
  const uniqueIssuers = ['all', ...new Set(certificationsData.map(cert => cert.issuer))];

  // Filter certifications based on selected issuer
  const filteredCertifications = activeFilter === 'all' 
    ? certificationsData 
    : certificationsData.filter(cert => cert.issuer === activeFilter);

  // Use dynamic count functions
  const totalCerts = getTotalCerts();
  const uniquePlatforms = getUniquePlatforms();

  return (
    <Section id="certifications" title="Certifications" subtitle={`${totalCerts} Certificates • ${uniquePlatforms} Platforms`}>
      {/* Filter Buttons */}
      <div className="cert-filter-container">
        <div className="cert-filter-buttons">
          {uniqueIssuers.map((issuer) => (
            <button
              key={issuer}
              className={`cert-filter-btn ${activeFilter === issuer ? 'active' : ''}`}
              onClick={() => setActiveFilter(issuer)}
            >
              {issuer === 'all' ? (
                <>
                  <FaFilter style={{ marginRight: '6px' }} />
                  All
                </>
              ) : (
                issuer
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="certifications-grid">
        <AnimatePresence mode="popLayout">
          {filteredCertifications.map((cert) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="certification-card-compact"
              onClick={() => setSelectedCert(cert)}
              style={{ cursor: 'pointer' }}
            >
              <div className="cert-header-compact">
                <div 
                  className="cert-icon-compact" 
                  style={{ backgroundColor: `${cert.color}20`, color: cert.color }}
                >
                  {cert.icon}
                </div>
                <div className="cert-title-compact">
                  <h6>{cert.title}</h6>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
              
              <div className="cert-meta-compact">
                <span className="cert-date">
                  <FaCalendarAlt style={{ marginRight: '4px' }} />
                  {cert.date}
                </span>
                <span className="cert-valid">{cert.validUntil}</span>
              </div>
              
              <div className="cert-skills-compact">
                {cert.skills.slice(0, 3).map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
              
              <div className="cert-action">
                <button 
                  className="view-cert-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert);
                  }}
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-overlay"
            onClick={() => setSelectedCert(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="cert-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Close Button - subtle top right */}
              <button 
                className="cert-modal-close"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              
              {/* Two-column layout for desktop */}
              <div className="cert-modal-grid">
                {/* Left: Content */}
                <div className="cert-modal-info">
                  {/* Header with icon */}
                  <div className="cert-modal-header">
                    <div 
                      className="cert-modal-icon"
                      style={{ backgroundColor: `${selectedCert.color}15`, color: selectedCert.color }}
                    >
                      {selectedCert.icon}
                    </div>
                    <div className="cert-header-text">
                      <h2 className="cert-modal-title">{selectedCert.title}</h2>
                      <p className="cert-modal-issuer">
                        <FaAward style={{ marginRight: '6px' }} />
                        {selectedCert.issuer}
                      </p>
                    </div>
                  </div>
                  
                  {/* Metadata */}
                  <div className="cert-modal-meta">
                    <span className="cert-meta-item">
                      <FaCalendarAlt style={{ marginRight: '6px' }} />
                      {selectedCert.date}
                    </span>
                    <span className="cert-meta-badge">
                      {selectedCert.validUntil}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <div className="cert-modal-description">
                    <p>{selectedCert.description}</p>
                  </div>
                  
                  {/* Skills - clean chips */}
                  <div className="cert-modal-skills">
                    <h4>Skills</h4>
                    <div className="skills-chips">
                      {selectedCert.skills.slice(0, 5).map((skill, idx) => (
                        <span key={idx} className="skill-chip">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right: Certificate Image - 40% */}
                {selectedCert.imageFile && (
                  <div className="cert-modal-image-section">
                    <div className="cert-image-container">
                      <OptimizedImage
                        src={certificationImages[selectedCert.imageFile] || selectedCert.imageFile}
                        alt={selectedCert.title}
                        className="cert-full-image"
                      />
                    </div>
                  </div>
                )}
                
                {/* Verify Certificate Button - shown when verifyUrl exists */}
                {selectedCert.verifyUrl && (
                  <button 
                    className="cert-modal-verify-btn"
                    onClick={() => window.open(selectedCert.verifyUrl, '_blank')}
                  >
                    <FaExternalLinkAlt style={{ marginRight: '8px' }} />
                    Verify Certificate
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default memo(Certifications);
