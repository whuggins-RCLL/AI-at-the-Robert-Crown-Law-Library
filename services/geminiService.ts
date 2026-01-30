import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  userMessage: string
): Promise<string> => {
  try {
    // Using gemini-3-flash-preview as recommended for basic text tasks
    const model = 'gemini-3-flash-preview';
    
    // Construct a prompt that includes history context manually or use chat mode
    // Using chat mode for better context retention
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again in a moment.";
  }
};