import React, { useState, useEffect } from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  isBookmarked: boolean;
  onToggleBook: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, isBookmarked, onToggleBook }) => {
  // Stages: 'custom' -> 'open-library' -> 'google-api-isbn' -> 'google-api-title' -> 'google-direct' -> 'failed'
  const [fetchStage, setFetchStage] = useState<string>('custom');
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Helper to clean ISBN
  const cleanIsbn = (isbn: string | undefined) => isbn?.replace(/[^0-9X]/gi, '');

  useEffect(() => {
    // Reset state when book changes
    setIsLoading(true);
    
    if (book.customCoverUrl) {
      setFetchStage('custom');
      setCoverUrl(book.customCoverUrl);
      setIsLoading(false);
      return;
    }

    setFetchStage('open-library');
    const isbn = cleanIsbn(book.isbn);

    if (isbn) {
      // Stage 1: Try Open Library
      setCoverUrl(`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg?default=false`);
    } else {
      // If no ISBN, skip straight to title search
      setFetchStage('google-api-title');
      triggerTitleSearch();
    }
  }, [book.isbn, book.title, book.customCoverUrl]);

  const triggerTitleSearch = () => {
    // Stage 3: Google Books API Title+Author Search
    setIsLoading(true);
    // Remove subtitle for better search hit rate (split by :)
    const shortTitle = book.title.split(':')[0].trim();
    // Use only the first author if there are multiple
    const firstAuthor = book.author.split(',')[0].split(' and ')[0].trim();
    
    const query = `intitle:${encodeURIComponent(shortTitle)}+inauthor:${encodeURIComponent(firstAuthor)}`;
    
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=1`)
      .then(res => res.json())
      .then(data => {
        const item = data.items?.[0];
        const imageLinks = item?.volumeInfo?.imageLinks;
        const bestImage = imageLinks?.thumbnail || imageLinks?.smallThumbnail;
        
        if (bestImage) {
          setCoverUrl(bestImage.replace(/^http:\/\//i, 'https://'));
          setIsLoading(false);
        } else {
           // If title search has no image, try direct fallback if ISBN exists
           const isbn = cleanIsbn(book.isbn);
           if (isbn) {
             triggerDirectGoogleFallback(isbn);
           } else {
             setFetchStage('failed');
             setIsLoading(false);
             setCoverUrl(null);
           }
        }
      })
      .catch(() => {
         const isbn = cleanIsbn(book.isbn);
         if (isbn) {
           triggerDirectGoogleFallback(isbn);
         } else {
           setFetchStage('failed');
           setIsLoading(false);
           setCoverUrl(null);
         }
      });
  };

  const handleImageError = () => {
    const isbn = cleanIsbn(book.isbn);

    if (fetchStage === 'open-library') {
      // Switch to Stage 2: Google Books API Search by ISBN
      setFetchStage('google-api-isbn');
      setIsLoading(true);
      
      if (!isbn) {
         triggerTitleSearch();
         return;
      }
      
      fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        .then(res => res.json())
        .then(data => {
          const imageLinks = data.items?.[0]?.volumeInfo?.imageLinks;
          const bestImage = imageLinks?.thumbnail || imageLinks?.smallThumbnail;
          
          if (bestImage) {
            setCoverUrl(bestImage.replace(/^http:\/\//i, 'https://'));
            setIsLoading(false); 
          } else {
            // ISBN lookup yielded no image, try title search
            setFetchStage('google-api-title'); // Mark stage update
            triggerTitleSearch();
          }
        })
        .catch(() => {
           setFetchStage('google-api-title');
           triggerTitleSearch();
        });

    } else if (fetchStage === 'google-api-isbn') {
      // If ISBN API failed, try Title API
      setFetchStage('google-api-title');
      triggerTitleSearch();

    } else if (fetchStage === 'google-api-title') {
      // If Title API failed, try Direct URL as last resort
      if (isbn) {
        triggerDirectGoogleFallback(isbn);
      } else {
        setFetchStage('failed');
        setIsLoading(false);
        setCoverUrl(null);
      }
    } else {
      // All stages failed
      setFetchStage('failed');
      setIsLoading(false);
      setCoverUrl(null);
    }
  };

  const triggerDirectGoogleFallback = (isbn: string) => {
      setFetchStage('google-direct');
      // Direct link often works when API metadata is restricted but image exists
      setCoverUrl(`https://books.google.com/books/content?printsec=frontcover&img=1&zoom=1&source=gbs_api&isbn=${isbn}`);
  };

  const isFailed = fetchStage === 'failed';

  return (
    <div 
      className="relative group/book p-5 rounded-xl bg-white border border-gray-200 hover:border-stanford-primary/50 hover:ring-2 hover:ring-stanford-primary/10 dark:bg-white/5 dark:border-white/10 dark:hover:border-stanford-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 flex items-start gap-5 h-full"
    >
      {/* Book Cover */}
      <div className="flex-shrink-0 w-24 h-36 bg-gray-100 dark:bg-black/20 rounded-md overflow-hidden shadow-md relative border border-gray-200 dark:border-white/5 group-hover/book:shadow-lg transition-all">
        {!isFailed && coverUrl ? (
          <img
            src={coverUrl}
            alt={`Cover of ${book.title}`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}
            onError={handleImageError}
            onLoad={() => setIsLoading(false)}
          />
        ) : (
            // Fallback State
             <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 dark:text-gray-600 p-2 text-center bg-gray-50 dark:bg-white/5">
                <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                <span className="text-[9px] uppercase font-bold tracking-wider opacity-60">No Cover</span>
             </div>
        )}
      </div>

      {/* Book Content */}
      <div className="flex-1 min-w-0 flex flex-col h-full">
        <div className="flex justify-between items-start gap-2 mb-1">
          <div 
            className={`text-gray-900 dark:text-white text-lg font-bold leading-tight group-hover/book:text-stanford-primary transition-colors line-clamp-2 ${book.link ? 'cursor-pointer' : ''}`}
            onClick={() => book.link && window.open(book.link, '_blank')}
          >
            {book.title}
          </div>
        </div>
        
        <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">{book.author}</div>
        
        {/* Description Blurb */}
        {book.description && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 line-clamp-3 leading-relaxed">
                {book.description}
            </p>
        )}
        
        <div className="pt-3 mt-auto border-t border-gray-100 dark:border-white/5 flex flex-col gap-2">
           <div className="flex flex-wrap gap-2 text-[10px] text-gray-500 dark:text-gray-400 font-medium">
              <span className="uppercase tracking-wide font-bold">{book.publisher}</span>
              {book.date && <span>• {book.date.split(' ').pop()}</span>}
           </div>
          
          {book.link && (
            <div className="flex justify-start mt-1">
              <a 
                href={book.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stanford-primary/10 text-stanford-primary dark:bg-white/10 dark:text-red-300 dark:hover:bg-stanford-primary dark:hover:text-white text-xs font-bold uppercase tracking-wider hover:bg-stanford-primary hover:text-white transition-all group/link w-full justify-center"
              >
                <span>Catalog Record</span>
                <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Bookmark Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleBook(book);
        }}
        className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 shadow-sm z-10 ${
          isBookmarked 
            ? 'text-white bg-stanford-primary scale-110 shadow-md' 
            : 'text-gray-300 bg-white/80 dark:bg-black/60 hover:text-stanford-primary hover:bg-white dark:hover:bg-white/20 dark:text-gray-400 backdrop-blur-sm'
        }`}
        title={isBookmarked ? "Remove from reading list" : "Add to reading list"}
      >
         <svg className={`w-5 h-5 ${isBookmarked ? 'fill-current' : 'fill-none'}`} stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
         </svg>
      </button>
    </div>
  );
};