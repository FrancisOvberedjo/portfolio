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
    gap-2 px-6 py-3
    text-sm font-medium
    rounded-full
    bg-black text-white
    hover:bg-[#ADFF00] hover:text-black
    transition-all duration-200 ease-in-out
    shadow-sm hover:shadow-md
    active:scale-95
  `;

  const iconWrapper = Icon && (
    <Icon size={18} className={`text-inherit ${iconClassName}`} />
  );

  const inner = (
    <>
      {iconWrapper}
      {children}
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
