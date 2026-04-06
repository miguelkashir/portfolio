import type { Language } from '../types';

interface LanguageListProps {
  languages: Language[];
}

export const LanguageList = ({ languages }: LanguageListProps) => (
  <>
    {languages.map((lang, index) => (
      <div key={index}>
        <p className="font-semibold">{lang.language}</p>
        <p className="text-sm">{lang.proficiency}</p>
      </div>
    ))}
  </>
);
