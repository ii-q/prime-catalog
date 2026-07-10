import { GoogleGenAI, Type } from "@google/genai";
import { CarDetails, GeminiResponse, Language } from "../types";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const getBeltSpecifications = async (details: CarDetails, language: Language = 'en'): Promise<GeminiResponse> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your environment configuration.");
  }

  const langInstruction = language === 'ar' 
    ? "Provide the 'vehicleSummary', 'name' of belts, and 'notes' in Arabic. Keep technical values like part numbers or measurements (e.g. 6PK1200) in Latin characters." 
    : "Provide the content in English.";

  const prompt = `
    Analyze the following vehicle and provide a detailed list of all power transmission belts (Serpentine, Timing, V-belts, AC, Power Steering, Alternator, etc.) required for its engine.
    
    Vehicle Details:
    Year: ${details.year}
    Manufacturer: ${details.manufacturer}
    Make: ${details.make}
    Model: ${details.model}
    Engine: ${details.engine}

    ${langInstruction}

    Provide the result in a strict JSON format.
    Include a short summary of the vehicle engine config found.
    For each belt, provide:
    - Name (e.g., "Alternator Belt")
    - Type (Serpentine, Timing, V-Belt, Other)
    - Specification (Length in mm/inches, rib count like 6PKxxxx, or tooth count for timing belts)
    - PartNumberReference (A common industry part number example if applicable, e.g., Gates or Dayco format)
    - Notes (Installation location or specific routing notes)
  `;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      vehicleSummary: {
        type: Type.STRING,
        description: "A brief confirmation of the engine and vehicle identified."
      },
      belts: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            type: { 
              type: Type.STRING,
              enum: ["Serpentine", "Timing", "V-Belt", "Other"]
            },
            specification: { type: Type.STRING },
            partNumberReference: { type: Type.STRING, nullable: true },
            notes: { type: Type.STRING, nullable: true }
          },
          required: ["name", "type", "specification"]
        }
      }
    },
    required: ["vehicleSummary", "belts"]
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response received from AI");
    }

    return JSON.parse(text) as GeminiResponse;
  } catch (error) {
    console.error("Error fetching belt data:", error);
    throw error;
  }
};