import { ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  iconClassName?: string;
  children: React.ReactNode;
  downloadHref?: string;
}

const Button = ({
  variant = 'primary',
  icon: Icon,
  iconClassName = '',
  children,
  className = '',
  downloadHref,
  ...props
}: ButtonProps) => {
  const isSecondary = variant === 'secondary';

  const baseClass =
    'relative group overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ease-in-out ' +
    (isSecondary
      ? 'border border-gray-800 text-gray-800 bg-white hover:text-white'
      : 'bg-custom-gray text-custom-black hover:text-white') +
    (className ? ` ${className}` : '');

  const bgAnimation = isSecondary
    ? 'before:absolute before:inset-0 before:bg-orange-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out group-hover:before:scale-x-100 before:z-0'
    : 'before:absolute before:inset-0 before:bg-custom-accent before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out group-hover:before:scale-x-100 before:z-0';

  const contentClass = 'relative z-10 flex items-center gap-2';

  const iconElement = Icon && (
    isSecondary ? (
      <span className="bg-custom-gray p-1.5 rounded-full">
        <Icon size={16} className={`text-custom-gray group-hover:text-white ${iconClassName}`} />
      </span>
    ) : (
      <Icon size={16} className={`text-custom-black group-hover:text-white ${iconClassName}`} />
    )
  );

  if (downloadHref) {
    return (
      <a href={downloadHref} download className={`${baseClass} ${bgAnimation}`}>
        <span className={contentClass}>
          {children}
          {iconElement}
        </span>
      </a>
    );
  }

  return (
    <button {...props} className={`${baseClass} ${bgAnimation}`}>
      <span className={contentClass}>
        {children}
        {iconElement}
      </span>
    </button>
  );
};

export default Button;
