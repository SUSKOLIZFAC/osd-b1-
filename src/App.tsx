import React, { useState, useEffect } from 'react';
import { ActiveTab, Language, ExamModule, TestResult } from './types';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { LesenView } from './components/LesenView';
import { HoerenView } from './components/HoerenView';
import { SchreibenView } from './components/SchreibenView';
import { SprechenView } from './components/SprechenView';
import { GrammatikView } from './components/GrammatikView';
import { WortschatzView } from './components/WortschatzView';
import { RedemittelView } from './components/RedemittelView';
import { MeineFehlerView } from './components/MeineFehlerView';
import { MockPruefungView } from './components/MockPruefungView';
import { FortschrittView } from './components/FortschrittView';
import { InfoModal } from './components/InfoModal';
import { storageService } from './services/storageService';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [language, setLanguage] = useState<Language>(storageService.getLanguage());
  const [infoModalOpen, setInfoModalOpen] = useState<boolean>(false);
  const [results, setResults] = useState<TestResult[]>(storageService.getTestResults());
  const [mistakes, setMistakes] = useState(storageService.getMistakes());

  // Update language and document direction
  useEffect(() => {
    storageService.setLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Keep test results and mistakes in sync
  const refreshStorage = () => {
    setResults(storageService.getTestResults());
    setMistakes(storageService.getMistakes());
  };

  useEffect(() => {
    refreshStorage();
  }, [activeTab]);

  const handleOpenModule = (moduleName: ExamModule) => {
    setActiveTab(moduleName);
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans transition-colors ${
        language === 'ar' ? 'font-arabic' : ''
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Top Header & Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        examModeActive={activeTab === 'mock-pruefung'}
        onOpenInfoModal={() => setInfoModalOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <Dashboard
            setActiveTab={setActiveTab}
            language={language}
            results={results}
            mistakeCount={mistakes.length}
          />
        )}

        {activeTab === 'pruefungstraining' && (
          <Dashboard
            setActiveTab={setActiveTab}
            language={language}
            results={results}
            mistakeCount={mistakes.length}
          />
        )}

        {activeTab === 'lesen' && <LesenView language={language} />}

        {activeTab === 'hoeren' && <HoerenView language={language} />}

        {activeTab === 'schreiben' && <SchreibenView language={language} />}

        {activeTab === 'sprechen' && <SprechenView language={language} />}

        {activeTab === 'grammatik' && <GrammatikView language={language} />}

        {activeTab === 'wortschatz' && <WortschatzView language={language} />}

        {activeTab === 'redemittel' && <RedemittelView language={language} />}

        {activeTab === 'meine-fehler' && <MeineFehlerView language={language} />}

        {activeTab === 'mock-pruefung' && (
          <MockPruefungView language={language} onOpenModule={handleOpenModule} />
        )}

        {activeTab === 'fortschritt' && (
          <FortschrittView
            language={language}
            results={results}
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-800">ÖSD B1 HARD</span>
            <span>•</span>
            <span>{language === 'ar' ? 'التحضير الرسمي لشهادة B1 النمساوية والألمانية' : 'Offizielles Vorbereitungstraining für ZB1 Erwachsene'}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Zertifikat B1 neu (Hueber)</span>
            <span>•</span>
            <span>Arena B1 (Praxis)</span>
            <span>•</span>
            <span>So geht\'s noch besser (Klett)</span>
          </div>
        </div>
      </footer>

      {/* Information Modal */}
      <InfoModal
        isOpen={infoModalOpen}
        onClose={() => setInfoModalOpen(false)}
        language={language}
      />
    </div>
  );
}
