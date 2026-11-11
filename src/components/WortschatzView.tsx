import React, { useState } from 'react';
import { Language, VocabularyItem } from '../types';
import { WORTSCHATZ_DATA } from '../data/wortschatzData';
import { audioService } from '../services/audioService';
import { storageService } from '../services/storageService';
import confetti from 'canvas-confetti';
import {
  Layers,
  Search,
  Volume2,
  Bookmark,
  BookmarkCheck,
  RotateCw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Star,
  BrainCircuit,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface WortschatzViewProps {
  language: Language;
}

export const WortschatzView: React.FC<WortschatzViewProps> = ({ language }) => {
  const isAr = language === 'ar';

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState<string>('Alle');
  const [activeMode, setActiveMode] = useState<'flashcards' | 'quiz-de-ar' | 'quiz-ar-de' | 'notebook'>('flashcards');

  // Flashcard states
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Saved words (Personal Notebook)
  const [savedWords, setSavedWords] = useState<string[]>(storageService.getSavedWords());

  // Quiz state
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizQuestionIndex, setQuizQuestionIndex] = useState<number>(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [quizAnswerChecked, setQuizAnswerChecked] = useState<boolean>(false);

  // Themes list
  const themes = ['Alle', ...Array.from(new Set(WORTSCHATZ_DATA.map((w) => w.theme)))];

  // Filtered vocabulary
  const filteredWords = WORTSCHATZ_DATA.filter((w) => {
    const matchTheme = selectedTheme === 'Alle' || w.theme === selectedTheme;
    const matchQuery =
      searchQuery.trim() === '' ||
      w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.translationAr.includes(searchQuery) ||
      w.exampleDe.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTheme && matchQuery;
  });

  const notebookWords = WORTSCHATZ_DATA.filter((w) => savedWords.includes(w.id));

  const currentFlashcard: VocabularyItem | undefined =
    activeMode === 'notebook' ? notebookWords[currentCardIndex] : filteredWords[currentCardIndex];

  const handleToggleSave = (wordId: string) => {
    const isSaved = storageService.toggleSaveWord(wordId);
    setSavedWords(storageService.getSavedWords());
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    const max = activeMode === 'notebook' ? notebookWords.length : filteredWords.length;
    setCurrentCardIndex((i) => (i + 1) % Math.max(1, max));
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    const max = activeMode === 'notebook' ? notebookWords.length : filteredWords.length;
    setCurrentCardIndex((i) => (i - 1 + max) % Math.max(1, max));
  };

  // Helper for quiz options
  const currentQuizWord = filteredWords[quizQuestionIndex % filteredWords.length];
  const generateQuizOptions = () => {
    if (!currentQuizWord) return [];
    const isDeToAr = activeMode === 'quiz-de-ar';
    const correctAnswer = isDeToAr ? currentQuizWord.translationAr : currentQuizWord.word;

    const distractors = WORTSCHATZ_DATA.filter((w) => w.id !== currentQuizWord.id)
      .map((w) => (isDeToAr ? w.translationAr : w.word))
      .slice(0, 3);

    return [correctAnswer, ...distractors].sort(() => Math.random() - 0.5);
  };

  const [currentOptions, setCurrentOptions] = useState<string[]>([]);

  React.useEffect(() => {
    setCurrentOptions(generateQuizOptions());
    setSelectedQuizOption(null);
    setQuizAnswerChecked(false);
  }, [quizQuestionIndex, activeMode, selectedTheme]);

  const handleAnswerQuiz = (opt: string) => {
    if (quizAnswerChecked) return;
    setSelectedQuizOption(opt);
    setQuizAnswerChecked(true);

    const isDeToAr = activeMode === 'quiz-de-ar';
    const isCorrect = opt === (isDeToAr ? currentQuizWord.translationAr : currentQuizWord.word);

    if (isCorrect) {
      setQuizScore((s) => s + 1);
      confetti({ particleCount: 20, spread: 40, origin: { y: 0.8 } });
    } else {
      storageService.saveMistake({
        module: 'wortschatz',
        topicOrTeil: currentQuizWord.theme,
        question: `Vokabel: ${currentQuizWord.word}`,
        userAnswer: opt,
        correctAnswer: isDeToAr ? currentQuizWord.translationAr : currentQuizWord.word,
        explanationDe: `Bedeutung: ${currentQuizWord.exampleDe}`,
        explanationAr: currentQuizWord.exampleAr,
      });
    }
  };

  const getArticleColor = (art?: string) => {
    if (art === 'der') return 'text-blue-600 bg-blue-50 border-blue-200';
    if (art === 'die') return 'text-rose-600 bg-rose-50 border-rose-200';
    if (art === 'das') return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    return 'text-slate-600 bg-slate-50 border-slate-200';
  };

  return (
    <div className={`space-y-6 ${isAr ? 'text-right' : 'text-left'}`}>
      {/* Top Banner & Mode Switcher */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold mb-2">
            <Layers className="w-4 h-4" />
            <span>{isAr ? 'بنك مفردات B1 HARD الشامل' : 'B1 Hard Wortschatz-Zentrum'}</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900">
            {isAr ? 'المفردات والتراكيب الامتحانية' : 'Wortschatz & Wendungen'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {isAr
              ? 'مستخرج بدقة من كتب التحضير الرسمية الأربعة مع بطاقات تفاعلية واختبارات ونظام حفظ الكلمات المفضلة.'
              : 'Authentische Prüfungslexik nach Themen mit Artikeln, Pluralformen, Beispielsätzen & Audio.'}
          </p>
        </div>

        {/* Modes Pills */}
        <div className="flex flex-wrap items-center bg-slate-100 p-1.5 rounded-2xl text-xs font-bold gap-1">
          <button
            onClick={() => setActiveMode('flashcards')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeMode === 'flashcards' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isAr ? 'البطاقات (Flashcards)' : 'Karteikarten'}
          </button>
          <button
            onClick={() => setActiveMode('quiz-de-ar')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeMode === 'quiz-de-ar' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            DE → AR
          </button>
          <button
            onClick={() => setActiveMode('quiz-ar-de')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeMode === 'quiz-ar-de' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            AR → DE
          </button>
          <button
            onClick={() => setActiveMode('notebook')}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer ${
              activeMode === 'notebook' ? 'bg-white text-amber-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{isAr ? `دفتري (${savedWords.length})` : `Mein Heft (${savedWords.length})`}</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none pb-1 sm:pb-0">
          {themes.map((th) => (
            <button
              key={th}
              onClick={() => {
                setSelectedTheme(th);
                setCurrentCardIndex(0);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedTheme === th
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {th}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isAr ? 'بحث في الكلمات...' : 'Wort oder Bedeutung suchen...'}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Mode 1: Interactive 3D Flip Flashcards */}
      {activeMode === 'flashcards' || activeMode === 'notebook' ? (
        <div className="max-w-xl mx-auto space-y-4">
          {currentFlashcard ? (
            <div className="space-y-4">
              {/* Card Container */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="min-h-[320px] bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 flex flex-col justify-between cursor-pointer hover:border-blue-400 transition-all select-none relative group"
              >
                {/* Header indicators */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {currentFlashcard.theme}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleSave(currentFlashcard.id);
                    }}
                    className={`p-2 rounded-xl transition-colors ${
                      savedWords.includes(currentFlashcard.id)
                        ? 'text-amber-500 bg-amber-50'
                        : 'text-slate-300 hover:text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Star className="w-5 h-5 fill-current" />
                  </button>
                </div>

                {/* Card Center (German on Front, Arabic on Back) */}
                <div className="text-center py-6 space-y-4">
                  {!isFlipped ? (
                    <>
                      <div className="space-y-2">
                        {currentFlashcard.article && (
                          <span
                            className={`inline-block text-xs font-black uppercase px-2.5 py-1 rounded-lg border ${getArticleColor(
                              currentFlashcard.article
                            )}`}
                          >
                            {currentFlashcard.article}
                          </span>
                        )}
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                          {currentFlashcard.word}
                        </h3>
                        {currentFlashcard.plural && (
                          <p className="text-xs text-slate-400 font-mono">
                            Plural: {currentFlashcard.plural}
                          </p>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">
                        {isAr ? 'اضغط لقلب البطاقة ومعرفة الترجمة والشرح' : 'Klicken zum Umdrehen'}
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2" dir="rtl">
                        <span className="text-xs font-semibold text-slate-400 block font-arabic">
                          الترجمة العربية:
                        </span>
                        <h3 className="text-3xl font-black text-blue-700 font-arabic">
                          {currentFlashcard.translationAr}
                        </h3>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700 text-left space-y-1">
                        <span className="font-bold text-slate-900 block">Beispiel:</span>
                        <p className="italic font-sans">"{currentFlashcard.exampleDe}"</p>
                        <p className="text-[11px] text-slate-500 font-arabic text-right" dir="rtl">
                          {currentFlashcard.exampleAr}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Card Footer: Audio Pronounce & Flip hint */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      audioService.speakPhrase(currentFlashcard.word, 'de');
                    }}
                    className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors flex items-center gap-1.5 text-xs font-bold"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>{isAr ? 'استماع للنطق' : 'Anhören'}</span>
                  </button>

                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>{isFlipped ? (isAr ? 'الوجه الأمامي' : 'Vorderseite') : (isAr ? 'الوجه الخلفي' : 'Rückseite')}</span>
                  </span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={handlePrevCard}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
                >
                  ← {isAr ? 'السابق' : 'Zurück'}
                </button>
                <span className="text-xs font-bold text-slate-500">
                  {currentCardIndex + 1} /{' '}
                  {activeMode === 'notebook' ? notebookWords.length : filteredWords.length}
                </span>
                <button
                  onClick={handleNextCard}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {isAr ? 'التالي' : 'Weiter'} →
                </button>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-xs">
              {activeMode === 'notebook'
                ? isAr
                  ? 'لم تقم بحفظ أي كلمات في دفترك بعد. اضغط على النجمة بجانب أي كلمة لحفظها.'
                  : 'Dein Vokabelheft ist noch leer. Klicke auf den Stern bei einer Karteikarte, um sie zu speichern.'
                : isAr
                ? 'لا توجد كلمات مطابقة للبحث.'
                : 'Keine Vokabeln gefunden.'}
            </div>
          )}
        </div>
      ) : (
        /* Mode 2 & 3: Multiple Choice Quizzes (DE -> AR / AR -> DE) */
        <div className="max-w-xl mx-auto p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold text-slate-500">
              Frage {quizQuestionIndex + 1}
            </span>
            <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Punkte: {quizScore}
            </span>
          </div>

          {currentQuizWord && (
            <div className="text-center py-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {activeMode === 'quiz-de-ar' ? 'Was bedeutet dieses Wort auf Arabisch?' : 'ما هي الكلمة الألمانية المقابلة؟'}
              </span>
              <h3 className="text-3xl font-black text-slate-900">
                {activeMode === 'quiz-de-ar' ? currentQuizWord.word : currentQuizWord.translationAr}
              </h3>
            </div>
          )}

          {/* Options */}
          <div className="space-y-2.5">
            {currentOptions.map((opt, idx) => {
              const isDeToAr = activeMode === 'quiz-de-ar';
              const isCorrectOpt = opt === (isDeToAr ? currentQuizWord?.translationAr : currentQuizWord?.word);
              const isSelected = selectedQuizOption === opt;

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswerQuiz(opt)}
                  disabled={quizAnswerChecked}
                  className={`w-full p-4 rounded-2xl border text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
                    quizAnswerChecked && isCorrectOpt
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                      : quizAnswerChecked && isSelected && !isCorrectOpt
                      ? 'bg-rose-50 border-rose-400 text-rose-900 line-through'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <span className={activeMode === 'quiz-de-ar' ? 'font-arabic' : 'font-sans'}>
                    {opt}
                  </span>
                  {quizAnswerChecked && isCorrectOpt && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  )}
                  {quizAnswerChecked && isSelected && !isCorrectOpt && (
                    <XCircle className="w-5 h-5 text-rose-600" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          {quizAnswerChecked && (
            <button
              onClick={() => setQuizQuestionIndex((i) => i + 1)}
              className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isAr ? 'السؤال التالي' : 'Nächste Frage'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
