import { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import type { Language } from '../types';

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const [flash, setFlash] = useState(false);

  const toggle = (l: Language) => () => {
    setLang(l);
    setFlash(true);
    window.setTimeout(() => setFlash(false), 500);
  };

  return (
    <div className={`flex items-center gap-2 text-sm border rounded-full px-2 py-1 backdrop-blur-sm ${flash ? 'button-flash' : ''}`} style={{ borderColor: 'var(--color-border)' }}>
      <button type="button" onClick={toggle('en')} className={lang === 'en' ? 'px-2 py-0.5 rounded-full bg-[var(--color-accent)] text-white' : 'px-2 py-0.5'} aria-pressed={lang === 'en'}>
        {t('common.en')}
      </button>
      <button type="button" onClick={toggle('es')} className={lang === 'es' ? 'px-2 py-0.5 rounded-full bg-[var(--color-accent)] text-white' : 'px-2 py-0.5'} aria-pressed={lang === 'es'}>
        {t('common.es')}
      </button>
    </div>
  );
}
