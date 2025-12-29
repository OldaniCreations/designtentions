import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard, { Project } from './ProjectCard';

const featuredProjects: Project[] = [
  {
    id: 'ethical-ai-framework',
    title: 'Ethical AI Governance Framework',
    category: 'ai-ethics',
    tag: 'Ethical Framework',
    description: 'A comprehensive governance model for responsible AI deployment in enterprise environments.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'carbon-tracking',
    title: 'Carbon Footprint Analytics',
    category: 'climate-tech',
    tag: 'Carbon Tracking',
    description: 'Real-time carbon emissions monitoring system for supply chain transparency.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'regenerative-systems',
    title: 'Regenerative Design Protocol',
    category: 'system-design',
    tag: 'Systems Thinking',
    description: 'A holistic approach to designing systems that restore and regenerate natural capital.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop&q=80',
  },
];

const ProjectsPreview = () => {
  return (
    <section className="clerestory-section">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="font-display text-xs tracking-[0.3em] uppercase text-sage mb-4 block">
              The Lab
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Selected Work
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-display text-sm text-terracotta hover:text-terracotta-light transition-colors mt-6 md:mt-0 group"
          >
            View All Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
