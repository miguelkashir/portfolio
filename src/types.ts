export interface ContactLink {
  label: string;
  url: string;
}

export type SkillCategory =
  | 'ai'
  | 'backend'
  | 'frontend'
  | 'language'
  | 'testing'
  | 'tooling';

export interface Skill {
  category: SkillCategory;
  name: string;
}

export interface Experience {
  company: string;
  logo?: string;
  location: string;
  role: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  skills: Skill[];
}

export interface Degree {
  logo?: string;
  degree: string;
  institution: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
}

export interface Project {
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  liveUrlTooltip?: string;
  name: string;
  technologies: Skill[];
}

export interface Language {
  language: string;
  proficiency: string;
}
