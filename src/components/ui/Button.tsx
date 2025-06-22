'use client';

import { ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon;
  iconClassName?: string;
  children: React.ReactNode;
  downloadHref?: string;
}

const Button = ({
  icon: Icon,
  iconClassName = '',
  children,
  className = '',
  downloadHref,
  ...props
}: ButtonProps) => {
  const baseClass = `
    relative inline-flex items-center justify-between
    px-6 py-3 bg-[#ADFF00] text-[#121212]
    font-semibold text-xs uppercase tracking-widest
    border-[1.5px] border-[#2B2B2B]
    rounded-none
    transition-all duration-300 ease-in-out
    group hover:bg-[#754AF8] hover:text-white
  `;

  const sideAccent = `
    absolute left-0 top-0 h-full w-[6px] bg-[#2B2B2B]
    transition-transform duration-300
    group-hover:w-[10px]
  `;

  const iconWrapper = Icon && (
    <span className={`
      ml-3 transform translate-x-1 opacity-0
      transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0
    `}>
      <Icon size={14} className={`text-inherit ${iconClassName}`} />
    </span>
  );

  const content = (
    <span className="relative z-10 flex items-center">
      {children}
      {iconWrapper}
    </span>
  );

  const inner = (
    <>
      <span className={sideAccent}></span>
      {content}
    </>
  );

  if (downloadHref) {
    return (
      <a href={downloadHref} download className={`${baseClass} ${className}`}>
        {inner}
      </a>
    );
  }

  return (
    <button {...props} className={`${baseClass} ${className}`}>
      {inner}
    </button>
  );
};

export default Button;
