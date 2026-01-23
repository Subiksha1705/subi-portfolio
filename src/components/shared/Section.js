import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  headerAnimation = true
}) => {
  const HeaderComponent = headerAnimation ? motion.div : 'div';
  const headerProps = headerAnimation ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  } : {};

  return (
    <section className={`section ${className}`} id={id}>
      <div className="container">
        {(title || subtitle) && (
          <HeaderComponent
            className="section-header"
            {...headerProps}
          >
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </HeaderComponent>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;