import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generarHaiku() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: "Escribe un haiku en español sobre la primavera." },
      ],
    });

    console.log("Haiku generado:\n", response.choices[0].message.content);
  } catch (error) {
    console.error("Error al generar el haiku:", error);
  }
}

generarHaiku();
