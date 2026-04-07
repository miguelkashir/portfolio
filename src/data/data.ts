import geniallyLogo from '../assets/genially.jpg';
import corusLogo from '../assets/corus.jpg';
import glownetLogo from '../assets/glownet.jpg';
import justLandedLogo from '../assets/justlanded.jpg';
import ironhackLogo from '../assets/ironhack.jpg';
import trassierraLogo from '../assets/trassierra.jpg';

import type { Degree, Experience, Language, Project, Skill } from '../types';

export const Skills = {
  JavaScript: { name: 'JavaScript', category: 'language' },
  TypeScript: { name: 'TypeScript', category: 'language' },
  React: { name: 'React', category: 'frontend' },
  Vue: { name: 'Vue', category: 'frontend' },
  jQuery: { name: 'jQuery', category: 'frontend' },
  HTML: { name: 'HTML', category: 'frontend' },
  CSS: { name: 'CSS', category: 'frontend' },
  SCSS: { name: 'SCSS', category: 'frontend' },
  StyledComponents: { name: 'Styled Components', category: 'frontend' },
  Slim: { name: 'Slim', category: 'frontend' },
  MobX: { name: 'MobX', category: 'frontend' },
  Node: { name: 'Node.js', category: 'backend' },
  Ruby: { name: 'Ruby on Rails', category: 'backend' },
  MongoDB: { name: 'MongoDB', category: 'backend' },
  PostgreSQL: { name: 'PostgreSQL', category: 'backend' },
  Cypress: { name: 'Cypress', category: 'testing' },
  ReactTestingLibrary: { name: 'React Testing Library', category: 'testing' },
  Jest: { name: 'Jest', category: 'testing' },
  Mocha: { name: 'Mocha', category: 'testing' },
  RSpec: { name: 'RSpec', category: 'testing' },
  Selenium: { name: 'Selenium', category: 'testing' },
  Git: { name: 'Git', category: 'tooling' },
  SCRUM: { name: 'SCRUM', category: 'tooling' },
  Storybook: { name: 'Storybook', category: 'tooling' },
  Snowplow: { name: 'Snowplow', category: 'tooling' },
  ClickUp: { name: 'ClickUp', category: 'tooling' },
  JIRA: { name: 'JIRA', category: 'tooling' },
  Redmine: { name: 'Redmine', category: 'tooling' },
} satisfies Record<string, Skill>;

export const headerData = {
  name: 'Miguel Angel Alvarez',
  role: 'Senior Frontend Developer',
};

export const aboutData = {
  title: 'About',
  firstParagraph: `I'm the kind of person who loves solving problems through creative, detail-focused solutions. I approach each project with care and precision, always striving to make a positive impact.`,
  secondParagraph:
    'Apart from programming, I enjoy a wide range of interests — Exploring new places, motorsports, gym, music, good coffee and gaming.',
};

export const experienceData: { title: string; experiences: Experience[] } = {
  title: 'Experience',
  experiences: [
    {
      company: 'Genially',
      logo: geniallyLogo,
      location: 'Córdoba, Spain',
      role: 'Senior Frontend Developer',
      startDate: new Date('2020-03-01'),
      endDate: null,
      description:
        'Spent six years evolving an interactive content platform. Rotating through multiple squads gave me a deep, end-to-end understanding of the product. I collaborate closely with design and backend teams to ship scalable features, often pair-programming. Beyond coding, I drive architectural decisions and maintain our Design System, using data to continuously refine the user experience.',
      skills: [
        Skills.React,
        Skills.TypeScript,
        Skills.MobX,
        Skills.StyledComponents,
        Skills.Cypress,
        Skills.ReactTestingLibrary,
        Skills.Storybook,
        Skills.Snowplow,
        Skills.ClickUp,
        Skills.Git,
        Skills.SCRUM,
      ],
    },
    {
      company: 'Corus Consulting',
      logo: corusLogo,
      location: 'Madrid, Spain',
      role: 'Full Stack Developer',
      startDate: new Date('2018-06-01'),
      endDate: new Date('2020-03-01'),
      description:
        'Delivered agile solutions for diverse clients. While starting as a full-stack developer, I naturally gravitated toward the frontend, taking ownership of UI and usability. I worked directly with clients to refine requirements, ensuring high-quality delivery across multiple parallel projects.',
      skills: [
        Skills.React,
        Skills.Vue,
        Skills.Node,
        Skills.JavaScript,
        Skills.Jest,
        Skills.Mocha,
        Skills.Cypress,
        Skills.MongoDB,
        Skills.SCSS,
        Skills.Git,
        Skills.SCRUM,
      ],
    },
    {
      company: 'Glownet',
      logo: glownetLogo,
      location: 'Madrid, Spain',
      role: 'Full Stack Developer',
      startDate: new Date('2017-06-01'),
      endDate: new Date('2018-01-01'),
      description:
        'Built cashless payment ecosystems for major music festivals, covering NFC transactions and real-time dashboards. I combined development with on-site support during live events, ensuring system stability under pressure and working side-by-side with organizers to resolve critical issues in real-time.',
      skills: [
        Skills.Ruby,
        Skills.jQuery,
        Skills.RSpec,
        Skills.Selenium,
        Skills.PostgreSQL,
        Skills.Slim,
        Skills.SCSS,
        Skills.Git,
        Skills.SCRUM,
        Skills.JIRA,
      ],
    },
    {
      company: 'Just Landed',
      logo: justLandedLogo,
      location: 'Madrid, Spain',
      role: 'Full Stack Developer',
      startDate: new Date('2017-01-01'),
      endDate: new Date('2017-05-01'),
      description:
        'Contributed to a global platform operating in 70 countries. This role established my full-stack foundations, particularly in MVC architecture and system reliability. I focused on maintaining high-traffic modules and delivering consistent, user-focused features for a massive international audience.',
      skills: [
        Skills.Ruby,
        Skills.jQuery,
        Skills.RSpec,
        Skills.Selenium,
        Skills.PostgreSQL,
        Skills.Slim,
        Skills.SCSS,
        Skills.Git,
        Skills.Redmine,
      ],
    },
  ],
};

export const educationData: { title: string; degrees: Degree[] } = {
  title: 'Education',
  degrees: [
    {
      logo: ironhackLogo,
      degree: 'Web Development Bootcamp',
      institution: 'Ironhack',
      startDate: new Date('2016-10-01'),
      endDate: new Date('2016-12-01'),
      description: 'Focused on software development and web technologies.',
    },
    {
      logo: trassierraLogo,
      degree:
        'Certificate of Higher Education (HNC), Computer Software Engineering',
      institution: 'IES Trassierra',
      startDate: new Date('2013-09-01'),
      endDate: new Date('2015-06-01'),
      description: 'Focused on software development and web technologies.',
    },
  ],
};

export const projectsData: { title: string; projects: Project[] } = {
  title: 'Projects',
  projects: [
    {
      name: 'Portfolio Website',
      description:
        'A personal portfolio website to showcase my work and skills.',
      technologies: [Skills.React, Skills.TypeScript, Skills.CSS],
      link: 'https://example.com/portfolio',
    },
    {
      name: 'E-commerce Platform',
      description: 'An online store built with React and Node.js.',
      technologies: [Skills.React, Skills.Node, Skills.MongoDB],
      link: 'https://example.com/ecommerce',
    },
  ],
};

export const skillsData: { title: string; skills: Skill[] } = {
  title: 'Skills',
  skills: [
    Skills.JavaScript,
    Skills.TypeScript,
    Skills.React,
    Skills.MobX,
    Skills.HTML,
    Skills.CSS,
    Skills.Cypress,
    Skills.StyledComponents,
  ],
};

export const languagesData: { title: string; languages: Language[] } = {
  title: 'Languages',
  languages: [
    {
      language: 'English',
      proficiency: 'Fluent',
    },
    {
      language: 'Spanish',
      proficiency: 'Native',
    },
  ],
};
