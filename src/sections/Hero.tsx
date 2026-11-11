import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import { Profile } from '../components/Profile';
import { links } from '../data/links';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 md:pt-12 md:pb-12 lg:pt-14 lg:pb-16">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: 'var(--color-accent)' }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>{t('hero.availability')}</span>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{t('hero.name')}</p>
            <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>{t('hero.role')}</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]" style={{ color: 'var(--color-text)' }}>{t('hero.title')}</h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--color-text-secondary)' }}>{t('hero.description')}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white hover:opacity-90 transition-opacity" style={{ background: 'var(--color-accent)' }}>
              {t('hero.primaryCta')}
              <ArrowRight size={18} />
            </a>
            <a href={links.cvPath} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border transition-colors hover:border-[var(--color-accent)]" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }} download>
              <Download size={18} />
              {t('hero.secondaryCta')}
            </a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <Profile />
        </div>
      </div>
    </section>
  );
}
