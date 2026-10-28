'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MotionWrapper({
  children,
  className = '',
  delay = 0,
}: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
