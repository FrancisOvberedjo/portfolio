'use client';

import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from '../ui/SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-10 lg:mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo */}
        <div>
          <Image 
            src="/assets/logo-white.svg" 
            alt="Your Logo" 
            width={120} 
            height={40} 
            className="object-contain"
          />
          <p className="text-sm mt-2">Francis | Front-End Developer, UI/UX Designer, and Graphic Artist crafting clean, functional digital experiences.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-primary-accent mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className='hover:text-primary-accent'>Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-primary-accent mb-2">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Phone: +234 816 112 2595</li>
            <li>Address: Lagos, Nigeria</li>
            <li>Email: francisovberedjo@gmail.com</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-primary-accent mb-2">Follow Me</h3>
          <SocialIcons />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
