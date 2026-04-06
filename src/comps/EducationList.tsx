import { ExpEduCard } from './ExpEduCard';
import type { Degree } from '../types';

interface EducationListProps {
  degrees: Degree[];
}

export const EducationList = ({ degrees }: EducationListProps) => (
  <>
    {degrees.map((edu, index) => (
      <ExpEduCard
        key={index}
        description={edu.description}
        endDate={edu.endDate}
        logo={edu.logo}
        startDate={edu.startDate}
        subtitle={edu.institution}
        title={edu.degree}
      />
    ))}
  </>
);
