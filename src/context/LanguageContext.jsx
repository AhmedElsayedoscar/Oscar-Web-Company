import { useState, useEffect } from 'react';
import { translations } from '../translations';
import { LanguageContext } from './LanguageContextDefinition';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('oscar_lang');
    if (saved === 'ar' || saved === 'en') return saved;
    return 'ar';
  });

  useEffect(() => {
    localStorage.setItem('oscar_lang', language);
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = translations[language] || translations.ar;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        isRTL: language === 'ar'
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
