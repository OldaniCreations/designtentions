import { Link } from 'react-router-dom';

export interface Project {
  id: string;
  title: string;
  category: 'experiments';
  tag: string;
  description: string;
  image: string;
  tools: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      <article className="bg-card overflow-hidden shadow-soft hover:shadow-card transition-all duration-500">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden bg-bone">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Tag */}
          <span className="inline-block px-3 py-1 text-xs font-display tracking-wide mb-4 bg-foreground/80 text-background">
            {project.tag}
          </span>
          
          {/* Title */}
          <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-terracotta transition-colors duration-300">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-4">
            {project.description}
          </p>
          
          {/* Tools Used */}
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span 
                key={tool}
                className="text-xs font-display tracking-wide text-sage border border-sage/30 px-2 py-0.5"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
