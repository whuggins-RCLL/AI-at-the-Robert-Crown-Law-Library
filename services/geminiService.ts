import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Lazy initialization to prevent app crash on load if API key is missing or process is undefined
let aiInstance: GoogleGenAI | null = null;

const getAI = () => {
  if (!aiInstance) {
    // Safely access process.env to avoid "process is not defined" in some browser environments
    // We check for process existence first
    const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) 
      ? process.env.API_KEY 
      : ''; 
      
    if (!apiKey) {
      console.warn("API_KEY is missing. Please ensure process.env.API_KEY is set in your environment variables.");
    }
      
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  userMessage: string
): Promise<string> => {
  try {
    const ai = getAI();
    // Using gemini-3-flash-preview as recommended for basic text tasks
    const model = 'gemini-3-flash-preview';
    
    // The history array passed in includes the current user message at the end.
    // We must exclude it from the history passed to chats.create, 
    // because sendMessage will send it as the new turn.
    const pastHistory = history.slice(0, -1);
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: pastHistory.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic or configuration issues. Please try again later.";
  }
};