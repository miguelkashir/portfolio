import geniallyLogo from '../assets/genially.jpg';
import corusLogo from '../assets/corus.jpg';
import glownetLogo from '../assets/glownet.jpg';
import justLandedLogo from '../assets/justlanded.jpg';
import ironhackLogo from '../assets/ironhack.jpg';
import trassierraLogo from '../assets/trassierra.jpg';

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

export interface Experience {
  company: string;
  logo?: string;
  location: string;
  role: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  skills: string[];
}

interface experienceDataProps {
  title: string;
  experiences: Experience[];
}

export const experienceData: experienceDataProps = {
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
        'React',
        'TypeScript',
        'MobX',
        'Styled Components',
        'Cypress',
        'React Testing Library',
        'Storybook',
        'Snowplow',
        'ClickUp',
        'Git',
        'SCRUM',
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
        'React',
        'Vue',
        'Node',
        'JavaScript',
        'Jest',
        'Mocha',
        'Cypress',
        'MongoDB',
        'SCSS',
        'Git',
        'SCRUM',
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
        'Ruby on Rails',
        'jQuery',
        'RSpec',
        'Selenium',
        'PostgreSQL',
        'Slim',
        'SCSS',
        'Git',
        'SCRUM',
        'JIRA',
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
        'Ruby on Rails',
        'jQuery',
        'RSpec',
        'Selenium',
        'PostgreSQL',
        'Slim',
        'SCSS',
        'Git',
        'Redmine',
      ],
    },
  ],
};

export const educationData = {
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

export const projectsData = {
  title: 'Projects',
  projects: [
    {
      name: 'Portfolio Website',
      description:
        'A personal portfolio website to showcase my work and skills.',
      technologies: ['React', 'TypeScript', 'CSS'],
      link: 'https://example.com/portfolio',
    },
    {
      name: 'E-commerce Platform',
      description: 'An online store built with React and Node.js.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://example.com/ecommerce',
    },
  ],
};

export const skillsData = {
  title: 'Skills',
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'MobX',
    'HTML',
    'CSS',
    'Cypress',
    'Styled Components',
  ],
};

export const languagesData = {
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
