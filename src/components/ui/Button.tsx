'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  children: ReactNode;
  href?: string;
  downloadHref?: string;
}

export default function Button({
  icon: Icon,
  children,
  href,
  downloadHref,
  ...props
}: ButtonProps) {
  const buttonContent = (
    <motion.div
      initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
      whileHover={{
        backgroundColor: 'var(--tw-color-primary-accent)',
        transition: { duration: 0.3 },
      }}
      className="flex items-center justify-start gap-3 rounded-full px-4 py-2 bg-transparent border border-white text-white overflow-hidden relative group transition-colors duration-300"
    >
      <motion.div
        className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-accent text-black shrink-0 transition-colors duration-300 z-10"
        whileHover={{
          backgroundColor: 'var(--tw-color-primary-accent)',
        }}
      >
        <Icon size={20} />
      </motion.div>

      <motion.span
        className="z-10 transition-colors duration-300 group-hover:text-black"
      >
        {children}
      </motion.span>

      {/* Background hover animation */}
      <motion.div
        className="absolute inset-0 bg-primary-accent rounded-full -z-10"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );

  if (downloadHref) {
    return (
      <a href={downloadHref} download>
        {buttonContent}
      </a>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      );
    }

    return <Link href={href}>{buttonContent}</Link>;
  }

  return <button {...props}>{buttonContent}</button>;
}
