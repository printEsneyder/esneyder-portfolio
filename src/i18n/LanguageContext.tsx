import React, { useEffect, useMemo, useState } from 'react';
import type { Language } from '../types';
import { translations } from './translations';
import { LanguageContext } from './LanguageContextProvider';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'en' || saved === 'es') return saved;
    } catch {
      // ignore
    }
    return 'es';
  });

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // ignore
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => (path: string) => {
    const translationObj = translations[lang] as Record<string, unknown>;
    const result = getNested(translationObj, path);
    return typeof result === 'string' ? result : path;
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

function getNested(obj: Record<string, unknown> | undefined, path: string): string {
  return path.split('.').reduce((o: unknown, k) => {
    if (o && typeof o === 'object' && k in (o as Record<string, unknown>)) {
      return (o as Record<string, unknown>)[k];
    }
    return undefined;
  }, obj) as string ?? path;
}
