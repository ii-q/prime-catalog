import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, className = '', value, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs font-bold text-prime-muted uppercase tracking-wider"
      >
        {label}
      </label>
      <input
        id={id}
        value={value}
        className={`w-full bg-prime-bg border border-prime-border rounded-lg px-4 py-4 font-sans text-prime-text placeholder-prime-muted/50 hover:border-prime-blue/50 focus:border-prime-blue focus:ring-1 focus:ring-prime-blue focus:outline-none transition-all duration-200 ${className}`}
        placeholder={label}
        {...props}
      />
    </div>
  );
};