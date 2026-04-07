import { ExpEduCard } from './ExpEduCard';
import type { Experience } from '../types';

interface ExperienceListProps {
  experiences: Experience[];
}

export const ExperienceList = ({ experiences }: ExperienceListProps) => (
  <>
    {experiences.map((experience, index) => (
      <ExpEduCard
        key={index}
        description={experience.description}
        endDate={experience.endDate}
        logo={experience.logo}
        skills={experience.skills}
        startDate={experience.startDate}
        subtitle={experience.company}
        title={experience.role}
      />
    ))}
  </>
);
