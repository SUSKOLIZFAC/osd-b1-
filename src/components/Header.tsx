import React, { useState } from 'react';
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
  LayoutDashboard,
  Menu,
  X,
  TrendingUp,
  MoreHorizontal
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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
    { id: 'fortschritt', labelDe: 'Fortschritt', labelAr: 'التقدم والأداء', icon: <TrendingUp className="w-4 h-4" /> },
  ];

  const handleSelectNav = (id: ActiveTab) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white shadow-lg backdrop-blur-md bg-opacity-95 safe-pt">
        {/* Main Bar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
            {/* Logo & Brand */}
            <div
              className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none min-w-0 shrink"
              onClick={() => handleSelectNav('dashboard')}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center shadow-md shadow-blue-500/20 text-white font-black text-xs sm:text-sm tracking-wider border border-white/20 shrink-0">
                ÖSD
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-nowrap">
                  <span className="font-extrabold text-sm sm:text-base md:text-lg text-white tracking-tight whitespace-nowrap">
                    ÖSD B1 HARD
                  </span>
                  <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold rounded bg-blue-500/20 text-blue-300 border border-blue-400/30 shrink-0 whitespace-nowrap leading-none">
                    ZB1
                  </span>
                  {examModeActive && (
                    <span className="animate-pulse px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-red-500/20 text-red-400 border border-red-500/30 shrink-0 leading-none">
                      EXAM
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-slate-400 hidden sm:block truncate max-w-[200px] md:max-w-none">
                  {isAr ? 'التحضير المكثف لشهادة B1' : 'Intensivtraining Deutsch ↔ العربية'}
                </p>
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
              {/* Info Modal Button */}
              <button
                onClick={onOpenInfoModal}
                title={isAr ? 'معلومات ونظام امتحان ÖSD B1' : 'Offizielle ÖSD B1 Prüfungsordnung & Kriterien'}
                className="p-1.5 sm:p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors flex items-center gap-1 text-xs"
              >
                <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="hidden lg:inline font-medium">{isAr ? 'معايير الامتحان' : 'Prüfungsregeln'}</span>
              </button>

              {/* Language Switcher */}
              <div className="flex items-center bg-slate-800/90 p-0.5 rounded-xl border border-slate-700 shrink-0">
                <button
                  onClick={() => setLanguage('de')}
                  className={`px-2 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                    language === 'de'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>DE</span>
                </button>
                <button
                  onClick={() => setLanguage('ar')}
                  className={`px-2 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                    language === 'ar'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Languages className="w-3 h-3" />
                  <span>عربي</span>
                </button>
              </div>

              {/* Mobile Drawer Menu Toggle (Hamburger) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-rose-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop / Tablet Sub-navigation Bar */}
        <div className="hidden md:block bg-slate-950/70 border-t border-slate-800/60 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-1 sm:space-x-2 py-2 min-w-max">
              {navItems.map((item) => {
                const active = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectNav(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all relative cursor-pointer ${
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

      {/* Mobile Drawer Sheet Menu (Overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-slate-950/80 backdrop-blur-sm flex flex-col justify-end">
          <div
            className={`bg-slate-900 border-t border-slate-800 rounded-t-3xl max-h-[85vh] overflow-y-auto p-5 space-y-4 shadow-2xl ${
              isAr ? 'text-right' : 'text-left'
            } safe-pb`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  ÖSD
                </div>
                <span className="font-extrabold text-sm text-white">
                  {isAr ? 'أقسام منصة الامتحان' : 'Prüfungsnavigation'}
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const active = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectNav(item.id)}
                    className={`p-3.5 rounded-2xl border text-xs font-bold transition-all flex flex-col gap-1.5 cursor-pointer ${
                      active
                        ? 'bg-blue-600 text-white border-blue-500 shadow-lg'
                        : 'bg-slate-800/80 text-slate-300 border-slate-700/60 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={active ? 'text-white' : 'text-blue-400'}>{item.icon}</span>
                      {item.badge && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/20 text-white font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-[12px] mt-1">
                      {isAr ? item.labelAr : item.labelDe}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky Bottom Navigation Bar (Thumb Friendly) */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800/90 shadow-2xl safe-pb"
        dir="ltr"
      >
        <div className="grid grid-cols-5 h-14">
          {[
            { id: 'dashboard' as const, labelDe: 'Home', labelAr: 'الرئيسية', icon: <LayoutDashboard className="w-5 h-5" /> },
            { id: 'lesen' as const, labelDe: 'Lesen', labelAr: 'القراءة', icon: <BookOpen className="w-5 h-5" /> },
            { id: 'hoeren' as const, labelDe: 'Hören', labelAr: 'الاستماع', icon: <Headphones className="w-5 h-5" /> },
            { id: 'schreiben' as const, labelDe: 'Schreiben', labelAr: 'الكتابة', icon: <PenTool className="w-5 h-5" /> },
            { id: 'sprechen' as const, labelDe: 'Sprechen', labelAr: 'المحادثة', icon: <Mic className="w-5 h-5" /> },
          ].map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleSelectNav(tab.id)}
                className={`flex flex-col items-center justify-center transition-all cursor-pointer relative ${
                  active ? 'text-blue-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {active && (
                  <span className="absolute top-0 w-8 h-0.5 bg-blue-500 rounded-full" />
                )}
                {tab.icon}
                <span className="text-[10px] mt-0.5">
                  {isAr ? tab.labelAr : tab.labelDe}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
