import { createContext, useContext, useState, useEffect } from 'react';
import { translations, languages, getTranslation } from '../utils/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'en';
  });

  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    const lang = languages.find(l => l.code === currentLanguage);
    setDirection(lang?.dir || 'ltr');
    localStorage.setItem('language', currentLanguage);
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = lang?.dir || 'ltr';
  }, [currentLanguage]);

  const t = getTranslation(currentLanguage);

  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setCurrentLanguage(langCode);
    }
  };

  const value = {
    currentLanguage,
    direction,
    t,
    languages,
    changeLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
