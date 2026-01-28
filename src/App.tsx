import { Header } from './comps/Header';
import {
  Briefcase,
  Code,
  GraduationCap,
  Globe,
  Layers,
  User,
} from 'lucide-react';

import {
  aboutData,
  educationData,
  experienceData,
  languagesData,
  projectsData,
  skillsData,
} from './data/data';
import { Section } from './comps/Section';
import { ExpEduCard } from './comps/ExpEduCard';
import { Paragraph } from './comps/Paragraph';

export const App = () => {
  return (
    <div className="min-w-sm flex flex-col items-center bg-gray-50 text-gray-800 antialiased">
      <Header />
      <div className="max-w-6xl flex flex-col justify-center align-center gap-4">
        <Section title={aboutData.title} icon={<User />}>
          <Paragraph>{aboutData.firstParagraph}</Paragraph>
          <Paragraph>{aboutData.secondParagraph}</Paragraph>
        </Section>

        <Section title={experienceData.title} icon={<Briefcase />}>
          {experienceData.experiences.map((experience, index) => (
            <ExpEduCard
              key={index}
              description={experience.description}
              endDate={experience.endDate}
              logo={experience.logo}
              showDuration
              skills={experience.skills}
              startDate={experience.startDate}
              subtitle={experience.company}
              title={experience.role}
            />
          ))}
        </Section>

        <Section title={educationData.title} icon={<GraduationCap />}>
          <div>
            {educationData.degrees.map((edu, index) => (
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
          </div>
        </Section>

        <Section title={projectsData.title} icon={<Layers />}>
          {projectsData.projects.map((project, index) => (
            <div key={index}>
              <p className="font-semibold">{project.name}</p>
              <p>{project.description}</p>
              <p className="text-sm">{project.technologies}</p>
            </div>
          ))}
        </Section>

        <Section title={skillsData.title} icon={<Code />}>
          <div className="flex flex-wrap gap-2">
            {skillsData.skills.map(skill => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium text-pink-700 bg-pink-100 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>

        <Section title={languagesData.title} icon={<Globe />}>
          {languagesData.languages.map((lang, index) => (
            <div key={index}>
              <p className="font-semibold">{lang.language}</p>
              <p className="text-sm">{lang.proficiency}</p>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
};
