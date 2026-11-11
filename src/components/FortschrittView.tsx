import React from 'react';
import { Language, TestResult, ActiveTab } from '../types';
import {
  TrendingUp,
  Award,
  CheckCircle2,
  XCircle,
  Clock,
  BookOpen,
  Headphones,
  PenTool,
  Mic,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';

interface FortschrittViewProps {
  language: Language;
  results: TestResult[];
  setActiveTab: (tab: ActiveTab) => void;
}

export const FortschrittView: React.FC<FortschrittViewProps> = ({
  language,
  results,
  setActiveTab,
}) => {
  const isAr = language === 'ar';

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

  // Overall readiness estimate
  const overallAvg =
    results.length > 0
      ? Math.round((lesenAvg + hoerenAvg + schreibenAvg + sprechenAvg) / 4)
      : 0;

  return (
    <div className={`space-y-6 ${isAr ? 'text-right' : 'text-left'}`}>
      {/* Top Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
            <TrendingUp className="w-4 h-4" />
            <span>{isAr ? 'سجل الأداء ومستوى الجاهزية' : 'Prüfungsfortschritt & Readiness'}</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900">
            {isAr ? 'إحصائيات تقدمك نحو شهادة ÖSD B1' : 'Dein Weg zum ÖSD B1 Zertifikat'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {isAr
              ? 'تتبع دقيق ومباشر لنتائجك الفعلية في جميع أقسام الامتحان لمعرفة مدى جاهزيتك للامتحان الرسمي.'
              : 'Echte Auswertungen deiner Übungsprüfungen und historische Leistungsdaten nach ÖSD-Maßstäben.'}
          </p>
        </div>

        {/* Readiness Badge */}
        <div className="flex items-center gap-3 bg-slate-900 text-white p-4 rounded-2xl shadow-lg">
          <div className="text-center">
            <span className="text-2xl font-black text-amber-400 block">{overallAvg}%</span>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
              {isAr ? 'مؤشر الجاهزية' : 'B1 Readiness'}
            </span>
          </div>
        </div>
      </div>

      {/* Module Readiness Progress Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>{isAr ? 'القراءة (Lesen)' : 'Lesen'}</span>
            </div>
            <span className="text-xs font-bold text-slate-500">{lesenAvg}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${lesenAvg >= 60 ? 'bg-emerald-500' : 'bg-amber-500'}`}
              style={{ width: `${Math.min(lesenAvg || 5, 100)}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>{lesenResults.length} {isAr ? 'اختبارات منجزة' : 'abgeschlossen'}</span>
            <span className={lesenAvg >= 60 ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
              {lesenAvg >= 60 ? (isAr ? 'ناجح' : 'Bestanden') : (isAr ? 'تحت 60%' : '< 60%')}
            </span>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Headphones className="w-4 h-4 text-blue-600" />
              <span>{isAr ? 'الاستماع (Hören)' : 'Hören'}</span>
            </div>
            <span className="text-xs font-bold text-slate-500">{hoerenAvg}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${hoerenAvg >= 60 ? 'bg-blue-500' : 'bg-amber-500'}`}
              style={{ width: `${Math.min(hoerenAvg || 5, 100)}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>{hoerenResults.length} {isAr ? 'اختبارات منجزة' : 'abgeschlossen'}</span>
            <span className={hoerenAvg >= 60 ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
              {hoerenAvg >= 60 ? (isAr ? 'ناجح' : 'Bestanden') : (isAr ? 'تحت 60%' : '< 60%')}
            </span>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <PenTool className="w-4 h-4 text-violet-600" />
              <span>{isAr ? 'الكتابة (Schreiben)' : 'Schreiben'}</span>
            </div>
            <span className="text-xs font-bold text-slate-500">{schreibenAvg}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${schreibenAvg >= 60 ? 'bg-violet-500' : 'bg-amber-500'}`}
              style={{ width: `${Math.min(schreibenAvg || 5, 100)}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>{schreibenResults.length} {isAr ? 'نصوص مقيمة' : 'bewertet'}</span>
            <span className={schreibenAvg >= 60 ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
              {schreibenAvg >= 60 ? (isAr ? 'ناجح' : 'Bestanden') : (isAr ? 'تحت 60%' : '< 60%')}
            </span>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Mic className="w-4 h-4 text-rose-600" />
              <span>{isAr ? 'المحادثة (Sprechen)' : 'Sprechen'}</span>
            </div>
            <span className="text-xs font-bold text-slate-500">{sprechenAvg}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${sprechenAvg >= 60 ? 'bg-rose-500' : 'bg-amber-500'}`}
              style={{ width: `${Math.min(sprechenAvg || 5, 100)}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>{sprechenResults.length} {isAr ? 'جلسات مقيمة' : 'bewertet'}</span>
            <span className={sprechenAvg >= 60 ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
              {sprechenAvg >= 60 ? (isAr ? 'ناجح' : 'Bestanden') : (isAr ? 'تحت 60%' : '< 60%')}
            </span>
          </div>
        </div>
      </div>

      {/* History of Completed Tests */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <h3 className="font-extrabold text-slate-900 text-base">
          {isAr ? 'سجل المحاولات والنتائج السابقة' : 'Historie der Testversuche'}
        </h3>

        {results.length > 0 ? (
          <div className="space-y-2.5">
            {results.map((r) => (
              <div
                key={r.id}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-xs ${
                      r.passed ? 'bg-emerald-600' : 'bg-rose-600'
                    }`}
                  >
                    {r.percentage}%
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 capitalize block">
                      Modul {r.module} {r.teil ? `– Teil ${r.teil}` : ''} {r.testNumber ? `(Test ${r.testNumber})` : ''}
                    </span>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {r.date} • {r.score} / {r.maxScore} Pkt.
                    </span>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    r.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {r.passed ? (isAr ? 'ناجح' : 'Bestanden') : (isAr ? 'راسب' : 'Nicht bestanden')}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-slate-400 text-xs">
            {isAr ? 'لم تقم بحل أي اختبارات بعد. ابدأ بحل أحد الأقسام لتسجيل تقدمك.' : 'Noch keine Testergebnisse dokumentiert.'}
          </div>
        )}
      </div>
    </div>
  );
};
