import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  align = 'center' 
}) => {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`${alignment[align]} mb-12`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {children}
        <div className="h-1 w-24 bg-gradient-to-r from-pink-600 to-pink-400 mt-2 mx-auto rounded-full" />
      </motion.h2>
    </div>
  );
};

export default SectionTitle;