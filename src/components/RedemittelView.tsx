import React, { useState } from 'react';
import { Language, RedemittelItem } from '../types';
import { REDEMITTEL_DATA } from '../data/redemittelData';
import { audioService } from '../services/audioService';
import {
  CheckCircle2,
  Volume2,
  BookOpen,
  Filter,
  PenTool,
  Mic,
  Lightbulb,
  Search
} from 'lucide-react';

interface RedemittelViewProps {
  language: Language;
}

export const RedemittelView: React.FC<RedemittelViewProps> = ({ language }) => {
  const isAr = language === 'ar';

  const [activeCategory, setActiveCategory] = useState<'Alle' | 'Schreiben' | 'Sprechen'>('Alle');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('Alle');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const subCategories = [
    'Alle',
    ...Array.from(new Set(REDEMITTEL_DATA.map((r) => r.subCategory))),
  ];

  const filteredItems = REDEMITTEL_DATA.filter((item) => {
    const matchCat = activeCategory === 'Alle' || item.category === activeCategory;
    const matchSub = selectedSubCategory === 'Alle' || item.subCategory === selectedSubCategory;
    const matchQuery =
      searchQuery.trim() === '' ||
      item.expressionDe.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.translationAr.includes(searchQuery) ||
      item.exampleDe.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSub && matchQuery;
  });

  const getRegisterBadge = (reg: string) => {
    if (reg === 'formell') return 'bg-purple-50 text-purple-700 border-purple-200';
    if (reg === 'informell') return 'bg-amber-50 text-amber-700 border-amber-200';
    return 'bg-blue-50 text-blue-700 border-blue-200';
  };

  return (
    <div className={`space-y-6 ${isAr ? 'text-right' : 'text-left'}`}>
      {/* Top Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold mb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{isAr ? 'مكتبة التعبيرات الامتحانية الرسمية' : 'ÖSD B1 Redemittel-Bibliothek'}</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900">
            {isAr ? 'تراكيب الكتابة والمحادثة (Redemittel)' : 'Prüfungsausdrücke & Redemittel'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {isAr
              ? 'تعبيرات B1 القياسية المعتمدة في تقييم امتحانات معهد غوته وأوس دي لتنظيم الأفكار وإبداء الرأي والتحضير.'
              : 'Strukturierte sprachliche Mittel für E-Mails, Argumentationen, Präsentationen und Prüfungsdialoge.'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl text-xs font-bold gap-1">
          <button
            onClick={() => {
              setActiveCategory('Alle');
              setSelectedSubCategory('Alle');
            }}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              activeCategory === 'Alle' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isAr ? 'الكل' : 'Alle'}
          </button>
          <button
            onClick={() => {
              setActiveCategory('Schreiben');
              setSelectedSubCategory('Alle');
            }}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
              activeCategory === 'Schreiben' ? 'bg-white text-violet-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>{isAr ? 'الكتابة' : 'Schreiben'}</span>
          </button>
          <button
            onClick={() => {
              setActiveCategory('Sprechen');
              setSelectedSubCategory('Alle');
            }}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
              activeCategory === 'Sprechen' ? 'bg-white text-rose-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span>{isAr ? 'المحادثة' : 'Sprechen'}</span>
          </button>
        </div>
      </div>

      {/* Subcategory & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none pb-1 sm:pb-0">
          {subCategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubCategory(sub)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedSubCategory === sub
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isAr ? 'بحث في التعبيرات...' : 'Redemittel suchen...'}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Redemittel Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-300 transition-all space-y-3"
          >
            {/* Header info */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200/70">
                {item.category}: {item.subCategory}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getRegisterBadge(item.register)}`}>
                {item.register}
              </span>
            </div>

            {/* Expression in German */}
            <div className="space-y-1">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-base font-extrabold text-slate-900 leading-snug">
                  {item.expressionDe}
                </h4>
                <button
                  onClick={() => audioService.speakPhrase(item.expressionDe, 'de')}
                  title="Aussprache anhören"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-teal-600 hover:bg-teal-50 transition-colors shrink-0 cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Arabic Translation */}
              <p className="text-sm font-bold text-teal-700 font-arabic pt-1" dir="rtl">
                {item.translationAr}
              </p>
            </div>

            {/* Example in Context */}
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs space-y-1">
              <span className="font-bold text-slate-500 text-[10px] uppercase block">
                {isAr ? 'مثال تطبيقي:' : 'Beispiel im Satz:'}
              </span>
              <p className="text-slate-800 italic font-sans leading-relaxed">
                "{item.exampleDe}"
              </p>
              <p className="text-slate-600 text-[11px] font-arabic" dir="rtl">
                {item.exampleAr}
              </p>
            </div>

            {/* When to Use Guidance */}
            <div className="text-[11px] text-slate-500 pt-1 flex items-start gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span>{isAr ? item.whenToUseAr : item.whenToUseDe}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
