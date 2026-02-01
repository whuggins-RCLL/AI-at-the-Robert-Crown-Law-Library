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
      className="group relative flex flex-col h-full min-h-[16rem] rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl hover:border-stanford-primary/30 dark:hover:border-stanford-primary/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex-1 p-8 flex flex-col bg-white dark:bg-[#1a1a1a] relative">
        
        {/* Header: Number only */}
        <div className="flex items-start justify-start mb-6">
           <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-600 uppercase group-hover:text-stanford-primary transition-colors">
             Section 0{index + 1}
           </span>
        </div>
        
        {/* Text Content */}
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-stanford-primary transition-colors">
          {category.title}
        </h3>
        
        <p className="text-stanford-primary dark:text-red-400 text-xs font-sans font-bold uppercase tracking-wide mb-4 opacity-80">
            {category.subtitle}
        </p>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {category.description}
        </p>
        
        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-sm font-semibold">
           <span className="text-gray-900 dark:text-white group-hover:text-stanford-primary dark:group-hover:text-red-400 transition-colors flex items-center">
             Explore Gallery
             <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
           </span>
           <span className="text-xs text-gray-400 font-normal bg-gray-100 dark:bg-white/5 px-2.5 py-1 rounded-full">{category.items.length} Exhibits</span>
        </div>
      </div>
    </div>
  );
};