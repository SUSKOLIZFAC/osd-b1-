import React from 'react';
import { Language } from '../types';
import { X, Award, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;
  const isAr = language === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div
        className={`bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 max-h-[90vh] overflow-y-auto ${
          isAr ? 'text-right' : 'text-left'
        }`}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                {isAr ? 'معايير ونظام امتحان ÖSD B1 الرسمي' : 'Offizielle ÖSD Zertifikat B1 Prüfungsordnung'}
              </h3>
              <p className="text-xs text-slate-500">
                {isAr ? 'القواعد المعتمدة لشهادة اللغة الألمانية النمساوية (ZB1)' : 'Österreichisches Sprachdiplom Deutsch'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content sections */}
        <div className="space-y-4 text-xs text-slate-700 leading-relaxed font-sans">
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
            <span className="font-bold text-blue-900 block text-sm">
              {isAr ? 'المبدأ العام للامتحان (Modularer Aufbau):' : 'Modularer Aufbau:'}
            </span>
            <p>
              {isAr
                ? 'يتألف امتحان ÖSD Zertifikat B1 للبالغين من 4 وحدات مستقلة: القراءة، الاستماع، الكتابة، والمحادثة. يمكن اجتيازها مجتمعة أو كل وحدة على حدة.'
                : 'Das Zertifikat B1 (ZB1) für Erwachsene besteht aus vier unabhängigen Modulen (Lesen, Hören, Schreiben, Sprechen), die einzeln oder zusammen abgelegt werden können.'}
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-slate-900 text-sm block">
              {isAr ? 'شرط النجاح الرسمي (Bestehensgrenze):' : 'Offizielle Bestehensgrenze:'}
            </span>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong className="text-slate-900">{isAr ? 'نسبة النجاح الدنيا:' : 'Mindestpunktzahl:'}</strong>{' '}
                {isAr ? '60% في كل وحدة من الوحدات الأربع بشكل مستقل.' : '60% der Maximalpunkte in jedem Modul.'}
              </li>
              <li>
                <strong className="text-slate-900">{isAr ? 'القراءة والاستماع:' : 'Lesen & Hören:'}</strong>{' '}
                {isAr ? '30 سؤالاً، يجب تحقيق 18 إجابة صحيحة على الأقل للنجاح (60 نقطة نتيجة).' : 'Jeweils 30 Aufgaben. Mindestens 18 Aufgaben müssen richtig gelöst werden (60 Ergebnispunkte).'}
              </li>
              <li>
                <strong className="text-slate-900">{isAr ? 'الكتابة والمحادثة:' : 'Schreiben & Sprechen:'}</strong>{' '}
                {isAr ? 'يتم التقييم من 100 نقطة وفق 4 معايير معتمدة، ويلزم 60 نقطة على الأقل للنجاح.' : 'Maximal 100 Punkte, mindestens 60 Punkte zum Bestehen erforderlich.'}
              </li>
            </ul>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="font-bold text-slate-900 text-sm block">
              {isAr ? 'أوقات وأجزاء الامتحان:' : 'Prüfungsteile & Zeiten:'}
            </span>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong>Lesen:</strong> 65 Min (5 Teile, 30 Aufgaben)
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong>Hören:</strong> ca. 40 Min (4 Teile, 30 Aufgaben)
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong>Schreiben:</strong> 60 Min (3 Aufgaben)
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong>Sprechen:</strong> ca. 15 Min (+ 15 Min Vorbereitung)
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors cursor-pointer"
        >
          {isAr ? 'حسناً، فهمت' : 'Verstanden'}
        </button>
      </div>
    </div>
  );
};
