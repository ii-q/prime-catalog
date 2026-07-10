import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  isLoading, 
  variant = 'primary', 
  className = '', 
  disabled,
  ...props 
}) => {
  const baseStyles = "w-full py-4 px-8 font-display font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 rounded-lg";
  
  const variants = {
    // Logitech Blue
    primary: "bg-prime-blue text-white shadow-lg hover:bg-prime-blueHover hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:bg-stone-300 disabled:text-stone-500",
    
    // Dark/Contrast for Light mode
    secondary: "bg-prime-text text-white hover:bg-black hover:-translate-y-0.5 active:translate-y-0",
    
    // Outline Dark
    outline: "bg-transparent text-prime-text border-2 border-prime-border hover:border-prime-text hover:bg-prime-text hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : children}
    </button>
  );
};
