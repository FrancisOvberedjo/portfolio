'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const titles = [
  'Front-End Web Developer',
  'UI/UX Designer',
  'Graphic Designer',
];

export default function RotatingTitles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000); // Slower, more elegant timing
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      {/* Colored dot */}
      <div className="w-2 h-2 bg-primary-accent rounded-[2px]" />

      {/* Text container with improved mask */}
      <div
        className="relative h-6 w-[270px] overflow-hidden"
        style={{
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(0,0,0,0))',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(0,0,0,0))',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={titles[index]}
            initial={{ y: '100%', opacity: 0, filter: 'blur(6px)' }}
            animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: '-100%', opacity: 0, filter: 'blur(6px)' }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0.0, 0.2, 1], // smoother easing
            }}
            className="absolute top-0 left-0 w-full font-light text-center text-black"
          >
            {titles[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
