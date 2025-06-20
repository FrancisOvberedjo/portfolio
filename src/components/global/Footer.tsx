'use client';

import Link from 'next/link';
import SocialIcons from '../ui/SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-10 lg:mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">YourLogo</h2>
          <p className="text-sm mt-2">Building modern digital experiences.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-sm">
            <li>Phone: +234 000 000 0000</li>
            <li>Address: Lagos, Nigeria</li>
            <li>Email: yourmail@gmail.com</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
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
