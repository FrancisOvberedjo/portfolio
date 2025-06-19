'use client';

import { motion } from 'framer-motion';

type SectionTitleProps = {
  title: string;
  className?: string;
  color?: 'default' | 'white';
};

const SectionTitle = ({
  title,
  className = '',
  color = 'default',
}: SectionTitleProps) => {
  const textColor =
    color === 'white' ? 'text-white' : 'text-neutral-900 dark:text-white';

  return (
    <div className={`overflow-hidden`}>
      <motion.h2
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1], // easeOutExpo-like
        }}
        className={`font-bold font-red text-5xl lg:text-7xl py-5 ${textColor} ${className}`}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
