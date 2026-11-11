import { useEffect, useState } from 'react';
import { ExternalLink, GitForkIcon as GitBranch, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t, lang } = useLanguage();
  const images = project.images && project.images.length > 0 ? project.images : [project.image].filter(Boolean) as string[];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  const goPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <article className="border rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:border-[var(--color-accent)]" style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
      <div className="relative aspect-[16/9] w-full group" style={{ background: 'linear-gradient(135deg, var(--color-surface-alt) 0%, var(--color-surface) 100%)' }}>
        <img
          src={images[index]}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (target.src !== window.location.origin + '/placeholder.svg' && target.src.includes('.')) {
              target.src = '/images/projects/placeholder-generic.svg';
            }
          }}
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-5 md:p-6 flex-1 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg md:text-xl font-semibold" style={{ color: 'var(--color-text)' }}>{project.name}</h3>
            <div className="mt-1 flex flex-wrap gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
              {project.tags?.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-full border" style={{ borderColor: 'var(--color-border)' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{lang === 'es' ? project.description.es : project.description.en}</p>
        <div className="mt-auto flex items-center gap-3 pt-2">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:opacity-80" style={{ color: 'var(--color-text)' }}>
              <ExternalLink size={16} /> {t('projects.demo')}
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:opacity-80" style={{ color: 'var(--color-text)' }}>
              <GitBranch size={16} /> {t('projects.repo')}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
