import React, { useState, useEffect } from 'react';
import { EXHIBIT_CATEGORIES } from './constants';
import { ExhibitCategory, ExhibitItem, Book } from './types';
import { ExhibitCard } from './components/ExhibitCard';
import { CategoryCard } from './components/CategoryCard';
import { ExhibitDetail } from './components/ExhibitDetail';
import { AICurator } from './components/AICurator';
import { Acknowledgments } from './components/Acknowledgments';
import { About } from './components/About';
import { ReadingListModal } from './components/ReadingListModal';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<ExhibitCategory | null>(null);
  const [selectedExhibit, setSelectedExhibit] = useState<ExhibitItem | null>(null);
  const [showAcknowledgments, setShowAcknowledgments] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Reading List State
  const [readingList, setReadingList] = useState<Book[]>([]);
  const [isReadingListOpen, setIsReadingListOpen] = useState(false);

  // Handle Dark Mode Class on Body/HTML
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleBackToHome = () => {
    setSelectedCategory(null);
    setSelectedExhibit(null);
    setShowAcknowledgments(false);
    setShowAbout(false);
  };

  const handleCategorySelect = (category: ExhibitCategory) => {
    setSelectedCategory(category);
    // Auto-select if there is only one item to reduce clicks
    if (category.items.length === 1) {
      setSelectedExhibit(category.items[0]);
    }
  };

  const handleBackToCategory = () => {
    setSelectedExhibit(null);
    // If the category only has one item, going back essentially means going home
    if (selectedCategory && selectedCategory.items.length === 1) {
        setSelectedCategory(null);
    }
  };

  const toggleBook = (book: Book) => {
    setReadingList(prev => {
      const exists = prev.some(b => b.title === book.title);
      if (exists) {
        return prev.filter(b => b.title !== book.title);
      }
      return [...prev, book];
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-[#121212] dark:text-white selection:bg-stanford-primary selection:text-white font-sans overflow-x-hidden transition-colors duration-300">
      
      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(#8C1515_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 pt-8 pb-6 px-6 md:px-12 max-w-7xl mx-auto border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex flex-col">
            <a 
              href="https://law.stanford.edu/robert-crown-law-library" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stanford-primary dark:text-red-400 hover:opacity-80 text-sm font-bold tracking-[0.2em] uppercase mb-1 transition-colors w-fit"
            >
              Stanford Law School
            </a>
            <div className="cursor-pointer group w-fit" onClick={handleBackToHome}>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-stanford-primary transition-colors">
                AI in the Library
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-wrap justify-end">
             {/* About Link */}
             <button 
               onClick={() => {
                  handleBackToHome(); // Reset state
                  setShowAbout(true);
               }}
               className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-stanford-primary dark:hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
             >
               About
             </button>

             {/* Acknowledgments Link */}
             <button 
               onClick={() => {
                  handleBackToHome(); // Reset state
                  setShowAcknowledgments(true);
               }}
               className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-stanford-primary dark:hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
             >
               Acknowledgments
             </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-3 rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 hover:bg-gray-100 dark:bg-white/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              )}
            </button>

            {/* AI Curator Button */}
            <button 
              onClick={() => setIsAIChatOpen(!isAIChatOpen)}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 text-gray-900 shadow-sm hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/20 dark:text-white rounded-full transition-all duration-300 group ml-2"
            >
              <div className="relative">
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-stanford-primary rounded-full animate-ping"></span>
                <span className="relative block w-2 h-2 bg-stanford-primary rounded-full"></span>
              </div>
              <span className="font-semibold text-sm">Ask AI Curator</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 min-h-[70vh]">
        
        {showAbout ? (
           <About onBack={handleBackToHome} />
        ) : showAcknowledgments ? (
           <Acknowledgments onBack={handleBackToHome} />
        ) : selectedExhibit && selectedCategory ? (
          // EXHIBIT DETAIL VIEW (Full Page)
          <ExhibitDetail 
            item={selectedExhibit}
            category={selectedCategory}
            onBack={handleBackToCategory}
            readingList={readingList}
            onToggleBook={toggleBook}
            onOpenReadingList={() => setIsReadingListOpen(true)}
          />
        ) : !selectedCategory ? (
          // HOME VIEW: Physical Exhibit Hero + Categories
          <div className="animate-fade-in-up">
            
            {/* Hero Section: Physical Exhibit */}
            <div className="relative h-[36rem] w-full rounded-2xl overflow-hidden group border border-gray-200 dark:border-white/10 shadow-2xl mb-16">
              <img 
                src="https://i.postimg.cc/zXRrQb3j/1000081359-(2).jpg" 
                alt="Physical Exhibit at Crown Law Library" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent p-8 md:p-16 flex flex-col justify-center">
                 <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-white bg-stanford-primary/90 rounded-full w-fit backdrop-blur-sm border border-white/10">
                   ON LOCATION • FLOOR 1
                 </span>
                 <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 max-w-2xl leading-tight drop-shadow-lg">
                   Visit the Physical Experience
                 </h2>
                 <p className="text-gray-100 text-lg md:text-xl font-light max-w-xl mb-6 leading-relaxed drop-shadow-md">
                   Immerse yourself in our curated collection of books, interactive guides, and visual frameworks.
                 </p>
                 <p className="text-gray-300 text-base md:text-lg font-light max-w-xl mb-8 leading-relaxed drop-shadow-md border-l-2 border-stanford-primary pl-4">
                   While the physical exhibit is open exclusively to the Stanford University community, we warmly welcome our global audience to explore this fully interactive digital version.
                 </p>
                 
                 <div className="flex flex-col gap-5">
                   <div className="flex items-center space-x-2 text-white/90 font-medium">
                     <svg className="w-5 h-5 text-stanford-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                     <span>Located near the Reference Office</span>
                   </div>

                   <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/90">
                      <a href="https://law.stanford.edu/robert-crown-law-library/hours/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-stanford-primary transition-colors group/link">
                        <svg className="w-4 h-4 opacity-70 group-hover/link:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="underline decoration-white/30 underline-offset-4 group-hover/link:decoration-stanford-primary">Operating Hours</span>
                      </a>
                      
                      <a href="https://law.stanford.edu/robert-crown-law-library/access-policies/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-stanford-primary transition-colors group/link">
                        <svg className="w-4 h-4 opacity-70 group-hover/link:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        <span className="underline decoration-white/30 underline-offset-4 group-hover/link:decoration-stanford-primary">Access Policies</span>
                      </a>

                      <a href="mailto:library@law.stanford.edu" className="flex items-center gap-2 hover:text-stanford-primary transition-colors group/link">
                        <svg className="w-4 h-4 opacity-70 group-hover/link:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        <span className="underline decoration-white/30 underline-offset-4 group-hover/link:decoration-stanford-primary">library@law.stanford.edu</span>
                      </a>
                   </div>
                 </div>
              </div>
            </div>

            {/* Categories Grid */}
            <div className="mb-8">
               <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-8 flex items-center">
                 <span className="w-8 h-[1px] bg-stanford-primary mr-4"></span>
                 Digital Gallery Sections
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {EXHIBIT_CATEGORIES.map((category, index) => (
                   <CategoryCard 
                     key={category.id} 
                     category={category} 
                     index={index} 
                     onClick={handleCategorySelect} 
                   />
                 ))}
               </div>
            </div>
          </div>
        ) : (
          // CATEGORY VIEW: Grid of Items
          <div className="animate-fade-in-up">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div className="flex items-center">
                <button 
                  onClick={handleBackToHome}
                  className="group mr-6 p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 dark:bg-white/5 dark:border-transparent dark:hover:bg-white/10 text-gray-900 dark:text-white transition-all hover:-translate-x-1 shadow-sm"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                </button>
                <div>
                  <span className="text-stanford-primary text-xs font-bold uppercase tracking-widest">Gallery Section</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">{selectedCategory.title}</h2>
                </div>
              </div>
              
              {/* Category Link Button */}
              {selectedCategory.link && (
                <a 
                  href={selectedCategory.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-stanford-primary text-white rounded-full shadow-md hover:bg-stanford-dark transition-all text-sm font-semibold transform hover:scale-105"
                >
                  <span>{selectedCategory.link.title}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedCategory.items.map((item, index) => {
                 // Custom Layout for AI at Stanford Category
                 const isStanfordAI = selectedCategory.id === 'stanford-ai';
                 const isFirstItem = index === 0;
                 
                 // If it is Stanford AI:
                 // 1. The first item (LiftLab) spans full width and is very tall (Hero)
                 // 2. The subsequent items are also taller than standard to show off the poster art
                 let spanClass = '';
                 if (isStanfordAI) {
                    if (isFirstItem) {
                       spanClass = 'md:col-span-2 lg:col-span-3 h-[45rem]'; // Larger Hero Height
                    } else {
                       spanClass = 'h-[32rem]'; // Slightly taller for sub-items
                    }
                 }
                 
                 return (
                    <ExhibitCard 
                      key={item.id} 
                      item={item} 
                      index={index} 
                      onClick={setSelectedExhibit} 
                      variant={isStanfordAI ? 'poster' : 'default'}
                      className={spanClass}
                    />
                 );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center text-gray-500 text-sm border-t border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-black/20">
        <p>&copy; 2026 Robert Crown Law Library. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-6 opacity-70 items-center">
           <span>Privacy</span>
           <span>Accessibility</span>
           <span>Stanford University</span>
        </div>
      </footer>

      {/* Overlays */}
      <AICurator 
        isOpen={isAIChatOpen} 
        onClose={() => setIsAIChatOpen(false)} 
      />
      
      <ReadingListModal
        isOpen={isReadingListOpen}
        onClose={() => setIsReadingListOpen(false)}
        readingList={readingList}
        onRemove={toggleBook}
      />

      {/* Global Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-scale-up { animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-in-right { animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default App;