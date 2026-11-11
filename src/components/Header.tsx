import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { useScrollSpy } from '../hooks/useScrollSpy';

const sectionIds = ['about', 'projects', 'stack', 'experience', 'contact'];

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(sectionIds, 90);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b" style={{ borderColor: 'var(--color-border)', background: 'color-mix(in srgb, var(--color-bg) 85%, transparent)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#home" className="flex flex-col leading-none">
          <span className="text-lg font-semibold tracking-tight" style={{ color: 'var(--color-text)' }}>{t('hero.brand')}</span>
          <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>{t('hero.brandSub')}</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {sectionIds.map((s) => {
            const isActive = active === s;
            return (
              <a
                key={s}
                href={"#" + s}
                className="text-sm relative group"
                style={{ color: isActive ? 'var(--color-text)' : 'var(--color-text-secondary)' }}
              >
                <span className="group-hover:opacity-90 transition-opacity">{t("nav." + s)}</span>
                {isActive ? (
                  <span className="absolute -bottom-1 left-0 w-full h-px" style={{ background: 'var(--color-accent)' }} />
                ) : (
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-accent)] group-hover:w-full transition-all duration-300" />
                )}
              </a>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <button type="button" onClick={() => setOpen(!open)} aria-label={t('common.openMenu')} className="p-2 rounded-lg border" style={{ borderColor: 'var(--color-border)' }}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}>
          <div className="px-4 py-4 flex flex-col gap-3">
            {sectionIds.map((s) => (
              <a key={s} href={"#" + s} onClick={() => setOpen(false)} className="py-2 text-sm" style={{ color: active === s ? 'var(--color-text)' : 'var(--color-text-secondary)' }}>
                {t("nav." + s)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
