import React, { memo, useMemo, useState } from 'react';
import { FaFilter, FaCalendarAlt, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import Section from '../../components/shared/Section';
import { certificationsData } from '../../data/certifications';
import { certificationImages } from '../../utils/imageUtils';
import OptimizedImage from '../../components/shared/OptimizedImage';
import MobileCarousel from '../MobileCarousel';
import MobileModal from '../MobileModal';
import '../../components/styles/Timeline.css';
import '../mobile.css';

const getTotalCerts = () => certificationsData.length;
const getUniquePlatforms = () => new Set(certificationsData.map((cert) => cert.issuer)).size;

const MobileCertificationsCarousel = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  const uniqueIssuers = useMemo(
    () => ['all', ...new Set(certificationsData.map((cert) => cert.issuer))],
    []
  );

  const filteredCertifications = useMemo(() => {
    if (activeFilter === 'all') return certificationsData;
    return certificationsData.filter((cert) => cert.issuer === activeFilter);
  }, [activeFilter]);

  const totalCerts = getTotalCerts();
  const uniquePlatforms = getUniquePlatforms();

  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle={`${totalCerts} Certificates • ${uniquePlatforms} Platforms`}
    >
      <div className="cert-filter-container">
        <div className="cert-filter-buttons">
          {uniqueIssuers.map((issuer) => (
            <button
              key={issuer}
              className={`cert-filter-btn ${activeFilter === issuer ? 'active' : ''}`}
              onClick={() => setActiveFilter(issuer)}
              type="button"
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

      <MobileCarousel ariaLabel="Certifications" adaptiveHeight>
        {filteredCertifications.map((cert) => (
          <div key={cert.id} className="mobile-carousel-slide">
            <div
              className="certification-card-compact"
              onClick={() => setSelectedCert(cert)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedCert(cert);
              }}
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
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="cert-action">
                <button
                  type="button"
                  className="view-cert-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert);
                  }}
                >
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        ))}
      </MobileCarousel>

      <MobileModal
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || 'Certificate'}
        ariaLabel="Certificate preview"
      >
        {selectedCert && (
          <div className="mobile-cert-modal">
            <div className="mobile-cert-issuer">
              <FaAward />
              <span>{selectedCert.issuer}</span>
            </div>

            <div className="mobile-cert-meta">
              <span>
                <FaCalendarAlt style={{ marginRight: '6px' }} />
                {selectedCert.date}
              </span>
              <span className="cert-meta-badge">{selectedCert.validUntil}</span>
            </div>

            {selectedCert.imageFile && (
              <OptimizedImage
                src={certificationImages[selectedCert.imageFile] || selectedCert.imageFile}
                alt={selectedCert.title}
                className="mobile-cert-image"
              />
            )}

            {selectedCert.verifyUrl && (
              <div className="mobile-cert-actions">
                <button
                  type="button"
                  className="cert-modal-verify-btn"
                  onClick={() => window.open(selectedCert.verifyUrl, '_blank')}
                >
                  <FaExternalLinkAlt style={{ marginRight: '8px' }} />
                  Verify Certificate
                </button>
              </div>
            )}
          </div>
        )}
      </MobileModal>
    </Section>
  );
};

export default memo(MobileCertificationsCarousel);

