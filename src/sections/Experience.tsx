import { useLanguage } from '../i18n/useLanguage';
import { SectionHeading } from '../components/SectionHeading';
import { experience } from '../data/experience';
import { education } from '../data/education';
import { certifications } from '../data/certifications';

export function Experience() {
  const { t, lang } = useLanguage();
  return (
    <section id="experience" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <SectionHeading title={t('experience.title')} />
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
            {t('experience.expHeading')}
          </h3>
          <div className="space-y-6">
            {experience.map((e) => (
              <div
                key={e.id}
                className="border rounded-2xl p-5 md:p-6"
                style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <h4 className="text-base font-semibold" style={{ color: 'var(--color-text)' }}>
                    {e.title[lang]}
                  </h4>
                  <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                    {e.period[lang]}
                  </span>
                </div>
                <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                  {e.organization}
                </p>
                <ul className="space-y-2">
                  {e.description[lang].map((d: string, i: number) => (
                    <li key={i} className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
              {t('experience.eduHeading')}
            </h3>
            <div className="space-y-4">
              {education.map((ed) => (
                <div
                  key={ed.id}
                  className="border rounded-2xl p-5"
                  style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
                >
                  <h4 className="text-base font-semibold" style={{ color: 'var(--color-text)' }}>
                    {ed.degree[lang]}
                  </h4>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                    {ed.institution} � {ed.period[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
              {t('experience.certHeading')}
            </h3>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div
                  key={c.id}
                  className="border rounded-2xl p-4"
                  style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
                >
                  <h4 className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
                    {c.name}
                  </h4>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                    {c.issuer} � {c.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
