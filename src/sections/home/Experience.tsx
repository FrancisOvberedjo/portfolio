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
      <SectionHeader title='Experience' index='FO® — 04'/>
      <SectionTitle title='Career Journey So Far'/>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

        <div className=' text-justify space-y-2' >
          <p>My career began with a strong foundation in visual design, working as a graphic designer to create impactful brand assets for businesses. Over time, I transitioned into front-end development, where I deepened my technical skills through hands-on experience and a front-end internship. From there, I moved into web development roles, building modern, responsive websites for clients across different industries.</p>
          <p>I started by creating websites with WordPress, Elementor, and other CMS platforms, focusing on flexible, easy-to-manage solutions for small businesses and startups. As I grew, I began working with more advanced technologies like React, Next.js, Tailwind CSS, and Framer Motion, building fast, accessible, and user-focused websites. I also integrate SEO best practices into every project—improving structure, speed, and visibility from the ground up.</p>
          <p>In 2024, I earned my B.Sc. in Software Engineering from Nigerian Army University Biu (NAUB), and now lead development at DAF - BLEX I.C.T Services while running my own creative studio, Webink. Today, I combine design thinking, clean code, and real-world strategy to build digital experiences that work beautifully and deliver results.
          </p>
        </div>

        <div className="w-full mx-auto">
            {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-b border-dark-gray py-4"
            >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
            <div>
              <p className="font-semibold text-lg text-custom-black">{exp.title}</p>
              <p className="text-md font-normal text-secondary-accent">{exp.company}</p>
              <p className="text-sm mt-2 text-dark-gray">{exp.duration}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-custom-black text-primary-accent flex items-center justify-center">
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
                className="pl-4 mt-4 space-y-2 text-sm text-custom-black"
              >
                {exp.duties.map((duty, i) => (
                  <li key={i} className="list-disc ml-4">{duty}</li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
      <div className='bg-black rounded-2xl p-30 mt-5'> </div>
    </div>

    
    </div>




     
    </section>
  );
};

export default Experience;
