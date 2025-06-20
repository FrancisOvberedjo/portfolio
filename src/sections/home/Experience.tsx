'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeader from '@/components/general/SectionHeader';
import SectionTitle from '@/components/general/SectionTitle';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  duties: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Web Developer',
    company: 'DAF - BLEX I.C.T Services',
    duration: 'Feb 2024 - Present',
    duties: [
      'Designed and developed landing pages and business websites for clients using modern web technologies.',
      'Built responsive, high-performance websites with Next.js, React, Vite, Tailwind CSS, and TypeScript.',
      'Created engaging UI animations and transitions using Framer Motion to enhance user experience.',
      'Designed all accompanying graphics (hero images, Logos, icons, mockups) using design tools like Adobe Illustrator and Figma.',
      'Also developed simple static websites using pure HTML and CSS for lightweight projects.',
      'Collaborated with clients to gather requirements, present concepts, and deliver clean, optimized code.',
    ],
  },
  {
    title: 'Founder & Creative Lead',
    company: 'Webink Creative Studios',
    duration: 'Jan 2024 - Present',
    duties: [
      'Started and ran a creative business offering web design and branding services to small businesses and startups.',
      'Designed and developed modern, responsive websites primarily using WordPress, Elementor, and custom themes.',
      'Provided end-to-end branding: logos, social media kits, product packaging, and marketing materials.',
      'Worked closely with clients to understand their brand goals and translated them into digital solutions.',
      'Managed client communication, invoicing, and project delivery timelines independently.',
    ],
  },
  {
    title: 'Front-End Developer • Intern',
    company: 'Lofty Edge Networks Limited',
    duration: 'Aug 2022 - Feb 2023',
    duties: [
      'Assisted the front-end development team with web design tasks and simple layout fixes.',
      'Learned and applied principles of responsive web design and mobile-first development.',
      'Gained hands-on experience with HTML, CSS, and basic JavaScript under supervision.',
      'Introduced to UI/UX design fundamentals and contributed to small design improvements.',
      'Observed real-world development workflows and improved debugging and code organization skills.',
      'Practiced Git and GitHub basics to collaborate on code changes and understand version control.',
    ],
  },
  {
    title: 'Graphic Designer',
    company: 'Star Ventures',
    duration: 'Feb 2015 - Jan 2018',
    duties: [
      'Created branding assets including logos, flyers, business cards, and social media visuals.',
      'Used tools like Adobe Illustrator, Photoshop, Canva, and CorelDRAW to design for both digital and print.',
      'Supported businesses in building strong, consistent visual identities.',
      'Managed multiple design projects simultaneously, balancing priorities and client feedback.',
      'Prepared design files for print production, ensuring high-quality output and color accuracy.',
    ],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (

    <section className='mt-6 w-full px-3 md:max-w-3xl lg:max-w-6xl  items-center justify-center mx-auto'>
      <SectionHeader title='Experience' index='04'/>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        
      <div>
      <SectionTitle title='Experience'/>
      </div>

    <div className="w-full max-w-3xl mx-auto px-4">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="border-b border-gray-700 py-4"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div>
              <p className="font-semibold text-lg">{exp.title}</p>
              <p className="text-sm text-gray-400">{exp.company}</p>
              <p className="text-xs text-gray-500">{exp.duration}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">
              {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
            </div>
          </div>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pl-4 mt-4 space-y-2 text-sm text-gray-300"
              >
                {exp.duties.map((duty, i) => (
                  <li key={i} className="list-disc ml-4">{duty}</li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>


      </div>
    </section>
  );
};

export default Experience;
