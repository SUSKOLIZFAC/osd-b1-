import React from 'react';
import { ActiveTab, Language } from '../types';
import {
  BookOpen,
  Headphones,
  PenTool,
  Mic,
  Award,
  BookmarkCheck,
  BrainCircuit,
  Languages,
  CheckCircle2,
  HelpCircle,
  LayoutDashboard
} from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  examModeActive: boolean;
  onOpenInfoModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  examModeActive,
  onOpenInfoModal,
}) => {
  const isAr = language === 'ar';

  const navItems: { id: ActiveTab; labelDe: string; labelAr: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'dashboard', labelDe: 'Dashboard', labelAr: 'لوحة التحكم', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'lesen', labelDe: 'Lesen (65 Min)', labelAr: 'القراءة (65 د)', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'hoeren', labelDe: 'Hören (40 Min)', labelAr: 'الاستماع (40 د)', icon: <Headphones className="w-4 h-4" /> },
    { id: 'schreiben', labelDe: 'Schreiben (60 Min)', labelAr: 'الكتابة (60 د)', icon: <PenTool className="w-4 h-4" />, badge: 'KI' },
    { id: 'sprechen', labelDe: 'Sprechen (15 Min)', labelAr: 'المحادثة (15 د)', icon: <Mic className="w-4 h-4" />, badge: 'KI' },
    { id: 'grammatik', labelDe: 'Grammatik', labelAr: 'القواعد', icon: <BookmarkCheck className="w-4 h-4" /> },
    { id: 'wortschatz', labelDe: 'Wortschatz', labelAr: 'المفردات', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'redemittel', labelDe: 'Redemittel', labelAr: 'تعبيرات الامتحان', icon: <CheckCircle2 className="w-4 h-4" /> },
    { id: 'meine-fehler', labelDe: 'Meine Fehler & KI-Tutor', labelAr: 'أخطائي والمعلم الذكي', icon: <BrainCircuit className="w-4 h-4" />, badge: 'Auto' },
    { id: 'mock-pruefung', labelDe: 'Mock Prüfung', labelAr: 'امتحان تجريبي كامل', icon: <Award className="w-4 h-4" />, badge: 'ÖSD' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-lg backdrop-blur-md bg-opacity-95">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center shadow-md shadow-blue-500/20 text-white font-extrabold text-lg tracking-wider border border-white/20">
              ÖSD
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white tracking-tight">ÖSD B1 HARD</span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  ZB1
                </span>
                {examModeActive && (
                  <span className="animate-pulse px-2 py-0.5 text-xs font-bold rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                    EXAM ACTIVE
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">
                {isAr ? 'التحضير المكثف لامتحان أوس دي بي 1 (ألماني ↔ عربي)' : 'Zertifikat B1 Prüfungssimulation & Training (DE ↔ AR)'}
              </p>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Info Modal Button */}
            <button
              onClick={onOpenInfoModal}
              title={isAr ? 'معلومات ونظام امتحان ÖSD B1' : 'Offizielle ÖSD B1 Prüfungsordnung & Kriterien'}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 text-sm"
            >
              <HelpCircle className="w-4 h-4 text-blue-400" />
              <span className="hidden md:inline text-xs font-medium">{isAr ? 'معايير الامتحان' : 'Prüfungsregeln'}</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setLanguage('de')}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                  language === 'de'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>DE</span>
                <span className="text-[10px] opacity-75">Deutsch</span>
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                  language === 'ar'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Languages className="w-3.5 h-3.5" />
                <span>العربية</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-slate-950/70 border-t border-slate-800/60 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-2 py-2 min-w-max">
            {navItems.map((item) => {
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all relative ${
                    active
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{isAr ? item.labelAr : item.labelDe}</span>
                  {item.badge && (
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded font-semibold ${
                        active
                          ? 'bg-white/20 text-white'
                          : 'bg-blue-900/40 text-blue-300 border border-blue-500/30'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
