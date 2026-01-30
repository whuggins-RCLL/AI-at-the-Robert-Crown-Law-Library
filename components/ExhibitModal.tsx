import React, { useState, useEffect } from 'react';
import { ExhibitItem } from '../types';

interface ExhibitModalProps {
  item: ExhibitItem | null;
  onClose: () => void;
}

export const ExhibitModal: React.FC<ExhibitModalProps> = ({ item, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [item]);

  if (!item) return null;

  const images = item.gallery ? item.gallery : [item.posterUrl];
  const hasMultipleImages = images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity animate-fade-in" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl h-[90vh] flex flex-col md:flex-row bg-[#121212] rounded-2xl overflow-hidden shadow-2xl animate-scale-up border border-white/10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-stanford-primary transition-colors backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Left Side: Poster Viewer */}
        <div className="w-full md:w-2/3 h-1/2 md:h-full bg-black relative group flex items-center justify-center p-4">
           <img 
            src={images[currentImageIndex]} 
            alt={item.title} 
            className="max-h-full max-w-full object-contain shadow-2xl"
           />
           
           {hasMultipleImages && (
             <>
               <button 
                 onClick={prevImage}
                 className="absolute left-4 p-3 rounded-full bg-black/50 text-white hover:bg-stanford-primary transition-colors opacity-0 group-hover:opacity-100"
               >
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
               </button>
               <button 
                 onClick={nextImage}
                 className="absolute right-4 p-3 rounded-full bg-black/50 text-white hover:bg-stanford-primary transition-colors opacity-0 group-hover:opacity-100"
               >
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
               </button>
               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                 {images.map((_, idx) => (
                   <div 
                     key={idx} 
                     className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-stanford-primary' : 'bg-white/30'}`}
                   />
                 ))}
               </div>
             </>
           )}
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/3 h-1/2 md:h-full overflow-y-auto bg-[#1a1a1a] p-8 border-l border-white/5">
          <div className="mb-6">
            <span className="text-stanford-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              Exhibit Detail
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mb-2 leading-tight">{item.title}</h2>
            <p className="text-gray-400 font-light text-lg">{item.subtitle}</p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-8">
              {item.description}
            </p>

            {item.videoUrl && (
              <div className="mb-8">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3 pb-2 border-b border-white/10 flex items-center gap-2">
                  <svg className="w-4 h-4 text-stanford-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  Video Preview
                </h4>
                <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden border border-white/10 bg-black shadow-lg">
                  <iframe 
                    src={item.videoUrl} 
                    className="absolute top-0 left-0 w-full h-full" 
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
              Key Takeaways
            </h4>
            <ul className="space-y-4 mb-8">
              {item.details.map((detail, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-400">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stanford-primary mt-2 mr-3"></span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>

            {/* Display Books Section */}
            {item.books && (
              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-stanford-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  Display Books
                </h4>
                <div className="space-y-3">
                  {item.books.map((book, idx) => (
                    <a 
                      key={idx} 
                      href={book.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`block group/book p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-stanford-primary/30 hover:shadow-lg ${!book.link ? 'cursor-default' : ''}`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="text-white text-sm font-bold leading-tight group-hover/book:text-stanford-primary transition-colors">
                          {book.title}
                        </div>
                        {book.date && (
                          <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-gray-400 whitespace-nowrap">
                            {book.date}
                          </span>
                        )}
                      </div>
                      
                      <div className="text-gray-400 text-xs mt-1 italic">{book.author}</div>
                      
                      <div className="flex justify-between items-end mt-2">
                        <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                          {book.publisher}
                        </div>
                        {book.link && (
                          <div className="text-[10px] text-stanford-primary flex items-center gap-1 opacity-0 group-hover/book:opacity-100 transition-opacity">
                             <span>Catalog</span>
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
    </div>
  );
};