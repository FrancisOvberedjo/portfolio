'use client';

import ImageCard from '@/components/general/ImageCard';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='mt-6 w-full px-3 md:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 text-center'>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='text-3xl md:text-6xl lg:text-8xl font-extrabold uppercase'
      >
        francis
      </motion.h1>

      <div className='lg:grid grid-cols-3'>

        <div>

        </div>
        
        <div>
          <ImageCard />
        </div>
        
        <div>

        </div>

      </div>


    </section>
  );
};

export default Hero;
