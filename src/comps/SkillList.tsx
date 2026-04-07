import type { Skill, SkillCategory, SkillLevel } from '../types';
import { CATEGORY_ORDER, sortSkills } from '../utils/sortSkills';

export type GroupMode = 'category' | 'level';

interface SkillListProps {
  mode: GroupMode;
  skills: Skill[];
}

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  ai: 'AI',
  backend: 'Backend',
  frontend: 'Frontend',
  language: 'Languages',
  testing: 'Testing',
  tooling: 'Tooling',
};

const LEVEL_LABELS: Record<SkillLevel, string> = {
  expert: 'Expert',
  proficient: 'Proficient',
};

const LEVEL_STYLES: Record<SkillLevel, string> = {
  expert: 'px-3 py-1 text-xs font-medium text-white bg-pink-600 rounded-full',
  proficient:
    'px-3 py-1 text-xs font-medium text-pink-700 dark:text-pink-300 bg-pink-100 dark:bg-pink-950 rounded-full',
};

const GROUP_LABEL_STYLE =
  'text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2';

const TOOLTIP_STYLE =
  'hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-700 dark:bg-gray-600 rounded whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none';

export const SkillList = ({ mode, skills }: SkillListProps) => {
  const sorted = sortSkills(skills);

  const renderPill = (skill: Skill) => {
    const tooltip =
      mode === 'level'
        ? CATEGORY_LABELS[skill.category]
        : LEVEL_LABELS[skill.level];

    return (
      <span key={skill.name} className="relative group/tooltip">
        <span className={LEVEL_STYLES[skill.level]}>{skill.name}</span>
        <span className={TOOLTIP_STYLE}>{tooltip}</span>
      </span>
    );
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      {mode === 'level'
        ? (['expert', 'proficient'] as SkillLevel[]).map(level => {
            const group = sorted.filter(s => s.level === level);

            if (!group.length) {
              return null;
            }

            return (
              <div key={level}>
                <p className={GROUP_LABEL_STYLE}>{LEVEL_LABELS[level]}</p>
                <div className="flex flex-wrap gap-2">
                  {group.map(skill => renderPill(skill))}
                </div>
              </div>
            );
          })
        : CATEGORY_ORDER.filter(cat =>
            sorted.some(s => s.category === cat),
          ).map(cat => {
            const group = sorted.filter(s => s.category === cat);

            return (
              <div key={cat}>
                <p className={GROUP_LABEL_STYLE}>{CATEGORY_LABELS[cat]}</p>
                <div className="flex flex-wrap gap-2">
                  {group.map(skill => renderPill(skill))}
                </div>
              </div>
            );
          })}
    </div>
  );
};
