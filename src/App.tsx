import { Header } from './comps/Header';
import {
  Briefcase,
  Code,
  Construction,
  Globe,
  GraduationCap,
  Layers,
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
      <Header name={headerData.name} role={headerData.role} />
      <div className="max-w-6xl flex flex-col justify-center align-center gap-4">
        {/* WIP*/}
        <Section title="Work in Progress!" icon={<Construction />} />
        {/* WIP */}

        <Section title={aboutData.title} icon={<User />}>
          <Paragraph>{aboutData.firstParagraph}</Paragraph>
          <Paragraph>{aboutData.secondParagraph}</Paragraph>
        </Section>

        <Section title={experienceData.title} icon={<Briefcase />}>
          <ExperienceList experiences={experienceData.experiences} />
        </Section>

        <Section title={educationData.title} icon={<GraduationCap />}>
          <EducationList degrees={educationData.degrees} />
        </Section>

        <Section title={projectsData.title} icon={<Layers />}>
          <ProjectList projects={projectsData.projects} />
        </Section>

        <Section title={skillsData.title} icon={<Code />}>
          <SkillList skills={skillsData.skills} />
        </Section>

        <Section title={languagesData.title} icon={<Globe />}>
          <LanguageList languages={languagesData.languages} />
        </Section>
      </div>
    </div>
  );
};
