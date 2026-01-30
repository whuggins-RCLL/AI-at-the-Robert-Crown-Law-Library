import React from 'react';

interface AboutProps {
  onBack: () => void;
}

export const About: React.FC<AboutProps> = ({ onBack }) => {
  return (
    <div className="animate-fade-in-up max-w-4xl mx-auto">
      {/* Navigation */}
      <div className="flex items-center mb-12">
        <button 
          onClick={onBack}
          className="group mr-6 p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-white/5 dark:border-transparent dark:hover:bg-white/10 text-gray-900 dark:text-white transition-all hover:-translate-x-1"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <div>
          <span className="text-stanford-primary text-xs font-bold uppercase tracking-widest block mb-1">Behind the Scenes</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">About This Exhibit</h2>
        </div>
      </div>

      <div className="space-y-8 md:space-y-12">
        {/* Intro */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light border-l-4 border-stanford-primary pl-6">
           AI in the Library exists as both a physical display in the Robert Crown Law Library and this companion website. Fittingly, we used AI tools throughout its creation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* How We Made This */}
            <section className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg relative overflow-hidden group hover:border-stanford-primary/30 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-stanford-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-stanford-primary/10 transition-colors"></div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4 relative z-10">How We Made This</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                    We used Canva for visual planning, NotebookLM for videos and infographics, and Claude, Gemini, and ChatGPT for drafting text. All AI-generated content was reviewed, fact-checked, and refined by library staff using traditional research methods.
                </p>
            </section>

             {/* Vibe Coding */}
            <section className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg relative overflow-hidden group hover:border-stanford-primary/30 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-stanford-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-stanford-primary/10 transition-colors"></div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4 relative z-10">This Site Is a Vibe Coding Example</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                    This website demonstrates "vibe coding"—building software by describing what you want in plain language while an AI writes the code. We built it using Google AI Studio and host it through GitHub and Vercel. The site connects to three APIs: Google Gemini, Open Library, and Google Books.
                </p>
            </section>
        </div>

        {/* Why We Share */}
        <section className="bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/5 transition-colors hover:border-stanford-primary/30">
            <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                 <span className="w-2 h-2 rounded-full bg-stanford-primary mr-3"></span>
                 Why We Share Our Process
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Transparency matters. By showing how we used these tools—including their limitations—we hope to encourage informed experimentation within the Stanford Law community.
            </p>
        </section>

        <div className="text-center pt-8 opacity-60">
            <p className="text-sm italic text-gray-500 dark:text-gray-400">Robert Crown Law Library Digital Exhibit • 2026</p>
        </div>
      </div>
    </div>
  );
};