import { Skills, educationData, experienceData, headerData } from './data/data';

const SITE_URL = 'https://miguelkashir.github.io/portfolio';

export function generateJsonLd(): object {
  const currentJob = experienceData.experiences[0];

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    alumniOf: educationData.degrees.map(d => ({
      '@type': 'EducationalOrganization',
      name: d.institution,
    })),
    jobTitle: headerData.role,
    knowsAbout: Object.values(Skills).map(s => s.name),
    name: headerData.name,
    sameAs: headerData.links.map(l => l.url),
    url: SITE_URL,
    worksFor: {
      '@type': 'Organization',
      location: currentJob.location,
      name: currentJob.company,
    },
  };
}
