import React from 'react';

// Common Gradients & Filters
const Defs = () => (
  <defs>
    <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#E7E5E4" />
      <stop offset="100%" stopColor="#A8A29E" />
    </linearGradient>
    <linearGradient id="darkMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#57534E" />
      <stop offset="100%" stopColor="#292524" />
    </linearGradient>
    <linearGradient id="beltRubberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#44403C" />
      <stop offset="100%" stopColor="#1C1917" />
    </linearGradient>
    {/* Logitech Blue Gradient */}
    <linearGradient id="blueHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#00B8FC" />
      <stop offset="100%" stopColor="#0095CC" />
    </linearGradient>
    <pattern id="fabricPattern" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="2" height="4" transform="translate(0,0)" fill="#333" />
    </pattern>
    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.15"/>
    </filter>
  </defs>
);

interface ShapeProps {
  className?: string;
}

export const TimingGear3D: React.FC<ShapeProps> = ({ className }) => (
  <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
    <Defs />
    <g filter="url(#dropShadow)">
      {/* Belt Path */}
      <path d="M100 200 C 100 100, 300 100, 300 200 C 300 300, 100 300, 100 200" 
            fill="none" stroke="url(#beltRubberGrad)" strokeWidth="25" strokeLinecap="round" />
      
      {/* Teeth details on belt */}
      <path d="M100 200 C 100 100, 300 100, 300 200 C 300 300, 100 300, 100 200" 
            fill="none" stroke="url(#blueHighlight)" strokeWidth="2" strokeDasharray="10 15" opacity="0.8" />

      {/* Gears */}
      <circle cx="100" cy="200" r="60" fill="url(#metalGrad)" stroke="#57534E" strokeWidth="4" />
      <circle cx="100" cy="200" r="20" fill="#292524" />
      
      <circle cx="300" cy="200" r="60" fill="url(#metalGrad)" stroke="#57534E" strokeWidth="4" />
      <circle cx="300" cy="200" r="20" fill="#292524" />

      {/* Decorative bolts */}
      <circle cx="100" cy="170" r="5" fill="#57534E" />
      <circle cx="100" cy="230" r="5" fill="#57534E" />
      <circle cx="300" cy="170" r="5" fill="#57534E" />
      <circle cx="300" cy="230" r="5" fill="#57534E" />
    </g>
  </svg>
);

export const PulleySystem3D: React.FC<ShapeProps> = ({ className }) => (
  <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
    <Defs />
    <g filter="url(#dropShadow)">
      <circle cx="200" cy="200" r="150" fill="none" stroke="#E7E5E4" strokeWidth="1" opacity="0.2" />
      
      {/* Complex belt routing */}
      <path d="M120 120 L 280 120 L 200 300 Z" 
            fill="none" stroke="url(#beltRubberGrad)" strokeWidth="15" strokeLinejoin="round" />
            
      {/* Pulleys */}
      <circle cx="120" cy="120" r="30" fill="url(#metalGrad)" stroke="#57534E" strokeWidth="2" />
      <circle cx="280" cy="120" r="30" fill="url(#metalGrad)" stroke="#57534E" strokeWidth="2" />
      <circle cx="200" cy="300" r="40" fill="url(#metalGrad)" stroke="#57534E" strokeWidth="2" />
      
      {/* Tensioner */}
      <circle cx="160" cy="200" r="15" fill="url(#blueHighlight)" stroke="#fff" strokeWidth="2" />
    </g>
  </svg>
);

export const TimingBelt3D: React.FC<ShapeProps> = ({ className }) => (
  <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
    <Defs />
    <g filter="url(#dropShadow)">
      {/* Main Belt Loop */}
      <ellipse cx="200" cy="200" rx="140" ry="80" 
               fill="none" stroke="url(#beltRubberGrad)" strokeWidth="30" />
      
      {/* Inner Teeth Layer */}
      <ellipse cx="200" cy="200" rx="138" ry="78" 
               fill="none" stroke="url(#blueHighlight)" strokeWidth="4" strokeDasharray="8 8" opacity="0.9" />
               
      {/* Decorative Cogs inside */}
      <circle cx="120" cy="200" r="50" fill="url(#metalGrad)" opacity="0.8" />
      <circle cx="280" cy="200" r="50" fill="url(#metalGrad)" opacity="0.8" />
    </g>
  </svg>
);

export const RibbedBelt3D: React.FC<ShapeProps> = ({ className }) => (
  <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
    <Defs />
    <g filter="url(#dropShadow)">
       {/* Twisted Figure 8 Belt */}
       <path d="M100 150 C 50 150, 50 250, 100 250 L 300 250 C 350 250, 350 150, 300 150 Z" 
             fill="none" stroke="url(#beltRubberGrad)" strokeWidth="28" />
             
       {/* Ribs Texture */}
       <path d="M100 150 C 50 150, 50 250, 100 250 L 300 250 C 350 250, 350 150, 300 150 Z" 
             fill="none" stroke="url(#blueHighlight)" strokeWidth="24" strokeDasharray="2 6" opacity="0.2" />

       {/* Pulleys */}
       <circle cx="100" cy="200" r="45" fill="url(#metalGrad)" stroke="#444" strokeWidth="2" />
       <circle cx="300" cy="200" r="45" fill="url(#metalGrad)" stroke="#444" strokeWidth="2" />
    </g>
  </svg>
);

export const RawEdgeBelt3D: React.FC<ShapeProps> = ({ className }) => (
  <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
    <Defs />
    <g filter="url(#dropShadow)">
      {/* Belt Loop in background */}
      <path d="M 50 200 Q 50 100 200 100 Q 350 100 350 200" fill="none" stroke="url(#beltRubberGrad)" strokeWidth="20" strokeLinecap="round" opacity="0.5"/>

      {/* Cross Section Box Visualization */}
      <path d="M140 180 L 260 180 L 240 280 L 160 280 Z" 
            fill="url(#beltRubberGrad)" stroke="#57534E" strokeWidth="1" />
      
      {/* Raw Edge Texture Layer (Blue Highlight for tech feel) */}
      <rect x="140" y="180" width="120" height="30" fill="url(#blueHighlight)" opacity="0.9" />
      
      {/* Fibers */}
      <path d="M160 280 L 240 280" stroke="#78716C" strokeWidth="4" strokeDasharray="4 4" />
      
      {/* Label Lines */}
      <line x1="260" y1="180" x2="320" y2="160" stroke="#00B8FC" strokeWidth="1" />
      <circle cx="320" cy="160" r="3" fill="#00B8FC" />
    </g>
  </svg>
);

export const WrappedBelt3D: React.FC<ShapeProps> = ({ className }) => (
  <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
    <Defs />
    <g filter="url(#dropShadow)">
      {/* Circular Belt */}
      <circle cx="200" cy="200" r="120" fill="none" stroke="url(#beltRubberGrad)" strokeWidth="35" />
      
      {/* Fabric Wrapping Texture */}
      <circle cx="200" cy="200" r="120" fill="none" stroke="url(#fabricPattern)" strokeWidth="35" opacity="0.4" />
      
      {/* Highlight Ring */}
      <circle cx="200" cy="200" r="137" fill="none" stroke="url(#blueHighlight)" strokeWidth="2" opacity="0.6" />
      <circle cx="200" cy="200" r="103" fill="none" stroke="url(#blueHighlight)" strokeWidth="2" opacity="0.6" />

      {/* Detail patch */}
      <path d="M 150 200 L 250 200" stroke="#57534E" strokeWidth="2" opacity="0.5" />
    </g>
  </svg>
);
