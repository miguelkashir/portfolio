import { Header } from './comps/Header';
import {
  Braces,
  Briefcase,
  GraduationCap,
  Languages,
  Rocket,
  User,
} from 'lucide-react';

import {
  aboutData,
  educationData,
  experienceData,
  headerData,
  languagesData,
  projectsData,
  skillsData,
} from './data/data';
import { Section } from './comps/Section';
import { Paragraph } from './comps/Paragraph';
import { ExperienceList } from './comps/ExperienceList';
import { EducationList } from './comps/EducationList';
import { ProjectList } from './comps/ProjectList';
import { SkillList } from './comps/SkillList';
import { LanguageList } from './comps/LanguageList';

export const App = () => {
  return (
    <div className="min-w-sm flex flex-col items-center bg-gray-50 text-gray-800 antialiased">
      <Header
        links={headerData.links}
        name={headerData.name}
        role={headerData.role}
      />
      <div className="max-w-6xl flex flex-col justify-center align-center gap-8">
        <Section title={aboutData.title} icon={<User />}>
          <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
            <Paragraph>{aboutData.firstParagraph}</Paragraph>
            <Paragraph>{aboutData.secondParagraph}</Paragraph>
          </div>
        </Section>

        <Section title={experienceData.title} icon={<Briefcase />}>
          <ExperienceList experiences={experienceData.experiences} />
        </Section>

        <Section title={educationData.title} icon={<GraduationCap />}>
          <EducationList degrees={educationData.degrees} />
        </Section>

        <Section title={skillsData.title} icon={<Braces />}>
          <SkillList skills={skillsData.skills} />
        </Section>

        <Section title={projectsData.title} icon={<Rocket />}>
          <ProjectList projects={projectsData.projects} />
        </Section>

        <Section title={languagesData.title} icon={<Languages />}>
          <LanguageList languages={languagesData.languages} />
        </Section>
      </div>

      <footer className="w-full text-center text-sm text-gray-400 py-8">
        Made with ❤️ by{' '}
        <a
          className="hover:text-pink-600 transition-colors duration-200"
          href="https://github.com/miguelkashir"
          rel="noopener noreferrer"
          target="_blank"
        >
          miguelkashir
        </a>
      </footer>
    </div>
  );
};
