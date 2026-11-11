import { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

const categories = ['all', 'mobile', 'web', 'other'] as const;

export function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<typeof categories[number]>('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <SectionHeading title={t('projects.title')} />
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button key={c} type="button" onClick={() => setFilter(c)} className={`px-3 py-1.5 text-sm rounded-full border ${filter === c ? 'bg-[var(--color-accent)] text-white border-transparent' : ''}`} style={filter === c ? {} : { borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
            {t(`projects.filters.${c}`)}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
