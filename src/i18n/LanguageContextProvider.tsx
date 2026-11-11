import { createContext } from 'react';
import type { Language } from '../types';

export interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (path: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
