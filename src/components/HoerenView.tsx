import React, { useState, useEffect } from 'react';
import { Language, HoerenTeilSet } from '../types';
import { HOEREN_DATA } from '../data/hoerenData';
import { audioService } from '../services/audioService';
import { storageService } from '../services/storageService';
import confetti from 'canvas-confetti';
import {
  Headphones,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  FastForward,
  Timer,
  CheckCircle2,
  XCircle,
  Eye,
  FileText,
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface HoerenViewProps {
  language: Language;
}

export const HoerenView: React.FC<HoerenViewProps> = ({ language }) => {
  const isAr = language === 'ar';

  const [activeTeil, setActiveTeil] = useState<1 | 2 | 3 | 4>(1);
  const [selectedSetIndex, setSelectedSetIndex] = useState<number>(0);
  const [isExamMode, setIsExamMode] = useState<boolean>(false);

  // Playback state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(1.0);
  const [playCount, setPlayCount] = useState<number>(0);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  // Questions and submission
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [activeExplanationId, setActiveExplanationId] = useState<number | null>(null);

  const currentTeilSets = HOEREN_DATA.filter((s) => s.teil === activeTeil);
  const currentSet: HoerenTeilSet = currentTeilSets[selectedSetIndex] || currentTeilSets[0];

  useEffect(() => {
    // Reset states on set or teil change
    audioService.stop();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentLine(0);
    setPlayCount(0);
    setUserAnswers({});
    setSubmitted(false);
    setShowTranscript(false);
    setActiveExplanationId(null);
  }, [activeTeil, selectedSetIndex, isExamMode]);

  useEffect(() => {
    audioService.onStateChange((state) => {
      setIsPlaying(state.isPlaying);
      setIsPaused(state.isPaused);
      setCurrentLine(state.currentLine);
    });

    return () => {
      audioService.stop();
    };
  }, []);

  const handleTogglePlay = async () => {
    if (!currentSet) return;

    if (isPlaying) {
      if (isPaused) {
        audioService.resume();
      } else {
        audioService.pause();
      }
      return;
    }

    // Check play limits in Exam Mode
    if (isExamMode && playCount >= currentSet.maxPlays) {
      alert(
        isAr
          ? `عفواً، في وضع الامتحان الرسمي لا يجوز الاستماع لهذا الجزء أكثر من ${currentSet.maxPlays} مرة.`
          : `Im Prüfungsmodus darf Teil ${currentSet.teil} maximal ${currentSet.maxPlays}x angehört werden!`
      );
      return;
    }

    setPlayCount((prev) => prev + 1);
    await audioService.playScript(
      currentSet.speechScript,
      (idx) => setCurrentLine(idx),
      () => {
        setIsPlaying(false);
        setIsPaused(false);
      },
      true
    );
  };

  const handleStopAudio = () => {
    audioService.stop();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentLine(0);
  };

  const handleChangeSpeed = (newSpeed: number) => {
    setSpeed(newSpeed);
    audioService.setRate(newSpeed);
  };

  const handleSelectAnswer = (qId: number, val: string) => {
    if (submitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    audioService.stop();

    if (!currentSet) return;

    let correctCount = 0;
    currentSet.questions.forEach((q) => {
      const userAns = userAnswers[q.id];
      const isCorrect = userAns && userAns.toLowerCase() === q.correctAnswer.toLowerCase();
      if (isCorrect) {
        correctCount++;
      } else {
        storageService.saveMistake({
          module: 'hoeren',
          topicOrTeil: `Hören Teil ${currentSet.teil}`,
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

    storageService.saveTestResult({
      id: 'res-h-' + Date.now(),
      date: new Date().toLocaleDateString(),
      module: 'hoeren',
      teil: currentSet.teil,
      testNumber: currentSet.testNumber,
      score: correctCount,
      maxScore: currentSet.questions.length,
      percentage: percent,
      passed,
      timeSpentSeconds: 180,
    });

    if (passed) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    }
  };

  if (!currentSet) {
    return <div className="p-8 text-center text-slate-500">Lade Hörverstehen...</div>;
  }

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
          {[1, 2, 3, 4].map((t) => (
            <button
              key={t}
              onClick={() => {
                setActiveTeil(t as any);
                setSelectedSetIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTeil === t
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{isAr ? `الاستماع ${t}` : `Hören Teil ${t}`}</span>
              <span className="block text-[10px] font-normal opacity-80">
                {t === 1 && '5 Texte (2x)'}
                {t === 2 && 'Monolog (1x)'}
                {t === 3 && 'Dialog (1x)'}
                {t === 4 && 'Diskussion (2x)'}
              </span>
            </button>
          ))}
        </div>

        {/* Practice vs Exam Mode Toggle */}
        <div className="flex items-center gap-3">
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
        </div>
      </div>

      {/* Real Playable Audio Studio Player */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-indigo-900/50 relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {isAr ? `تكرار الاستماع: مرتان (2x)` : `Wiedergaben: ${currentSet.maxPlays}x maximal`}
                </span>
                {isExamMode && (
                  <span className="text-[11px] text-amber-300">
                    {isAr ? `استمعت: ${playCount}/${currentSet.maxPlays}` : `Gehört: ${playCount}/${currentSet.maxPlays}`}
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                {isAr ? currentSet.titleAr : currentSet.titleDe}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {isAr ? currentSet.situationAr : currentSet.situationDe}
              </p>
            </div>

            {/* Playback Speed Controls */}
            <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-xl border border-slate-700 self-start sm:self-auto">
              <span className="text-[10px] text-slate-400 px-2 font-medium">Tempo:</span>
              {[0.85, 1.0, 1.15].map((s) => (
                <button
                  key={s}
                  onClick={() => handleChangeSpeed(s)}
                  className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                    speed === s ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>

          {/* Main Controls & Visualizer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
            <div className="flex items-center gap-3">
              {/* Play / Pause Primary Button */}
              <button
                onClick={handleTogglePlay}
                className="w-14 h-14 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {isPlaying && !isPaused ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-0.5" />
                )}
              </button>

              {/* Stop Button */}
              <button
                onClick={handleStopAudio}
                title="Stopp"
                disabled={!isPlaying}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  isPlaying
                    ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                    : 'opacity-40 cursor-not-allowed bg-slate-900 border-slate-800 text-slate-600'
                }`}
              >
                <RotateCcw className="w-5 h-5" />
              </button>

              <div className="text-xs">
                <span className="font-bold text-white block">
                  {isPlaying
                    ? isPaused
                      ? isAr ? 'متوقف مؤقتاً' : 'Pausiert'
                      : isAr ? 'جاري التشغيل...' : 'Audio wird abgespielt...'
                    : isAr ? 'جاهز للاستماع' : 'Bereit zum Abspielen'}
                </span>
                <span className="text-slate-400 text-[11px]">
                  {isPlaying ? (isAr ? `المقطع ${currentLine + 1} من ${currentSet.speechScript.length}` : `Abschnitt ${currentLine + 1} von ${currentSet.speechScript.length}`) : (isAr ? 'اضغط تشغيل للاستماع' : 'Klicke auf Play')}
                </span>
              </div>
            </div>

            {/* Audio Waves Visualizer Animation */}
            <div className="flex items-center gap-1 h-8 px-4 py-1 rounded-xl bg-slate-800/40 border border-slate-700/50">
              {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 bg-blue-400 rounded-full transition-all duration-200 ${
                    isPlaying && !isPaused ? 'animate-pulse' : 'opacity-30'
                  }`}
                  style={{ height: isPlaying && !isPaused ? `${h}%` : '20%' }}
                />
              ))}
            </div>

            {/* Transcript Toggle in Practice Mode */}
            {(!isExamMode || submitted) && (
              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                  showTranscript
                    ? 'bg-indigo-600 text-white border-indigo-500'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>{showTranscript ? (isAr ? 'إخفاء النص المكتوب' : 'Transkript verbergen') : (isAr ? 'عرض النص المكتوب' : 'Transkript anzeigen')}</span>
              </button>
            )}
          </div>

          {/* Interactive Synchronized Transcript Panel */}
          {showTranscript && (!isExamMode || submitted) && (
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-900/40 space-y-3 max-h-64 overflow-y-auto">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>{isAr ? 'نص التسجيل الصوتي المتزامن (Hörtext Transkription)' : 'Hörtext Transkription'}</span>
              </h4>
              <div className="space-y-2.5">
                {currentSet.speechScript.map((line, idx) => (
                  <div
                    key={idx}
                    onClick={() => audioService.jumpToLine(idx)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      currentLine === idx && isPlaying
                        ? 'bg-blue-900/50 border-blue-400 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-bold text-blue-300 block mb-1">
                      {line.speaker}:
                    </span>
                    <p className="leading-relaxed">{line.textDe}</p>
                    {line.textAr && (
                      <p className="text-slate-400 text-[11px] font-arabic mt-1.5 pt-1 border-t border-slate-800/80" dir="rtl">
                        {line.textAr}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Submission Result Banner */}
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
                  ? isAr ? 'ممتاز! اجتزت اختبار الاستماع بنجاح' : 'Bestanden! Ausgezeichnete Hörleistung'
                  : isAr ? 'لم تجتز الحد الأدنى المطلوب (أقل من 60%)' : 'Nicht bestanden (unter 60%)'}
              </h4>
              <p className="text-xs opacity-80">
                {correctCount} / {currentSet.questions.length} {isAr ? 'إجابات صحيحة' : 'richtig'} ({scorePercent}%)
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-4">
        {currentSet.questions.map((q) => {
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
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center text-xs font-black shrink-0">
                  {q.id}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    {q.questionDe}
                  </p>
                  {(!isExamMode || submitted) && (
                    <p className="text-xs text-slate-500 mt-1 font-arabic" dir="rtl">
                      {q.questionAr}
                    </p>
                  )}
                </div>
              </div>

              {/* Richtig / Falsch Buttons */}
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

              {/* Detailed Explanation */}
              {submitted && (
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setActiveExplanationId(activeExplanationId === q.id ? null : q.id)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{activeExplanationId === q.id ? (isAr ? 'إخفاء الشرح' : 'Erklärung schließen') : (isAr ? 'عرض الشرح والتوضيح' : 'Erklärung anzeigen')}</span>
                  </button>

                  {activeExplanationId === q.id && (
                    <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs space-y-2 mt-2">
                      <div>
                        <span className="font-bold text-blue-900 block mb-0.5">Erklärung (Deutsch):</span>
                        <p className="text-slate-800 leading-relaxed">{q.explanationDe}</p>
                      </div>
                      <div dir="rtl" className="pt-2 border-t border-blue-200/60 font-arabic">
                        <span className="font-bold text-blue-900 block mb-0.5">الشرح بالعربية:</span>
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

      {/* Bottom Action Button */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isAr ? 'تسليم الإجابات والتقييم' : 'Antworten abgeben & auswerten'}</span>
          </button>
        ) : (
          <button
            onClick={() => {
              setUserAnswers({});
              setSubmitted(false);
              setPlayCount(0);
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
  );
};
