import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let aiInstance: GoogleGenAI | null = null;
let configError: string | null = null;

const getAI = () => {
  if (aiInstance) return aiInstance;
  
  // Reset error state on new attempt
  configError = null;

  let apiKey = '';

  // Priority 1: Vite (Standard for this project structure)
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
  // We check multiple standard prefixes to be robust across different Vercel deployment templates
  if (!apiKey && typeof process !== 'undefined' && process.env) {
    if (process.env.API_KEY) apiKey = process.env.API_KEY;
    else if (process.env.REACT_APP_API_KEY) apiKey = process.env.REACT_APP_API_KEY;
    else if (process.env.VITE_API_KEY) apiKey = process.env.VITE_API_KEY;
    else if (process.env.NEXT_PUBLIC_API_KEY) apiKey = process.env.NEXT_PUBLIC_API_KEY;
  }

  // Clean the key (remove whitespace/newlines which is a common copy-paste error)
  if (apiKey) {
    apiKey = apiKey.trim();
  }

  // Debugging log (visible in browser console)
  console.log("Gemini Service Init: Key found?", !!apiKey);

  if (!apiKey) {
    console.error("Gemini Error: No API Key found in environment variables (VITE_API_KEY, NEXT_PUBLIC_API_KEY, REACT_APP_API_KEY, or API_KEY).");
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
      return "⚠️ System Config Error: API Key is missing. Please go to Vercel Settings > Environment Variables and add 'VITE_API_KEY' (value: your Google AI key). Then redeploy.";
    }
    if (configError === "INIT_FAILED") {
      return "⚠️ System Error: Failed to initialize AI client.";
    }

    // Use the specific model requested for Basic Text Tasks
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
    return result.text || "I'm sorry, I couldn't process that request right now (Empty response).";
    
  } catch (error: any) {
    console.error("Gemini API Request Error:", error);
    
    const errorMessage = error.message || error.toString();
    const currentDomain = typeof window !== 'undefined' ? window.location.origin : 'unknown';

    // 1. Handle Key Restrictions (This matches your screenshot error)
    if (
        errorMessage.includes('PERMISSION_DENIED') || 
        errorMessage.includes('requests from referer') || 
        errorMessage.includes('blocked') ||
        error.status === 403
    ) {
      return `⚠️ Access Denied: Google blocked this request.\n\nGo to Google Cloud Console > Credentials > Edit Key.\n\nUnder "Website Restrictions", click ADD and paste:\n${currentDomain}/*`;
    }

    // 2. Handle Missing/Invalid Key
    if (errorMessage.includes('API key') || error.status === 400) {
      return `⚠️ Access Error: API Key is invalid. Check Vercel Environment Variables.`;
    }
    
    // 3. Handle Overloaded/Busy
    if (error.status === 503 || error.status === 429) {
      return `⚠️ Service Busy: The AI model is currently overloaded. Please try again in 30 seconds. (Status: ${error.status})`;
    }
    
    // 4. Handle Model Not Found (404)
    if (error.status === 404) {
      return `⚠️ Configuration Error: The model '${'gemini-3-flash-preview'}' was not found. Your API key might not have access to this preview model yet.`;
    }
    
    return `⚠️ Technical Difficulty: ${errorMessage}`;
  }
};