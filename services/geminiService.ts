import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let aiInstance: GoogleGenAI | null = null;
let configError: string | null = null;

const getAI = () => {
  if (aiInstance) return aiInstance;
  if (configError) return null;

  let apiKey = '';

  // Priority 1: Vite (Standard for this project structure)
  // We check import.meta.env if it exists
  try {
    // @ts-ignore
    if (import.meta && import.meta.env && import.meta.env.VITE_API_KEY) {
      // @ts-ignore
      apiKey = import.meta.env.VITE_API_KEY;
    }
  } catch (e) {
    // import.meta might not exist in some environments
  }

  // Priority 2: Standard Process Env (Node/CRA/Next)
  // We check process.env if it exists
  if (!apiKey && typeof process !== 'undefined' && process.env) {
    if (process.env.API_KEY) apiKey = process.env.API_KEY;
    else if (process.env.REACT_APP_API_KEY) apiKey = process.env.REACT_APP_API_KEY;
    else if (process.env.VITE_API_KEY) apiKey = process.env.VITE_API_KEY;
  }

  // Debugging log (visible in browser console)
  console.log("Gemini Service Init: Key found?", !!apiKey);

  if (!apiKey) {
    console.error("Gemini Error: No API Key found in environment variables (VITE_API_KEY, REACT_APP_API_KEY, or API_KEY).");
    configError = "MISSING_KEY";
    return null;
  }

  try {
    aiInstance = new GoogleGenAI({ apiKey });
  } catch (error) {
    console.error("Gemini Error: Failed to initialize client", error);
    configError = "INIT_FAILED";
    return null;
  }
  
  return aiInstance;
};

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  userMessage: string
): Promise<string> => {
  try {
    const ai = getAI();
    
    // Explicitly handle configuration errors
    if (!ai || configError === "MISSING_KEY") {
      return "⚠️ System Config Error: API Key is missing. If you are the admin, please add 'VITE_API_KEY' to your Vercel Environment Variables and redeploy.";
    }
    if (configError === "INIT_FAILED") {
      return "⚠️ System Error: Failed to initialize AI client.";
    }

    const model = 'gemini-3-flash-preview';
    
    // The history array passed in includes the current user message at the end.
    // We must exclude it from the history passed to chats.create.
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
    
  } catch (error: any) {
    console.error("Gemini API Request Error:", error);
    
    // Handle specific API errors
    if (error.message?.includes('API key') || error.status === 400 || error.status === 403) {
      return "⚠️ Access Error: API Key is invalid or expired. Please check your Vercel configuration.";
    }
    
    if (error.status === 503 || error.status === 429) {
      return "I'm currently receiving too many requests. Please try again in a moment.";
    }
    
    return "I am currently experiencing technical difficulties. Please try again later.";
  }
};