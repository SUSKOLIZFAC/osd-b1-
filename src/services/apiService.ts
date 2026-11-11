import { WritingEvaluationResult, SpeakingEvaluationResult } from '../types';

export const apiService = {
  async checkHealth(): Promise<{ status: string; hasApiKey: boolean }> {
    try {
      const res = await fetch('/api/health');
      if (!res.ok) return { status: 'error', hasApiKey: false };
      return await res.json();
    } catch {
      return { status: 'offline', hasApiKey: false };
    }
  },

  async evaluateWriting(data: {
    taskType: string;
    promptDetails: any;
    userText: string;
    targetWords: number;
  }): Promise<WritingEvaluationResult> {
    const res = await fetch('/api/evaluate-writing', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Fehler bei der Textauswertung.');
    }

    return await res.json();
  },

  async evaluateSpeaking(data: {
    teil: number;
    scenario: any;
    transcript: string;
    userNotes?: string;
  }): Promise<SpeakingEvaluationResult> {
    const res = await fetch('/api/evaluate-speaking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Fehler bei der Sprachauswertung.');
    }

    return await res.json();
  },

  async getSpeakingPartnerReply(data: {
    scenario: any;
    history: { speaker: string; text: string }[];
    userUtterance: string;
    teil: number;
  }): Promise<{
    partnerReply: string;
    suggestedUserResponses?: string[];
    redemittelTipDe?: string;
    redemittelTipAr?: string;
  }> {
    const res = await fetch('/api/speaking-partner', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Fehler beim Abrufen der Partnerantwort.');
    }

    return await res.json();
  },

  async generateTargetedExercise(data: {
    topic: string;
    mistakeSummary: any[];
    targetSkill?: string;
  }): Promise<{
    topic: string;
    title: string;
    titleAr: string;
    explanationDe: string;
    explanationAr: string;
    exercises: {
      id: string;
      question: string;
      options: string[];
      correctIndex: number;
      explanationDe: string;
      explanationAr: string;
    }[];
  }> {
    const res = await fetch('/api/generate-exercise', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Fehler beim Generieren der Übungen.');
    }

    return await res.json();
  },
};
