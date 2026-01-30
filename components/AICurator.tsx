import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AICuratorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AICurator: React.FC<AICuratorProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to the Robert Crown Law Library digital exhibit. I am the AI Curator. Ask me about the 'New York Times Rule', legal biases, or our resources." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    
    // Add user message
    const newHistory = [...messages, { role: 'user' as const, text: userText }];
    setMessages(newHistory);
    setIsLoading(true);

    // Call Gemini
    const response = await sendMessageToGemini(newHistory, userText);

    // Add model response
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 w-full max-w-md md:w-96 md:bottom-8 md:right-8 flex flex-col items-end pointer-events-none">
      <div className="pointer-events-auto w-full bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-stanford-primary/50 shadow-[0_10px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-t-lg md:rounded-lg overflow-hidden flex flex-col max-h-[600px] animate-slide-in-right">
        
        {/* Header */}
        <div className="bg-stanford-primary px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <h3 className="font-sans font-semibold text-white tracking-wide">AI Curator</h3>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#1a1a1a] h-80 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-stanford-cool text-white rounded-br-none' 
                    : 'bg-white border border-gray-200 text-gray-800 dark:bg-[#333] dark:text-gray-200 dark:border-white/5 rounded-bl-none shadow-sm dark:shadow-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-[#333] border border-gray-200 dark:border-white/5 rounded-2xl rounded-bl-none px-4 py-2 flex items-center space-x-1 shadow-sm">
                <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white dark:bg-[#2a2a2a] border-t border-gray-200 dark:border-white/10">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about the exhibit..."
              className="w-full bg-gray-100 text-gray-900 dark:bg-black/40 dark:text-white pl-4 pr-10 py-3 rounded-full border border-transparent focus:bg-white dark:focus:bg-black/60 focus:border-stanford-primary dark:focus:border-stanford-primary focus:ring-1 focus:ring-stanford-primary focus:outline-none transition-all placeholder-gray-500 text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-1.5 rounded-full bg-stanford-primary text-white hover:bg-stanford-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};