'use client';

import { motion } from 'framer-motion';

type SectionTitleProps = {
  title: string;
  className?: string;
  color?: 'black' | 'white'; // now clearer
};

const SectionTitle = ({
  title,
  className = '',
  color = 'black', // default is black text on light bg
}: SectionTitleProps) => {
  const textColor =
    color === 'white' ? 'text-white' : 'text-custom-black';

  return (
    <div className="overflow-hidden">
      <motion.h2
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`font-bold text-2xl lg:text-4xl mb-2 uppercase ${textColor} ${className}`}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
