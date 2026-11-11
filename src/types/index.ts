export type Language = 'de' | 'ar';

export type ExamModule = 'lesen' | 'hoeren' | 'schreiben' | 'sprechen';

export type ActiveTab =
  | 'dashboard'
  | 'pruefungstraining'
  | 'lesen'
  | 'hoeren'
  | 'schreiben'
  | 'sprechen'
  | 'wortschatz'
  | 'grammatik'
  | 'redemittel'
  | 'meine-fehler'
  | 'mock-pruefung'
  | 'fortschritt';

// Lesen Types
export interface LesenQuestion {
  id: number;
  type: 'richtig_falsch' | 'multiple_choice' | 'zuordnung' | 'ja_nein';
  questionDe: string;
  questionAr: string;
  options?: { key: string; textDe: string; textAr: string }[];
  correctAnswer: string; // 'Richtig' | 'Falsch' | 'a' | 'b' | 'c' | 'Ja' | 'Nein' | 'A'..'J' | '0'
  explanationDe: string;
  explanationAr: string;
  highlightInText?: string;
}

export interface LesenTeilSet {
  id: string;
  teil: 1 | 2 | 3 | 4 | 5;
  testNumber: number;
  titleDe: string;
  titleAr: string;
  source: string;
  textPassageDe: string;
  textPassageSecondaryDe?: string; // For Teil 2 which has 2 texts
  ads?: { id: string; title: string; text: string }[]; // For Teil 3
  situations?: { id: number; textDe: string; textAr: string; correctAnswer: string }[]; // For Teil 3
  statements?: { id: number; author: string; age?: number; location?: string; quoteDe: string; correctAnswer: 'Ja' | 'Nein' }[]; // For Teil 4
  questions: LesenQuestion[];
}

// Hören Types
export interface HoerenQuestion {
  id: number;
  type: 'richtig_falsch' | 'multiple_choice' | 'zuordnung';
  questionDe: string;
  questionAr: string;
  options?: { key: string; textDe: string; textAr: string }[];
  correctAnswer: string;
  explanationDe: string;
  explanationAr: string;
  speaker?: string;
}

export interface HoerenTeilSet {
  id: string;
  teil: 1 | 2 | 3 | 4;
  testNumber: number;
  titleDe: string;
  titleAr: string;
  situationDe: string;
  situationAr: string;
  source: string;
  maxPlays: number; // 2 for Teil 1 & 4, 1 for Teil 2 & 3
  audioSpeed?: number;
  speechScript: {
    speaker: string;
    textDe: string;
    textAr?: string;
    pauseSec?: number;
  }[];
  questions: HoerenQuestion[];
}

// Schreiben Types
export interface SchreibenTask {
  id: string;
  aufgabe: 1 | 2 | 3;
  testNumber: number;
  titleDe: string;
  titleAr: string;
  situationDe: string;
  situationAr: string;
  instructionsDe: string;
  instructionsAr: string;
  leitpunkteDe: string[];
  leitpunkteAr: string[];
  targetWordCount: number; // e.g. 80 for Aufg 1 & 2, 40 for Aufg 3
  timeMinutes: number; // 20 for Aufg 1, 25 for Aufg 2, 15 for Aufg 3
  source: string;
  sampleInputPost?: {
    author: string;
    date: string;
    text: string;
  };
  modelAnswerB1: string;
  usefulRedemittel: { de: string; ar: string }[];
}

export interface WritingEvaluationResult {
  totalScore: number;
  passed: boolean;
  wordCount: number;
  criteria: {
    taskFulfillment: { score: number; maxScore: number; name: string; commentDe: string; commentAr: string };
    coherence: { score: number; maxScore: number; name: string; commentDe: string; commentAr: string };
    vocabulary: { score: number; maxScore: number; name: string; commentDe: string; commentAr: string };
    grammar: { score: number; maxScore: number; name: string; commentDe: string; commentAr: string };
  };
  errors: {
    original: string;
    correction: string;
    ruleDe: string;
    ruleAr: string;
    category: 'Grammatik' | 'Wortschatz' | 'Satzstruktur' | 'Rechtschreibung';
  }[];
  improvedB1Expressions?: {
    originalPhrase: string;
    suggestedB1Phrase: string;
    meaningAr: string;
  }[];
  correctedVersion: string;
  modelAnswer: string;
  recommendationsDe: string;
  recommendationsAr: string;
}

// Sprechen Types
export interface SprechenScenario {
  id: string;
  teil: 1 | 2 | 3;
  testNumber: number;
  titleDe: string;
  titleAr: string;
  situationDe: string;
  situationAr: string;
  leitpunkteDe: string[];
  leitpunkteAr: string[];
  partnerPromptDe?: string;
  slides?: {
    folieNumber: number;
    titleDe: string;
    titleAr: string;
    subPointsDe: string[];
  }[];
  followUpQuestionsDe?: string[];
  followUpQuestionsAr?: string[];
  modelSpokenAnswerDe: string;
  keyVocabulary: { de: string; ar: string }[];
}

export interface SpeakingEvaluationResult {
  totalScore: number;
  passed: boolean;
  criteria: {
    taskFulfillment: { score: number; maxScore: number; commentDe: string; commentAr: string };
    fluency: { score: number; maxScore: number; commentDe: string; commentAr: string };
    vocabulary: { score: number; maxScore: number; commentDe: string; commentAr: string };
    grammar: { score: number; maxScore: number; commentDe: string; commentAr: string };
    pronunciation: { score: number; maxScore: number; commentDe: string; commentAr: string };
  };
  mistakes: {
    spoken: string;
    correction: string;
    explanationDe: string;
    explanationAr: string;
  }[];
  improvedPhrases?: {
    original: string;
    betterB1: string;
    arabic: string;
  }[];
  modelSpokenResponse: string;
  examinerCommentDe: string;
  examinerCommentAr: string;
}

// Wortschatz Types
export interface VocabularyItem {
  id: string;
  word: string;
  article?: 'der' | 'die' | 'das';
  plural?: string;
  partOfSpeech: 'Nomen' | 'Verb' | 'Adjektiv' | 'Nomen/Verb-Verbindung' | 'Redewendung' | 'Präposition';
  translationAr: string;
  exampleDe: string;
  exampleAr: string;
  synonyms?: string[];
  collocations?: string[];
  preposition?: string;
  theme: string;
  difficulty: 'B1 Standard' | 'B1 Hard';
  source?: string;
}

// Grammatik Types
export interface GrammarExercise {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanationDe: string;
  explanationAr: string;
  level: 'B1 Standard' | 'B1 Hard' | 'B1 Exam Challenge';
}

export interface GrammarTopic {
  id: string;
  titleDe: string;
  titleAr: string;
  rulesDe: string[];
  rulesAr: string[];
  examples: { de: string; ar: string; noteDe?: string; noteAr?: string }[];
  commonMistakes: { wrong: string; right: string; whyDe: string; whyAr: string }[];
  exercises: GrammarExercise[];
}

// Redemittel Types
export interface RedemittelItem {
  id: string;
  expressionDe: string;
  translationAr: string;
  category: 'Schreiben' | 'Sprechen';
  subCategory: string; // e.g. "Meinung äußern", "Einleitung", "Gemeinsam planen", "Widersprechen"
  exampleDe: string;
  exampleAr: string;
  register: 'formell' | 'halbformell' | 'informell';
  whenToUseDe: string;
  whenToUseAr: string;
}

// User Mistakes Tracking
export interface UserMistake {
  id: string;
  timestamp: string;
  module: ExamModule | 'grammatik' | 'wortschatz';
  topicOrTeil: string;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  explanationDe: string;
  explanationAr: string;
}

// Test Result Record
export interface TestResult {
  id: string;
  date: string;
  module: ExamModule;
  teil?: number;
  testNumber?: number;
  isMockExam?: boolean;
  score: number;
  maxScore: number;
  percentage: number;
  passed: boolean;
  timeSpentSeconds: number;
}
