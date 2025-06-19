'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Button from '../ui/Button';

const menuItems = ['Home', 'About', 'Services', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative z-50">
      {/* Thin orange line */}
      <div className="w-full h-1.5 bg-custom-accent fixed top-0 left-0 z-50" />

      {/* Navbar */}
      <motion.div
        className="fixed top-0 left-0 w-full px-20 py-4 flex items-center justify-between bg-white z-40"
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={120}
          height={40}
          className="h-8 w-auto"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex  items-center justify-center space-x-8">
          {menuItems.map((item) => (
            <motion.div
              key={item}
              className="font-semibold  text-sm cursor-pointer"
              initial={{ color: '#121212', scale: 1 }}
              whileHover={{ color: '#f97316', scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {item}
            </motion.div>
          ))}


          <Button>Portfolio</Button>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="text-custom-black md:hidden"
        >
          <Plus size={28} />
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full bg-custom-accent text-white z-30 pt-[5.5rem] overflow-hidden origin-top md:hidden"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0.6 }}
            transition={{
              scaleY: {
                type: 'spring',
                stiffness: 150,
                damping: 14,
              },
              opacity: {
                duration: 0.2,
              },
            }}
            style={{ transformOrigin: 'top' }}
          >
            <div className="px-4">
              <div className="w-full h-[1px] bg-white opacity-30 mb-1 mx-auto" />
              {menuItems.map((item, index) => (
                <div key={item}>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="font-bold py-1"
                  >
                    {item}
                  </motion.div>
                  <div className="w-full h-[1px] bg-white opacity-30 my-1 mx-auto" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
