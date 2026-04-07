export interface ContactLink {
  label: string;
  url: string;
}

export type SkillCategory =
  | 'language'
  | 'frontend'
  | 'backend'
  | 'testing'
  | 'tooling';

export type SkillLevel = 'expert' | 'proficient' | 'familiar';

export interface Skill {
  category: SkillCategory;
  level: SkillLevel;
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
  name: string;
  description: string;
  technologies: Skill[];
  link: string;
}

export interface Language {
  language: string;
  proficiency: string;
}
