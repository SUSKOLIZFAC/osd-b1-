import React, { useState, useEffect } from 'react';
import { Language, LesenTeilSet, UserMistake } from '../types';
import { ALL_LESEN_SETS } from '../data/lesenData';
import { storageService } from '../services/storageService';
import confetti from 'canvas-confetti';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Eye,
  Highlighter,
  Timer,
  Clock,
  Award
} from 'lucide-react';

interface LesenViewProps {
  language: Language;
}

export const LesenView: React.FC<LesenViewProps> = ({ language }) => {
  const isAr = language === 'ar';

  const [activeTeil, setActiveTeil] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedSetIndex, setSelectedSetIndex] = useState<number>(0);
  const [isExamMode, setIsExamMode] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(10 * 60); // default 10 min
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  // User answers mapping: { [questionId]: answerString }
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [highlightedText, setHighlightedText] = useState<string | null>(null);
  const [activeExplanationId, setActiveExplanationId] = useState<number | null>(null);

  // Filter sets for current Teil
  const currentTeilSets = ALL_LESEN_SETS.filter((s) => s.teil === activeTeil);
  const currentSet: LesenTeilSet = currentTeilSets[selectedSetIndex] || currentTeilSets[0];

  // Reset when changing Teil or Set
  useEffect(() => {
    setUserAnswers({});
    setSubmitted(false);
    setHighlightedText(null);
    setActiveExplanationId(null);

    // Official recommended times: Teil 1: 10m, Teil 2: 20m, Teil 3: 10m, Teil 4: 15m, Teil 5: 10m
    const times = { 1: 10, 2: 20, 3: 10, 4: 15, 5: 10 };
    setTimeLeft(times[activeTeil] * 60);
    setTimerRunning(isExamMode);
  }, [activeTeil, selectedSetIndex, isExamMode]);

  // Timer countdown
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timeLeft > 0 && !submitted) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleSubmitAnswers();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timeLeft, submitted]);

  const handleSelectAnswer = (qId: number, val: string) => {
    if (submitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const handleSubmitAnswers = () => {
    setSubmitted(true);
    setTimerRunning(false);

    if (!currentSet) return;

    let correctCount = 0;
    currentSet.questions.forEach((q) => {
      const userAns = userAnswers[q.id];
      const isCorrect = userAns && userAns.toLowerCase() === q.correctAnswer.toLowerCase();
      if (isCorrect) {
        correctCount++;
      } else {
        // Save to mistake bank
        storageService.saveMistake({
          module: 'lesen',
          topicOrTeil: `Lesen Teil ${currentSet.teil}`,
          question: q.questionDe,
          userAnswer: userAns || (isAr ? 'لم تتم الإجابة' : 'Keine Antwort'),
          correctAnswer: q.correctAnswer,
          explanationDe: q.explanationDe,
          explanationAr: q.explanationAr,
        });
      }
    });

    const percent = Math.round((correctCount / currentSet.questions.length) * 100);
    const passed = percent >= 60;

    // Save test result
    storageService.saveTestResult({
      id: 'res-' + Date.now(),
      date: new Date().toLocaleDateString(),
      module: 'lesen',
      teil: currentSet.teil,
      testNumber: currentSet.testNumber,
      score: correctCount,
      maxScore: currentSet.questions.length,
      percentage: percent,
      passed,
      timeSpentSeconds: 600 - timeLeft,
    });

    if (passed) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    }
  };

  const handleShowExplanation = (q: any) => {
    if (activeExplanationId === q.id) {
      setActiveExplanationId(null);
      setHighlightedText(null);
    } else {
      setActiveExplanationId(q.id);
      if (q.highlightInText) {
        setHighlightedText(q.highlightInText);
      }
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentSet) {
    return <div className="p-8 text-center text-slate-500">Lade Übungssätze...</div>;
  }

  // Calculate score if submitted
  const correctCount = currentSet.questions.filter(
    (q) => (userAnswers[q.id] || '').toLowerCase() === q.correctAnswer.toLowerCase()
  ).length;
  const scorePercent = Math.round((correctCount / currentSet.questions.length) * 100);
  const isPassed = scorePercent >= 60;

  return (
    <div className={`space-y-6 ${isAr ? 'text-right' : 'text-left'}`}>
      {/* Top Controller Bar */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Teil Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0">
          {[1, 2, 3, 4, 5].map((t) => (
            <button
              key={t}
              onClick={() => {
                setActiveTeil(t as any);
                setSelectedSetIndex(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTeil === t
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{isAr ? `الجزء ${t}` : `Teil ${t}`}</span>
              <span className="block text-[10px] font-normal opacity-80">
                {t === 1 && '6 R/F'}
                {t === 2 && '6 MC'}
                {t === 3 && '7 Zuordn.'}
                {t === 4 && '7 Ja/Nein'}
                {t === 5 && '4 MC'}
              </span>
            </button>
          ))}
        </div>

        {/* Set selector & Mode toggle */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Practice vs Exam Mode Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setIsExamMode(false)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                !isExamMode ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {isAr ? 'وضع التدريب' : 'Übungsmodus'}
            </button>
            <button
              onClick={() => setIsExamMode(true)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                isExamMode ? 'bg-red-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {isAr ? 'وضع الامتحان' : 'Prüfungsmodus'}
            </button>
          </div>

          {/* Timer Display */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-bold ${
            timeLeft < 120 ? 'bg-red-50 text-red-600 border border-red-200 animate-pulse' : 'bg-slate-100 text-slate-700'
          }`}>
            <Timer className="w-4 h-4 text-slate-400" />
            <span>{formatTimer(timeLeft)}</span>
          </div>

          {/* Model Test Set Picker */}
          {currentTeilSets.length > 1 && (
            <select
              value={selectedSetIndex}
              onChange={(e) => setSelectedSetIndex(Number(e.target.value))}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {currentTeilSets.map((s, idx) => (
                <option key={s.id} value={idx}>
                  Test {s.testNumber}: {s.titleDe.substring(0, 24)}...
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Header Info Banner */}
      <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-blue-900">
        <div>
          <span className="font-bold text-sm block">
            {isAr ? currentSet.titleAr : currentSet.titleDe}
          </span>
          <span className="text-blue-700 opacity-90 text-[11px]">
            {isAr ? `المصدر: ${currentSet.source}` : `Quelle: ${currentSet.source}`} • B1 HARD Level
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-semibold bg-white/80 px-3 py-1.5 rounded-lg border border-blue-200">
          <span>{isAr ? 'الحد الأدنى للنجاح: 60%' : 'Bestehensgrenze: 60%'}</span>
        </div>
      </div>

      {/* Main Two-Column View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Reading Passage Text (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-6 lg:sticky lg:top-28 max-h-[82vh] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-base">
                {isAr ? 'نص القراءة (Lesetext)' : 'Lesetext'}
              </h3>
            </div>
            {highlightedText && (
              <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 flex items-center gap-1 animate-pulse">
                <Highlighter className="w-3.5 h-3.5" />
                {isAr ? 'تم تظليل الدليل في النص' : 'Beweisstelle markiert'}
              </span>
            )}
          </div>

          {/* Render Text Passage */}
          <div className="prose prose-slate max-w-none text-slate-800 text-sm md:text-base leading-relaxed tracking-normal font-sans select-text">
            {/* If Teil 3 with Ads */}
            {currentSet.teil === 3 && currentSet.ads ? (
              <div className="space-y-4">
                <p className="font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {currentSet.textPassageDe}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentSet.ads.map((ad) => (
                    <div
                      key={ad.id}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-md transition-all text-xs"
                    >
                      <div className="flex items-center gap-2 font-bold text-blue-700 mb-1">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px]">
                          {ad.id.toUpperCase()}
                        </span>
                        <span>{ad.title}</span>
                      </div>
                      <p className="text-slate-600 leading-normal">{ad.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : currentSet.teil === 4 && currentSet.statements ? (
              /* If Teil 4 with Reader Letters */
              <div className="space-y-4">
                <p className="font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {currentSet.textPassageDe}
                </p>
                <div className="space-y-3">
                  {currentSet.statements.map((st) => (
                    <div
                      key={st.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-slate-500 font-bold">
                        <span className="text-blue-700 font-bold text-sm">
                          {st.id}. {st.author} ({st.age} Jahre, {st.location})
                        </span>
                      </div>
                      <p className="text-slate-800 text-sm leading-relaxed italic">
                        "{st.quoteDe}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Standard Reading Passages (Teil 1, 2, 5) */
              <div className="space-y-4">
                {currentSet.textPassageDe.split('\n\n').map((paragraph, pIdx) => {
                  const isHighlighted = highlightedText && paragraph.includes(highlightedText);
                  return (
                    <p
                      key={pIdx}
                      className={`transition-all duration-300 rounded-lg p-2 ${
                        isHighlighted
                          ? 'bg-amber-100/80 text-amber-950 font-medium border-l-4 border-amber-500 pl-3 shadow-sm'
                          : ''
                      }`}
                    >
                      {paragraph}
                    </p>
                  );
                })}
                {currentSet.textPassageSecondaryDe && (
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    {currentSet.textPassageSecondaryDe.split('\n\n').map((paragraph, pIdx) => {
                      const isHighlighted = highlightedText && paragraph.includes(highlightedText);
                      return (
                        <p
                          key={'sec-' + pIdx}
                          className={`transition-all duration-300 rounded-lg p-2 ${
                            isHighlighted
                              ? 'bg-amber-100/80 text-amber-950 font-medium border-l-4 border-amber-500 pl-3 shadow-sm'
                              : ''
                          }`}
                        >
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Questions & Answer Sheet (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Evaluation Banner if submitted */}
          {submitted && (
            <div
              className={`p-5 rounded-3xl border shadow-lg transition-all ${
                isPassed
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl text-white ${
                    isPassed ? 'bg-emerald-600' : 'bg-rose-600'
                  }`}
                >
                  {isPassed ? <CheckCircle2 className="w-7 h-7" /> : <XCircle className="w-7 h-7" />}
                </div>
                <div>
                  <h4 className="font-extrabold text-base">
                    {isPassed
                      ? isAr
                        ? 'مبروك! اجتزت هذا القسم بنجاح'
                        : 'Bestanden! Ausgezeichnete Leistung'
                      : isAr
                        ? 'لم تجتز الحد الأدنى (أقل من 60%)'
                        : 'Nicht bestanden (unter 60%)'}
                  </h4>
                  <p className="text-xs opacity-80">
                    {correctCount} / {currentSet.questions.length} {isAr ? 'إجابات صحيحة' : 'richtig gelöst'} ({scorePercent}%)
                  </p>
                </div>
              </div>
              <p className="text-xs mt-3 pt-3 border-t border-current/20 leading-relaxed">
                {isAr
                  ? 'تم تسجيل الأخطاء تلقائياً في بنك أخطائك لمراجعتها لاحقاً مع المعلم الذكي. اضغط على "الشرح" أسفل كل سؤال لمشاهدة الدليل في النص وشرح القاعدة بالعربية.'
                  : 'Fehler wurden automatisch im Fehlerspeicher hinterlegt. Klicke auf „Erklärung", um die Textstelle hervorzuheben und die arabische Erklärung zu lesen.'}
              </p>
            </div>
          )}

          {/* Questions Container */}
          <div className="space-y-4">
            {currentSet.questions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const isCorrect = submitted && userAns && userAns.toLowerCase() === q.correctAnswer.toLowerCase();
              const isWrong = submitted && (!userAns || userAns.toLowerCase() !== q.correctAnswer.toLowerCase());

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl bg-white border transition-all ${
                    isCorrect
                      ? 'border-emerald-300 ring-2 ring-emerald-500/10'
                      : isWrong
                      ? 'border-rose-300 ring-2 ring-rose-500/10'
                      : 'border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  {/* Question header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center text-xs font-black shrink-0">
                      {q.id}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900 leading-snug">
                        {q.questionDe}
                      </p>
                      {(!isExamMode || submitted) && (
                        <p className="text-xs text-slate-500 mt-1 font-arabic leading-relaxed" dir="rtl">
                          {q.questionAr}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Options based on Question Type */}
                  {q.type === 'richtig_falsch' ? (
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {['Richtig', 'Falsch'].map((opt) => {
                        const isSelected = userAns === opt;
                        const isThisCorrect = submitted && q.correctAnswer.toLowerCase() === opt.toLowerCase();
                        return (
                          <button
                            key={opt}
                            disabled={submitted}
                            onClick={() => handleSelectAnswer(q.id, opt)}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                              isThisCorrect
                                ? 'bg-emerald-600 text-white border-emerald-600'
                                : isSelected && isWrong
                                ? 'bg-rose-600 text-white border-rose-600'
                                : isSelected
                                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {opt} {isAr && (opt === 'Richtig' ? '(صحيح)' : '(خاطئ)')}
                          </button>
                        );
                      })}
                    </div>
                  ) : q.type === 'ja_nein' ? (
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {['Ja', 'Nein'].map((opt) => {
                        const isSelected = userAns === opt;
                        const isThisCorrect = submitted && q.correctAnswer.toLowerCase() === opt.toLowerCase();
                        return (
                          <button
                            key={opt}
                            disabled={submitted}
                            onClick={() => handleSelectAnswer(q.id, opt)}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                              isThisCorrect
                                ? 'bg-emerald-600 text-white border-emerald-600'
                                : isSelected && isWrong
                                ? 'bg-rose-600 text-white border-rose-600'
                                : isSelected
                                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {opt} {isAr && (opt === 'Ja' ? '(نعم)' : '(لا)')}
                          </button>
                        );
                      })}
                    </div>
                  ) : q.type === 'zuordnung' ? (
                    /* Teil 3 Ads Matching Selector */
                    <div className="mt-3">
                      <select
                        disabled={submitted}
                        value={userAns || ''}
                        onChange={(e) => handleSelectAnswer(q.id, e.target.value)}
                        className={`w-full p-2.5 rounded-xl border text-xs font-bold transition-all ${
                          submitted && userAns?.toLowerCase() === q.correctAnswer.toLowerCase()
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                            : submitted
                            ? 'bg-rose-50 border-rose-400 text-rose-900'
                            : 'bg-slate-50 border-slate-200 text-slate-800 focus:ring-2 focus:ring-blue-500'
                        }`}
                      >
                        <option value="">{isAr ? 'اختر الإعلان المناسب (A - J)' : 'Passende Anzeige wählen (A - J)'}</option>
                        {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'].map((letter) => (
                          <option key={letter} value={letter}>
                            Anzeige {letter.toUpperCase()}
                          </option>
                        ))}
                        <option value="0">
                          {isAr ? '0: لا يوجد إعلان مناسب' : '0: Keine passende Anzeige'}
                        </option>
                      </select>
                    </div>
                  ) : (
                    /* Multiple Choice a, b, c */
                    <div className="space-y-2 mt-3">
                      {q.options?.map((opt) => {
                        const isSelected = userAns === opt.key;
                        const isThisCorrect = submitted && q.correctAnswer.toLowerCase() === opt.key.toLowerCase();
                        return (
                          <button
                            key={opt.key}
                            disabled={submitted}
                            onClick={() => handleSelectAnswer(q.id, opt.key)}
                            className={`w-full text-left p-2.5 rounded-xl text-xs font-medium border transition-all flex items-start gap-2.5 cursor-pointer ${
                              isThisCorrect
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                                : isSelected && isWrong
                                ? 'bg-rose-50 border-rose-400 text-rose-950 line-through'
                                : isSelected
                                ? 'bg-blue-50 border-blue-500 text-blue-900 font-semibold'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-lg flex items-center justify-center font-bold text-[11px] shrink-0 ${
                                isThisCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : isSelected
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-200 text-slate-700'
                              }`}
                            >
                              {opt.key}
                            </span>
                            <div className="flex-1">
                              <div>{opt.textDe}</div>
                              {(!isExamMode || submitted) && (
                                <div className="text-[11px] text-slate-500 font-arabic mt-0.5" dir="rtl">
                                  {opt.textAr}
                                </div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Post-submission explanation toggle button */}
                  {submitted && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
                      <button
                        onClick={() => handleShowExplanation(q)}
                        className="self-start text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{activeExplanationId === q.id ? (isAr ? 'إخفاء الشرح' : 'Erklärung schließen') : (isAr ? 'عرض الشرح والدليل في النص' : 'Erklärung & Textstelle anzeigen')}</span>
                      </button>

                      {activeExplanationId === q.id && (
                        <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs space-y-2 mt-1">
                          <div>
                            <span className="font-bold text-blue-900 block mb-0.5">Erklärung (Deutsch):</span>
                            <p className="text-slate-800 leading-relaxed">{q.explanationDe}</p>
                          </div>
                          <div dir="rtl" className="pt-2 border-t border-blue-200/60 font-arabic">
                            <span className="font-bold text-blue-900 block mb-0.5">الشرح والتوضيح (العربية):</span>
                            <p className="text-slate-800 leading-relaxed">{q.explanationAr}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Button Bar */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between gap-3">
            {!submitted ? (
              <button
                onClick={handleSubmitAnswers}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isAr ? 'تسليم الإجابات وحساب النتيجة' : 'Antworten abgeben & auswerten'}</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setUserAnswers({});
                  setSubmitted(false);
                  setHighlightedText(null);
                  setActiveExplanationId(null);
                }}
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{isAr ? 'إعادة محاولة هذا الجزء' : 'Diesen Teil wiederholen'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
