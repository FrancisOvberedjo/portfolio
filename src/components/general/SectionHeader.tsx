'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  index: string;
}

export default function SectionHeader({ title, index }: SectionHeaderProps) {
  return (
    <div className="w-full mt-14">
      {/* Section Divider with Centered + */}
      <motion.div
        className="flex items-center justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex-grow h-px bg-black/20" />
        <div className="px-4 text-black text-xl font-light">+</div>
        <div className="flex-grow h-px bg-black/20" />
      </motion.div>

      {/* Section Header */}
      <motion.div
        className="w-full flex items-center justify-between py-2 text-sm md:text-base relative"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
      >
        {/* Left: Red square + Title */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary-accent rounded-[2px]"></div>
          <span className=" text-dark-gray">{title}</span>
        </div>

        {/* Index: mobile = right, desktop = center */}
        <div className="md:hidden text-dark-gray">{index}</div>

        {/* Center (desktop only) */}
        <div className="hidden md:flex justify-center flex-1 absolute left-1/2 -translate-x-1/2 pointer-events-none text-dark-gray">
          <span>{index}</span>
        </div>

        {/* Right (desktop only) */}
        <div className="hidden md:block text-dark-gray">©2025</div>
      </motion.div>
    </div>
  );
}
