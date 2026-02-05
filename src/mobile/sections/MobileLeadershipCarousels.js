import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCrown, FaHandshake, FaTrophy } from 'react-icons/fa';
import MobileCarousel from '../MobileCarousel';

export default function MobileLeadershipCarousels() {
  const achievements = [
    {
      id: 1,
      title: "First Place, Hackwave'24",
      event: 'Inter-department Event',
      project: 'Hostel Management System',
      institution: 'Kongu Engineering College',
      date: 'March 2, 2024',
      icon: <FaTrophy className="achievement-icon first-place" />,
    },
    {
      id: 2,
      title: 'Third Place, National Science Day Prototype Expo',
      event: 'Inter-college Event',
      project: 'Hostel Management',
      institution: 'Kongu Engineering College',
      date: 'February 28, 2024',
      icon: <FaTrophy className="achievement-icon third-place" />,
    },
  ];

  const leadershipRoles = [
    {
      id: 1,
      position: 'Department Coordinator',
      organization: 'IEC Innovation and Entrepreneurship Council',
      period: '2024 – Present',
      icon: <FaCrown className="leadership-icon" />,
      color: '#8B5CF6',
    },
    {
      id: 2,
      position: 'Executive Member',
      organization: 'SDC Self Development Club',
      period: '2022 – 2025',
      icon: <FaUsers className="leadership-icon" />,
      color: '#10B981',
    },
    {
      id: 3,
      position: 'Executive Member',
      organization: 'GEC Gender Equality Club',
      period: '2022 – 2023',
      icon: <FaHandshake className="leadership-icon" />,
      color: '#EF4444',
    },
  ];

  return (
    <section className="leadership-section" id="leadership">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Building communities, leading initiatives, and achieving excellence</p>
        </motion.div>

        <div className="achievements-grid">
          <MobileCarousel ariaLabel="Achievements" adaptiveHeight>
            {achievements.map((achievement) => (
              <div key={achievement.id} className="mobile-carousel-slide">
                <div className="achievement-card">
                  <div className="achievement-icon-container">{achievement.icon}</div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-event">{achievement.event}</p>
                    <p className="achievement-project">Project: {achievement.project}</p>
                    <p className="achievement-institution">{achievement.institution}</p>
                    <p className="achievement-date">{achievement.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>

        <div className="leadership-roles">
          <h3 className="subsection-title">Leadership & Extracurricular</h3>
          <MobileCarousel ariaLabel="Leadership & Extracurricular" adaptiveHeight>
            {leadershipRoles.map((role) => (
              <div key={role.id} className="mobile-carousel-slide">
                <div className="leadership-card">
                  <div className="role-icon-container" style={{ backgroundColor: `${role.color}20`, color: role.color }}>
                    {role.icon}
                  </div>
                  <div className="role-content">
                    <h4 className="role-position">{role.position}</h4>
                    <h5 className="role-organization">{role.organization}</h5>
                    <p className="role-period">{role.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>
      </div>
    </section>
  );
}

