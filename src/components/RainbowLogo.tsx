import React from 'react';

interface RainbowLogoProps {
  className?: string;
  showSubText?: boolean;
}

export const RainbowLogo: React.FC<RainbowLogoProps> = ({ className = '', showSubText = true }) => {
  return (
    <div className={`flex flex-col select-none overflow-hidden rounded-lg shadow-sm border border-slate-100 transition-all ${className}`}>
      {/* Red Block holding emblem and text */}
      <div className="bg-[#E31B23] px-3.5 py-2.5 flex items-center gap-3">
        {/* Emblem */}
        <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-xs border border-blue-600/10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Outer concentric blue circular rings matching original logo */}
            <circle cx="50" cy="50" r="43" stroke="#0052A3" strokeWidth="4.5" fill="none" />
            <circle cx="50" cy="50" r="39" stroke="#0052A3" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="34" fill="#FFFFFF" />
            
            {/* Green Leaf + Yellow Highlight + Blue Water Droplet Assembly */}
            {/* Blue drop */}
            <path 
              d="M50 26 C36 46 36 66 50 76 C64 66 64 46 50 26 Z" 
              fill="url(#dropletGrad)" 
            />
            {/* Gold/Orange highlight/flame layering */}
            <path 
              d="M50 33 C42 48 43 62 50 69 C54 62 56 50 50 33 Z" 
              fill="url(#goldGrad)" 
              opacity="0.9"
            />
            {/* Outer stylized green leaves sprouting from the top left */}
            <path 
              d="M36 42 C33 32 42 30 44 36 C46 42 39 44 36 42 Z" 
              fill="url(#leafGrad)" 
            />
            <path 
              d="M41 36 C39 28 46 27 48 32 C50 37 44 39 41 36 Z" 
              fill="url(#leafGrad)" 
            />
            
            {/* High-quality Linear Gradients */}
            <defs>
              <linearGradient id="dropletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#0052A3" />
              </linearGradient>
              <linearGradient id="goldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EAB308" />
                <stop offset="100%" stopColor="#FDE047" />
              </linearGradient>
              <linearGradient id="leafGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#16A34A" />
                <stop offset="100%" stopColor="#4ADE80" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Text Area */}
        <div className="flex flex-col text-white font-sans">
          <div className="flex items-start">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight leading-none uppercase font-sans">
              RAINBOW
            </span>
            <span className="text-[7px] font-bold border border-white/50 rounded-full px-0.5 ml-0.5 leading-none opacity-85">
              TM
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase leading-none mt-1 opacity-95">
            AQUAFRESH SYSTEMS
          </span>
        </div>
      </div>

      {/* Blue Stripe (Complete Water Solutions) */}
      <div className="bg-[#0052A3] py-1 px-3 text-center">
        <span className="text-[8px] sm:text-[9px] font-black text-white tracking-widest uppercase block font-sans">
          COMPLETE WATER SOLUTIONS
        </span>
      </div>

      {/* White Stripe (ISO Certification) */}
      {showSubText && (
        <div className="bg-white py-1 px-3 text-center border-t border-slate-100">
          <span className="text-[7px] sm:text-[7.5px] font-extrabold text-slate-700 tracking-wider uppercase block font-sans">
            AN ISO 9001 : 2015 CERTIFIED COMPANY
          </span>
        </div>
      )}
    </div>
  );
};

export default RainbowLogo;
