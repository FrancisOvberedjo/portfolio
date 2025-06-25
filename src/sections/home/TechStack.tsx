'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import SectionHeader from '@/components/general/SectionHeader';
import FrontEnd from '@/components/general/FrontEnd';


const sections = ['Frontend', 'Backend', 'DevTools'] as const;
type SectionType = typeof sections[number];

const TechStack = () => {
  const [active, setActive] = useState<SectionType>('Frontend');

  const index = sections.indexOf(active);

  return (
    <section className="mt-6 w-full px-3 md:max-w-3xl lg:max-w-6xl  items-center justify-center mx-auto">

      <SectionHeader title="Tech Stac" index="FO® — 03"/>

      {/* Toggle */}
      <div className="relative flex bg-gray-200 rounded-full w-full max-w-[78%] md:max-w-sm mx-auto h-12 overflow-hidden">
        {/* Indicator */}
        <motion.div
          className="absolute top-1 left-1 bottom-1 w-[calc(33.333%-0.5rem)] rounded-full bg-white shadow-md z-0"
          animate={{
            left: `calc(${index * 33.333}% + 0.25rem)`,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />

        {/* Buttons */}
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActive(section)}
            className={clsx(
              'flex-1 z-10 text-sm sm:text-base font-semibold transition-colors duration-300',
              'flex items-center justify-center',
              {
                'text-black': active === section,
                'text-[#555]': active !== section,
              }
            )}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-10 min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {active === 'Frontend' && (
              <FrontEnd/>
            )}
            {active === 'Backend' && (
              <p className="text-lg text-gray-700">
                Node.js, Express, MongoDB, Prisma, etc.
              </p>
            )}
            {active === 'DevTools' && (
              <p className="text-lg text-gray-700">
                VSCode, Git, GitHub, Figma, Postman, etc.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechStack;
