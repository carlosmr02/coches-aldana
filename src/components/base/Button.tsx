
import React from 'react';

interface ButtonProps {
  /** Content to be displayed inside the button */
  children: React.ReactNode;
  /** Visual style variant of the button */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional CSS classes */
  className?: string;
  /** Native button type attribute */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * A reusable button component that supports multiple visual variants,
 * sizes and custom styling. It safely falls back to default styles
 * if an unknown variant or size is supplied.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  // Core styling that is always applied
  const baseClasses =
    'whitespace-nowrap cursor-pointer font-medium transition-all duration-300 flex items-center justify-center transform hover:scale-105 active:scale-95';

  // Mapping from variant name to Tailwind utility classes
  const variantClasses: Record<
    NonNullable<ButtonProps['variant']>,
    string
  > = {
    primary:
      'bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl hover:shadow-gold-500/20',
    secondary: 'bg-gray-600 text-white hover:bg-gray-500 shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-black text-black hover:bg-black hover:text-white shadow-lg hover:shadow-xl',
  };

  // Mapping from size name to Tailwind utility classes
  const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  // Defensive lookup – fall back to primary / md if an unexpected key is used
  const variantClass = variantClasses[variant] ?? variantClasses.primary;
  const sizeClass = sizeClasses[size] ?? sizeClasses.md;

  // Build the final class string, ignoring any falsy values
  const combinedClasses = [
    baseClasses,
    variantClass,
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // No‑op click handler to avoid passing undefined to the DOM element
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      try {
        onClick(e);
      } catch (err) {
        // Log the error but prevent it from breaking the UI
        console.error('Button onClick handler threw an error:', err);
      }
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}
