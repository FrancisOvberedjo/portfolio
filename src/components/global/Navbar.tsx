'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

const menuItems = ['Home', 'About', 'Projects', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide/show navbar on scroll (mobile only)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="relative z-50">
      {/* Thin orange line */}
      <div className="w-full h-1.5 bg-primary-accent fixed top-0 left-0 z-50" />

      {/* Sticky wrapper for desktop */}
      <div className="hidden md:block sticky top-0 z-40 bg-white transition-colors duration-300">
        <div className="w-full px-3 lg:px-20 py-4 flex items-center justify-between">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <div className="flex items-center justify-center space-x-8">
            {menuItems.map((item, index) => (
              <Link key={item} href={`/${item.toLowerCase()}`}>
                <motion.div
                  className="font-semibold text-sm cursor-pointer flex items-start space-x-1"
                  initial={{ color: '#121212', scale: 1 }}
                  whileHover={{ color: '#f97316', scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>{item}</span>
                  <sup className="text-[10px] relative top-[2px] text-gray-500">
                    {String(index + 1).padStart(2, '0')}
                  </sup>
                </motion.div>
              </Link>
            ))}
            <Button>Portfolio</Button>
          </div>
        </div>
      </div>

      {/* Mobile navbar (white) */}
      <motion.div
        className={`md:hidden fixed top-0 left-0 w-full px-3 lg:px-20 py-4 flex items-center justify-between z-40 transition-colors duration-300 ${
          isOpen ? 'bg-transparent' : 'bg-white'
        }`}
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : '-100%' }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={120}
          height={40}
          className="h-8 w-auto"
        />

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="text-custom-black"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <Plus size={28} />
        </motion.button>
      </motion.div>

      {/* Mobile Dropdown Menu (below navbar, behind logo + button) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="fixed top-[0.375rem] left-0 w-full bg-primary-accent text-custom-black z-30 pt-[5.5rem] overflow-hidden origin-top md:hidden"
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
              <div className="w-full h-[1px] bg-custom-black opacity-20 mb-1 mx-auto" />
              {menuItems.map((item, index) => (
                <div key={item}>
                  <div onClick={() => setIsOpen(false)}>
                    <Link href={`/${item.toLowerCase()}`}>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="font-bold py-1 flex items-start space-x-1"
                      >
                        <span>{item}</span>
                        <sup className="text-xs relative top-[2px] text-custom-black opacity-60">
                          {String(index + 1).padStart(2, '0')}
                        </sup>
                      </motion.div>
                    </Link>
                  </div>
                  <div className="w-full h-[1px] bg-custom-black opacity-20 my-1 mx-auto" />
                </div>
              ))}
              <div className='my-5'>
              <Button>Portfolio</Button>
              </div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
