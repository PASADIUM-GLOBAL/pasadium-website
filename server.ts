import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini client if API key is present
const apiKey = process.env.GEMINI_API_KEY;
const hasApiKey = Boolean(apiKey && apiKey !== 'MY_GEMINI_API_KEY');

let ai: GoogleGenAI | null = null;
if (hasApiKey) {
  try {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
  }
}

// Fallback knowledge agent response engine
function generateLocalKnowledgeResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('what is pasadium') || q.includes('who are you') || q.includes('about pasadium')) {
    return "PASADIUM GLOBAL is an African technology house and digital infrastructure company headquartered in Mombasa, Kenya. We engineer digital infrastructure, market execution platforms, intelligence systems, and media products designed from Africa for a connected world.";
  }

  if (q.includes('trade') || q.includes('ylc') || q.includes('market') || q.includes('finance')) {
    return "PASADIUM Trade provides digital market infrastructure, trading systems, and execution technology. Its primary platform is YLC TradeHub (TradeVerse), built for high-throughput execution, institutional risk controls, and automated market intelligence.";
  }

  if (q.includes('media') || q.includes('vcaas') || q.includes('video') || q.includes('publishing')) {
    return "PASADIUM Media delivers sovereign digital media infrastructure, broadcast systems, and content publishing. Powered by VCAAS (Video Cloud as a Service), it enables low-latency streaming, distributed media distribution, and African cultural broadcasting.";
  }

  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('address')) {
    return "You can reach PASADIUM GLOBAL via our dedicated terminals:\n• General Inquiries: hello@pasadium.tech\n• Institutional Partnerships: partners@pasadium.tech\n• Engineering & Tech: tech@pasadium.tech\nHeadquartered in Mombasa, Kenya.";
  }

  if (q.includes('product') || q.includes('available') || q.includes('systems')) {
    return "PASADIUM's active ecosystem includes:\n• Trade: YLC TradeHub (Live market execution)\n• Media: VCAAS / MediaVerse (Media infrastructure)\n• Connect: WiFi Hub & terrestrial access (Building)\n• AI: Autonomous decision systems (Active)\n• Labs & Studio: Exploratory protocols and visual engineering.";
  }

  if (q.includes('coming soon') || q.includes('frontier') || q.includes('roadmap')) {
    return "The PASADIUM Frontier currently advances three core vectors:\n1. AI Intelligence: Autonomous decision-support interfaces (70% deployed).\n2. Connect: Regional high-density digital access infrastructure (55% deployed).\n3. Labs: Cryptographic verification, ledger consensus, and spatial systems (40% deployed).";
  }

  if (q.includes('partner') || q.includes('invest') || q.includes('collaborate')) {
    return "PASADIUM partners with institutional liquidity providers, telecommunications operators, media syndicates, and sovereign digital transformation agencies. Reach our partnership desk directly at partners@pasadium.tech.";
  }

  if (q.includes('infrastructure') || q.includes('polymath') || q.includes('bridge') || q.includes('sentinel')) {
    return "Beneath the public PASADIUM brand lies an enterprise infrastructure matrix encompassing Polymath compute orchestration, Bridge.OS interoperability, Sentinel threat intelligence, and the Evidence.OS verification engine. These internal subsystems power our public products.";
  }

  return "PASADIUM GLOBAL builds sovereign digital infrastructure, trading execution platforms (YLC TradeHub), and media distribution systems (VCAAS) from Mombasa, Kenya. How can I assist your inquiry regarding our systems, products, or institutional partnerships?";
}

// AI Assistant endpoint
app.post('/api/ai/query', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Valid message string required' });
    }

    if (ai) {
      try {
        const systemInstruction = `You are PASADIUM Intelligence, the sovereign public knowledge agent for PASADIUM GLOBAL (pasadium.tech), an African technology house and digital infrastructure company based in Mombasa, Kenya.
PASADIUM builds digital infrastructure, intelligence, media, and market products from Africa for a connected world.

Ecosystem architecture:
- Front door: pasadium.tech is the sovereign public identity.
- Public Systems:
  1. Trade: Digital markets and trading infrastructure. Product: YLC TradeHub (TradeVerse), powered by PASADIUM.
  2. Media: Media infrastructure, streaming and publishing. Product: VCAAS / MediaVerse.
  3. AI: Intelligent interfaces, automation and decision-support systems.
  4. Connect: Terrestrial connectivity, WiFi Hub and access networks.
  5. Labs: Experimental technology, research, cryptography.
  6. Studio: Creative technology, visual systems, digital products.
- Deep Infrastructure (internal engines): Polymath, Aurora, Bridge.OS, EVENT.OS, MEMORY.OS, Sentinel, Evidence.OS.
- Headquarters: Mombasa, Kenya.
- Contact: hello@pasadium.tech, partners@pasadium.tech, tech@pasadium.tech.

Tone: Concise, architectural, authoritative, calm, high-precision. Max 2-3 short paragraphs or bullet points. No generic AI fluff.`;

        // Format conversation history if provided
        const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];
        if (Array.isArray(history)) {
          for (const item of history.slice(-4)) {
            if (item.sender && item.text) {
              contents.push({
                role: item.sender === 'user' ? 'user' : 'model',
                parts: [{ text: item.text }],
              });
            }
          }
        }
        contents.push({ role: 'user', parts: [{ text: message }] });

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents,
          config: {
            systemInstruction,
            temperature: 0.4,
          },
        });

        const replyText = response.text || generateLocalKnowledgeResponse(message);
        return res.json({ reply: replyText, source: 'gemini' });
      } catch (geminiError) {
        console.warn('Gemini query error, falling back to local registry:', geminiError);
        const replyText = generateLocalKnowledgeResponse(message);
        return res.json({ reply: replyText, source: 'registry' });
      }
    } else {
      // Local knowledge fallback
      const replyText = generateLocalKnowledgeResponse(message);
      return res.json({ reply: replyText, source: 'registry' });
    }
  } catch (error) {
    console.error('API query handler error:', error);
    res.status(500).json({ error: 'Internal system error' });
  }
});

// System Status endpoint
app.get('/api/status', (_req, res) => {
  res.json({
    organization: 'PASADIUM GLOBAL',
    node: 'MOMBASA-01',
    status: 'ONLINE',
    systems: {
      trade: 'LIVE',
      media: 'BUILDING',
      ai: 'ACTIVE',
      connect: 'EXPANDING',
      infrastructure: 'OPERATIONAL',
    },
    timestamp: new Date().toISOString(),
  });
});

// Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`PASADIUM Sovereign Node running on http://localhost:${PORT}`);
  });
}

startServer();
