import type { Skill } from '../types';

interface SkillListProps {
  skills: Skill[];
}

export const SkillList = ({ skills }: SkillListProps) => (
  <div className="flex flex-wrap gap-2">
    {skills.map(skill => (
      <span
        key={skill.name}
        className="px-3 py-1 text-xs font-medium text-pink-700 bg-pink-100 rounded-full"
      >
        {skill.name}
      </span>
    ))}
  </div>
);
