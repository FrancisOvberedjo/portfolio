'use client';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const icons = [
  {
    href: 'https://linkedin.com/in/yourusername',
    Icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/yourusername',
    Icon: Github,
    label: 'GitHub',
  },
  {
    href: 'mailto:yourname@gmail.com',
    Icon: Mail,
    label: 'Email',
  },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      {icons.map(({ href, Icon, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="group rounded-full border border-gray-400 p-3 transition-colors duration-200 hover:bg-gray-400"
          aria-label={label}
        >
          <Icon className="w-5 h-5 text-gray-700 group-hover:text-white" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
