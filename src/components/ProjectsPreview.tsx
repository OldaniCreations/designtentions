import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard, { Project } from './ProjectCard';
import propertyCompassImage from '@/assets/property-compass-hero.jpg';

const featuredProjects: Project[] = [
  {
    id: 'forkast',
    title: 'Forkast',
    category: 'experiments',
    tag: 'Meal Planning Gone Wild',
    description: 'What started as a dream to price-compare groceries across multiple stores turned into a lesson in web scraping walls.',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&auto=format&fit=crop&q=80',
    tools: ['Lovable', 'Cursor', 'Figma Make', 'Spoonacular API'],
  },
  {
    id: 'rosterboss',
    title: 'RosterBoss',
    category: 'experiments',
    tag: 'Fantasy Football Sanity',
    description: 'Born from the chaos of managing three fantasy rosters at once. Sometimes the AI gets confused about positions too.',
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&auto=format&fit=crop&q=80',
    tools: ['Cursor', 'Figma Make', 'MindStudio', 'ESPN API'],
  },
  {
    id: 'property-compass',
    title: 'Property Compass',
    category: 'experiments',
    tag: 'Real Estate Automation',
    description: 'A custom property assessment engine that automates Central Oregon real estate due diligence using RAG-powered intelligence.',
    image: propertyCompassImage,
    tools: ['Lovable', 'RAG', 'Deschutes County Data'],
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
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
