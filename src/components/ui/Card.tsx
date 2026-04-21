import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      className={`
        bg-darkGray border border-gray-800 
        ${hover ? 'hover:border-primary transition-colors duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
