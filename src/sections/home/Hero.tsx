'use client';

import ImageCard from '@/components/general/ImageCard';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='mt-6 w-full px-4 md:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 text-center'>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='text-3xl lg:text-7xl font-extrabold uppercase'
      >
        francis ovberedjo
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ImageCard />
      </motion.div>
    </section>
  );
};

export default Hero;
