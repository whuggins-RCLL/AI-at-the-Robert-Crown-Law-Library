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
      className="group relative h-80 w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(140,21,21,0.4)] transition-all duration-500 transform hover:-translate-y-1 bg-[#1a1a1a] border border-white/10"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={category.coverImage} 
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
          {/* High Contrast Section Label */}
          <span className="inline-block px-3 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-white bg-stanford-primary rounded shadow-[0_0_15px_rgba(140,21,21,0.5)] uppercase border border-white/10">
            Section 0{index + 1}
          </span>
          <h3 className="text-3xl font-serif font-bold text-white mb-2 leading-none">
            {category.title}
          </h3>
          <p className="text-gray-300 text-sm font-light leading-relaxed max-w-[90%] group-hover:text-white transition-colors">
            {category.description}
          </p>
          
          <div className="mt-6 flex items-center text-stanford-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Enter Gallery</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
};