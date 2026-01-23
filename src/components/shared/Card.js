import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hoverEffect = true,
  animation = true,
  ...props
}) => {
  const MotionComponent = animation ? motion.div : 'div';
  const motionProps = animation ? {
    variants: {
      hidden: { y: 50, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    }
  } : {};

  const hoverProps = hoverEffect ? {
    whileHover: { y: -10, transition: { duration: 0.3 } }
  } : {};

  return (
    <MotionComponent
      className={`card ${className}`}
      {...motionProps}
      {...hoverProps}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Card;