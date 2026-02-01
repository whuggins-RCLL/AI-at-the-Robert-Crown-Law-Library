import React from 'react';
import { FEATURED_COURSE } from '../constants';

export const FeaturedCourse: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl p-8 md:p-12 mb-16 animate-fade-in-up">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Column: Header & Branding */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
           <div className="w-24 h-24 rounded-full bg-stanford-primary flex items-center justify-center text-5xl mb-6 shadow-lg text-white">
             <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
           </div>
           
           <h2 className="text-stanford-primary dark:text-red-400 font-bold uppercase tracking-widest text-sm mb-2">
             {FEATURED_COURSE.title}
           </h2>
           
           <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white leading-tight mb-4">
             {FEATURED_COURSE.subtitle}
           </h3>
        </div>

        {/* Right Column: Description & Modules */}
        <div className="w-full lg:w-2/3">
           <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-8">
             {FEATURED_COURSE.description}
           </p>
           
           <div className="grid grid-cols-1 gap-4">
             {FEATURED_COURSE.modules?.map((module, index) => (
               <a 
                 key={index} 
                 href={module.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="group flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-all duration-300"
               >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stanford-primary text-white font-bold text-sm flex items-center justify-center shadow-sm mr-4 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <span className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-stanford-primary dark:group-hover:text-red-300 transition-colors">
                      {module.title}
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-stanford-primary dark:text-red-400">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
               </a>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};