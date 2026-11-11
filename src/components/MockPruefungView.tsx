import React, { useState } from 'react';
import { Language, ExamModule, TestResult } from '../types';
import { ALL_LESEN_SETS } from '../data/lesenData';
import { HOEREN_DATA } from '../data/hoerenData';
import { SCHREIBEN_TASKS } from '../data/schreibenData';
import { SPRECHEN_SCENARIOS } from '../data/sprechenData';
import { storageService } from '../services/storageService';
import confetti from 'canvas-confetti';
import {
  Award,
  Clock,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  FileCheck,
  RotateCcw,
  BookOpen,
  Headphones,
  PenTool,
  Mic,
  Printer,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface MockPruefungViewProps {
  language: Language;
  onOpenModule: (mod: ExamModule) => void;
}

export const MockPruefungView: React.FC<MockPruefungViewProps> = ({ language, onOpenModule }) => {
  const isAr = language === 'ar';

  const [selectedFormat, setSelectedFormat] = useState<
    'voll' | 'schriftlich' | 'muendlich' | 'einzeln'
  >('schriftlich');
  const [selectedSingleModule, setSelectedSingleModule] = useState<ExamModule>('lesen');

  // Exam simulation completed report state
  const [examFinished, setExamFinished] = useState<boolean>(false);
  const [candidateName, setCandidateName] = useState<string>('Ahmed Bahloul');
  const [simulatedResults, setSimulatedResults] = useState<{
    lesen: { score: number; maxScore: number; ergebnisPunkte: number; passed: boolean };
    hoeren: { score: number; maxScore: number; ergebnisPunkte: number; passed: boolean };
    schreiben: { score: number; maxScore: number; passed: boolean };
    sprechen: { score: number; maxScore: number; passed: boolean };
  }>({
    lesen: { score: 23, maxScore: 30, ergebnisPunkte: 77, passed: true },
    hoeren: { score: 21, maxScore: 30, ergebnisPunkte: 70, passed: true },
    schreiben: { score: 78, maxScore: 100, passed: true },
    sprechen: { score: 82, maxScore: 100, passed: true },
  });

  // Official ÖSD points conversion table for Lesen and Hören (30 raw points -> 100 points)
  const ocsdConversionMap: Record<number, number> = {
    30: 100, 29: 97, 28: 93, 27: 90, 26: 87, 25: 83, 24: 80, 23: 77,
    22: 73, 21: 70, 20: 67, 19: 63, 18: 60, // 18 is minimum pass (60%)
    17: 57, 16: 53, 15: 50, 14: 47, 13: 43, 12: 40, 11: 37, 10: 33,
    9: 30, 8: 27, 7: 23, 6: 20, 5: 17, 4: 13, 3: 10, 2: 7, 1: 3, 0: 0
  };

  const handleStartExam = () => {
    if (selectedFormat === 'einzeln') {
      onOpenModule(selectedSingleModule);
      return;
    }
    // Launch full simulation
    onOpenModule('lesen');
  };

  const handlePrint = () => {
    window.print();
  };

  const allPassed =
    simulatedResults.lesen.passed &&
    simulatedResults.hoeren.passed &&
    simulatedResults.schreiben.passed &&
    simulatedResults.sprechen.passed;

  return (
    <div className={`space-y-8 ${isAr ? 'text-right' : 'text-left'}`}>
      {/* Top Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
            <Award className="w-4 h-4" />
            <span>{isAr ? 'محاكاة الامتحان الرسمي الكامل' : 'ÖSD B1 Offizielle Prüfungssimulation'}</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900">
            {isAr ? 'الامتحان التجريبي الكامل (Mock Exam)' : 'Vollständige Prüfungssimulation'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {isAr
              ? 'محاكاة واقعية تطابق ظروف وتوقيت وقواعد امتحان ÖSD B1 للبالغين، مع جدول النقاط الرسمي وتقييم النجاح (60%).'
              : 'Offizielles Zeitregime, strenge Prüfungsbedingungen, offizielle Punkteumrechnungstabelle und Zertifikatsbericht.'}
          </p>
        </div>

        {/* Print Button if report active */}
        {examFinished && (
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold flex items-center gap-2 shadow-sm hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>{isAr ? 'طباعة شهادة النتيجة' : 'Zertifikatsbericht drucken'}</span>
          </button>
        )}
      </div>

      {/* Format Selection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            id: 'schriftlich' as const,
            titleDe: 'Schriftliche Prüfung',
            titleAr: 'الامتحان الكتابي كاملاً',
            time: '165 Min',
            modules: 'Lesen + Hören + Schreiben',
            descDe: 'Lesen (65 Min), Hören (40 Min), Schreiben (60 Min)',
            descAr: 'القراءة (65 د) + الاستماع (40 د) + الكتابة (60 د)',
          },
          {
            id: 'muendlich' as const,
            titleDe: 'Mündliche Prüfung',
            titleAr: 'الامتحان الشفوي كاملاً',
            time: '15 Min',
            modules: 'Sprechen Teil 1–3',
            descDe: 'Planen, 5-Folien Präsentation & Fragen',
            descAr: 'التخطيط، عرض 5 شرائح والأسئلة والتعقيب',
          },
          {
            id: 'voll' as const,
            titleDe: 'Gesamtprüfung (4 Module)',
            titleAr: 'الامتحان الشامل (4 وحدات)',
            time: 'ca. 180 Min',
            modules: 'Alle 4 Prüfungsmodule',
            descDe: 'Vollständige Simulation aller Prüfungsteile',
            descAr: 'محاكاة شاملة لكافة الأقسام الكتابية والشفوية',
          },
          {
            id: 'einzeln' as const,
            titleDe: 'Einzelmodul auswählen',
            titleAr: 'اختيار وحدة واحدة محددة',
            time: 'Variabel',
            modules: 'Ein Modul nach Wahl',
            descDe: 'Gezieltes Durchführen eines Moduls',
            descAr: 'التركيز على مهارة واحدة محددة',
          },
        ].map((fmt) => (
          <div
            key={fmt.id}
            onClick={() => setSelectedFormat(fmt.id)}
            className={`p-5 rounded-3xl border transition-all cursor-pointer relative overflow-hidden ${
              selectedFormat === fmt.id
                ? 'bg-blue-50/70 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                : 'bg-white border-slate-200/80 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-bold text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-full">
                {fmt.time}
              </span>
              <input
                type="radio"
                checked={selectedFormat === fmt.id}
                onChange={() => {}}
                className="text-blue-600 focus:ring-blue-500"
              />
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm mb-1">
              {isAr ? fmt.titleAr : fmt.titleDe}
            </h4>
            <p className="text-xs font-semibold text-slate-700 mb-1">{fmt.modules}</p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              {isAr ? fmt.descAr : fmt.descDe}
            </p>
          </div>
        ))}
      </div>

      {/* If Single Module selected */}
      {selectedFormat === 'einzeln' && (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold text-slate-700">
            {isAr ? 'اختر الوحدة المطلوبة:' : 'Modul auswählen:'}
          </span>
          {(['lesen', 'hoeren', 'schreiben', 'sprechen'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setSelectedSingleModule(m)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
                selectedSingleModule === m ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      )}

      {/* Start Button */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold">
            {isAr ? 'جاهز لبدء محاكاة الامتحان؟' : 'Bereit für die Prüfungssimulation?'}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {isAr
              ? 'تأكد من توفر مكان هادئ وسماعات رأس للقسم الصوتي وميكروفون لقسم المحادثة.'
              : 'Prüfungsbedingungen: Timer läuft, keine Lösungshinweise während des Tests.'}
          </p>
        </div>
        <button
          onClick={handleStartExam}
          className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-lg shadow-blue-500/30 transition-all cursor-pointer whitespace-nowrap"
        >
          {isAr ? 'ابدأ الامتحان الآن' : 'Jetzt starten'} →
        </button>
      </div>

      {/* Official ÖSD Score Conversion Table Display */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <ShieldCheck className="w-5 h-5 text-blue-600" />
          <h3 className="font-extrabold text-slate-900 text-sm">
            {isAr
              ? 'جدول تحويل النقاط الرسمي لامتحان ÖSD B1 (Lesen & Hören)'
              : 'Offizielle ÖSD ZB1 Punkte-Umrechnungstabelle (Lesen & Hören)'}
          </h3>
        </div>
        <p className="text-xs text-slate-500">
          {isAr
            ? 'يتكون قسما القراءة والاستماع من 30 سؤالاً (Messpunkte). للنجاح يجب تحقيق 18 نقطة على الأقل (ما يعادل 60 نقطة نتيجة = 60%).'
            : 'Aus 30 Messpunkten werden durch Multiplikation mit ca. 3,33 insgesamt 100 Ergebnispunkte errechnet. Mindestbestehen: 18 Punkte (60%).'}
        </p>

        <div className="overflow-x-auto scrollbar-none">
          <table className="w-full text-xs text-center border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold">
                <th className="p-2 border border-slate-200">Messpunkte (0–30)</th>
                {[30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15].map((mp) => (
                  <th
                    key={mp}
                    className={`p-2 border border-slate-200 ${
                      mp === 18 ? 'bg-amber-100 text-amber-900 font-black' : ''
                    }`}
                  >
                    {mp}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="font-semibold text-slate-800">
                <td className="p-2 border border-slate-200 font-bold bg-slate-50">Ergebnispunkte (100)</td>
                {[30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15].map((mp) => (
                  <td
                    key={mp}
                    className={`p-2 border border-slate-200 ${
                      mp >= 18 ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
                    }`}
                  >
                    {ocsdConversionMap[mp]}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
