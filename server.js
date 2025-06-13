import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: message }],
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ reply: 'Error al generar la respuesta' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
