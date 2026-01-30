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
    // We use a regex to check if a height class is provided to avoid conflict
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
           <div className="flex items-center justify-between mb-2">
             {/* High Contrast Exhibit Label */}
             <span className="text-xs font-bold tracking-[0.2em] text-white uppercase bg-stanford-primary px-3 py-1.5 rounded shadow-[0_0_15px_rgba(140,21,21,0.5)] border border-white/10">
               Exhibit 0{index + 1}
             </span>
             <span className="text-3xl filter drop-shadow-lg">{item.icon}</span>
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

  return (
    <div 
      className={`group relative cursor-pointer h-[28rem] w-full perspective-1000 animate-fade-in-up opacity-0 ${className}`}
      onClick={() => onClick(item)}
      style={{ animationName: 'fadeInUp', animationFillMode: 'forwards', ...style }}
    >
      <div className="relative h-full w-full rounded-xl bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(140,21,21,0.2)] dark:group-hover:shadow-[0_20px_50px_rgba(140,21,21,0.3)] overflow-hidden flex flex-col">
        
        {/* Poster Image Container */}
        <div className="relative h-3/4 w-full overflow-hidden bg-gray-100 dark:bg-white/5">
           <img 
            src={item.posterUrl} 
            alt={item.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60 dark:from-[#1e1e1e] dark:opacity-60 dark:group-hover:opacity-40 transition-opacity duration-300" />
           
           {/* Gallery Indicator */}
           {item.gallery && item.gallery.length > 1 && (
             <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs text-white flex items-center gap-1 shadow-md">
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
               <span>+{item.gallery.length - 1}</span>
             </div>
           )}
        </div>
        
        {/* Content Info */}
        <div className="flex-1 p-5 flex flex-col justify-between relative z-10 bg-white dark:bg-[#1e1e1e]">
          <div>
            <div className="flex items-center justify-between mb-2">
               <span className="text-xs font-bold tracking-widest text-stanford-primary uppercase">
                 Exhibit 0{index + 1}
               </span>
               <span className="text-xl filter grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-1 leading-tight group-hover:text-stanford-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs font-sans font-medium uppercase tracking-wide truncate">
              {item.subtitle}
            </p>
          </div>
          
          <div className="mt-4 flex items-center text-sm font-semibold text-gray-600 dark:text-white/80 group-hover:text-stanford-primary dark:group-hover:text-white transition-colors">
             <span>View Poster</span>
             <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
};