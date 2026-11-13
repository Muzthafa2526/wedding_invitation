import React from 'react';

// Bespoke Metallic Gold Botanical & Wedding Ornaments
// Inspired directly by the reference luxury wedding card

/**
 * Two Interlocked Golden Wedding Rings with horizontal accent lines
 */
export const InterlockedGoldenRings = ({ className = "w-28 h-10 text-gold-500" }) => (
  <div className={`inline-flex items-center justify-center gap-2 ${className}`}>
    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-400 to-gold-500"></div>
    <svg viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-8 shrink-0">
      <defs>
        <linearGradient id="ringGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4DF" />
          <stop offset="35%" stopColor="#D4AF67" />
          <stop offset="70%" stopColor="#F1D99A" />
          <stop offset="100%" stopColor="#A77B35" />
        </linearGradient>
      </defs>
      {/* Left Ring */}
      <circle cx="23" cy="18" r="12" stroke="url(#ringGold)" strokeWidth="3" />
      {/* Right Ring interlocked */}
      <circle cx="37" cy="18" r="12" stroke="url(#ringGold)" strokeWidth="3" />
      {/* Interlock highlight */}
      <path d="M 30 7.5 A 12 12 0 0 1 35 27" stroke="url(#ringGold)" strokeWidth="3" strokeLinecap="round" />
    </svg>
    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold-400 to-gold-500"></div>
  </div>
);

/**
 * Wavy S-curve Golden Glitter Ribbon along the right edge (as seen in the reference card)
 */
export const WavyGoldenRibbon = ({ className = "w-24 h-full pointer-events-none" }) => (
  <svg
    viewBox="0 0 160 800"
    fill="none"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="glitterGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF4DF" stopOpacity="0.95" />
        <stop offset="25%" stopColor="#F1D99A" stopOpacity="1" />
        <stop offset="50%" stopColor="#D4AF67" stopOpacity="1" />
        <stop offset="75%" stopColor="#BA9248" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#A77B35" stopOpacity="0.8" />
      </linearGradient>
      <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    {/* Soft ambient ribbon glow */}
    <path
      d="M 120 0 C 40 160, 160 340, 70 520 C 10 660, 150 740, 60 800"
      stroke="url(#glitterGold)"
      strokeWidth="18"
      strokeLinecap="round"
      opacity="0.25"
      filter="url(#goldGlow)"
    />
    {/* Main sparkling ribbon body */}
    <path
      d="M 120 0 C 40 160, 160 340, 70 520 C 10 660, 150 740, 60 800"
      stroke="url(#glitterGold)"
      strokeWidth="10"
      strokeLinecap="round"
    />
    {/* Fine inner shimmer line */}
    <path
      d="M 120 0 C 40 160, 160 340, 70 520 C 10 660, 150 740, 60 800"
      stroke="#FFF4DF"
      strokeWidth="2.5"
      strokeDasharray="4 8"
      strokeLinecap="round"
      opacity="0.9"
    />
  </svg>
);

/**
 * Botanical Leaf Branch (Golden leaves sprouting at bottom-right)
 */
export const GoldenBotanicalLeaves = ({ className = "w-36 h-48 text-gold-500" }) => (
  <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF4DF" />
        <stop offset="40%" stopColor="#F1D99A" />
        <stop offset="70%" stopColor="#D4AF67" />
        <stop offset="100%" stopColor="#A77B35" />
      </linearGradient>
    </defs>
    {/* Main stem curve */}
    <path d="M 20 150 C 45 110, 65 65, 85 15" stroke="url(#leafGrad)" strokeWidth="2.5" strokeLinecap="round" />
    {/* Leaves */}
    <path d="M 32 128 C 20 115, 26 95, 42 100 C 50 115, 42 128, 32 128 Z" fill="url(#leafGrad)" />
    <path d="M 52 105 C 65 92, 80 98, 76 112 C 65 120, 52 115, 52 105 Z" fill="url(#leafGrad)" />
    <path d="M 55 85 C 40 72, 45 52, 62 58 C 70 72, 62 85, 55 85 Z" fill="url(#leafGrad)" />
    <path d="M 75 62 C 90 48, 105 55, 100 70 C 88 78, 75 72, 75 62 Z" fill="url(#leafGrad)" />
    <path d="M 78 40 C 65 25, 72 8, 88 15 C 95 30, 88 40, 78 40 Z" fill="url(#leafGrad)" />
    <path d="M 85 15 C 96 2, 108 8, 104 22 C 94 28, 85 22, 85 15 Z" fill="url(#leafGrad)" />
  </svg>
);

/**
 * Golden Floral Blossom with Leaves (as seen in the top-left and bottom-right of invitation card)
 */
export const GoldenFloralBlossom = ({ className = "w-28 h-28 text-gold-500", flip = false }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flip ? '-scale-x-100 -scale-y-100' : ''}`}
  >
    <defs>
      <linearGradient id="blossomGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF4DF" />
        <stop offset="30%" stopColor="#F1D99A" />
        <stop offset="70%" stopColor="#D4AF67" />
        <stop offset="100%" stopColor="#A77B35" />
      </linearGradient>
    </defs>
    {/* Central Flower */}
    <g transform="translate(45, 45)">
      {/* 5 Petals */}
      <path d="M 0 0 C -8 -22, 8 -22, 0 0 Z" fill="url(#blossomGold)" />
      <path d="M 0 0 C 18 -12, 22 8, 0 0 Z" fill="url(#blossomGold)" />
      <path d="M 0 0 C 15 15, -4 22, 0 0 Z" fill="url(#blossomGold)" />
      <path d="M 0 0 C -18 15, -22 -4, 0 0 Z" fill="url(#blossomGold)" />
      <path d="M 0 0 C -18 -15, -4 -22, 0 0 Z" fill="url(#blossomGold)" />
      <circle cx="0" cy="0" r="4" fill="#FFF4DF" />
    </g>
    {/* Stem and surrounding leaves */}
    <path d="M 45 45 C 30 65, 15 80, 5 95" stroke="url(#blossomGold)" strokeWidth="2" strokeLinecap="round" />
    <path d="M 35 60 C 20 52, 22 38, 32 42 C 40 50, 35 60, 35 60 Z" fill="url(#blossomGold)" opacity="0.9" />
    <path d="M 22 75 C 10 68, 12 55, 20 58 C 28 65, 22 75, 22 75 Z" fill="url(#blossomGold)" opacity="0.9" />
    <path d="M 52 35 C 65 22, 78 28, 72 40 C 60 45, 52 40, 52 35 Z" fill="url(#blossomGold)" opacity="0.9" />
  </svg>
);

/**
 * Ornamental Golden Diamond Divider (♦ ♦ ♦ with tapering lines)
 */
export const GoldenDiamondDivider = ({ className = "w-full max-w-sm h-6 my-4" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-400 to-gold-500"></div>
    <div className="flex items-center gap-1.5 text-gold-400">
      <span className="text-[9px] transform rotate-45 inline-block text-gold-400">◆</span>
      <span className="text-xs transform rotate-45 inline-block text-gold-300">◆</span>
      <span className="text-[9px] transform rotate-45 inline-block text-gold-400">◆</span>
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-400 to-gold-500"></div>
  </div>
);

/**
 * Golden Laurel Sprigs flanking names
 */
export const GoldenLaurelSprig = ({ direction = "left", className = "w-8 h-16 text-gold-400" }) => (
  <svg
    viewBox="0 0 40 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${direction === "right" ? "-scale-x-100" : ""}`}
  >
    <defs>
      <linearGradient id="laurelGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF4DF" />
        <stop offset="50%" stopColor="#D4AF67" />
        <stop offset="100%" stopColor="#A77B35" />
      </linearGradient>
    </defs>
    <path d="M 30 75 C 10 50, 10 30, 25 5" stroke="url(#laurelGold)" strokeWidth="1.5" strokeLinecap="round" />
    <ellipse cx="14" cy="55" rx="5" ry="2.5" transform="rotate(-30 14 55)" fill="url(#laurelGold)" />
    <ellipse cx="12" cy="40" rx="5" ry="2.5" transform="rotate(-40 12 40)" fill="url(#laurelGold)" />
    <ellipse cx="16" cy="25" rx="5" ry="2.5" transform="rotate(-50 16 25)" fill="url(#laurelGold)" />
    <ellipse cx="22" cy="12" rx="4" ry="2" transform="rotate(-60 22 12)" fill="url(#laurelGold)" />
  </svg>
);
