import type {
  ContactLink,
  Degree,
  Experience,
  Language,
  Project,
  Skill,
} from '../types';

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const Skills = {
  ClaudeCode: { category: 'ai', name: 'Claude Code' },
  ClickUp: { category: 'tooling', name: 'ClickUp' },
  Copilot: { category: 'ai', name: 'GitHub Copilot' },
  CSS: { category: 'frontend', name: 'CSS' },
  Cypress: { category: 'testing', name: 'Cypress' },
  Git: { category: 'tooling', name: 'Git' },
  HTML: { category: 'frontend', name: 'HTML' },
  JavaScript: { category: 'language', name: 'JavaScript' },
  Jest: { category: 'testing', name: 'Jest' },
  JIRA: { category: 'tooling', name: 'JIRA' },
  MobX: { category: 'frontend', name: 'MobX' },
  Mocha: { category: 'testing', name: 'Mocha' },
  MongoDB: { category: 'backend', name: 'MongoDB' },
  Node: { category: 'backend', name: 'Node' },
  PostgreSQL: { category: 'backend', name: 'PostgreSQL' },
  React: { category: 'frontend', name: 'React' },
  ReactTestingLibrary: { category: 'testing', name: 'React Testing Library' },
  Redmine: { category: 'tooling', name: 'Redmine' },
  RSpec: { category: 'testing', name: 'RSpec' },
  Ruby: { category: 'language', name: 'Ruby' },
  RubyOnRails: { category: 'backend', name: 'Ruby on Rails' },
  SCRUM: { category: 'tooling', name: 'SCRUM' },
  SCSS: { category: 'frontend', name: 'SCSS' },
  Selenium: { category: 'testing', name: 'Selenium' },
  Snowplow: { category: 'tooling', name: 'Snowplow' },
  Storybook: { category: 'tooling', name: 'Storybook' },
  StyledComponents: { category: 'frontend', name: 'Styled Components' },
  TailwindCSS: { category: 'frontend', name: 'Tailwind CSS' },
  TypeScript: { category: 'language', name: 'TypeScript' },
  Vite: { category: 'tooling', name: 'Vite' },
  Vue: { category: 'frontend', name: 'Vue' },
  jQuery: { category: 'frontend', name: 'jQuery' },
} satisfies Record<string, Skill>;

export const headerData: { links: ContactLink[]; name: string; role: string } =
  {
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/miguelkashir' },
      { label: 'GitHub', url: 'https://github.com/miguelkashir' },
    ],
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
      logo: `${base}images/genially.jpg`,
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
        Skills.Copilot,
      ],
    },
    {
      company: 'Corus Consulting',
      logo: `${base}images/corus.jpg`,
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
      logo: `${base}images/glownet.jpg`,
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
        Skills.SCSS,
        Skills.Git,
        Skills.SCRUM,
        Skills.JIRA,
      ],
    },
    {
      company: 'Just Landed',
      logo: `${base}images/justlanded.jpg`,
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
      logo: `${base}images/ironhack.jpg`,
      degree: 'Web Development Bootcamp',
      institution: 'Ironhack',
      startDate: new Date('2016-10-01'),
      endDate: new Date('2016-12-01'),
      description:
        'Immersive 8-week bootcamp covering 540 hours of intensive web development. Focused on clean code principles, design patterns, and test-driven development (TDD), culminating in a full-stack project shipped from scratch.',
    },
    {
      logo: `${base}images/trassierra.jpg`,
      degree:
        'Certificate of Higher Education (HNC), Computer Software Engineering',
      institution: 'IES Trassierra',
      startDate: new Date('2013-09-01'),
      endDate: new Date('2015-06-01'),
      description:
        'Two years formation in computer application development, covering analysis and design of management applications, and developing and testing software in structured programming languages.',
    },
  ],
};

export const projectsData: { title: string; projects: Project[] } = {
  title: 'Projects',
  projects: [
    {
      description:
        "My personal portfolio and an open-source template anyone can reuse. All content is driven by a single data file — fork it, update `src/data/data.ts`, and it's yours.",
      githubUrl: 'https://github.com/miguelkashir/portfolio',
      liveUrl: 'https://miguelkashir.github.io/portfolio',
      liveUrlTooltip: "You're already here!",
      name: 'Portfolio Website',
      technologies: [
        Skills.React,
        Skills.TypeScript,
        Skills.TailwindCSS,
        Skills.Vite,
        Skills.ReactTestingLibrary,
        Skills.ClaudeCode,
      ],
    },
  ],
};

export const skillsData = {
  skills: Object.values(Skills),
  title: 'Skills',
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
