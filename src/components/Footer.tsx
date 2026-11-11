import { useLanguage } from '../i18n/useLanguage';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          © {year} {t('hero.name')}. {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
