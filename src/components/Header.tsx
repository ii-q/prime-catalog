import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  t: any;
  language: Language;
  onToggleLanguage: () => void;
}

export const PrimeLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 370 100" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    {/* Letter P */}
    <path d="M 10,0 L 28,0 L 28,100 L 10,100 Z" />
    <path d="M 28,55 L 60,55 C 72,55 72,0 60,0 L 45,0 L 28,25 Z M 28,18 L 45,18 C 50,18 50,37 45,37 L 28,37 Z" />

    {/* Letter R */}
    <path d="M 90,0 L 108,0 L 108,100 L 90,100 Z" />
    <path d="M 108,55 L 140,55 C 152,55 152,0 140,0 L 125,0 L 108,25 Z M 108,18 L 125,18 C 130,18 130,37 125,37 L 108,37 Z" />
    <path d="M 116,55 L 134,55 L 148,100 L 130,100 C 124,80 118,68 116,55 Z" />

    {/* Letter I */}
    <path d="M 165,0 L 183,0 L 183,100 L 165,100 Z" />

    {/* Letter M */}
    <path d="M 195,0 L 213,0 L 213,100 L 195,100 Z" />
    <path d="M 267,0 L 285,0 L 285,100 L 267,100 Z" />
    <path d="M 213,25 L 230,0 L 267,0 L 240,100 Z M 230,0 L 250,0 L 240,75 Z" />

    {/* Letter E */}
    <path d="M 300,0 L 318,0 L 318,100 L 300,100 Z" />
    <path d="M 318,25 L 335,0 L 355,0 L 355,18 L 318,18 Z" />
    <path d="M 318,55 L 330,37 L 350,37 L 350,55 L 318,55 Z" />
    <path d="M 318,82 L 355,82 L 355,100 L 318,100 Z" />
  </svg>
);

export const Header: React.FC<HeaderProps> = ({ t, language, onToggleLanguage }) => {
  return (
    <header className="fixed w-full top-0 z-50 bg-prime-bg/80 backdrop-blur-md border-b border-prime-border transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="text-prime-text hover:text-prime-blue transition-colors duration-300 flex items-center gap-2">
          <PrimeLogo className="h-8 w-auto" />
          <span className="hidden sm:inline-block h-4 w-[1px] bg-prime-border"></span>
          <span className="hidden sm:inline-block font-sans text-xs font-bold uppercase tracking-widest text-prime-muted/80">{t.catalog.quickSearch}</span>
        </a>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-prime-border hover:border-prime-blue hover:text-prime-blue hover:bg-prime-card transition-all duration-200"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold uppercase">{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
