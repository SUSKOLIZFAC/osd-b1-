import React, { useState } from 'react';
import { Language, GrammarTopic } from '../types';
import { GRAMMATIK_DATA } from '../data/grammatikData';
import { storageService } from '../services/storageService';
import confetti from 'canvas-confetti';
import {
  BookmarkCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Filter,
  Lightbulb
} from 'lucide-react';

interface GrammatikViewProps {
  language: Language;
}

export const GrammatikView: React.FC<GrammatikViewProps> = ({ language }) => {
  const isAr = language === 'ar';

  const [selectedTopicId, setSelectedTopicId] = useState<string>(GRAMMATIK_DATA[0].id);
  const [levelFilter, setLevelFilter] = useState<'all' | 'B1 Standard' | 'B1 Hard' | 'B1 Exam Challenge'>('all');

  const currentTopic = GRAMMATIK_DATA.find((t) => t.id === selectedTopicId) || GRAMMATIK_DATA[0];

  // User exercise answers: { [exerciseId]: answerString }
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});

  const filteredExercises = currentTopic.exercises.filter((ex) =>
    levelFilter === 'all' ? true : ex.level === levelFilter
  );

  const handleSelectOption = (exId: string, opt: string) => {
    setExerciseAnswers((prev) => ({ ...prev, [exId]: opt }));
    setShowResults((prev) => ({ ...prev, [exId]: true }));

    const ex = currentTopic.exercises.find((e) => e.id === exId);
    if (ex) {
      const isCorrect = opt.toLowerCase() === ex.correctAnswer.toLowerCase();
      if (!isCorrect) {
        storageService.saveMistake({
          module: 'grammatik',
          topicOrTeil: currentTopic.titleDe,
          question: ex.question,
          userAnswer: opt,
          correctAnswer: ex.correctAnswer,
          explanationDe: ex.explanationDe,
          explanationAr: ex.explanationAr,
        });
      } else {
        confetti({ particleCount: 20, spread: 40, origin: { y: 0.8 } });
      }
    }
  };

  return (
    <div className={`space-y-6 ${isAr ? 'text-right' : 'text-left'}`}>
      {/* Top Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
            <BookmarkCheck className="w-4 h-4" />
            <span>{isAr ? 'مركز قواعد B1 HARD المتقدم' : 'B1 Hard Grammatik-Zentrum'}</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900">
            {isAr ? currentTopic.titleAr : currentTopic.titleDe}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {isAr
              ? 'شرح عميق ومبسط بالعربية مع أمثلة وتصحيح لأبرز الأخطاء الشائعة وتمارين تفاعلية متدرجة.'
              : 'Deutsche & arabische Erklärungen, Formeln, typische Fehler und zielgerichtete Prüfungsübungen.'}
          </p>
        </div>

        {/* Topic Selector */}
        <div className="flex items-center gap-2">
          <select
            value={selectedTopicId}
            onChange={(e) => {
              setSelectedTopicId(e.target.value);
              setExerciseAnswers({});
              setShowResults({});
            }}
            className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          >
            {GRAMMATIK_DATA.map((t) => (
              <option key={t.id} value={t.id}>
                {t.titleDe}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grammar Explanation & Formula Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Rules & Explanations (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          {/* Rules in German & Arabic */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>{isAr ? 'القواعد والصيغ الأساسية (Regeln & Formeln)' : 'Regeln & Strukturen'}</span>
            </h3>

            {/* German Rules */}
            <div className="space-y-2 text-xs text-slate-800">
              {currentTopic.rulesDe.map((r, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 leading-relaxed">
                  {r}
                </div>
              ))}
            </div>

            {/* Arabic Explanation */}
            <div className="pt-2 border-t border-slate-100">
              <span className="font-bold text-xs text-indigo-900 block mb-2 font-arabic" dir="rtl">
                الشرح المفصل باللغة العربية:
              </span>
              <div className="space-y-2 text-xs text-slate-700 font-arabic" dir="rtl">
                {currentTopic.rulesAr.map((r, idx) => (
                  <p key={idx} className="leading-relaxed p-2.5 rounded-xl bg-indigo-50/50 border border-indigo-100">
                    • {r}
                  </p>
                ))}
              </div>
            </div>

            {/* Common Mistakes */}
            {currentTopic.commonMistakes.length > 0 && (
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <span className="font-bold text-xs text-rose-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-500" />
                  <span>{isAr ? 'أخطاء شائعة في الامتحانات تجنب الوقوع فيها:' : 'Typische Prüfungsfehler vermeiden:'}</span>
                </span>
                {currentTopic.commonMistakes.map((cm, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200 text-xs space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="line-through text-rose-700 font-mono">{cm.wrong}</span>
                      <span>→</span>
                      <span className="font-bold text-emerald-700 font-mono">{cm.right}</span>
                    </div>
                    <p className="text-slate-700 text-[11px]">{cm.whyDe}</p>
                    <p className="text-slate-800 text-[11px] font-arabic pt-1 border-t border-rose-200/50" dir="rtl">
                      💡 {cm.whyAr}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Exercises (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-slate-900 text-sm">
                {isAr ? 'تمارين تفاعلية (Interaktive Übungen)' : 'Interaktive Übungen'}
              </h3>

              {/* Level Filter */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-[10px] font-bold">
                {(['all', 'B1 Standard', 'B1 Hard', 'B1 Exam Challenge'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setLevelFilter(lvl)}
                    className={`px-2 py-1 rounded-lg transition-all ${
                      levelFilter === lvl ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {lvl === 'all' ? (isAr ? 'الكل' : 'Alle') : lvl.replace('B1 ', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Exercises List */}
            <div className="space-y-4">
              {filteredExercises.map((ex, idx) => {
                const userAns = exerciseAnswers[ex.id];
                const isAnswered = showResults[ex.id];
                const isCorrect = isAnswered && userAns?.toLowerCase() === ex.correctAnswer.toLowerCase();

                return (
                  <div
                    key={ex.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      isCorrect
                        ? 'bg-emerald-50/50 border-emerald-300'
                        : isAnswered
                        ? 'bg-rose-50/50 border-rose-300'
                        : 'bg-slate-50/50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-[11px] font-bold text-slate-500">Übung {idx + 1}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                        {ex.level}
                      </span>
                    </div>

                    <p className="text-sm font-bold text-slate-900 mb-3">{ex.question}</p>

                    {/* Options Grid */}
                    {ex.options && (
                      <div className="grid grid-cols-2 gap-2">
                        {ex.options.map((opt) => {
                          const isSelected = userAns === opt;
                          const isThisCorrect = isAnswered && opt.toLowerCase() === ex.correctAnswer.toLowerCase();

                          return (
                            <button
                              key={opt}
                              onClick={() => handleSelectOption(ex.id, opt)}
                              className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                                isThisCorrect
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : isSelected && !isCorrect
                                  ? 'bg-rose-600 text-white border-rose-600'
                                  : isSelected
                                  ? 'bg-indigo-600 text-white border-indigo-600'
                                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Answer Feedback */}
                    {isAnswered && (
                      <div className="mt-3 pt-2.5 border-t border-current/10 text-xs space-y-1">
                        <div className="flex items-center gap-1.5 font-bold">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span className="text-emerald-800">{isAr ? 'إجابة صحيحة!' : 'Richtig gelöst!'}</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-rose-600" />
                              <span className="text-rose-800">{isAr ? `إجابة خاطئة. الإجابة الصحيحة: ${ex.correctAnswer}` : `Falsch. Richtig ist: ${ex.correctAnswer}`}</span>
                            </>
                          )}
                        </div>
                        <p className="text-slate-600 text-[11px]">{ex.explanationDe}</p>
                        <p className="text-slate-800 text-[11px] font-arabic pt-1" dir="rtl">
                          💡 {ex.explanationAr}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
