'use client';

import ImageCard from '@/components/general/ImageCard';
import RotatingTitles from '@/components/general/RotatingTitles';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='w-full px-3 md:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 text-center'>

     
      <RotatingTitles/>
    
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wide uppercase mt-[-10]'
      >
        francis ovberedjo
      </motion.h1>
   
      <div className='lg:grid grid-cols-3'>

        <div>

        </div>
        
        <div>
          <ImageCard />
          <div className='text-left text-xs mt-0.5font-light'>Based in Lagos, Nigeria.</div>
        </div>
        
        <div>

        </div>

      </div>


    </section>
  );
};

export default Hero;
