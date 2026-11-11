import { useLanguage } from '../i18n/useLanguage';
import { SectionHeading } from '../components/SectionHeading';
import { skillGroups } from '../data/skills';

export function TechStack() {
  const { t, lang } = useLanguage();
  return (
    <section id="stack" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <SectionHeading title={t('stack.title')} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((g) => (
          <div
            key={g.id}
            className="border rounded-2xl p-5 md:p-6"
            style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
          >
            <h3 className="text-base font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
              {g.name[lang]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="px-2.5 py-1 text-sm rounded-full border"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
