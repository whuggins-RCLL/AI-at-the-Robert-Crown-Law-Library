import React from 'react';
import { ExhibitCategory } from '../types';

interface CategoryCardProps {
  category: ExhibitCategory;
  onClick: (category: ExhibitCategory) => void;
  index: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, index }) => {
  return (
    <div 
      onClick={() => onClick(category)}
      className="group relative flex flex-col h-full min-h-[24rem] rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl hover:border-stanford-primary/30 dark:hover:border-stanford-primary/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Section - Top Part */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-black/20 border-b border-gray-100 dark:border-white/5">
        <img 
          src={category.coverImage} 
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-stanford-primary/0 group-hover:bg-stanford-primary/10 transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Content Section - Bottom Part */}
      <div className="flex-1 p-6 flex flex-col bg-white dark:bg-[#1a1a1a] relative">
        <div className="flex items-start justify-between mb-3">
           <span className="text-xs font-bold tracking-[0.2em] text-stanford-primary uppercase mt-1">
            Section 0{index + 1}
           </span>
           
           {/* Interactive Icon */}
           <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-stanford-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19l14-14m0 0H6.5m12.5 0V17.5"></path></svg>
           </div>
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-stanford-primary transition-colors">
          {category.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {category.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-sm font-semibold">
           <span className="text-gray-500 dark:text-gray-400 group-hover:text-stanford-primary transition-colors">Explore Gallery</span>
           <span className="text-xs text-gray-400 font-normal">{category.items.length} Exhibits</span>
        </div>
      </div>
    </div>
  );
};