import React, { useState, useEffect } from 'react';
import { Header, PrimeLogo } from './components/Header';
import { Catalog } from './components/Catalog';
import { TimingGear3D, PulleySystem3D } from './components/Shapes';
import { Language } from './types';
import { translations } from './utils/translations';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen bg-prime-bg font-sans selection:bg-prime-blue selection:text-white flex flex-col justify-between relative overflow-hidden">
      
      {/* HEADER */}
      <Header t={t} language={language} onToggleLanguage={toggleLanguage} />

      {/* BACKGROUND DECORATIONS (Automotive watermarks with low opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute -top-12 -left-12 w-[600px] h-[600px] animate-spin-slow">
          <TimingGear3D className="w-full h-full text-prime-text" />
        </div>
        <div className="absolute -bottom-24 -right-24 w-[700px] h-[700px]" style={{ transform: 'rotate(15deg)' }}>
          <PulleySystem3D className="w-full h-full text-prime-text" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-prime-text rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-prime-text rounded-full opacity-50"></div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow pt-24 pb-12 z-10 flex items-center justify-center">
        <div className="w-full">
          <Catalog language={language} t={t} />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-prime-text text-stone-400 py-12 border-t border-stone-800 z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-white">
            <PrimeLogo className="h-6 w-auto text-white" />
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500 bg-stone-900 px-2.5 py-1 rounded">Catalog</span>
          </div>
          <div className="text-sm font-medium">
            {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;