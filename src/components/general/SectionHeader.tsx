'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="flex items-baseline w-full mb-8">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-semibold whitespace-nowrap"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="h-1 bg-amber-400 ml-4 flex-grow origin-left"
      />
    </div>
  );
};
