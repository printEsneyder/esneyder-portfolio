export type Language = 'en' | 'es';
export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  featured?: boolean;
  description: { en: string; es: string };
  problem: { en: string; es: string };
  contribution: { en: string; es: string };
  technologies: string[];
  result?: { en: string; es: string };
  repo?: string;
  demo?: string;
  image?: string;
  tags?: string[];
  images?: string[];
}

export interface ExperienceItem {
  id: string;
  title: { en: string; es: string };
  organization: string;
  period: { en: string; es: string };
  type: 'work' | 'academic' | 'project' | 'entrepreneurship' | 'other';
  description: { en: string[]; es: string[] };
}

export interface EducationItem {
  id: string;
  degree: { en: string; es: string };
  institution: string;
  period: { en: string; es: string };
  location?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  details?: string;
}