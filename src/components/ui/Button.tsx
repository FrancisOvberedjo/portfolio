import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gray' | 'outline';
  icon?: LucideIcon;
  iconClassName?: string;
  children: React.ReactNode;
  downloadHref?: string;
}

const Button = ({
  variant = 'gray',
  icon: Icon,
  iconClassName = '',
  children,
  className = '',
  downloadHref,
  ...props
}: ButtonProps) => {
  const isOutline = variant === 'outline';

  const baseClass = cn(
    'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ease-in-out',
    isOutline
      ? 'border border-gray-800 text-gray-800 bg-white hover:bg-orange-500 hover:text-white'
      : 'bg-custom-gray text-custom-black hover:text-white hover:bg-custom-accent',
    className
  );

  const iconElement = Icon && (
    isOutline ? (
      <span className="bg-custom-gray p-1.5 rounded-full">
        <Icon size={16} className={cn('text-custom-gray group-hover:text-white', iconClassName)} />
      </span>
    ) : (
      <Icon size={16} className={cn('text-custom-black group-hover:text-white', iconClassName)} />
    )
  );

  if (downloadHref) {
    return (
      <a href={downloadHref} download className={cn(baseClass, 'group')}>
        <span>{children}</span>
        {iconElement}
      </a>
    );
  }

  return (
    <button {...props} className={cn(baseClass, 'group')}>
      <span>{children}</span>
      {iconElement}
    </button>
  );
};

export default Button;
