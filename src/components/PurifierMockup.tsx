import React from 'react';
import dolphinPurifierReal from '../assets/images/dolphin_purifier_clean_1782199132303.jpg';
import aquagrandPurifierReal from '../assets/images/aquagrand_purifier_real_1782198845580.jpg';

interface PurifierMockupProps {
  modelId: string;
  className?: string;
}

export default function PurifierMockup({ modelId, className = '' }: PurifierMockupProps) {
  if (modelId === 'dolphin') {
    return (
      <div className={`relative flex items-center justify-center bg-white dark:bg-slate-900 border border-blue-50/60 rounded-2xl h-64 overflow-hidden shadow-xs select-none ${className}`}>
        <img 
          src={dolphinPurifierReal} 
          alt="Dolphin RO Water Purifier - Budget friendly wall-mounted RO water filter system Hyderabad" 
          width="400"
          height="256"
          loading="lazy"
          className="w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-2.5 left-2.5 bg-blue-600/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md font-mono shadow-sm">
          Dolphin Classic
        </div>
      </div>
    );
  }

  if (modelId === 'aquagrand') {
    return (
      <div className={`relative flex items-center justify-center bg-white dark:bg-slate-900 border border-blue-50/60 rounded-2xl h-64 overflow-hidden shadow-xs select-none ${className}`}>
        <img 
          src={aquagrandPurifierReal} 
          alt="Aquagrand+ RO Water Purifier - Multi-stage copper mineralizer domestic RO system Hyderabad" 
          width="400"
          height="256"
          loading="lazy"
          className="w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-2.5 left-2.5 bg-blue-600/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md font-mono shadow-sm">
          Aquagrand+ Royal Blue
        </div>
      </div>
    );
  }

  // Return tailored beautiful visual mockup based on the model ID
  const isDark = modelId === 'aiqua-black' || modelId === 'lx-two';
  const isPremiumPearl = modelId === 'aqua-pearl' || modelId === 'innovica';
  const isTransparentClassic = modelId === 'aquagrand' || modelId === 'aquaroma';
  const isIndustrial = modelId === 'commercial-plants';

  return (
    <div className={`relative flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 rounded-2xl h-64 overflow-hidden shadow-xs select-none ${className}`}>
      {/* Decorative Water Bubbles in Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="30%" r="6" className="fill-cyan-500 animate-bounce" style={{ animationDuration: '4s' }} />
          <circle cx="80%" cy="70%" r="8" className="fill-blue-500 animate-bounce" style={{ animationDuration: '6s' }} />
          <circle cx="50%" cy="80%" r="4" className="fill-sky-500 animate-bounce" style={{ animationDuration: '3s' }} />
        </svg>
      </div>

      {isIndustrial ? (
        /* Heavy Duty Commercial Plant Graphic */
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="relative w-36 h-48 bg-slate-200 border-2 border-slate-400 rounded-lg p-2 shadow-md flex justify-around">
            {/* 3 Blue FRP Pressure Vessels */}
            <div className="w-6 h-40 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full border border-blue-900 relative">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-slate-400 rounded-xs" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-1 bg-slate-400 rounded-xs" />
            </div>
            <div className="w-6 h-40 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full border border-blue-900 relative">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-slate-400 rounded-xs" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-1 bg-slate-400 rounded-xs" />
            </div>
            {/* Stainless Steel Booster Pump & Panels */}
            <div className="flex flex-col justify-between h-40 py-4">
              <div className="w-8 h-10 bg-gradient-to-r from-slate-400 to-slate-200 border border-slate-500 rounded-xs flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-cyan-500 animate-pulse" />
              </div>
              <div className="w-8 h-12 bg-zinc-700 rounded-xs border border-zinc-900 flex flex-col justify-around p-1">
                <div className="w-full h-1 bg-green-500" />
                <div className="w-full h-1 bg-red-400 animate-pulse" />
                <div className="w-full h-1 bg-cyan-400" />
              </div>
              <div className="w-6 h-8 bg-zinc-800 rounded-full border border-zinc-900 flex items-center justify-center">
                <span className="text-[6px] text-white font-mono">100G</span>
              </div>
            </div>

            {/* Interconnecting pipes overlay */}
            <svg className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-16 w-full pointer-events-none opacity-80" viewBox="0 0 100 50">
              <path d="M 12 15 L 45 15 L 45 35 L 80 35" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,1" className="animate-dash" />
              <path d="M 12 30 L 45 30 L 45 40 L 80 40" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
            </svg>
          </div>
          <p className="text-[10px] text-slate-500 font-mono font-medium tracking-wider uppercase">Heavy Duty SS Skid Frame</p>
        </div>
      ) : (
        /* Domestic Water Purifier Cabinet Graphic */
        <div className={`relative w-40 h-52 rounded-2xl shadow-xl flex flex-col overflow-hidden transition-all duration-300 border-2
          ${isDark ? 'bg-zinc-950 border-zinc-800' : isPremiumPearl ? 'bg-white border-slate-200' : 'bg-slate-100 border-sky-200'}`}>
          
          {/* Brand/Model Logo Bar */}
          <div className={`h-8 px-3 flex items-center justify-between border-b ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
            <span className="text-[9px] font-bold text-sky-600 tracking-wider">RAINBOW</span>
            
            {/* Status light */}
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[7px] text-slate-400 font-mono">RO PURIFY</span>
            </div>
          </div>

          {/* Purifier Cabinet Body */}
          <div className="flex-1 relative p-2 flex flex-col justify-between">
            
            {/* Internal Filter / UV Chamber Behind Glass Effect (Conditional) */}
            {isTransparentClassic ? (
              <div className="absolute inset-x-2 top-2 bottom-8 bg-sky-100/60 rounded-lg border border-sky-300/40 overflow-hidden flex flex-col justify-end">
                {/* Visual blue water look inside with water ripples */}
                <div className="h-1/2 bg-sky-300/40 relative flex items-center justify-center">
                  {/* Floating carbon block cylinder */}
                  <div className="absolute -top-6 w-12 h-4 bg-zinc-600 rounded-md border border-zinc-800 opacity-60" />
                  {/* Floating active mineral balls representation */}
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                    <div className="w-1.5 h-1.5 bg-sky-200 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                  </div>
                  {/* Water level indicator lines */}
                  <div className="absolute right-1 inset-y-0 w-1 flex flex-col justify-between py-2 text-[6px] text-sky-600/70 select-none">
                    <span>- F</span>
                    <span>- H</span>
                    <span>- L</span>
                  </div>
                </div>
              </div>
            ) : isDark ? (
              <div className="absolute inset-x-2 top-2 bottom-8 bg-zinc-900/80 rounded-lg border border-zinc-800 flex flex-col justify-between p-1.5">
                {/* Futuristic high tech panel display */}
                <div className="bg-black/90 p-1 rounded-sm border border-cyan-500/30 font-mono text-[7px] text-cyan-400 flex flex-col space-y-0.5">
                  <div className="flex justify-between">
                    <span>TDS OUT: 85</span>
                    <span className="text-emerald-400">98% PURE</span>
                  </div>
                  <div className="w-full bg-cyan-950 h-1 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full w-4/5 animate-pulse" />
                  </div>
                </div>
                {/* Glowing UV-C Blue bar */}
                <div className="h-2 bg-indigo-500/30 rounded-xs border border-indigo-500/50 flex items-center justify-center animate-pulse">
                  <div className="w-full h-0.5 bg-indigo-400 shadow-[0_0_4px_#818cf8]" />
                </div>
              </div>
            ) : isPremiumPearl ? (
              <div className="absolute inset-x-2 top-2 bottom-8 bg-slate-50 rounded-lg border border-slate-200 p-1.5">
                {/* Delicate minimalist design details */}
                <div className="w-full border-b border-dashed border-slate-200 pb-1 flex justify-between items-center">
                  <span className="text-[8px] text-slate-500 font-medium">ALKALINE+</span>
                  <span className="text-[7px] bg-sky-50 text-sky-600 px-1 rounded-xs">LUXURY</span>
                </div>
                <div className="mt-2 flex flex-col items-center justify-center space-y-1">
                  <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <span className="text-[8px] text-slate-400">Bio Filter Active</span>
                </div>
              </div>
            ) : (
              // Standard Dolphin Style Pure White / Teal
              <div className="absolute inset-x-2 top-2 bottom-8 bg-gradient-to-b from-sky-50 to-sky-100 rounded-lg border border-sky-100 flex items-center justify-center">
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="text-[8px] text-sky-700 font-bold uppercase tracking-widest mt-1">Dolphin Series</span>
                </div>
              </div>
            )}

            {/* Bottom Panel controls & Faucet Outlet */}
            <div className="absolute bottom-1 inset-x-2 h-7 flex justify-between items-center px-1">
              {/* Chrome Faucet Dispenser */}
              <div className="relative flex items-center">
                <div className="w-3 h-1.5 bg-slate-400 rounded-t-sm" />
                <div className="w-1 h-3 bg-slate-400 -mt-1 ml-0.5 relative">
                  {/* Tap Knob */}
                  <div className="absolute -top-1 -left-1 w-2.5 h-1 bg-slate-500 rounded-full" />
                  {/* Dripping Water particle (animated static effect) */}
                  <div className="absolute top-3 left-0 w-1 h-1.5 bg-cyan-400 rounded-b-full animate-ping" />
                </div>
              </div>

              {/* Real Model Label */}
              <div className="flex flex-col items-end">
                <span className={`text-[8px] font-bold tracking-tight leading-none ${isDark ? 'text-zinc-200' : 'text-slate-700'}`}>
                  {modelId === 'dolphin' ? 'Dolphin V2' : modelId === 'aquagrand' ? 'Aquagrand+' : modelId === 'aqua-pearl' ? 'Aqua Pearl' : modelId === 'aiqua-black' ? 'Aiqua Black' : modelId === 'purosis' ? 'Purosis Bio' : modelId === 'innovica' ? 'Innovica Slim' : modelId === 'lx-one' ? 'LX-One' : modelId === 'lx-two' ? 'LX-Two Premium' : 'Aqua Roma'}
                </span>
                <span className="text-[6px] text-slate-400 font-mono tracking-wider">RO WATER</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
