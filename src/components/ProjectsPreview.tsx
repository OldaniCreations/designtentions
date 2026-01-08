import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

const ProjectsPreview = () => {
  return (
    <section className="clerestory-section">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="font-display text-xs tracking-[0.3em] uppercase text-sage mb-4 block">
              From The Lab
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Latest Experiments
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-lg">
              Here's what I've been tinkering with lately...
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-display text-sm text-terracotta hover:text-terracotta-light transition-colors mt-6 md:mt-0 group"
          >
            View All Experiments
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
