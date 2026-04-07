import type { Language } from '../types';

interface LanguageListProps {
  languages: Language[];
}

const PROFICIENCY_STYLES: Record<string, string> = {
  Native: 'px-3 py-1 text-xs font-medium text-white bg-pink-600 rounded-full',
  Fluent:
    'px-3 py-1 text-xs font-medium text-pink-700 dark:text-pink-300 bg-pink-100 dark:bg-pink-950 rounded-full',
  Conversational:
    'px-3 py-1 text-xs font-medium text-pink-400 dark:text-pink-400 border border-pink-200 dark:border-pink-800 rounded-full',
};

const DEFAULT_STYLE =
  'px-3 py-1 text-xs font-medium text-pink-400 border border-pink-200 dark:border-pink-800 rounded-full';

export const LanguageList = ({ languages }: LanguageListProps) => (
  <div className="flex flex-wrap gap-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
    {languages.map(lang => (
      <div key={lang.language} className="flex items-center gap-2">
        <p className="font-semibold text-gray-800 dark:text-gray-100">{lang.language}</p>
        <span className={PROFICIENCY_STYLES[lang.proficiency] ?? DEFAULT_STYLE}>
          {lang.proficiency}
        </span>
      </div>
    ))}
  </div>
);
