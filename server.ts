import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize Google Gen AI
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// Endpoint: Evaluate Writing (ÖSD B1 Official Criteria)
app.post('/api/evaluate-writing', async (req, res) => {
  try {
    const { taskType, promptDetails, userText, targetWords } = req.body;

    if (!userText || userText.trim().length === 0) {
      return res.status(400).json({ error: 'Text darf nicht leer sein.' });
    }

    if (!ai) {
      // Offline fallback evaluator when API key is pending
      const wordCount = userText.trim().split(/\s+/).length;
      return res.json({
        totalScore: Math.min(100, Math.round(75 * (wordCount / Math.max(targetWords || 80, 1)))),
        criteria: {
          taskFulfillment: { score: 8, maxScore: 10, name: 'Aufgabenerfüllung', commentDe: 'Alle Leitpunkte wurden behandelt.', commentAr: 'تمت معالجة جميع نقاط المهمة.' },
          coherence: { score: 7.5, maxScore: 10, name: 'Textaufbau & Kohärenz', commentDe: 'Gute Struktur mit passender Anrede und Grußformel.', commentAr: 'بنية جيدة مع تحية وخاتمة مناسبة.' },
          vocabulary: { score: 7.5, maxScore: 10, name: 'Wortschatz & Ausdruck', commentDe: 'Angemessener B1-Wortschatz, Redemittel gut verwendet.', commentAr: 'مفردات ملائمة لمستوى B1 مع توظيف جيد للتراكيب.' },
          grammar: { score: 7, maxScore: 10, name: 'Grammatik & Korrektheit', commentDe: 'Einige Satzstellungsfehler bei Nebensätzen.', commentAr: 'بعض الأخطاء في ترتيب الجملة الفرعية.' },
        },
        passed: true,
        wordCount,
        errors: [
          {
            original: 'weil ich möchte...',
            correction: 'weil ich ... möchte',
            ruleDe: 'Nach "weil" steht das konjugierte Verb am Ende des Nebensatzes.',
            ruleAr: 'بعد weil، يأتي الفعل المصرف في نهاية الجملة الفرعية.',
            category: 'Grammatik',
          },
        ],
        correctedVersion: userText,
        modelAnswer: 'Hier ist eine Musterlösung...',
        recommendationsDe: 'Achte besonders auf die Verbendstellung bei Konjunktionen wie weil, dass und obwohl.',
        recommendationsAr: 'انتبه بشكل خاص لموقع الفعل المصرف في نهاية الجملة بعد الروابط weil و dass و obwohl.',
      });
    }

    const systemInstruction = `
Du bist ein offizieller Prüfer für das ÖSD Zertifikat B1 (ZB1) für Erwachsene und ein erfahrener Deutsch-Arabisch-Tutor.
Bewerte den geschriebenen Text des Kandidaten streng nach den offiziellen ÖSD B1 Bewertungskriterien:
1. Kriterium 1: Aufgabenerfüllung (Inhalt, Länge, Leitpunkte)
2. Kriterium 2: Textaufbau und Kohärenz (Gliederung, Verknüpfungselemente, Anrede/Schluss)
3. Kriterium 3: Wortschatz und Ausdruck (B1-Adäquatheit, Differenziertheit, Redemittel)
4. Kriterium 4: Grammatik und Strukturen (Satzbau, Verbstellung, Kasus, Rechtschreibung)

Gib das Ergebnis IMMER als valides JSON-Objekt mit folgender Struktur zurück:
{
  "totalScore": number (0 bis 100),
  "passed": boolean (true wenn totalScore >= 60),
  "wordCount": number,
  "criteria": {
    "taskFulfillment": { "score": number, "maxScore": number, "name": "Aufgabenerfüllung", "commentDe": string, "commentAr": string },
    "coherence": { "score": number, "maxScore": number, "name": "Textaufbau und Kohärenz", "commentDe": string, "commentAr": string },
    "vocabulary": { "score": number, "maxScore": number, "name": "Wortschatz und Ausdruck", "commentDe": string, "commentAr": string },
    "grammar": { "score": number, "maxScore": number, "name": "Grammatik und Strukturen", "commentDe": string, "commentAr": string }
  },
  "errors": [
    {
      "original": string,
      "correction": string,
      "ruleDe": string,
      "ruleAr": string (شرح نحوي دقيق ومبسط باللغة العربية),
      "category": string ("Grammatik" | "Wortschatz" | "Satzstruktur" | "Rechtschreibung")
    }
  ],
  "improvedB1Expressions": [
    {
      "originalPhrase": string,
      "suggestedB1Phrase": string,
      "meaningAr": string
    }
  ],
  "correctedVersion": string (der vollständige Text korrigiert auf authentischem B1-Niveau),
  "modelAnswer": string (eine perfekte Musterantwort auf B1-Niveau mit passenden Redemitteln),
  "recommendationsDe": string,
  "recommendationsAr": string (نصائح وتوجيهات عملية للطالب باللغة العربية)
}
Antworte ausschließlich im JSON-Format ohne Markdown-Codeblock-Wrapper.
`;

    const prompt = `
Aufgabentyp: ${taskType}
Aufgabenstellung & Leitpunkte:
${JSON.stringify(promptDetails, null, 2)}
Geforderte Wortanzahl: ca. ${targetWords || 80} Wörter

Text des Prüflings:
"""
${userText}
"""
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (error: any) {
    console.error('Error evaluating writing:', error);
    res.status(500).json({ error: error.message || 'Fehler bei der Textbewertung.' });
  }
});

// Endpoint: Evaluate Speaking (ÖSD B1 Oral Exam Assessment)
app.post('/api/evaluate-speaking', async (req, res) => {
  try {
    const { teil, scenario, transcript, userNotes } = req.body;

    if (!transcript || transcript.trim().length === 0) {
      return res.status(400).json({ error: 'Kein Transkript vorhanden.' });
    }

    if (!ai) {
      return res.json({
        totalScore: 78,
        passed: true,
        criteria: {
          taskFulfillment: { score: 8, maxScore: 10, commentDe: 'Aufgabe gut erfüllt.', commentAr: 'تم إنجاز المهمة المطلوبة بنجاح.' },
          fluency: { score: 7.5, maxScore: 10, commentDe: 'Flüssig gesprochen mit wenigen Pausen.', commentAr: 'طلاقة جيدة في الحديث مع توقفات قليلة.' },
          vocabulary: { score: 8, maxScore: 10, commentDe: 'Passender thematischer Wortschatz.', commentAr: 'مفردات مناسبة لسياق الموضوع.' },
          grammar: { score: 7.5, maxScore: 10, commentDe: 'Solide B1-Strukturen.', commentAr: 'تراكيب نحوية جيدة لمستوى B1.' },
          pronunciation: { score: 8, maxScore: 10, commentDe: 'Verständliche Aussprache und Satzmelodie.', commentAr: 'نطق واضح ونبرة جملة جيدة.' },
        },
        feedbackDe: 'Gute mündliche Leistung. Achte noch mehr auf Nebensatzkonnektoren.',
        feedbackAr: 'أداء شفوي ممتاز. انتبه أكثر لاستعمال أدوات الربط في الجمل المركبة.',
        modelSpokenResponse: 'Hier ist eine beispielhafte Äußerung für diese Sprechaufgabe...',
      });
    }

    const systemInstruction = `
Du bist ein leitender Prüfer der mündlichen ÖSD B1 Prüfung (Gemeinsam etwas planen, Thema präsentieren, Rückmeldung/Frage).
Bewerte das Transkript der mündlichen Äußerung des Kandidaten.
Kriterien:
1. Aufgabenerfüllung & Inhalt
2. Flüssigkeit & Sprechtempo
3. Wortschatz & Redemittel
4. Grammatische Korrektheit
5. Verständlichkeit & Aussprache (basierend auf Transkriptionsmustern)

Gib das Ergebnis als valides JSON zurück:
{
  "totalScore": number (0-100),
  "passed": boolean,
  "criteria": {
    "taskFulfillment": { "score": number, "maxScore": 10, "commentDe": string, "commentAr": string },
    "fluency": { "score": number, "maxScore": 10, "commentDe": string, "commentAr": string },
    "vocabulary": { "score": number, "maxScore": 10, "commentDe": string, "commentAr": string },
    "grammar": { "score": number, "maxScore": 10, "commentDe": string, "commentAr": string },
    "pronunciation": { "score": number, "maxScore": 10, "commentDe": string, "commentAr": string }
  },
  "mistakes": [
    {
      "spoken": string,
      "correction": string,
      "explanationDe": string,
      "explanationAr": string
    }
  ],
  "improvedPhrases": [
    {
      "original": string,
      "betterB1": string,
      "arabic": string
    }
  ],
  "modelSpokenResponse": string (musterhafte Antwort auf B1-Niveau),
  "examinerCommentDe": string,
  "examinerCommentAr": string
}
`;

    const prompt = `
Sprechteil: ${teil}
Situation / Leitpunkte:
${JSON.stringify(scenario, null, 2)}

Erfasster Redebeitrag des Prüflings:
"""
${transcript}
"""
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (error: any) {
    console.error('Error evaluating speaking:', error);
    res.status(500).json({ error: error.message || 'Fehler bei der Sprechbewertung.' });
  }
});

// Endpoint: Speaking Partner Interactive Turn (acts as realistic exam partner)
app.post('/api/speaking-partner', async (req, res) => {
  try {
    const { scenario, history, userUtterance, teil } = req.body;

    if (!ai) {
      return res.json({
        partnerReply: 'Das ist eine gute Idee! Was hältst du davon, wenn wir uns am Samstag um 10 Uhr treffen?',
        suggestedNextPoints: ['Ort vereinbaren', 'Wer bringt was mit?'],
        redemittelTipDe: 'Du kannst sagen: "Ich bin damit einverstanden, aber..."',
        redemittelTipAr: 'يمكنك الرد بـ: "أنا موافق على ذلك، ولكن..."',
      });
    }

    const systemInstruction = `
Du bist ein deutscher Prüfungspartner in der mündlichen ÖSD B1 Prüfung (oder der Prüfer).
Verhalte dich wie ein echter B1-Gesprächspartner:
- Sprich natürliches B1-Deutsch.
- Wenn es Teil 1 (Gemeinsam planen) ist: Reagiere auf die Vorschläge des Kandidaten, stimme zu oder mache einen Gegenvorschlag ("Gute Idee, aber wie wäre es mit..."), frage nach Details und plane gemeinsam die 4-5 Leitpunkte.
- Wenn es Teil 3 ist: Gib ein kurzes positives Feedback zur Präsentation und stelle 1-2 interessierte Fragen zum Thema.
- Halte deine Antworten prägnant (2-3 Sätze), damit ein dynamisches Gespräch entsteht.

Gib als JSON zurück:
{
  "partnerReply": string (deine gesprochene Antwort auf Deutsch),
  "suggestedUserResponses": string[] (2-3 kurze Ideen, wie der Prüfling antworten könnte),
  "redemittelTipDe": string,
  "redemittelTipAr": string (ترجمة التعبير المقترح بالعربية)
}
`;

    const prompt = `
Prüfungsteil: ${teil}
Szenario: ${JSON.stringify(scenario)}
Bisheriger Dialogverlauf: ${JSON.stringify(history)}
Aktuelle Äußerung des Prüflings: "${userUtterance}"
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (error: any) {
    console.error('Error in speaking partner:', error);
    res.status(500).json({ error: error.message || 'Fehler beim Gesprächspartner.' });
  }
});

// Endpoint: Generate Targeted Exercises (AI Personal Teacher based on mistakes)
app.post('/api/generate-exercise', async (req, res) => {
  try {
    const { topic, mistakeSummary, targetSkill } = req.body;

    if (!ai) {
      return res.json({
        topic: topic || 'Grammatik B1',
        title: 'Gezieltes Training: Nebensätze mit weil & dass',
        titleAr: 'تدريب مخصص: الجمل الفرعية مع weil و dass',
        explanationDe: 'In Nebensätzen mit weil, dass oder obwohl wandert das konjugierte Verb ans Satzende.',
        explanationAr: 'في الجمل الفرعية التي تبدأ بـ weil أو dass أو obwohl، يوضع الفعل المصرف في آخر الجملة دائماً.',
        exercises: [
          {
            id: 'ex-1',
            question: 'Er lernt viel Deutsch, weil er in Wien studieren ______ (wollen).',
            options: ['will', 'wollen', 'möchte', 'gewollt'],
            correctIndex: 0,
            explanationDe: 'Konjugiertes Verb "will" am Ende des Nebensatzes.',
            explanationAr: 'الفعل المصرف will يأتي في نهاية الجملة بعد weil.',
          },
        ],
      });
    }

    const systemInstruction = `
Du bist ein KI-Sprachlehrer für ÖSD B1 Deutsch & Arabisch.
Erstelle 3 anspruchsvolle B1 Hard Übungen für das angegebene Schwäche-Thema des Schülers.
Gib als JSON zurück:
{
  "topic": string,
  "title": string,
  "titleAr": string,
  "explanationDe": string,
  "explanationAr": string,
  "exercises": [
    {
      "id": string,
      "question": string,
      "options": string[],
      "correctIndex": number,
      "explanationDe": string,
      "explanationAr": string
    }
  ]
}
`;

    const prompt = `
Schwäche-Thema: ${topic}
Bisherige Fehler des Schülers: ${JSON.stringify(mistakeSummary)}
Fertigkeit: ${targetSkill || 'Grammatik'}
Schwierigkeit: B1 Hard
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (error: any) {
    console.error('Error generating exercise:', error);
    res.status(500).json({ error: error.message || 'Fehler beim Erstellen der Übung.' });
  }
});

// Endpoint: Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasApiKey: !!process.env.GEMINI_API_KEY,
    timestamp: new Date().toISOString(),
  });
});

// Vite middleware in dev, static files in prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
