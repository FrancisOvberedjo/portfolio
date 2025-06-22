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
    inline-flex items-center justify-center
    gap-3 px-6 py-3
    text-sm font-bold tracking-wide uppercase
    bg-[#754AF8] text-[#121212]
    border-2 border-[#2B2B2B]
    rounded-none
    hover:bg-[#ADFF00] hover:text-white
    transition-all duration-200 ease-in-out
    shadow-[4px_4px_0_#2B2B2B]
  `;

  const iconWrapper = Icon && (
    <Icon size={16} className={`text-inherit ${iconClassName}`} />
  );

  const inner = (
    <>
      {children}
      {iconWrapper}
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
