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
  // Languages
  JavaScript: {
    category: 'language',
    level: 'expert',
    name: 'JavaScript',
    order: 0,
  },
  TypeScript: {
    category: 'language',
    level: 'expert',
    name: 'TypeScript',
    order: 1,
  },
  Ruby: { category: 'language', level: 'proficient', name: 'Ruby', order: 2 },

  // Frontend
  React: { category: 'frontend', level: 'expert', name: 'React', order: 0 },
  MobX: { category: 'frontend', level: 'expert', name: 'MobX', order: 1 },
  HTML: { category: 'frontend', level: 'expert', name: 'HTML', order: 2 },
  CSS: { category: 'frontend', level: 'expert', name: 'CSS', order: 3 },
  StyledComponents: {
    category: 'frontend',
    level: 'expert',
    name: 'Styled Components',
    order: 4,
  },
  NextJS: {
    category: 'frontend',
    level: 'proficient',
    name: 'Next.js',
    order: 5,
  },
  Vue: { category: 'frontend', level: 'proficient', name: 'Vue', order: 6 },
  Angular: {
    category: 'frontend',
    level: 'proficient',
    name: 'Angular',
    order: 7,
  },
  jQuery: {
    category: 'frontend',
    level: 'proficient',
    name: 'jQuery',
    order: 8,
  },
  TailwindCSS: {
    category: 'frontend',
    level: 'proficient',
    name: 'Tailwind CSS',
    order: 9,
  },
  SCSS: { category: 'frontend', level: 'proficient', name: 'SCSS', order: 10 },

  // Backend
  Node: { category: 'backend', level: 'proficient', name: 'Node', order: 0 },
  RubyOnRails: {
    category: 'backend',
    level: 'proficient',
    name: 'Ruby on Rails',
    order: 1,
  },
  MongoDB: {
    category: 'backend',
    level: 'proficient',
    name: 'MongoDB',
    order: 2,
  },
  PostgreSQL: {
    category: 'backend',
    level: 'proficient',
    name: 'PostgreSQL',
    order: 3,
  },

  // Testing
  ReactTestingLibrary: {
    category: 'testing',
    level: 'expert',
    name: 'React Testing Library',
    order: 0,
  },
  Cypress: { category: 'testing', level: 'expert', name: 'Cypress', order: 1 },
  Jest: { category: 'testing', level: 'proficient', name: 'Jest', order: 2 },
  Mocha: { category: 'testing', level: 'proficient', name: 'Mocha', order: 3 },
  RSpec: { category: 'testing', level: 'proficient', name: 'RSpec', order: 4 },
  Selenium: {
    category: 'testing',
    level: 'proficient',
    name: 'Selenium',
    order: 5,
  },

  // Tooling
  Vite: { category: 'tooling', level: 'proficient', name: 'Vite', order: 0 },
  Storybook: {
    category: 'tooling',
    level: 'proficient',
    name: 'Storybook',
    order: 1,
  },
  DesignSystem: {
    category: 'tooling',
    level: 'proficient',
    name: 'Design System',
    order: 2,
  },
  Git: { category: 'tooling', level: 'proficient', name: 'Git', order: 3 },
  SCRUM: { category: 'tooling', level: 'proficient', name: 'SCRUM', order: 4 },
  Snowplow: {
    category: 'tooling',
    level: 'proficient',
    name: 'Snowplow',
    order: 5,
  },
  ClickUp: {
    category: 'tooling',
    level: 'proficient',
    name: 'ClickUp',
    order: 6,
  },
  JIRA: { category: 'tooling', level: 'proficient', name: 'JIRA', order: 7 },
  Redmine: {
    category: 'tooling',
    level: 'proficient',
    name: 'Redmine',
    order: 8,
  },

  // AI
  ClaudeCode: {
    category: 'ai',
    level: 'proficient',
    name: 'Claude Code',
    order: 0,
  },
  Copilot: {
    category: 'ai',
    level: 'proficient',
    name: 'GitHub Copilot',
    order: 1,
  },
} satisfies Record<string, Skill>;

export const headerData: {
  avatar: string;
  links: ContactLink[];
  name: string;
  role: string;
} = {
  avatar: `${base}images/avatar.png`,
  links: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/miguelkashir' },
    { label: 'GitHub', url: 'https://github.com/miguelkashir' },
  ],
  name: 'Miguel Angel Alvarez',
  role: 'Frontend Engineer',
};

export const aboutData = {
  firstParagraph: `I'm a software engineer with a product mindset — I care about solving the right problem, not just closing tickets. I write clean, maintainable code, sweat the details, and adapt to whatever the project needs, whether that's a new stack, a new paradigm, or a hard conversation about scope.`,
  secondParagraph:
    'I thrive as an individual contributor. Owning a problem end-to-end — from first principles to shipped feature — is where I do my best work. In a world where AI makes individual developers disproportionately capable, I find that genuinely exciting. Outside of code, I stay curious through travel, motorsports, music, and the occasional video game.',
  title: 'About',
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
      endDate: new Date('2026-04-01'),
      description:
        'Spent six years evolving an interactive content platform. Rotating through multiple squads gave me a deep, end-to-end understanding of the product. I collaborate closely with design and backend teams to ship scalable features, often pair-programming. Beyond coding, I drive architectural decisions and maintain our Design System, using data to continuously refine the user experience.',
      skills: [
        Skills.React,
        Skills.JavaScript,
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
        Skills.DesignSystem,
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
        Skills.Angular,
        Skills.Vue,
        Skills.Node,
        Skills.JavaScript,
        Skills.TypeScript,
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
        Skills.RubyOnRails,
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
        Skills.RubyOnRails,
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
      name: 'Image Metadata Killer',
      description:
        'Open source tool that allows you to remove any metadata from your photos and pictures: EXIF data, GPS coordinates, camera info and more. All happens in your browser, files never leave your device.',
      githubUrl: 'https://github.com/miguelkashir/image-metadata-killer',
      liveUrl: 'https://image-metadata-killer.vercel.app',
      technologies: [
        Skills.NextJS,
        Skills.TypeScript,
        Skills.TailwindCSS,
        Skills.Vite,
        Skills.ClaudeCode,
      ],
    },
    {
      description:
        'My personal portfolio and an open-source template anyone can reuse.',
      githubUrl: 'https://github.com/miguelkashir/portfolio',
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
