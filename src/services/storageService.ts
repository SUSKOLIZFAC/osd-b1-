import { TestResult, UserMistake, Language } from '../types';

const STORAGE_KEYS = {
  TEST_RESULTS: 'osd_b1_test_results',
  MISTAKES: 'osd_b1_mistakes',
  SAVED_WORDS: 'osd_b1_saved_words',
  LANGUAGE: 'osd_b1_language',
  WRITING_DRAFTS: 'osd_b1_writing_drafts',
  COMPLETED_TEILE: 'osd_b1_completed_teile',
};

export const storageService = {
  getLanguage(): Language {
    if (typeof window === 'undefined') return 'de';
    return (localStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language) || 'de';
  },

  setLanguage(lang: Language) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  },

  getTestResults(): TestResult[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TEST_RESULTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveTestResult(result: TestResult) {
    if (typeof window === 'undefined') return;
    const current = this.getTestResults();
    current.unshift(result);
    localStorage.setItem(STORAGE_KEYS.TEST_RESULTS, JSON.stringify(current));
  },

  getMistakes(): UserMistake[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.MISTAKES);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveMistake(mistake: Omit<UserMistake, 'id' | 'timestamp'>) {
    if (typeof window === 'undefined') return;
    const current = this.getMistakes();
    // Avoid exact duplicate question
    const exists = current.some(m => m.question === mistake.question && m.userAnswer === mistake.userAnswer);
    if (!exists) {
      const newMistake: UserMistake = {
        ...mistake,
        id: 'm-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        timestamp: new Date().toISOString(),
      };
      current.unshift(newMistake);
      localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(current));
    }
  },

  removeMistake(id: string) {
    if (typeof window === 'undefined') return;
    const current = this.getMistakes().filter(m => m.id !== id);
    localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(current));
  },

  clearAllMistakes() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEYS.MISTAKES);
  },

  getSavedWords(): string[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SAVED_WORDS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  toggleSaveWord(wordId: string): boolean {
    if (typeof window === 'undefined') return false;
    const words = this.getSavedWords();
    const index = words.indexOf(wordId);
    let isSaved = false;
    if (index > -1) {
      words.splice(index, 1);
      isSaved = false;
    } else {
      words.push(wordId);
      isSaved = true;
    }
    localStorage.setItem(STORAGE_KEYS.SAVED_WORDS, JSON.stringify(words));
    return isSaved;
  },

  getDraft(taskId: string): string {
    if (typeof window === 'undefined') return '';
    try {
      const data = localStorage.getItem(STORAGE_KEYS.WRITING_DRAFTS);
      const drafts = data ? JSON.parse(data) : {};
      return drafts[taskId] || '';
    } catch {
      return '';
    }
  },

  saveDraft(taskId: string, text: string) {
    if (typeof window === 'undefined') return;
    try {
      const data = localStorage.getItem(STORAGE_KEYS.WRITING_DRAFTS);
      const drafts = data ? JSON.parse(data) : {};
      drafts[taskId] = text;
      localStorage.setItem(STORAGE_KEYS.WRITING_DRAFTS, JSON.stringify(drafts));
    } catch {}
  },

  getCompletedTeile(): Record<string, boolean> {
    if (typeof window === 'undefined') return {};
    try {
      const data = localStorage.getItem(STORAGE_KEYS.COMPLETED_TEILE);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  markTeilCompleted(teilKey: string) {
    if (typeof window === 'undefined') return;
    const current = this.getCompletedTeile();
    current[teilKey] = true;
    localStorage.setItem(STORAGE_KEYS.COMPLETED_TEILE, JSON.stringify(current));
  },
};
