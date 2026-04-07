import type { Skill, SkillCategory } from '../types';

export const CATEGORY_ORDER: SkillCategory[] = [
  'language',
  'frontend',
  'backend',
  'testing',
  'tooling',
  'ai',
];

export const sortSkills = (skills: Skill[]): Skill[] =>
  [...skills].sort((a, b) => {
    const catDiff =
      CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);

    if (catDiff !== 0) {
      return catDiff;
    }

    return a.order - b.order;
  });
