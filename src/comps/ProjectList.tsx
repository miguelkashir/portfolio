import { ExternalLink } from 'lucide-react';
import type { Project } from '../types';

interface ProjectListProps {
  projects: Project[];
}

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
  </svg>
);

export const ProjectList = ({ projects }: ProjectListProps) => (
  <div className="flex flex-col gap-4">
    {projects.map(project => (
      <div
        key={project.name}
        className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg transition-shadow duration-300 hover:shadow-md"
      >
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                aria-label={`${project.name} GitHub repository`}
                className="text-gray-400 hover:text-pink-600 transition-colors duration-200"
                href={project.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            )}
            {project.liveUrl && (
              project.liveUrlTooltip ? (
                <div className="relative group/tooltip">
                  <span className="text-gray-300 cursor-default">
                    <ExternalLink className="w-5 h-5" />
                  </span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-700 rounded whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {project.liveUrlTooltip}
                  </div>
                </div>
              ) : (
                <a
                  aria-label={`${project.name} live site`}
                  className="text-gray-400 hover:text-pink-600 transition-colors duration-200"
                  href={project.liveUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )
            )}
          </div>
        </div>
        <p className="text-gray-600 text-base">{project.description}</p>
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span
                key={tech.name}
                className="px-3 py-1 text-xs font-medium text-pink-700 bg-pink-100 rounded-full"
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
);
