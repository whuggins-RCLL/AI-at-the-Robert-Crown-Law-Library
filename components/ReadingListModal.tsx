import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { Book } from '../types';

interface ReadingListModalProps {
  isOpen: boolean;
  onClose: () => void;
  readingList: Book[];
  onRemove: (book: Book) => void;
}

export const ReadingListModal: React.FC<ReadingListModalProps> = ({ isOpen, onClose, readingList, onRemove }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const formatCitations = () => {
    return readingList.map(b => {
      let citation = `${b.title} by ${b.author}`;
      if (b.publisher) citation += `, ${b.publisher}`;
      if (b.date) citation += ` (${b.date})`;
      if (b.description) citation += `\nSummary: ${b.description}`;
      if (b.link) citation += `\nLink: ${b.link}`;
      return citation;
    }).join('\n\n');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formatCitations());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("My Reading List - Crown Law Digital Exhibit");
    const body = encodeURIComponent("Here is my reading list from the Crown Law Library Digital Exhibit:\n\n" + formatCitations());
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFont("times", "bold");
    doc.setFontSize(22);
    doc.setTextColor(140, 21, 21); // Stanford Red
    doc.text("Crown Law Library", 20, 20);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor(60, 60, 60);
    doc.text("Digital Exhibit Reading List", 20, 30);
    
    doc.setLineWidth(0.5);
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 35, 190, 35);

    let y = 50;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const maxWidth = 170;

    readingList.forEach((book) => {
      // Check if we need a new page (rough estimation)
      if (y > pageHeight - 50) {
        doc.addPage();
        y = 30;
      }

      // Book Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      const titleLines = doc.splitTextToSize(book.title, maxWidth);
      doc.text(titleLines, margin, y);
      y += 5 * titleLines.length;

      // Author
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(50, 50, 50);
      doc.text(`By ${book.author}`, margin, y);
      y += 6;

      // Publisher/Date
      let details = "";
      if (book.publisher) details += book.publisher;
      if (book.date) details += details ? `, ${book.date}` : book.date;
      
      if (details) {
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(details, margin, y);
        y += 5;
      }

      // Description
      if (book.description) {
        y += 2;
        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        doc.setTextColor(80, 80, 80);
        const descLines = doc.splitTextToSize(book.description, maxWidth);
        doc.text(descLines, margin, y);
        y += 5 * descLines.length;
      }

      // Link
      if (book.link) {
        y += 2;
        doc.setTextColor(0, 0, 255);
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.textWithLink("View Catalog Record", margin, y, { url: book.link });
        y += 6;
      }

      y += 10; // Spacer between books
    });

    // Footer
    const today = new Date().toLocaleDateString();
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text(`Generated on ${today}`, margin, pageHeight - 10);

    doc.save("Crown_Law_Reading_List.pdf");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-scale-up border border-gray-200 dark:border-white/10">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-white/5 flex justify-between items-center bg-gray-50 dark:bg-[#222]">
           <div>
             <span className="text-stanford-primary text-xs font-bold uppercase tracking-widest block mb-1">Crown Law Library</span>
             <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">My Reading List</h2>
           </div>
           <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
             <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
           </button>
        </div>

        {/* Instructions / Context */}
        <div className="bg-stanford-primary/5 border-b border-stanford-primary/10 p-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex gap-3">
             <svg className="w-5 h-5 text-stanford-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             <p>
               <strong className="font-semibold block text-gray-900 dark:text-white mb-1">How to export your list:</strong>
               Review your selected books below. You can copy the citations, download a formatted PDF, or email the list to yourself.
             </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {readingList.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-block p-4 rounded-full bg-gray-100 dark:bg-white/5 mb-4">
                 <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Your reading list is empty.</p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Browse the exhibits and click the bookmark icon to add books.</p>
            </div>
          ) : (
            readingList.map((book, idx) => (
              <div key={idx} className="flex justify-between items-start p-4 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-transparent group">
                 <div className="pr-4 w-full">
                    <h4 className="font-bold text-gray-900 dark:text-white leading-tight">{book.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 font-medium">{book.author}</p>
                    {book.description && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed italic">
                            {book.description}
                        </p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-400 dark:text-gray-500">
                      {book.publisher && <span>{book.publisher}</span>}
                      {book.date && <span>• {book.date}</span>}
                    </div>
                 </div>
                 <button 
                   onClick={() => onRemove(book)}
                   className="text-gray-400 hover:text-red-500 transition-colors p-1"
                   title="Remove from list"
                 >
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                 </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {readingList.length > 0 && (
          <div className="p-6 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-[#222] grid grid-cols-3 gap-3">
            <button 
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 px-3 py-3 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-lg font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/20 transition-colors text-sm"
            >
               {copied ? (
                 <>
                   <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                   <span>Copied!</span>
                 </>
               ) : (
                 <>
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                   <span>Copy</span>
                 </>
               )}
            </button>
            
            <button 
              onClick={handleDownloadPDF}
              className="flex items-center justify-center gap-2 px-3 py-3 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-lg font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/20 transition-colors text-sm"
            >
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
               <span>Save PDF</span>
            </button>

            <button 
              onClick={handleEmail}
              className="flex items-center justify-center gap-2 px-3 py-3 bg-stanford-primary text-white rounded-lg font-bold hover:bg-stanford-dark transition-colors shadow-lg text-sm"
            >
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
               <span>Email List</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};