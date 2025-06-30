'use client';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';


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
          className="group rounded-full bg-light-gray p-3 transition-colors duration-200 hover:bg-primary-accent"
          aria-label={label}
        >
          <Icon className="w-5 h-5 text-primary-accent group-hover:text-custom-black" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
