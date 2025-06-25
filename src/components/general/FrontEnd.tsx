'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

interface Tech {
  name: string;
  icon: string;
}

interface Slide {
  heading: string;
  items: Tech[];
}

const slides: Slide[] = [
  {
    heading: 'Programming Languages',
    items: [
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    heading: 'Frameworks',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Vue.js', icon: 'vuejs' },
      { name: 'Angular', icon: 'angular' },
    ],
  },
  {
    heading: 'Styling',
    items: [
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Sass', icon: 'sass' },
    ],
  },
];

export default function FrontEnd() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Desktop View: Show all cards in 3-column grid */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="backdrop-blur-md bg-white/30 shadow-lg border border-white/20 rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold mb-6 text-gray-800">{slide.heading}</h2>
            <div className="grid grid-cols-3 gap-6">
              {slide.items.slice(0, 12).map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="w-20 h-20 bg-white shadow-md rounded-xl flex items-center justify-center">
                    <Image
                      src={`/assets/frontend/${tech.icon}.svg`}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm mt-2 text-center text-gray-800">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View: Slider */}
      <div className="lg:hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.35 }}
            className="backdrop-blur-md bg-white/30 shadow-lg border border-white/20 rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold mb-6 text-gray-800">
              {slides[current].heading}
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {slides[current].items.slice(0, 12).map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="w-20 h-20 bg-white shadow-md rounded-xl flex items-center justify-center">
                    <Image
                      src={`/assets/frontend/${tech.icon}.svg`}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm mt-2 text-center text-gray-800">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Buttons */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
          <button onClick={prev} className="text-2xl font-bold text-gray-700">{'‹'}</button>
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
          <button onClick={next} className="text-2xl font-bold text-gray-700">{'›'}</button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? 'bg-black' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
