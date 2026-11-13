import React from 'react';

// Bespoke SVG Botanical & Luxury Wedding Ornaments

export const OliveBranchLeft = ({ className = "w-16 h-16 text-olive-500" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 90 C 25 75, 45 50, 85 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Leaves */}
    <path d="M25 73 C 20 65, 23 53, 33 55 C 38 65, 33 73, 25 73 Z" fill="currentColor" fillOpacity="0.85" />
    <path d="M42 55 C 47 45, 60 48, 57 58 C 50 63, 42 61, 42 55 Z" fill="currentColor" fillOpacity="0.85" />
    <path d="M48 48 C 40 40, 42 28, 52 30 C 58 40, 53 48, 48 48 Z" fill="currentColor" fillOpacity="0.85" />
    <path d="M68 31 C 74 21, 87 25, 84 35 C 76 40, 68 37, 68 31 Z" fill="currentColor" fillOpacity="0.85" />
    <path d="M72 26 C 65 18, 70 8, 80 10 C 85 19, 78 26, 72 26 Z" fill="currentColor" fillOpacity="0.85" />
    {/* Olives */}
    <ellipse cx="38" cy="62" rx="4" ry="6" transform="rotate(-30 38 62)" fill="#8D6E37" />
    <ellipse cx="62" cy="38" rx="4" ry="6" transform="rotate(35 62 38)" fill="#8D6E37" />
  </svg>
);

export const OliveBranchRight = ({ className = "w-16 h-16 text-olive-500" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ transform: 'scaleX(-1)' }}>
    <path d="M10 90 C 25 75, 45 50, 85 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M25 73 C 20 65, 23 53, 33 55 C 38 65, 33 73, 25 73 Z" fill="currentColor" fillOpacity="0.85" />
    <path d="M42 55 C 47 45, 60 48, 57 58 C 50 63, 42 61, 42 55 Z" fill="currentColor" fillOpacity="0.85" />
    <path d="M48 48 C 40 40, 42 28, 52 30 C 58 40, 53 48, 48 48 Z" fill="currentColor" fillOpacity="0.85" />
    <path d="M68 31 C 74 21, 87 25, 84 35 C 76 40, 68 37, 68 31 Z" fill="currentColor" fillOpacity="0.85" />
    <path d="M72 26 C 65 18, 70 8, 80 10 C 85 19, 78 26, 72 26 Z" fill="currentColor" fillOpacity="0.85" />
    <ellipse cx="38" cy="62" rx="4" ry="6" transform="rotate(-30 38 62)" fill="#8D6E37" />
    <ellipse cx="62" cy="38" rx="4" ry="6" transform="rotate(35 62 38)" fill="#8D6E37" />
  </svg>
);

export const BotanicalDivider = ({ className = "w-full max-w-xs h-8 text-gold-500" }) => (
  <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-500/60 to-gold-500"></div>
    <svg viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gold-500 shrink-0">
      <path d="M30 5 C22 15 10 15 2 15 C10 17 22 18 30 25 C38 18 50 17 58 15 C50 15 38 15 30 5Z" fill="currentColor" opacity="0.8" />
      <circle cx="30" cy="15" r="3" fill="#737B4B" />
      <circle cx="21" cy="15" r="1.5" fill="currentColor" />
      <circle cx="39" cy="15" r="1.5" fill="currentColor" />
    </svg>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-500/60 to-gold-500"></div>
  </div>
);

export const CornerFlourish = ({ className = "w-12 h-12 text-gold-500", position = "top-left" }) => {
  const rotationClass = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position] || '';

  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} ${rotationClass}`}>
      <path d="M4 60 C 4 25, 25 4, 60 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 60 C 12 32, 32 12, 60 12" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
      <circle cx="6" cy="60" r="2.5" fill="currentColor" />
      <circle cx="60" cy="6" r="2.5" fill="currentColor" />
      <path d="M22 22 C 28 14, 38 14, 40 20 C 40 28, 30 28, 22 22 Z" fill="currentColor" fillOpacity="0.4" />
      <path d="M22 22 C 14 28, 14 38, 20 40 C 28 40, 28 30, 22 22 Z" fill="currentColor" fillOpacity="0.4" />
      <circle cx="22" cy="22" r="3" fill="currentColor" />
    </svg>
  );
};

export const MonogramSeal = ({ initials = "E & A", size = "md", onClick, className = "" }) => {
  const sizeClasses = {
    sm: "w-14 h-14 text-sm",
    md: "w-20 h-20 text-lg",
    lg: "w-28 h-28 text-2xl",
  }[size] || "w-20 h-20 text-lg";

  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-olive-600 via-olive-700 to-olive-900 text-gold-100 shadow-wax-seal border-2 border-gold-400/50 cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-95 ${sizeClasses} ${className}`}
    >
      {/* Wax edge texture */}
      <div className="absolute inset-1 rounded-full border border-dashed border-gold-400/40 pointer-events-none"></div>
      <div className="absolute inset-0 rounded-full bg-radial from-transparent to-black/20 pointer-events-none"></div>
      
      {/* Monogram Text */}
      <span className="font-serif font-bold tracking-widest text-gold-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
        {initials}
      </span>
    </div>
  );
};

export const LaurelWreath = ({ className = "w-36 h-36 text-gold-500", children }) => (
  <div className="relative inline-flex items-center justify-center">
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Left branch */}
      <path d="M30 150 C 15 100, 35 45, 95 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="25" cy="115" rx="8" ry="4" transform="rotate(-30 25 115)" fill="currentColor" fillOpacity="0.75" />
      <ellipse cx="28" cy="85" rx="8" ry="4" transform="rotate(-45 28 85)" fill="currentColor" fillOpacity="0.75" />
      <ellipse cx="45" cy="55" rx="8" ry="4" transform="rotate(-65 45 55)" fill="currentColor" fillOpacity="0.75" />
      <ellipse cx="70" cy="35" rx="8" ry="4" transform="rotate(-75 70 35)" fill="currentColor" fillOpacity="0.75" />
      
      {/* Right branch */}
      <path d="M170 150 C 185 100, 165 45, 105 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="175" cy="115" rx="8" ry="4" transform="rotate(30 175 115)" fill="currentColor" fillOpacity="0.75" />
      <ellipse cx="172" cy="85" rx="8" ry="4" transform="rotate(45 172 85)" fill="currentColor" fillOpacity="0.75" />
      <ellipse cx="155" cy="55" rx="8" ry="4" transform="rotate(65 155 55)" fill="currentColor" fillOpacity="0.75" />
      <ellipse cx="130" cy="35" rx="8" ry="4" transform="rotate(75 130 35)" fill="currentColor" fillOpacity="0.75" />
      
      {/* Bottom ribbon knot */}
      <path d="M90 155 C 95 150, 105 150, 110 155 C 105 165, 95 165, 90 155 Z" fill="#737B4B" />
      <path d="M95 155 C 80 170, 75 185, 70 190" stroke="#737B4B" strokeWidth="2" strokeLinecap="round" />
      <path d="M105 155 C 120 170, 125 185, 130 190" stroke="#737B4B" strokeWidth="2" strokeLinecap="round" />
    </svg>
    {children && <div className="absolute inset-0 flex items-center justify-center">{children}</div>}
  </div>
);

