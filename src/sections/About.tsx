import { useLanguage } from '../i18n/useLanguage';
import { translations } from '../i18n/translations';
import { SectionHeading } from '../components/SectionHeading';

export function About() {
  const { t, lang } = useLanguage();
  const paragraphs = translations[lang].about.body;
  return (
    <section id="about" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <SectionHeading title={t('about.title')} />
      <div className="max-w-3xl space-y-4">
        {paragraphs.map((paragraph, i) => (
          <p key={i} style={{ color: 'var(--color-text-secondary)' }}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
