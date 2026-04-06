interface SkillListProps {
  skills: string[];
}

export const SkillList = ({ skills }: SkillListProps) => (
  <div className="flex flex-wrap gap-2">
    {skills.map(skill => (
      <span
        key={skill}
        className="px-3 py-1 text-xs font-medium text-pink-700 bg-pink-100 rounded-full"
      >
        {skill}
      </span>
    ))}
  </div>
);
