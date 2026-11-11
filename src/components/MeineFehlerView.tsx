import React, { useState } from 'react';
import { Language, UserMistake } from '../types';
import { storageService } from '../services/storageService';
import { apiService } from '../services/apiService';
import confetti from 'canvas-confetti';
import {
  BrainCircuit,
  Trash2,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Loader2,
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface MeineFehlerViewProps {
  language: Language;
}

export const MeineFehlerView: React.FC<MeineFehlerViewProps> = ({ language }) => {
  const isAr = language === 'ar';

  const [mistakes, setMistakes] = useState<UserMistake[]>(storageService.getMistakes());
  const [selectedTopic, setSelectedTopic] = useState<string>('Alle');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedExercises, setGeneratedExercises] = useState<any | null>(null);
  const [genAnswers, setGenAnswers] = useState<Record<string, number>>({});
  const [showGenResults, setShowGenResults] = useState<boolean>(false);

  const topics = ['Alle', ...Array.from(new Set(mistakes.map((m) => m.topicOrTeil)))];

  const filteredMistakes = mistakes.filter(
    (m) => selectedTopic === 'Alle' || m.topicOrTeil === selectedTopic
  );

  const handleRemove = (id: string) => {
    storageService.removeMistake(id);
    setMistakes(storageService.getMistakes());
  };

  const handleClearAll = () => {
    if (confirm(isAr ? 'هل أنت متأكد من مسح جميع الأخطاء المسجلة؟' : 'Alle dokumentierten Fehler löschen?')) {
      storageService.clearAllMistakes();
      setMistakes([]);
    }
  };

  const handleGenerateTargetedTraining = async () => {
    if (mistakes.length === 0) {
      alert(isAr ? 'لا توجد أخطاء مسجلة حالياً لتوليد تدريب.' : 'Keine Fehler im Speicher vorhanden.');
      return;
    }

    setIsGenerating(true);
    setGeneratedExercises(null);
    setGenAnswers({});
    setShowGenResults(false);

    try {
      const topTopic = selectedTopic !== 'Alle' ? selectedTopic : mistakes[0].topicOrTeil;
      const res = await apiService.generateTargetedExercise({
        topic: topTopic,
        mistakeSummary: mistakes.slice(0, 5).map((m) => ({
          question: m.question,
          userAnswer: m.userAnswer,
          correctAnswer: m.correctAnswer,
        })),
        targetSkill: 'B1 Hard Grammatik & Wortschatz',
      });

      setGeneratedExercises(res);
    } catch (err: any) {
      alert(err.message || 'Fehler beim Generieren.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSelectGenAnswer = (exId: string, optIdx: number) => {
    if (showGenResults) return;
    setGenAnswers((p) => ({ ...p, [exId]: optIdx }));
  };

  const handleSubmitGenAnswers = () => {
    setShowGenResults(true);
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
  };

  return (
    <div className={`space-y-6 ${isAr ? 'text-right' : 'text-left'}`}>
      {/* Top Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold mb-2">
            <BrainCircuit className="w-4 h-4" />
            <span>{isAr ? 'سجل الأخطاء والمعلم الشخصي الذكي' : 'Fehlerspeicher & KI-Personal-Tutor'}</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900">
            {isAr ? 'بنك الأخطاء والتدريب العلاجي الموجه' : 'Meine Fehler & Schwachstellen-Analyse'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {isAr
              ? 'يتم تسجيل كل إجابة خاطئة هنا تلقائياً لتمكينك من مراجعتها وفهم سبب الخطأ وتوليد تدريبات ذكية تستهدف نقاط ضعفك تحديداً.'
              : 'Automatische Dokumentation falscher Antworten mit arabischer Fehlerursachenanalyse und KI-Generierung von Förderübungen.'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {mistakes.length > 0 && (
            <>
              <button
                disabled={isGenerating}
                onClick={handleGenerateTargetedTraining}
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-600 via-indigo-600 to-blue-600 hover:from-amber-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{isAr ? 'المعلم الذكي يحلل ويولّد التدريب...' : 'KI analysiert Schwachstellen...'}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>{isAr ? 'توليد تدريب علاجي مخصص بالذكاء الاصطناعي' : 'Gezieltes KI-Training generieren'}</span>
                  </>
                )}
              </button>

              <button
                onClick={handleClearAll}
                className="p-3 rounded-2xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 text-xs font-bold transition-colors cursor-pointer"
                title={isAr ? 'مسح السجل كاملاً' : 'Alle löschen'}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Generated AI Personal Teacher Exercises Panel */}
      {generatedExercises && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white shadow-xl space-y-5 border border-indigo-700/50">
          <div className="flex items-center justify-between pb-3 border-b border-indigo-800">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-amber-300" />
              <div>
                <h3 className="font-black text-lg text-white">
                  {isAr ? generatedExercises.titleAr : generatedExercises.title}
                </h3>
                <p className="text-xs text-blue-200 mt-0.5">
                  {isAr ? generatedExercises.explanationAr : generatedExercises.explanationDe}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {generatedExercises.exercises?.map((ex: any, idx: number) => {
              const selectedOptIdx = genAnswers[ex.id];
              const isChecked = showGenResults;
              const isCorrect = isChecked && selectedOptIdx === ex.correctIndex;

              return (
                <div
                  key={ex.id || idx}
                  className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-xs space-y-3"
                >
                  <p className="font-bold text-white text-sm">
                    {idx + 1}. {ex.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ex.options?.map((opt: string, oIdx: number) => {
                      const isSelected = selectedOptIdx === oIdx;
                      const isOptionCorrect = isChecked && oIdx === ex.correctIndex;

                      return (
                        <button
                          key={oIdx}
                          disabled={showGenResults}
                          onClick={() => handleSelectGenAnswer(ex.id, oIdx)}
                          className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                            isOptionCorrect
                              ? 'bg-emerald-600 text-white border-emerald-500 font-bold'
                              : isChecked && isSelected && !isOptionCorrect
                              ? 'bg-rose-600 text-white border-rose-500 line-through'
                              : isSelected
                              ? 'bg-blue-600 text-white border-blue-400'
                              : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {isChecked && (
                    <div className="pt-2 text-xs text-slate-300 border-t border-white/10 space-y-1">
                      <p className="text-emerald-300 font-semibold">{ex.explanationDe}</p>
                      <p className="text-amber-200 font-arabic text-[11px]" dir="rtl">
                        💡 {ex.explanationAr}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!showGenResults ? (
            <button
              onClick={handleSubmitGenAnswers}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-xs shadow-md transition-all cursor-pointer"
            >
              {isAr ? 'تصحيح إجابات التدريب الذكي' : 'Antworten überprüfen'}
            </button>
          ) : (
            <button
              onClick={() => setGeneratedExercises(null)}
              className="w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all cursor-pointer"
            >
              {isAr ? 'إغلاق هذا التدريب' : 'Schließen'}
            </button>
          )}
        </div>
      )}

      {/* Filter by Topic */}
      {mistakes.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {topics.map((tp) => (
            <button
              key={tp}
              onClick={() => setSelectedTopic(tp)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedTopic === tp
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tp}
            </button>
          ))}
        </div>
      )}

      {/* Mistakes List */}
      {filteredMistakes.length > 0 ? (
        <div className="space-y-3">
          {filteredMistakes.map((m) => (
            <div
              key={m.id}
              className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3 hover:border-amber-300 transition-all"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {m.topicOrTeil}
                </span>
                <button
                  onClick={() => handleRemove(m.id)}
                  title={isAr ? 'حذف من السجل' : 'Aus dem Speicher löschen'}
                  className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                <p className="text-sm font-extrabold text-slate-900 mb-2">{m.question}</p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 line-through">
                    {m.userAnswer}
                  </span>
                  <span className="text-slate-400">→</span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                    {m.correctAnswer}
                  </span>
                </div>
              </div>

              {/* Bilingual Explanation */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs space-y-1.5">
                <p className="text-slate-700 leading-relaxed font-sans">{m.explanationDe}</p>
                <p className="text-slate-800 text-[11px] font-arabic pt-1 border-t border-slate-200/60" dir="rtl">
                  💡 {m.explanationAr}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center font-bold">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-slate-800 text-base">
            {isAr ? 'سجل أخطائك نظيف تماماً!' : 'Keine dokumentierten Fehler vorhanden'}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {isAr
              ? 'كلما قمت بحل تمارين في القراءة أو الاستماع أو القواعد وأجبت بشكل غير صحيح، ستُحفظ هنا لتدرسها وتولد تدريباً ذكياً لعلاجها.'
              : 'Wenn du Aufgaben in den Modulen löst und Fehler machst, werden diese automatisch hier gespeichert.'}
          </p>
        </div>
      )}
    </div>
  );
};
