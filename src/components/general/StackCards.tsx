'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type StackVariant =
  | 'programmingLanguages'
  | 'frameworks'
  | 'variant3'
  | 'variant4'
  | 'variant5'
  | 'variant6'
  | 'variant7'
  | 'variant8'
  | 'variant9'
  | 'variant10'
  | 'variant11'
  | 'variant12';

const logoLists: Record<StackVariant, string[]> = {
  programmingLanguages: [
    '/assets/techstacklogos/html5.svg',
    '/assets/techstacklogos/css.svg',
    '/assets/techstacklogos/javascript.svg',
    '/assets/techstacklogos/typescript.svg',
  ],
  frameworks: [
    '/assets/techstacklogos/react.svg',
    '/assets/techstacklogos/nextjs.svg',
    '/assets/techstacklogos/vue.svg',
    '/assets/techstacklogos/svelte.svg',
  ],
  variant3: [],
  variant4: [],
  variant5: [],
  variant6: [],
  variant7: [],
  variant8: [],
  variant9: [],
  variant10: [],
  variant11: [],
  variant12: [],
};

interface StackCardsProps {
  variant?: StackVariant;
}

const StackCards: React.FC<StackCardsProps> = ({ variant = 'programmingLanguages' }) => {
  const logos = logoLists[variant];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [logos.length]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % logos.length);
  };

  return (
    <div
      className="w-full bg-custom-gray rounded-2xl p-5 flex items-center justify-center"
      onClick={handleNext}
    >
      <div className="w-full aspect-[5/3] bg-white rounded-xl relative overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={logos[index]}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={logos[index]}
              alt={`Logo ${index}`}
              width={250}
              height={100}
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StackCards;
