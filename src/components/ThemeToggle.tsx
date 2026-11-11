import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';

export function ThemeToggle() {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      // ignore
    }
    return 'dark';
  });
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setFlash(true);
    window.setTimeout(() => setFlash(false), 500);
  };

  return (
    <button
      type='button'
      onClick={toggle}
      className={`p-2 rounded-full border flex items-center justify-center ${flash ? 'button-flash' : ''}`}
      style={{ borderColor: 'var(--color-border)' }}
      aria-label={theme === 'light' ? (t('common.toggleThemeDark') || 'Switch to dark theme') : (t('common.toggleThemeLight') || 'Switch to light theme')}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
