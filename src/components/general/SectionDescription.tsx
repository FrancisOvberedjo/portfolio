'use client';

import { motion } from 'framer-motion';

type SectionDescriptionProps = {
  text: string;
  className?: string;
  color?: 'default' | 'white';
};

const SectionDescription = ({
  text,
  className = '',
  color = 'default',
}: SectionDescriptionProps) => {
  const textColor =
    color === 'white' ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-300';

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`text-base md:text-lg max-w-2xl mx-auto px-4 ${textColor} ${className}`}
    >
      {text}
    </motion.p>
  );
};

export default SectionDescription;
