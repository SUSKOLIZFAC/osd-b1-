import React from 'react';
import { ActiveTab, Language, TestResult } from '../types';
import {
  BookOpen,
  Headphones,
  PenTool,
  Mic,
  Award,
  Sparkles,
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  Volume2,
  Clock,
  Layers,
  GraduationCap,
  BookmarkCheck,
  CheckCircle2
} from 'lucide-react';

interface DashboardProps {
  setActiveTab: (tab: ActiveTab) => void;
  language: Language;
  results: TestResult[];
  mistakeCount: number;
}

export const Dashboard: React.FC<DashboardProps> = ({
  setActiveTab,
  language,
  results,
  mistakeCount,
}) => {
  const isAr = language === 'ar';

  // Calculate real metrics from user history
  const lesenResults = results.filter((r) => r.module === 'lesen');
  const hoerenResults = results.filter((r) => r.module === 'hoeren');
  const schreibenResults = results.filter((r) => r.module === 'schreiben');
  const sprechenResults = results.filter((r) => r.module === 'sprechen');

  const calcAvg = (list: TestResult[]) => {
    if (list.length === 0) return 0;
    const sum = list.reduce((acc, curr) => acc + curr.percentage, 0);
    return Math.round(sum / list.length);
  };

  const lesenAvg = calcAvg(lesenResults);
  const hoerenAvg = calcAvg(hoerenResults);
  const schreibenAvg = calcAvg(schreibenResults);
  const sprechenAvg = calcAvg(sprechenResults);

  const totalExams = results.length;
  const passedExams = results.filter((r) => r.passed).length;

  return (
    <div className={`space-y-8 ${isAr ? 'text-right' : 'text-left'}`}>
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white p-8 md:p-10 shadow-2xl border border-indigo-800/40">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
            <GraduationCap className="w-4 h-4" />
            <span>{isAr ? 'المنصة الرسمية المتقدمة لشهادة ÖSD B1' : 'Offizielle ÖSD Zertifikat B1 Intensivvorbereitung'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {isAr ? (
              <>
                اجتز امتحان <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-200">ÖSD B1</span> بتفوق وثقة
              </>
            ) : (
              <>
                Bestehe das <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-200">ÖSD B1 Zertifikat</span> mit maximaler Sicherheit
              </>
            )}
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {isAr
              ? 'نظام تدريب ذكي بمستوى B1 HARD مبني بدقة على أحدث كتب ونماذج الامتحانات المعتمدة (Zertifikat B1 neu, Arena B1, So geht\'s noch besser). تدرب على القراءة، الاستماع مع صوتيات ناطقة، تصحيح الكتابة بالذكاء الاصطناعي، ومحاكاة المحادثة الشفوية مع شرح كامل بالعربية.'
              : 'Intensives B1-Hard Training auf Basis der vier Standard-Vorbereitungsbücher (Zertifikat B1 neu, Arena B1, So geht\'s noch besser). Alle 4 Prüfungsmodule mit Audio, KI-Schreibkorrektur nach ÖSD-Kriterien und zweisprachigen Erklärungen (DE ↔ AR).'}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setActiveTab('mock-pruefung')}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>{isAr ? 'بدء امتحان تجريبي كامل (Mock Exam)' : 'Vollständige Prüfungssimulation starten'}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${isAr ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </button>
            <button
              onClick={() => setActiveTab('lesen')}
              className="px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>{isAr ? 'تدريب القراءة (Lesen)' : 'Leseverstehen üben'}</span>
            </button>
          </div>
        </div>

        {/* Decorative background badges */}
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-12 hidden lg:flex flex-col items-end gap-2 text-white/10 font-black text-8xl select-none">
          ZB1
        </div>
      </div>

      {/* Real Statistics & Pass/Fail Criteria Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">{isAr ? 'القراءة' : 'Lesen'}</span>
            <BookOpen className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{lesenAvg}%</span>
            <span className="text-xs font-medium text-slate-500">
              {lesenResults.length} {isAr ? 'محاولات' : 'Tests'}
            </span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                lesenAvg >= 60 ? 'bg-emerald-500' : 'bg-amber-500'
              }`}
              style={{ width: `${Math.min(lesenAvg || 5, 100)}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            {isAr ? 'الحد الأدنى للنجاح: 60% (18/30)' : 'Bestehensgrenze: 60% (18/30)'}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">{isAr ? 'الاستماع' : 'Hören'}</span>
            <Headphones className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{hoerenAvg}%</span>
            <span className="text-xs font-medium text-slate-500">
              {hoerenResults.length} {isAr ? 'محاولات' : 'Tests'}
            </span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                hoerenAvg >= 60 ? 'bg-blue-500' : 'bg-amber-500'
              }`}
              style={{ width: `${Math.min(hoerenAvg || 5, 100)}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            {isAr ? 'صوتيات ناطقة حقيقية' : 'Echte Playback-Audios'}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">{isAr ? 'الكتابة' : 'Schreiben'}</span>
            <PenTool className="w-4 h-4 text-violet-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{schreibenAvg}%</span>
            <span className="text-xs font-medium text-slate-500">
              {schreibenResults.length} {isAr ? 'نصوص' : 'Texte'}
            </span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                schreibenAvg >= 60 ? 'bg-violet-500' : 'bg-amber-500'
              }`}
              style={{ width: `${Math.min(schreibenAvg || 5, 100)}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            {isAr ? 'تصحيح ذكي بمعايير ÖSD' : 'ÖSD-Kriterien KI-Bewertung'}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">{isAr ? 'المحادثة' : 'Sprechen'}</span>
            <Mic className="w-4 h-4 text-rose-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{sprechenAvg}%</span>
            <span className="text-xs font-medium text-slate-500">
              {sprechenResults.length} {isAr ? 'جلسات' : 'Sessions'}
            </span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                sprechenAvg >= 60 ? 'bg-rose-500' : 'bg-amber-500'
              }`}
              style={{ width: `${Math.min(sprechenAvg || 5, 100)}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            {isAr ? 'تسجيل ومحاكاة شريك الامتحان' : 'Prüfungspartner & Mic'}
          </span>
        </div>
      </div>

      {/* Mistake Alert Banner if errors logged */}
      {mistakeCount > 0 && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
              !
            </div>
            <div>
              <h4 className="font-bold text-amber-900 text-sm">
                {isAr ? `لديك ${mistakeCount} أخطاء مسجلة في بنك الأخطاء` : `${mistakeCount} dokumentierte Fehler im Fehlerspeicher`}
              </h4>
              <p className="text-xs text-amber-700">
                {isAr
                  ? 'يقوم المعلم الذكي بتحليل أخطائك المتكررة في القواعد والمفردات وتوليد تدريبات علاجية مخصصة لك.'
                  : 'Der KI-Personal-Tutor analysiert deine Schwachstellen und generiert zielgenaue B1-Übungen.'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('meine-fehler')}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            {isAr ? 'مراجعة الأخطاء وتوليد تدريب' : 'Fehler beheben'}
          </button>
        </div>
      )}

      {/* Primary 4 Examination Modules Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">
            {isAr ? 'وحدات الامتحان الأربعة (Offizielle ÖSD-Module)' : 'Die 4 Prüfungsmodule'}
          </h2>
          <span className="text-xs text-slate-500">
            {isAr ? 'المدة الكلية: 180 دقيقة (كتابي وشفوي)' : 'Gesamtdauer: ca. 180 Min.'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lesen Module */}
          <div
            onClick={() => setActiveTab('lesen')}
            className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> 65 Min
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
              {isAr ? 'وحدة القراءة (Modul Lesen)' : 'Modul Lesen'}
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
              {isAr
                ? '5 أجزاء رسمية: مدونات، مقالات صحفية، مطابقة 10 إعلانات مع مواقف، آراء القراء (نعم/لا)، واللوائح التنظيمية. مع تظليل الدليل في النص وشرح الإجابات بالعربية.'
                : '5 offizielle Teile: Blog-Beiträge, Pressetexte, Anzeigenzuordnung, Leserbriefe & Hausordnungen. Mit interaktiver Textstellensuche und detaillierten Erklärungen.'}
            </p>
            <div className="flex items-center justify-between text-xs text-emerald-600 font-semibold pt-3 border-t border-slate-100">
              <span>{isAr ? '15+ نماذج كاملة لكل جزء' : '15+ Sets pro Teil'}</span>
              <span className="flex items-center gap-1">
                {isAr ? 'بدء التدريب' : 'Starten'} →
              </span>
            </div>
          </div>

          {/* Hören Module */}
          <div
            onClick={() => setActiveTab('hoeren')}
            className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> ca. 40 Min
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
              {isAr ? 'وحدة الاستماع (Modul Hören)' : 'Modul Hören'}
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
              {isAr
                ? '4 أجزاء رسمية مع صوتيات ناطقة حقيقية (ألماني ونمساوي وسويسري)، تحكم بالسرعة ونغمات الامتحان، ونصوص مكتوبة مع شرح الكلمات الصعبة بالعربية.'
                : '4 offizielle Teile mit echtem Audio-Player, Standard- und österreichischen Sprechern, Geschwindigkeitsregler und interaktivem Transkript.'}
            </p>
            <div className="flex items-center justify-between text-xs text-blue-600 font-semibold pt-3 border-t border-slate-100">
              <span>{isAr ? 'صوتيات حقيقية لجميع الأجزاء' : 'Echte Playback-Audiodateien'}</span>
              <span className="flex items-center gap-1">
                {isAr ? 'استماع وتدريب' : 'Anhören'} →
              </span>
            </div>
          </div>

          {/* Schreiben Module */}
          <div
            onClick={() => setActiveTab('schreiben')}
            className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-violet-300 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PenTool className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> 60 Min
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
              {isAr ? 'وحدة الكتابة (Modul Schreiben)' : 'Modul Schreiben'}
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
              {isAr
                ? '3 مهمات رسمية: إيميل غير رسمي (80 كلمة)، تعليق منتدى (80 كلمة)، واعتذار رسمي (40 كلمة). محرر نصوص ذكي مع عداد كلمات وتصحيح تفصيلي فوري بالذكاء الاصطناعي.'
                : '3 offizielle Aufgaben: Informelle E-Mail, Forumsbeitrag & formelle Entschuldigung. Mit Live-Wortzähler und detaillierter KI-Korrektur nach ÖSD-Kriterien.'}
            </p>
            <div className="flex items-center justify-between text-xs text-violet-600 font-semibold pt-3 border-t border-slate-100">
              <span>{isAr ? 'مصحح ذكي بنظام النقاط الرسمي' : 'ÖSD Bewertungs-Engine'}</span>
              <span className="flex items-center gap-1">
                {isAr ? 'كتابة وتصحيح' : 'Schreiben'} →
              </span>
            </div>
          </div>

          {/* Sprechen Module */}
          <div
            onClick={() => setActiveTab('sprechen')}
            className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mic className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> ca. 15 Min
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
              {isAr ? 'وحدة المحادثة (Modul Sprechen)' : 'Modul Sprechen'}
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
              {isAr
                ? '3 أجزاء شفوية: التخطيط المشترك، تقديم عرض عبر 5 شرائح، والتعقيب وطرح الأسئلة. تحدث بالميكروفون مع شريك امتحان ذكي ناطق واحصل على تقييم نطق وقواعد فوري.'
                : '3 mündliche Teile: Planen mit Partner, 5-Folien-Präsentation & Feedback/Fragen. Mit Mikrofon-Aufnahme, Audio-Wellenform und interaktivem KI-Prüfer.'}
            </p>
            <div className="flex items-center justify-between text-xs text-rose-600 font-semibold pt-3 border-t border-slate-100">
              <span>{isAr ? 'شريك محادثة تفاعلي ناطق' : 'Interaktiver Sprechpartner'}</span>
              <span className="flex items-center gap-1">
                {isAr ? 'بدء التحدث' : 'Sprechen'} →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Supplementary Knowledge Centers (Grammatik, Wortschatz, Redemittel) */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          {isAr ? 'مراكز التعلم المتخصصة (B1 Hard)' : 'Spezialisierte Lernzentren'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => setActiveTab('grammatik')}
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <BookmarkCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-1">
              {isAr ? 'مركز القواعد (17 موضوعاً)' : 'Grammatik-Zentrum (17 Themen)'}
            </h4>
            <p className="text-xs text-slate-500 mb-3">
              {isAr
                ? 'شرح كامل بالعربية للقواعد الصعبة: Wechselpräpositionen، ترتيب TeKaMoLo، جمل الوصل، Konjunktiv II، والمبني للمجهول مع 15+ تمريناً لكل موضوع.'
                : 'Ausführliche deutsche und arabische Erklärungen für alle B1-Knackpunkte mit 15+ Übungen pro Thema.'}
            </p>
            <span className="text-xs font-semibold text-indigo-600 flex items-center gap-1">
              {isAr ? 'استعراض القواعد والتمارين' : 'Themen ansehen'} →
            </span>
          </div>

          <div
            onClick={() => setActiveTab('wortschatz')}
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-1">
              {isAr ? 'بنك المفردات (15 مجالاً)' : 'Wortschatz-Trainer (15 Themen)'}
            </h4>
            <p className="text-xs text-slate-500 mb-3">
              {isAr
                ? 'مفردات B1 Hard المستخرجة من الكتب الأربعة مع أداة التعريف، الجمع، جملة نموذجية، بطاقات فلاش ثلاثية الأبعاد و4 أنماط اختبارات مختلفة.'
                : 'Thematischer B1-Wortschatz aus den Büchern mit Artikeln, Plural, Beispielsätzen, 3D-Flashcards und 4 Quiz-Modi.'}
            </p>
            <span className="text-xs font-semibold text-sky-600 flex items-center gap-1">
              {isAr ? 'تدريب المفردات والبطاقات' : 'Vokabeln lernen'} →
            </span>
          </div>

          <div
            onClick={() => setActiveTab('redemittel')}
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-1">
              {isAr ? 'مكتبة تعبيرات الامتحان (Redemittel)' : 'Redemittel-Bibliothek'}
            </h4>
            <p className="text-xs text-slate-500 mb-3">
              {isAr
                ? 'أقوى التراكيب الجاهزة للكتابة والمحادثة: إبداء الرأي، التعليل، الرفض المهذب، شرائح العرض الخمس مع النطق الصوتي والترجمة.'
                : 'Unverzichtbare Wendungen für E-Mails, Forumsbeiträge und Präsentationen mit Audio und Register-Zuordnung.'}
            </p>
            <span className="text-xs font-semibold text-teal-600 flex items-center gap-1">
              {isAr ? 'استعراض التعبيرات' : 'Redemittel üben'} →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
