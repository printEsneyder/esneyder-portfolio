import { Mail, MapPin, Phone } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../i18n/useLanguage';
import { links } from '../data/links';

const chipClass = 'inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-colors hover:border-[var(--color-accent)]';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <div className="space-y-8">
        <h2 className="text-2xl md:text-4xl font-semibold" style={{ color: 'var(--color-text)' }}>{t('contact.title')}</h2>

        <div className="flex flex-wrap gap-3">
          <a href={links.emailSubject} className={chipClass} style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
            <Mail size={18} style={{ color: 'var(--color-accent)' }} />
            {links.emailDisplay}
          </a>
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={chipClass} style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
            <Phone size={18} style={{ color: 'var(--color-accent)' }} />
            {links.phone}
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={chipClass} style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
            <FontAwesomeIcon icon={faLinkedin} className="w-[18px] h-[18px] text-[var(--color-accent)]" />
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className={chipClass} style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
            <FontAwesomeIcon icon={faGithub} className="w-[18px] h-[18px] text-[var(--color-accent)]" />
            GitHub
          </a>
          <span className={chipClass} style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
            <MapPin size={18} style={{ color: 'var(--color-accent)' }} />
            {links.location}
          </span>
        </div>

        <div>
          <a
            href={links.emailSubject}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white hover:opacity-90 transition-opacity"
            style={{ background: 'var(--color-accent)' }}
          >
            <Mail size={18} />
            {t('contact.emailCta')}
          </a>
        </div>
      </div>
    </section>
  );
}
