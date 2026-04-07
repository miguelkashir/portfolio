import { Calendar } from 'lucide-react';
import type { Skill } from '../types';

interface ExpEduCardProps {
  description: string;
  endDate: Date | null;
  logo?: string;
  skills?: Skill[];
  startDate: Date;
  subtitle: string;
  title: string;
}

export const ExpEduCard = ({
  description,
  endDate,
  logo,
  skills,
  startDate,
  subtitle,
  title,
}: ExpEduCardProps) => {
  const toDateTimeAttr = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg transition-shadow duration-300 hover:shadow-md">
      <div className="flex flex-row gap-4">
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
            <span>
              <time dateTime={toDateTimeAttr(startDate)}>
                {startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </time>
              {' – '}
              {endDate ? (
                <time dateTime={toDateTimeAttr(endDate)}>
                  {endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </time>
              ) : (
                'Present'
              )}
            </span>
          </span>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-pink-600 font-medium mb-2">{subtitle}</p>
        </div>
      </div>

      <p className="text-gray-600 mb-2 text-base">{description}</p>

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
