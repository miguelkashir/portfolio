import { Calendar } from 'lucide-react';
import { formatDuration } from '../utils/formatDuration';
import type { Skill } from '../types';

interface ExpEduCardProps {
  description: string;
  endDate: Date | null;
  logo?: string;
  showDuration?: boolean;
  skills?: Skill[];
  startDate: Date;
  subtitle: string;
  title: string;
}

export const ExpEduCard = ({
  description,
  endDate,
  logo,
  showDuration = false,
  skills,
  startDate,
  subtitle,
  title,
}: ExpEduCardProps) => {
  const durationText = formatDuration(startDate, endDate);

  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg transition-shadow duration-300">
      <div className="flex flex-row gap-6">
        {logo && (
          <div className="flex items-center justify-center">
            <img
              className="w-12 h-12 object-contain"
              src={logo}
              alt={subtitle}
            />
          </div>
        )}

        <div>
          <span className="text-sm text-gray-500 flex items-center">
            <Calendar className="w-4 h-4 mr-1" />

            {`${startDate.toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
            })} - ${
              endDate
                ? endDate.toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                  })
                : 'Present'
            }`}
            {showDuration && ` (${durationText})`}
          </span>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-pink-600 font-medium mb-2">{subtitle}</p>
        </div>
      </div>

      <p className="text-gray-600 mb-3 text-sm">{description}</p>

      {!!skills?.length && (
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
      )}
    </div>
  );
};
