import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, id, options, value, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 relative"> 
      <label
        htmlFor={id}
        className="text-xs font-bold text-prime-muted uppercase tracking-wider"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          className={`w-full bg-prime-bg border border-prime-border rounded-lg px-4 py-4 pr-10 font-sans text-prime-text focus:border-prime-orange focus:ring-1 focus:ring-prime-orange focus:outline-none transition-all duration-200 appearance-none cursor-pointer ${className}`}
          {...props}
        >
          <option value="" disabled className="text-prime-muted">Select...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-prime-bg text-prime-text">
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-prime-muted pointer-events-none" />
      </div>
    </div>
  );
};