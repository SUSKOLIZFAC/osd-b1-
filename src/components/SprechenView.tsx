import React, { useState, useEffect } from 'react';
import { Language, SprechenScenario, SpeakingEvaluationResult } from '../types';
import { SPRECHEN_SCENARIOS } from '../data/sprechenData';
import { speechRecorderService } from '../services/speechRecognitionService';
import { audioService } from '../services/audioService';
import { apiService } from '../services/apiService';
import { storageService } from '../services/storageService';
import confetti from 'canvas-confetti';
import {
  Mic,
  MicOff,
  Play,
  RotateCcw,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Clock,
  Layers,
  ChevronRight,
  ChevronLeft,
  Loader2,
  Volume2,
  BookOpen
} from 'lucide-react';

interface SprechenViewProps {
  language: Language;
}

export const SprechenView: React.FC<SprechenViewProps> = ({ language }) => {
  const isAr = language === 'ar';

  const [activeTeil, setActiveTeil] = useState<1 | 2 | 3>(1);
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number>(0);

  const currentScenarios = SPRECHEN_SCENARIOS.filter((s) => s.teil === activeTeil);
  const currentScenario: SprechenScenario = currentScenarios[selectedScenarioIndex] || currentScenarios[0];

  // Recording & Transcription State
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [micVolume, setMicVolume] = useState<number>(0);
  const [transcript, setTranscript] = useState<string>('');
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);

  // Teil 2 Slide Deck state (0 to 4)
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // Interactive Partner Dialogue History for Teil 1 & 3
  const [dialogueHistory, setDialogueHistory] = useState<{ speaker: 'partner' | 'user'; text: string; textAr?: string }[]>([]);
  const [partnerLoading, setPartnerLoading] = useState<boolean>(false);
  const [partnerTip, setPartnerTip] = useState<{ de: string; ar: string } | null>(null);

  // Evaluation
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluationResult, setEvaluationResult] = useState<SpeakingEvaluationResult | null>(null);
  const [evalError, setEvalError] = useState<string | null>(null);

  // Preparation / Speaking Timer
  const [prepTimeLeft, setPrepTimeLeft] = useState<number>(90); // 1.5 min prep
  const [prepTimerRunning, setPrepTimerRunning] = useState<boolean>(false);
  const [mobileTab, setMobileTab] = useState<'prompt' | 'mic' | 'both'>('mic');

  useEffect(() => {
    // Reset on switch
    speechRecorderService.stopRecording();
    audioService.stop();
    setIsRecording(false);
    setTranscript('');
    setRecordedAudioUrl(null);
    setEvaluationResult(null);
    setEvalError(null);
    setCurrentSlideIndex(0);
    setPartnerTip(null);
    setPrepTimeLeft(activeTeil === 2 ? 180 : 90);
    setPrepTimerRunning(false);

    // Initial partner prompt if Teil 1
    if (currentScenario && currentScenario.partnerPromptDe) {
      setDialogueHistory([
        {
          speaker: 'partner',
          text: currentScenario.partnerPromptDe,
        },
      ]);
    } else {
      setDialogueHistory([]);
    }
  }, [activeTeil, selectedScenarioIndex]);

  // Countdown timer for preparation
  useEffect(() => {
    let interval: any = null;
    if (prepTimerRunning && prepTimeLeft > 0) {
      interval = setInterval(() => {
        setPrepTimeLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [prepTimerRunning, prepTimeLeft]);

  const handleToggleRecording = async () => {
    if (isRecording) {
      const { audioUrl } = await speechRecorderService.stopRecording();
      setIsRecording(false);
      setMicVolume(0);
      setRecordedAudioUrl(audioUrl);
    } else {
      setRecordedAudioUrl(null);
      const started = await speechRecorderService.startRecording(
        (text) => setTranscript(text),
        (vol) => setMicVolume(vol),
        (err) => alert(isAr ? `خطأ في الميكروفون: ${err}` : `Mikrofonfehler: ${err}`)
      );
      if (started) {
        setIsRecording(true);
      }
    }
  };

  const handleSendUtteranceToPartner = async () => {
    if (!transcript.trim() || partnerLoading) return;

    const userText = transcript.trim();
    const updatedHistory = [
      ...dialogueHistory,
      { speaker: 'user' as const, text: userText },
    ];
    setDialogueHistory(updatedHistory);
    setTranscript('');
    setPartnerLoading(true);

    try {
      const reply = await apiService.getSpeakingPartnerReply({
        scenario: currentScenario,
        history: updatedHistory,
        userUtterance: userText,
        teil: activeTeil,
      });

      setDialogueHistory((prev) => [
        ...prev,
        { speaker: 'partner', text: reply.partnerReply },
      ]);

      if (reply.redemittelTipDe) {
        setPartnerTip({
          de: reply.redemittelTipDe,
          ar: reply.redemittelTipAr || '',
        });
      }

      // Partner speaks aloud in natural German
      audioService.speakPhrase(reply.partnerReply, 'de');
    } catch (e: any) {
      console.error(e);
    } finally {
      setPartnerLoading(false);
    }
  };

  const handleEvaluateSpeaking = async () => {
    const textToEvaluate =
      transcript.trim() ||
      dialogueHistory.filter((d) => d.speaker === 'user').map((d) => d.text).join(' ');

    if (!textToEvaluate || textToEvaluate.length < 15) {
      alert(
        isAr
          ? 'يرجى تسجيل حديث أو إدخال جمل شفوية للتقييم.'
          : 'Bitte nimm deinen Redebeitrag auf oder sprich mit dem Partner vor der Auswertung.'
      );
      return;
    }

    setIsEvaluating(true);
    setEvalError(null);

    try {
      const res = await apiService.evaluateSpeaking({
        teil: activeTeil,
        scenario: currentScenario,
        transcript: textToEvaluate,
      });

      setEvaluationResult(res);

      storageService.saveTestResult({
        id: 'res-sp-' + Date.now(),
        date: new Date().toLocaleDateString(),
        module: 'sprechen',
        teil: activeTeil,
        testNumber: currentScenario.testNumber,
        score: res.totalScore,
        maxScore: 100,
        percentage: res.totalScore,
        passed: res.passed,
        timeSpentSeconds: 180,
      });

      if (res.passed) {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      }
    } catch (err: any) {
      setEvalError(err.message || 'Fehler bei der Sprechbewertung.');
    } finally {
      setIsEvaluating(false);
    }
  };

  if (!currentScenario) {
    return <div className="p-8 text-center text-slate-500">Lade Sprechszenarien...</div>;
  }

  return (
    <div className={`space-y-6 ${isAr ? 'text-right' : 'text-left'}`}>
      {/* Top Controller Bar */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Teil Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0">
          {[1, 2, 3].map((t) => (
            <button
              key={t}
              onClick={() => {
                setActiveTeil(t as any);
                setSelectedScenarioIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTeil === t
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{isAr ? `الشفوي ${t}` : `Sprechen Teil ${t}`}</span>
              <span className="block text-[10px] font-normal opacity-80">
                {t === 1 && (isAr ? 'تخطيط مشترك' : 'Gemeinsam planen')}
                {t === 2 && (isAr ? 'تقديم عرض 5 شرائح' : 'Thema präsentieren')}
                {t === 3 && (isAr ? 'تعقيب وأسئلة' : 'Rückmeldung & Frage')}
              </span>
            </button>
          ))}
        </div>

        {/* Preparation Timer */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-slate-700">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>
              {Math.floor(prepTimeLeft / 60)}:{(prepTimeLeft % 60).toString().padStart(2, '0')}
            </span>
            <button
              onClick={() => setPrepTimerRunning(!prepTimerRunning)}
              className="text-[10px] px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 cursor-pointer"
            >
              {prepTimerRunning ? (isAr ? 'إيقاف' : 'Pause') : (isAr ? 'بدء التحضير' : 'Vorbereitung')}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile-only Segmented Switcher */}
      <div className="lg:hidden flex items-center bg-slate-200/80 p-1 rounded-2xl text-xs font-bold w-full shadow-inner">
        <button
          onClick={() => setMobileTab('mic')}
          className={`flex-1 py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            mobileTab === 'mic' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Mic className="w-3.5 h-3.5 text-rose-500" />
          <span>{isAr ? 'التسجيل والشريك' : 'Aufnahme & Partner'}</span>
        </button>
        <button
          onClick={() => setMobileTab('prompt')}
          className={`flex-1 py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            mobileTab === 'prompt' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-blue-500" />
          <span>{activeTeil === 2 ? (isAr ? 'الشرائح الـ 5' : 'Folien') : (isAr ? 'النقاط' : 'Leitpunkte')}</span>
        </button>
        <button
          onClick={() => setMobileTab('both')}
          className={`flex-1 py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            mobileTab === 'both' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>{isAr ? 'كلاهما' : 'Beides'}</span>
        </button>
      </div>

      {/* Main Two-Column View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Speaking Prompt & Visual Slides Deck (6 Cols) */}
        <div
          className={`lg:col-span-6 space-y-4 ${
            mobileTab === 'mic' ? 'hidden lg:block' : 'block'
          }`}
        >
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-black text-xs">
                {currentScenario.teil}
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">
                {isAr ? currentScenario.titleAr : currentScenario.titleDe}
              </h3>
            </div>

            {/* Situation Context */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 leading-relaxed">
              <span className="font-bold text-slate-500 uppercase tracking-wider block text-[10px] mb-1">
                {isAr ? 'مهمة الامتحان:' : 'Aufgabenstellung:'}
              </span>
              <p className="font-medium text-slate-900 mb-1">{currentScenario.situationDe}</p>
              <p className="text-slate-600 font-arabic pt-1 border-t border-slate-200" dir="rtl">
                {currentScenario.situationAr}
              </p>
            </div>

            {/* If Teil 2: Visual 5-Slide Presentation Deck */}
            {activeTeil === 2 && currentScenario.slides && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-blue-600" />
                    <span>{isAr ? 'شرائح العرض الخمس (5 Folien):' : 'Präsentationsfolien:'}</span>
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      disabled={currentSlideIndex === 0}
                      onClick={() => setCurrentSlideIndex((i) => Math.max(0, i - 1))}
                      className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-30"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono font-bold px-2">
                      {currentSlideIndex + 1} / {currentScenario.slides.length}
                    </span>
                    <button
                      disabled={currentSlideIndex === currentScenario.slides.length - 1}
                      onClick={() => setCurrentSlideIndex((i) => Math.min(currentScenario.slides!.length - 1, i + 1))}
                      className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-30"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Active Slide Card */}
                {currentScenario.slides[currentSlideIndex] && (
                  <div className="p-5 rounded-2xl bg-gradient-to-tr from-blue-900 to-indigo-900 text-white shadow-md space-y-3">
                    <div className="flex items-center justify-between text-xs text-blue-300 font-bold">
                      <span>Folie {currentScenario.slides[currentSlideIndex].folieNumber}</span>
                      <span>{isAr ? currentScenario.slides[currentSlideIndex].titleAr : currentScenario.slides[currentSlideIndex].titleDe}</span>
                    </div>
                    <h4 className="text-lg font-black tracking-tight text-white">
                      {currentScenario.slides[currentSlideIndex].titleDe}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-blue-100 list-disc list-inside">
                      {currentScenario.slides[currentSlideIndex].subPointsDe.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Leitpunkte List (for Teil 1 & 3) */}
            {activeTeil !== 2 && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-900 block">
                  {isAr ? 'النقاط التي يجب التحدث حولها والتفاوض عليها:' : 'Leitpunkte für das Gespräch:'}
                </span>
                {currentScenario.leitpunkteDe.map((lp, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800"
                  >
                    <p className="font-semibold text-slate-900">• {lp}</p>
                    <p className="text-[11px] text-slate-500 font-arabic mt-0.5" dir="rtl">
                      {currentScenario.leitpunkteAr[idx]}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Model Response Toggle */}
            <div className="pt-2 border-t border-slate-100">
              <details className="text-xs group">
                <summary className="font-bold text-blue-600 hover:text-blue-800 cursor-pointer flex items-center gap-1.5 py-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isAr ? 'استعراض إجابة شفوية نموذجية (B1)' : 'Muster-Redebeitrag auf B1-Niveau ansehen'}</span>
                </summary>
                <div className="mt-2 p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-slate-800 leading-relaxed font-sans whitespace-pre-line">
                  {currentScenario.modelSpokenAnswerDe}
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Right Column: Microphone Recording, Interactive Partner & AI Evaluation (6 Cols) */}
        <div
          className={`lg:col-span-6 space-y-5 ${
            mobileTab === 'prompt' ? 'hidden lg:block' : 'block'
          }`}
        >
          {/* Microphone & Recording Card */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mic className="w-5 h-5 text-rose-600" />
                <h3 className="font-bold text-slate-900 text-base">
                  {isAr ? 'تسجيل الصوت المباشر والميكروفون' : 'Sprachaufnahme & Mikrofon'}
                </h3>
              </div>
              {isRecording && (
                <span className="flex items-center gap-1.5 text-xs font-bold text-red-600 animate-pulse">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  {isAr ? 'جاري التسجيل...' : 'Aufnahme läuft...'}
                </span>
              )}
            </div>

            {/* Decibel / Volume Visualizer Bar */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-600 transition-all duration-75 rounded-full"
                style={{ width: `${Math.max(5, micVolume)}%` }}
              />
            </div>

            {/* Mic Button & Playback */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleToggleRecording}
                className={`flex-1 py-3.5 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
                  isRecording
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-500/25 animate-pulse'
                    : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'
                }`}
              >
                {isRecording ? (
                  <>
                    <MicOff className="w-4 h-4" />
                    <span>{isAr ? 'إيقاف التسجيل' : 'Aufnahme stoppen'}</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-4 h-4" />
                    <span>{isAr ? 'بدء التسجيل الصوتي والتحدث' : 'Sprechen starten'}</span>
                  </>
                )}
              </button>

              {/* Play Recorded Audio */}
              {recordedAudioUrl && (
                <audio controls src={recordedAudioUrl} className="h-10 flex-1 max-w-[220px]" />
              )}
            </div>

            {/* Live Transcript Field */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-700 block">
                {isAr ? 'النص المنطوق المكتوب تلقائياً (Transkript):' : 'Automatische Transkription:'}
              </span>
              <textarea
                rows={4}
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                placeholder={isAr ? 'سوف يظهر كلامك هنا تلقائياً أثناء التحدث، أو يمكنك تعديله وكتابته...' : 'Dein gesprochener Text erscheint hier automatisch...'}
                className="w-full p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-800 text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Interactive Partner Mode (Teil 1 & 3) */}
            {activeTeil !== 2 && (
              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  disabled={!transcript.trim() || partnerLoading}
                  onClick={handleSendUtteranceToPartner}
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {partnerLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <MessageSquare className="w-4 h-4" />
                  )}
                  <span>{isAr ? 'إرسال لشريك الامتحان والرد الصوتي' : 'An Prüfungspartner senden & antworten'}</span>
                </button>
              </div>
            )}

            {/* Evaluate Speaking Button */}
            <button
              disabled={isEvaluating}
              onClick={handleEvaluateSpeaking}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-extrabold text-xs shadow-lg shadow-rose-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isEvaluating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{isAr ? 'جاري تقييم النطق والقواعد شفوياً...' : 'ÖSD Sprechbewertung läuft...'}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{isAr ? 'تقييم الأداء الشفوي بالذكاء الاصطناعي (ÖSD Sprechen Report)' : 'Mündliche Leistung mit KI bewerten'}</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Partner Chat Stream (for Teil 1 & 3) */}
          {dialogueHistory.length > 0 && (
            <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-indigo-600" />
                  <span>{isAr ? 'حوار الامتحان مع الشريك' : 'Prüfungsdialog'}</span>
                </span>
                {partnerTip && (
                  <span className="text-[11px] text-indigo-600 font-semibold" title={partnerTip.ar}>
                    💡 {partnerTip.de}
                  </span>
                )}
              </div>

              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {dialogueHistory.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl text-xs ${
                      item.speaker === 'partner'
                        ? 'bg-indigo-50 border border-indigo-100 text-indigo-950 mr-6'
                        : 'bg-blue-600 text-white ml-6 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold mb-1 opacity-80 text-[10px]">
                      <span>{item.speaker === 'partner' ? (isAr ? 'شريك الامتحان (Partner)' : 'Prüfungspartner') : (isAr ? 'أنت (Kandidat)' : 'Du')}</span>
                      {item.speaker === 'partner' && (
                        <button
                          onClick={() => audioService.speakPhrase(item.text, 'de')}
                          title="Nochmal anhören"
                          className="hover:text-blue-600"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    <p className="leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Speaking Evaluation Result Modal Card */}
          {evaluationResult && (
            <div className="p-6 rounded-3xl bg-white border border-rose-200 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-md ${
                      evaluationResult.passed ? 'bg-emerald-600' : 'bg-rose-600'
                    }`}
                  >
                    {evaluationResult.totalScore}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">
                      {isAr ? 'نتيجة تقييم المحادثة الشفوية (ÖSD)' : 'ÖSD Mündliches Prüfungsergebnis'}
                    </h4>
                    <span
                      className={`text-xs font-bold ${
                        evaluationResult.passed ? 'text-emerald-700' : 'text-rose-700'
                      }`}
                    >
                      {evaluationResult.passed ? 'Bestanden (>=60 Punkte)' : 'Nicht bestanden'}
                    </span>
                  </div>
                </div>
              </div>

              {/* 5 Criteria Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(evaluationResult.criteria).map(([k, c]: any) => (
                  <div key={k} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-slate-800 capitalize block mb-0.5">{k}</span>
                    <span className="text-rose-600 font-extrabold block mb-1">
                      {c.score} / {c.maxScore} Pkt.
                    </span>
                    <p className="text-[11px] text-slate-600 leading-tight">{c.commentDe}</p>
                  </div>
                ))}
              </div>

              {/* Spoken Mistakes */}
              {evaluationResult.mistakes && evaluationResult.mistakes.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-900 block">
                    {isAr ? 'أخطاء منطوقة مع التصحيح والشرح بالعربية:' : 'Gesprochene Fehler & arabische Erklärung:'}
                  </span>
                  {evaluationResult.mistakes.map((m, mIdx) => (
                    <div key={mIdx} className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="line-through text-rose-800 font-mono">{m.spoken}</span>
                        <span>→</span>
                        <span className="font-bold text-emerald-700 font-mono">{m.correction}</span>
                      </div>
                      <p className="text-slate-700">{m.explanationDe}</p>
                      <p className="text-slate-900 font-arabic text-[11px]" dir="rtl">
                        💡 {m.explanationAr}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Floating Mobile Switcher Pill */}
      <div className="lg:hidden fixed bottom-16 left-4 right-4 z-30 flex justify-center pointer-events-none">
        <button
          onClick={() => setMobileTab(mobileTab === 'mic' ? 'prompt' : 'mic')}
          className="pointer-events-auto shadow-2xl px-5 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-800 text-white text-xs font-bold border border-slate-700 flex items-center gap-2 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
        >
          {mobileTab === 'mic' ? (
            <>
              <Layers className="w-4 h-4 text-blue-400" />
              <span>{activeTeil === 2 ? (isAr ? 'عرض الشرائح' : 'Folien anzeigen') : (isAr ? 'عرض النقاط' : 'Punkte anzeigen')}</span>
            </>
          ) : (
            <>
              <Mic className="w-4 h-4 text-rose-400" />
              <span>{isAr ? 'الرجوع للميكروفون' : 'Zum Mikrofon'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
