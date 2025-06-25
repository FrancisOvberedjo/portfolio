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
  const buttonClass = `
    inline-flex items-center gap-3
    pl-2 pr-4 py-2 rounded-full
    bg-black text-white
    border-2 border-white/10
    font-semibold text-sm
    transition-all duration-200
  `;

  const iconWrapper = Icon && (
    <span
      className={`
        flex items-center justify-center w-8 h-8 rounded-full
        bg-[#ADFF00] text-black
        ${iconClassName}
      `}
    >
      <Icon size={16} />
    </span>
  );

  const inner = (
    <span className="flex items-center gap-3">
      {iconWrapper}
      {children}
    </span>
  );

  if (downloadHref) {
    return (
      <a href={downloadHref} download className={`${buttonClass} ${className}`}>
        {inner}
      </a>
    );
  }

  return (
    <button {...props} className={`${buttonClass} ${className}`}>
      {inner}
    </button>
  );
};

export default Button;
