import React, { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { AI_MODEL_OPTIONS } from '../constants';

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
  const [selectedModel, setSelectedModel] = useState<string>(AI_MODEL_OPTIONS[0].id);
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
    const response = await sendMessageToGemini(newHistory, userText, selectedModel);

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
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center md:inset-auto md:bottom-8 md:right-8 md:block pointer-events-none">
      <div className="pointer-events-auto w-full md:w-96 bg-white dark:bg-[#2a2a2a] border-t md:border border-gray-200 dark:border-stanford-primary/50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:shadow-[0_10px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-t-2xl md:rounded-2xl overflow-hidden flex flex-col max-h-[80vh] md:max-h-[600px] animate-slide-in-right">
        
        {/* Header */}
        <div 
          className="bg-stanford-primary px-4 py-3 flex justify-between items-center flex-shrink-0 cursor-pointer md:cursor-default" 
          onClick={() => window.innerWidth < 768 && onClose()}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <h3 className="font-sans font-semibold text-white tracking-wide">AI Curator</h3>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }} 
            className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close Chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        </div>

        <div className="px-4 py-2 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-[#2a2a2a]">
          <label htmlFor="ai-model-select" className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">
            AI Model
          </label>
          <select
            id="ai-model-select"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            disabled={isLoading}
            className="w-full text-sm rounded-lg px-3 py-2 border border-gray-300 dark:border-white/10 bg-white dark:bg-black/30 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-stanford-primary"
          >
            {AI_MODEL_OPTIONS.map((model) => (
              <option key={model.id} value={model.id}>
                {model.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {AI_MODEL_OPTIONS.find((model) => model.id === selectedModel)?.description}
          </p>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#1a1a1a] min-h-0 scrollbar-hide">
          {messages.map((msg, idx) => {
            const isError = msg.text.startsWith('⚠️');
            const isUser = msg.role === 'user';
            
            // Determine styles based on role and error state
            let bubbleClass = '';
            
            if (isUser) {
               // Use Stanford Primary Color (Cardinal Red) for User
               bubbleClass = 'bg-stanford-primary text-white rounded-br-none';
            } else if (isError) {
               bubbleClass = 'bg-red-50 text-red-800 border border-red-200 rounded-bl-none';
            } else {
               bubbleClass = 'bg-white border border-gray-200 text-gray-800 dark:bg-[#333] dark:text-gray-200 dark:border-white/5 rounded-bl-none shadow-sm dark:shadow-none';
            }

            return (
              <div key={idx} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${bubbleClass}`}>
                  <Markdown
                    components={{
                      a: ({ node, ...props }) => (
                        <a 
                          {...props} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`underline hover:opacity-80 break-all ${isUser ? 'text-white' : 'text-stanford-primary dark:text-red-300'}`} 
                        />
                      ),
                      p: ({ node, ...props }) => <p {...props} className="mb-2 last:mb-0" />,
                      ul: ({ node, ...props }) => <ul {...props} className="list-disc ml-4 mb-2" />,
                      ol: ({ node, ...props }) => <ol {...props} className="list-decimal ml-4 mb-2" />,
                      li: ({ node, ...props }) => <li {...props} className="pl-1" />,
                      strong: ({ node, ...props }) => <strong {...props} className="font-bold" />,
                      em: ({ node, ...props }) => <em {...props} className="italic" />,
                      h1: ({ node, ...props }) => <h1 {...props} className="text-base font-bold mb-2 mt-1 block" />,
                      h2: ({ node, ...props }) => <h2 {...props} className="text-sm font-bold mb-2 mt-1 block" />,
                      h3: ({ node, ...props }) => <h3 {...props} className="text-sm font-bold mb-1 mt-1 block" />,
                      blockquote: ({ node, ...props }) => <blockquote {...props} className="border-l-2 border-gray-300 pl-3 italic my-2" />
                    }}
                  >
                    {msg.text}
                  </Markdown>
                </div>
              </div>
            );
          })}
          
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
        <div className="p-3 bg-white dark:bg-[#2a2a2a] border-t border-gray-200 dark:border-white/10 flex-shrink-0 safe-area-bottom">
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
