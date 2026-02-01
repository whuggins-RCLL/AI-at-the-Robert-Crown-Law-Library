import React, { useState } from 'react';
import { ExhibitItem } from '../types';

interface ExhibitCardProps {
  item: ExhibitItem;
  onClick: (item: ExhibitItem) => void;
  index: number;
  variant?: 'default' | 'poster';
  className?: string;
}

export const ExhibitCard: React.FC<ExhibitCardProps> = ({ item, onClick, index, variant = 'default', className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Staggered animation delay
  const style = { animationDelay: `${index * 100}ms` };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  if (variant === 'poster') {
    // Determine height class: use provided className or default to h-[28rem]
    const hasHeight = /\bh-\[?\w+\]?/.test(className);
    const heightClass = hasHeight ? '' : 'h-[28rem]';

    return (
      <div 
        className={`group relative cursor-pointer ${heightClass} perspective-1000 animate-fade-in-up opacity-0 rounded-xl overflow-hidden shadow-2xl border border-gray-800 ${className}`}
        onClick={() => onClick(item)}
        onMouseMove={handleMouseMove}
        style={{ animationName: 'fadeInUp', animationFillMode: 'forwards', ...style }}
      >
        {/* Spotlight Effect */}
        <div 
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100 mix-blend-overlay"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.25), transparent 40%)`
          }}
        />

        {/* Image - Brighter and Larger */}
        <img 
          src={item.posterUrl} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-105 contrast-110"
        />
        
        {/* Gradient for text readability - Bottom only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-30">
           <div className="flex items-center justify-start mb-2">
             {/* High Contrast Exhibit Label */}
             <span className="text-xs font-bold tracking-[0.2em] text-white uppercase bg-stanford-primary px-3 py-1.5 rounded shadow-[0_0_15px_rgba(140,21,21,0.5)] border border-white/10">
               Exhibit 0{index + 1}
             </span>
           </div>
           <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 leading-none drop-shadow-xl tracking-tight">
             {item.title}
           </h3>
           <p className="text-gray-200 text-sm md:text-base font-sans font-medium uppercase tracking-wide mb-4 drop-shadow-md">
             {item.subtitle}
           </p>
           
           <div className="flex items-center text-sm font-bold text-white/90 group-hover:text-stanford-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 delay-75">
             <span>Explore Exhibit</span>
             <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
           </div>
        </div>
      </div>
    );
  }

  // DEFAULT VARIANT: Clean, Text-Focused Card (No Poster Image)
  return (
    <div 
      className={`group relative cursor-pointer w-full animate-fade-in-up opacity-0 flex ${className}`}
      onClick={() => onClick(item)}
      style={{ animationName: 'fadeInUp', animationFillMode: 'forwards', ...style }}
    >
      <div className="relative w-full rounded-xl bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(140,21,21,0.15)] transition-all duration-300 ease-out group-hover:-translate-y-1 overflow-hidden flex flex-col p-6 md:p-8 h-full min-h-[16rem]">
        
        {/* Top: Number Only (Icon Removed) */}
        <div className="flex items-start justify-start mb-6">
           <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-600 uppercase group-hover:text-stanford-primary transition-colors">
             Exhibit 0{index + 1}
           </span>
        </div>
        
        {/* Middle: Text Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-stanford-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-stanford-primary dark:text-red-400 text-xs font-sans font-bold uppercase tracking-wide mb-4 opacity-80">
            {item.subtitle}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
            {item.description}
          </p>
        </div>
        
        {/* Bottom: Action */}
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/5 flex items-center text-sm font-semibold text-gray-900 dark:text-white group-hover:text-stanford-primary dark:group-hover:text-red-400 transition-colors">
           <span>Explore</span>
           <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
      </div>
    </div>
  );
};