import React from 'react';

interface AcknowledgmentsProps {
  onBack: () => void;
}

export const Acknowledgments: React.FC<AcknowledgmentsProps> = ({ onBack }) => {
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
          <span className="text-stanford-primary text-xs font-bold uppercase tracking-widest block mb-1">Project Credits</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">Acknowledgments</h2>
        </div>
      </div>

      <div className="space-y-8 md:space-y-12">
        {/* Leadership */}
        <section className="bg-white dark:bg-[#1a1a1a] p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-stanford-primary"></div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">Leadership & Vision</h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                We extend our deepest gratitude to <span className="font-semibold text-gray-900 dark:text-white">Beth Williams</span>, Dean of the Robert Crown Law Library, for her unwavering support, visionary guidance, and commitment to fostering innovation through our AI Ventures.
            </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Staff Contributions */}
            <section className="bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/5 transition-colors hover:border-stanford-primary/30">
                <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-stanford-primary mr-3"></span>
                    Staff Contributions
                </h3>
                <ul className="space-y-4">
                    {['Will Huggins', 'Taryn Marks', 'Nhatrang Nguyen', 'Lily Haupt'].map((name) => (
                        <li key={name} className="flex items-center text-gray-700 dark:text-gray-300 font-medium text-lg">
                           <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mr-3"></span>
                           {name}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Selected Reading */}
            <section className="bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/5 transition-colors hover:border-stanford-primary/30">
                <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-stanford-primary mr-3"></span>
                    Selected Reading Fulfillment & Processing
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-6 uppercase tracking-wide font-semibold ml-5">
                    Research & Development
                </p>
                <ul className="space-y-4">
                    {['Jake Kubrin', 'Mark Jefferson', 'Brenda Alfaro-Campos'].map((name) => (
                        <li key={name} className="flex items-center text-gray-700 dark:text-gray-300 font-medium text-lg">
                           <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mr-3"></span>
                           {name}
                        </li>
                    ))}
                </ul>
            </section>
        </div>

        <div className="text-center pt-8 opacity-60">
            <p className="text-sm italic text-gray-500 dark:text-gray-400">Robert Crown Law Library Digital Exhibit • 2026</p>
        </div>
      </div>
    </div>
  );
};