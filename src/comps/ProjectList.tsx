import type { Project } from '../types';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => (
  <>
    {projects.map((project, index) => (
      <div key={index}>
        <p className="font-semibold">{project.name}</p>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium text-pink-700 bg-pink-100 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </>
);
