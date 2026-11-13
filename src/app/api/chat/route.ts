import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const businessInfo = `
Company: Desert In Alaska

Contact Information:
Phone: 313-931-3070
Email: desertinalaska@outlook.com
Website: https://www.desertinalaska.com
Contact Page: https://www.desertinalaska.com/contact/

Pages:
- Home
- About Us
- Services
- Projects
- Blog
- Contact

Services:
- Commercial Fire Suppression Detroit
- Commercial HVAC Detroit
- Kitchen Exhaust Systems Detroit
- Gas Piping Detroit
- Industrial Dry Chemical Fire Suppression Detroit

Instructions:
- Answer questions about Desert In Alaska using the information provided.
- If the user asks about the company, prioritize company information.
- If the user asks a general question unrelated to the company, answer normally as a helpful AI assistant.
- Be concise and professional.
- When asked for quotes, appointments, or contact details, provide the company contact information.
`;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Missing GEMINI_API_KEY environment variable");
      return NextResponse.json(
        { message: "Chat service is not configured." },
        { status: 500 },
      );
    }

    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { message: "Message is required." },
        { status: 400 },
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    const modelsToTry = [
      "gemini-2.5-flash",
      "gemini-2.5-flash-lite",
      "gemini-flash-latest",
    ];

    let lastError: unknown = null;
    let replyText = "";

    for (const model of modelsToTry) {
      try {
        const result = await ai.models.generateContent({
          model,
          contents: `
${businessInfo}

User Question:
${message}
`,
        });

        if (result && result.text) {
          replyText = result.text;
          break;
        }
      } catch (err) {
        lastError = err;
        console.warn(`Model ${model} failed, trying next fallback...`, err);
      }
    }

    if (!replyText) {
      throw lastError || new Error("No response from AI models");
    }

    return NextResponse.json({
      message: replyText,
    });
  } catch (error) {
    console.error("GEMINI CHAT ERROR:", error);

    return NextResponse.json(
      {
        message: "Sorry, something went wrong.",
      },
      { status: 500 },
    );
  }
}

