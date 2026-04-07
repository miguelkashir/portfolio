import type { Skill, SkillCategory } from '../types';

interface SkillListProps {
  skills: Skill[];
}

const CATEGORY_ORDER: SkillCategory[] = [
  'language',
  'frontend',
  'backend',
  'testing',
  'tooling',
  'ai',
];

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  ai: 'AI',
  backend: 'Backend',
  frontend: 'Frontend',
  language: 'Languages',
  testing: 'Testing',
  tooling: 'Tooling',
};

const PILL_STYLE =
  'px-3 py-1 text-xs font-medium text-pink-700 dark:text-pink-300 bg-pink-100 dark:bg-pink-950 rounded-full';

export const SkillList = ({ skills }: SkillListProps) => {
  const grouped = CATEGORY_ORDER.reduce<Record<SkillCategory, Skill[]>>(
    (acc, cat) => {
      acc[cat] = skills.filter(s => s.category === cat);

      return acc;
    },
    {
      ai: [],
      backend: [],
      frontend: [],
      language: [],
      testing: [],
      tooling: [],
    },
  );

  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      {CATEGORY_ORDER.filter(cat => grouped[cat].length > 0).map(cat => (
        <div key={cat}>
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
            {CATEGORY_LABELS[cat]}
          </p>
          <div className="flex flex-wrap gap-2">
            {grouped[cat].map(skill => (
              <span key={skill.name} className={PILL_STYLE}>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
