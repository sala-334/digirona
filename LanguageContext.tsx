import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import translationsCa from '../translations/ca.json';
import translationsEs from '../translations/es.json';
import translationsEn from '../translations/en.json';

type Translations = {
  [key: string]: string | Translations;
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, params?: Record<string, string>) => string;
  languages: { code: string; name: string }[];
};

const translations: Record<string, Translations> = {
  ca: translationsCa,
  es: translationsEs,
  en: translationsEn,
};

const languages = [
  { code: 'ca', name: 'Català' },
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Detect browser language or use stored preference
  const detectInitialLanguage = (): string => {
    const stored = localStorage.getItem('language');
    if (stored && ['ca', 'es', 'en'].includes(stored)) {
      return stored;
    }
    
    const browserLang = navigator.language.split('-')[0];
    return ['ca', 'es', 'en'].includes(browserLang) ? browserLang : 'ca';
  };

  const [language, setLanguageState] = useState(detectInitialLanguage());

  const setLanguage = (lang: string) => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split('.');
    let value: string | Translations | undefined = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    if (typeof value !== 'string') {
      return key;
    }
    
    // Replace params in the translation
    if (params) {
      return Object.entries(params).reduce(
        (str, [key, value]) => str.replace(new RegExp(`{{${key}}}`, 'g'), value),
        value
      );
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};