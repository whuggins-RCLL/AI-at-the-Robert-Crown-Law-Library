import React, { useState } from 'react';
import { ExhibitItem, ExhibitCategory } from '../types';

interface ExhibitDetailProps {
  item: ExhibitItem;
  category: ExhibitCategory;
  onBack: () => void;
}

export const ExhibitDetail: React.FC<ExhibitDetailProps> = ({ item, category, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = item.gallery ? item.gallery : [item.posterUrl];
  const hasMultipleImages = images.length > 1;
  const isVerticalGallery = item.galleryLayout === 'vertical';

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="animate-fade-in-up w-full">
      {/* Navigation Header */}
      <div className="flex items-center mb-8">
        <button 
          onClick={onBack}
          className="group mr-6 p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-white/5 dark:border-transparent dark:hover:bg-white/10 text-gray-900 dark:text-white transition-all hover:-translate-x-1"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <div>
          <div className="flex items-center gap-2 text-stanford-primary text-xs font-bold uppercase tracking-widest mb-1">
            <span>Gallery Section</span>
            <span className="w-1 h-1 rounded-full bg-stanford-primary"></span>
            <span>{category.title}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">{item.title}</h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column: Visuals */}
        <div className="w-full lg:w-5/12 flex flex-col gap-4">
           {isVerticalGallery ? (
             /* Vertical List Layout */
             <div className="flex flex-col gap-6">
                {images.map((img, idx) => (
                  <div key={idx} className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-black/20">
                     <img 
                       src={img} 
                       alt={`${item.title} - Image ${idx + 1}`} 
                       className="w-full h-auto object-contain"
                     />
                  </div>
                ))}
             </div>
           ) : (
             /* Default Carousel Layout */
             <>
               <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 group">
                 <img 
                  src={images[currentImageIndex]} 
                  alt={item.title} 
                  className="w-full h-auto"
                 />
                 
                 {/* Carousel Controls - Always Visible */}
                 {hasMultipleImages && (
                   <>
                     <button 
                       onClick={prevImage}
                       className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-black/60 text-gray-900 dark:text-white hover:bg-stanford-primary hover:text-white dark:hover:bg-stanford-primary shadow-lg transition-all"
                       aria-label="Previous image"
                     >
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                     </button>
                     <button 
                       onClick={nextImage}
                       className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-black/60 text-gray-900 dark:text-white hover:bg-stanford-primary hover:text-white dark:hover:bg-stanford-primary shadow-lg transition-all"
                       aria-label="Next image"
                     >
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                     </button>
                     
                     {/* Badge Counter */}
                     <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white tracking-wider border border-white/10">
                       {currentImageIndex + 1} / {images.length}
                     </div>
                   </>
                 )}
               </div>

               {/* Thumbnails Gallery */}
               {hasMultipleImages && (
                 <div className="grid grid-cols-4 gap-3">
                   {images.map((img, idx) => (
                     <button
                       key={idx}
                       onClick={() => setCurrentImageIndex(idx)}
                       className={`relative rounded-lg overflow-hidden aspect-square border-2 transition-all duration-300 ${
                         idx === currentImageIndex 
                           ? 'border-stanford-primary ring-2 ring-stanford-primary/30' 
                           : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300 dark:hover:border-white/30'
                       }`}
                     >
                       <img 
                         src={img} 
                         alt={`Thumbnail ${idx + 1}`} 
                         className="w-full h-full object-cover"
                       />
                     </button>
                   ))}
                 </div>
               )}
             </>
           )}
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-7/12 space-y-10">
          
          {/* Featured Content Image (Large Right Side) */}
          {item.contentImage && (
            <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 mb-8">
              <img 
                src={item.contentImage} 
                alt={`${item.title} Featured Content`}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          
          {/* Main Description */}
          <div>
            <h3 className="text-2xl font-light text-gray-700 dark:text-gray-200 mb-6 leading-relaxed border-l-4 border-stanford-primary pl-6">
              {item.description}
            </h3>
            
            {/* External Links */}
            {item.links && item.links.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-4">
                {item.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stanford-primary text-white font-bold rounded-full shadow-lg hover:bg-stanford-dark transition-all transform hover:-translate-y-1 hover:shadow-xl group"
                  >
                    <span>{link.title}</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                ))}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.details.map((detail, idx) => (
                <div key={idx} className="flex items-start p-4 rounded-lg bg-white border border-gray-200 shadow-sm dark:bg-white/5 dark:border-white/5 dark:shadow-none">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-stanford-primary mt-2 mr-3"></span>
                  <span className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          {item.videoUrl && (
            <div className="space-y-4">
              <h4 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b border-gray-200 dark:border-white/10 pb-2">
                <svg className="w-5 h-5 text-stanford-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                Video Preview
              </h4>
              <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-black shadow-lg">
                <iframe 
                  src={item.videoUrl} 
                  className="absolute top-0 left-0 w-full h-full" 
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Books Section */}
          {item.books && (
            <div className="space-y-4">
              <h4 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b border-gray-200 dark:border-white/10 pb-2">
                <svg className="w-5 h-5 text-stanford-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                Display Books
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {item.books.map((book, idx) => (
                  <a 
                    key={idx} 
                    href={book.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`block group/book p-4 rounded-lg bg-white border border-gray-200 hover:border-stanford-primary/30 dark:bg-white/5 dark:border-transparent dark:hover:bg-white/10 transition-all hover:shadow-lg ${!book.link ? 'cursor-default' : ''}`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div className="text-gray-900 dark:text-white text-base font-bold leading-tight group-hover/book:text-stanford-primary transition-colors">
                        {book.title}
                      </div>
                      {book.date && (
                        <span className="text-[10px] bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-400 px-2 py-1 rounded whitespace-nowrap font-medium">
                          {book.date}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">{book.author}</div>
                    
                    <div className="flex justify-between items-end mt-2 pt-2 border-t border-gray-100 dark:border-white/5">
                      <div className="text-[10px] text-gray-500 dark:text-gray-500 uppercase tracking-wide font-semibold">
                        {book.publisher}
                      </div>
                      {book.link && (
                        <div className="text-xs text-stanford-primary flex items-center gap-1 opacity-60 group-hover/book:opacity-100 transition-opacity font-medium">
                           <span>Catalog Record</span>
                           <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};