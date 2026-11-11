import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 80) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const getActiveSection = () => {
      const scrollY = window.scrollY;
      const marker = scrollY + offset + 1;
      let current = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (marker >= top) current = id;
      }

      const atBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = sectionIds[sectionIds.length - 1] || current;

      return current;
    };

    const handleScroll = () => setActive(getActiveSection());

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds, offset]);

  return active;
}
