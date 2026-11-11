import React, { useState, useEffect } from 'react';
import { Language, SchreibenTask, WritingEvaluationResult } from '../types';
import { SCHREIBEN_TASKS } from '../data/schreibenData';
import { apiService } from '../services/apiService';
import { storageService } from '../services/storageService';
import confetti from 'canvas-confetti';
import {
  PenTool,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  BookOpen,
  Send,
  Loader2,
  FileCheck,
  Save,
  MessageSquare,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

interface SchreibenViewProps {
  language: Language;
}

export const SchreibenView: React.FC<SchreibenViewProps> = ({ language }) => {
  const isAr = language === 'ar';

  const [activeAufgabe, setActiveAufgabe] = useState<1 | 2 | 3>(1);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number>(0);

  const currentTasks = SCHREIBEN_TASKS.filter((t) => t.aufgabe === activeAufgabe);
  const currentTask: SchreibenTask = currentTasks[selectedTaskIndex] || currentTasks[0];

  const [userText, setUserText] = useState<string>('');
  const [checkedPoints, setCheckedPoints] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState<number>(20 * 60);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluationResult, setEvaluationResult] = useState<WritingEvaluationResult | null>(null);
  const [evalError, setEvalError] = useState<string | null>(null);
  const [draftSavedToast, setDraftSavedToast] = useState<boolean>(false);
  const [showModelAnswer, setShowModelAnswer] = useState<boolean>(false);

  // Load saved draft and reset on task change
  useEffect(() => {
    if (currentTask) {
      const saved = storageService.getDraft(currentTask.id);
      setUserText(saved);
      setCheckedPoints({});
      setEvaluationResult(null);
      setEvalError(null);
      setShowModelAnswer(false);
      setTimeLeft(currentTask.timeMinutes * 60);
      setTimerRunning(false);
    }
  }, [activeAufgabe, selectedTaskIndex]);

  // Timer countdown
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timeLeft]);

  // Auto-save draft on typing
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setUserText(val);
    if (currentTask) {
      storageService.saveDraft(currentTask.id, val);
    }
  };

  const wordCount = userText.trim().length > 0 ? userText.trim().split(/\s+/).length : 0;
  const isTargetMet = wordCount >= Math.round(currentTask.targetWordCount * 0.85);

  const handleManualSave = () => {
    if (currentTask) {
      storageService.saveDraft(currentTask.id, userText);
      setDraftSavedToast(true);
      setTimeout(() => setDraftSavedToast(false), 2000);
    }
  };

  const handleInsertRedemittel = (phrase: string) => {
    setUserText((prev) => {
      const spacing = prev.length > 0 && !prev.endsWith('\n') && !prev.endsWith(' ') ? ' ' : '';
      const updated = prev + spacing + phrase + ' ';
      if (currentTask) storageService.saveDraft(currentTask.id, updated);
      return updated;
    });
  };

  const handleEvaluate = async () => {
    if (wordCount < 15) {
      alert(isAr ? 'يرجى كتابة نص كافٍ (15 كلمة على الأقل) لإجراء التقييم.' : 'Bitte schreibe mindestens 15 Wörter, um eine fundierte Bewertung zu erhalten.');
      return;
    }

    setIsEvaluating(true);
    setEvalError(null);
    setTimerRunning(false);

    try {
      const result = await apiService.evaluateWriting({
        taskType: `ÖSD B1 Aufgabe ${currentTask.aufgabe}`,
        promptDetails: {
          title: currentTask.titleDe,
          situation: currentTask.situationDe,
          instructions: currentTask.instructionsDe,
          leitpunkte: currentTask.leitpunkteDe,
        },
        userText,
        targetWords: currentTask.targetWordCount,
      });

      setEvaluationResult(result);

      // Save test score to history
      storageService.saveTestResult({
        id: 'res-w-' + Date.now(),
        date: new Date().toLocaleDateString(),
        module: 'schreiben',
        teil: currentTask.aufgabe,
        testNumber: currentTask.testNumber,
        score: result.totalScore,
        maxScore: 100,
        percentage: result.totalScore,
        passed: result.passed,
        timeSpentSeconds: currentTask.timeMinutes * 60 - timeLeft,
      });

      if (result.passed) {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      }
    } catch (err: any) {
      setEvalError(err.message || 'Fehler bei der Auswertung.');
    } finally {
      setIsEvaluating(false);
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentTask) {
    return <div className="p-8 text-center text-slate-500">Lade Schreibaufgaben...</div>;
  }

  return (
    <div className={`space-y-6 ${isAr ? 'text-right' : 'text-left'}`}>
      {/* Top Controller Bar */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Aufgabe Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0">
          {[1, 2, 3].map((a) => (
            <button
              key={a}
              onClick={() => {
                setActiveAufgabe(a as any);
                setSelectedTaskIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeAufgabe === a
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{isAr ? `المهمة ${a}` : `Aufgabe ${a}`}</span>
              <span className="block text-[10px] font-normal opacity-80">
                {a === 1 && (isAr ? 'إيميل غير رسمي (80 ك)' : 'Informell (80 W.)')}
                {a === 2 && (isAr ? 'منشور منتدى (80 ك)' : 'Meinung (80 W.)')}
                {a === 3 && (isAr ? 'إيميل رسمي (40 ك)' : 'Formell (40 W.)')}
              </span>
            </button>
          ))}
        </div>

        {/* Timer & Word Count Badges */}
        <div className="flex items-center gap-3">
          {/* Timer */}
          <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-slate-700">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>{formatTimer(timeLeft)}</span>
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className="text-[10px] px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            >
              {timerRunning ? (isAr ? 'إيقاف' : 'Pause') : (isAr ? 'بدء' : 'Start')}
            </button>
          </div>

          {/* Word Counter */}
          <div
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
              isTargetMet
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            <span>
              {wordCount} / {currentTask.targetWordCount} {isAr ? 'كلمة' : 'Wörter'}
            </span>
          </div>

          {/* Manual Save */}
          <button
            onClick={handleManualSave}
            title={isAr ? 'حفظ المسودة' : 'Entwurf speichern'}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            <Save className="w-4 h-4" />
          </button>
        </div>
      </div>

      {draftSavedToast && (
        <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{isAr ? 'تم حفظ مسودة النص بنجاح!' : 'Entwurf erfolgreich gespeichert!'}</span>
        </div>
      )}

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Task Prompt & Leitpunkte (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xs">
                {currentTask.aufgabe}
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">
                {isAr ? currentTask.titleAr : currentTask.titleDe}
              </h3>
            </div>

            {/* Situation Context */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 leading-relaxed">
              <span className="font-bold text-slate-500 uppercase tracking-wider block text-[10px] mb-1">
                {isAr ? 'سياق الموقف (Situation):' : 'Situation:'}
              </span>
              <p className="font-medium text-slate-900 mb-2">{currentTask.situationDe}</p>
              <p className="text-slate-600 font-arabic pt-1.5 border-t border-slate-200" dir="rtl">
                {currentTask.situationAr}
              </p>
            </div>

            {/* If Aufgabe 2: Sample guestbook comment */}
            {currentTask.sampleInputPost && (
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs space-y-1.5">
                <span className="font-bold text-amber-900 block text-[11px]">
                  Gästebuch-Beitrag ({currentTask.sampleInputPost.author}):
                </span>
                <p className="italic text-slate-800 leading-relaxed font-sans">
                  "{currentTask.sampleInputPost.text}"
                </p>
              </div>
            )}

            {/* Leitpunkte Checklist */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-900 flex items-center justify-between">
                <span>{isAr ? 'النقاط الثلاث الإلزامية (Leitpunkte):' : 'Die geforderten Leitpunkte:'}</span>
                <span className="text-[11px] font-normal text-slate-500">
                  {Object.values(checkedPoints).filter(Boolean).length}/3 {isAr ? 'مكتمل' : 'erledigt'}
                </span>
              </span>

              {currentTask.leitpunkteDe.map((lp, idx) => (
                <div
                  key={idx}
                  onClick={() => setCheckedPoints((p) => ({ ...p, [idx]: !p[idx] }))}
                  className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${
                    checkedPoints[idx]
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!checkedPoints[idx]}
                    onChange={() => {}}
                    className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <p>{lp}</p>
                    <p className="text-[11px] text-slate-500 font-arabic mt-0.5" dir="rtl">
                      {currentTask.leitpunkteAr[idx]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Useful Redemittel Chips */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>{isAr ? 'تعبيرات B1 مقترحة (اضغط للإدراج المباشر):' : 'Empfohlene Redemittel (Klick zum Einfügen):'}</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentTask.usefulRedemittel.map((rm, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleInsertRedemittel(rm.de)}
                    title={rm.ar}
                    className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 text-[11px] font-medium border border-blue-200 transition-all text-left cursor-pointer"
                  >
                    + {rm.de}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Answer Toggle */}
            <div className="pt-2">
              <button
                onClick={() => setShowModelAnswer(!showModelAnswer)}
                className="w-full py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>{showModelAnswer ? (isAr ? 'إخفاء الإجابة النموذجية' : 'Musterlösung verbergen') : (isAr ? 'عرض الإجابة النموذجية الرسمية (B1)' : 'Offizielle B1 Musterlösung ansehen')}</span>
              </button>

              {showModelAnswer && (
                <div className="mt-3 p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs text-slate-800 space-y-2">
                  <span className="font-bold text-indigo-900 block">Mustertext auf B1-Niveau:</span>
                  <p className="whitespace-pre-line leading-relaxed font-sans">{currentTask.modelAnswerB1}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Writing Textarea Editor & AI Evaluation Panel (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Textarea Editor Card */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PenTool className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-base">
                  {isAr ? 'محرر كتابة الامتحان (Schreibfeld)' : 'Schreibfeld'}
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                {isAr ? 'الحفظ التلقائي مفعّل' : 'Automatisches Speichern aktiv'}
              </span>
            </div>

            {/* Writing Area */}
            <textarea
              rows={12}
              value={userText}
              onChange={handleTextChange}
              placeholder={
                currentTask.aufgabe === 1
                  ? 'Liebe/r ...,\n\nwie geht es dir? ...'
                  : currentTask.aufgabe === 2
                  ? 'Das Thema ... ist sehr interessant. Meiner Meinung nach ...'
                  : 'Sehr geehrte/r ...,\n\nich schreibe Ihnen, weil ...'
              }
              className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm leading-relaxed font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-y"
            />

            {/* Submit to AI Evaluation Button */}
            <button
              disabled={isEvaluating}
              onClick={handleEvaluate}
              className={`w-full py-4 rounded-2xl font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isEvaluating
                  ? 'bg-slate-400 text-white cursor-wait'
                  : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 text-white shadow-blue-500/25 hover:scale-[1.01] active:scale-[0.99]'
              }`}
            >
              {isEvaluating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{isAr ? 'جاري الفحص والتقييم الذكي بمعايير ÖSD...' : 'ÖSD-Kriterien Auswertung läuft...'}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  <span>{isAr ? 'تقييم وتصحيح النص بواسطة الذكاء الاصطناعي (ÖSD KI-Korrektur)' : 'Mit KI korrigieren & bewerten (ÖSD ZB1)'}</span>
                </>
              )}
            </button>
          </div>

          {/* AI Evaluation Report Panel */}
          {evaluationResult && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-indigo-200 shadow-xl space-y-6">
              {/* Report Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg ${
                      evaluationResult.passed ? 'bg-emerald-600 shadow-emerald-500/25' : 'bg-rose-600 shadow-rose-500/25'
                    }`}
                  >
                    {evaluationResult.totalScore}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-lg text-slate-900">
                        {isAr ? 'تقرير تقييم الكتابة الرسمي' : 'Offizieller ÖSD B1 Bewertungsbericht'}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          evaluationResult.passed
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {evaluationResult.passed ? (isAr ? 'ناجح (Bestanden)' : 'Bestanden') : (isAr ? 'غير ناجح' : 'Nicht bestanden')}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {isAr ? `عدد الكلمات الفعلي: ${evaluationResult.wordCount} كلمة` : `Wortanzahl: ${evaluationResult.wordCount} Wörter`}
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Official Criteria Scorecard */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {Object.entries(evaluationResult.criteria).map(([key, crit]: any) => (
                  <div key={key} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>{crit.name}</span>
                      <span className="text-blue-600 font-extrabold">
                        {crit.score} / {crit.maxScore} Pkt.
                      </span>
                    </div>
                    <p className="text-slate-600 leading-normal">{crit.commentDe}</p>
                    <p className="text-slate-500 text-[11px] font-arabic pt-1 border-t border-slate-200" dir="rtl">
                      {crit.commentAr}
                    </p>
                  </div>
                ))}
              </div>

              {/* Specific Grammatical & Structural Errors List */}
              {evaluationResult.errors && evaluationResult.errors.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <span>{isAr ? 'الأخطاء التي تم رصدها مع الشرح النحوي بالعربية:' : 'Gefundene Fehler & grammatische Erklärungen:'}</span>
                  </h4>
                  <div className="space-y-2.5">
                    {evaluationResult.errors.map((err, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 text-xs space-y-2"
                      >
                        <div className="flex items-baseline gap-2">
                          <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px] font-bold">
                            {err.category}
                          </span>
                          <span className="text-rose-900 line-through font-mono">
                            {err.original}
                          </span>
                          <span className="text-slate-400">→</span>
                          <span className="text-emerald-700 font-bold font-mono">
                            {err.correction}
                          </span>
                        </div>
                        <p className="text-slate-700">{err.ruleDe}</p>
                        <p className="text-slate-800 font-arabic text-[11px] bg-white/70 p-2.5 rounded-xl border border-rose-100" dir="rtl">
                          💡 {err.ruleAr}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Improved Full Version */}
              {evaluationResult.correctedVersion && (
                <div className="space-y-2">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{isAr ? 'النسخة المصححة والمحسنة لنصك (B1 Korrektur):' : 'Vollständig korrigierte Version deines Textes:'}</span>
                  </h4>
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs text-slate-800 leading-relaxed font-sans whitespace-pre-line">
                    {evaluationResult.correctedVersion}
                  </div>
                </div>
              )}

              {/* General Recommendations in German and Arabic */}
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs space-y-2">
                <span className="font-bold text-blue-900 block">
                  {isAr ? 'توجيهات وتوصيات الامتحان:' : 'Prüfungsempfehlungen:'}
                </span>
                <p className="text-slate-800 leading-relaxed">{evaluationResult.recommendationsDe}</p>
                <p className="text-slate-800 font-arabic pt-1.5 border-t border-blue-200" dir="rtl">
                  {evaluationResult.recommendationsAr}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
