import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard, { Project } from '@/components/ProjectCard';

type Category = 'all' | 'ai-ethics' | 'climate-tech' | 'system-design' | 'experiments';

const allProjects: Project[] = [
  {
    id: 'ethical-ai-framework',
    title: 'Ethical AI Governance Framework',
    category: 'ai-ethics',
    tag: 'Ethical Framework',
    description: 'A comprehensive governance model for responsible AI deployment in enterprise environments.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'bias-detection',
    title: 'Algorithmic Bias Detection Suite',
    category: 'ai-ethics',
    tag: 'Fairness Audit',
    description: 'Tools and methodologies for identifying and mitigating bias in machine learning models.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80',
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
    id: 'renewable-grid',
    title: 'Smart Renewable Grid Integration',
    category: 'climate-tech',
    tag: 'Energy Systems',
    description: 'Intelligent grid management for optimal renewable energy distribution and storage.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'regenerative-systems',
    title: 'Regenerative Design Protocol',
    category: 'system-design',
    tag: 'Systems Thinking',
    description: 'A holistic approach to designing systems that restore and regenerate natural capital.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'circular-economy',
    title: 'Circular Economy Mapping',
    category: 'system-design',
    tag: 'Resource Flows',
    description: 'Visual frameworks for understanding and optimizing material flows in circular systems.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'property-compass',
    title: 'Property Compass',
    category: 'experiments',
    tag: 'Automation',
    description: 'A custom property assessment engine that automates Central Oregon real estate due diligence using RAG-powered intelligence.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80',
  },
];

const filters: { label: string; value: Category }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'AI Ethics', value: 'ai-ethics' },
  { label: 'Climate Tech', value: 'climate-tech' },
  { label: 'System Design', value: 'system-design' },
  { label: 'Experiments', value: 'experiments' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 grain-overlay">
        <div className="container mx-auto px-6 relative z-10">
          <span className="font-display text-xs tracking-[0.3em] uppercase text-sage mb-4 block">
            The Lab
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Our Work
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl">
            Explore our portfolio of intentional solutions at the intersection of technology, ethics, and sustainability.
          </p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-8 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`font-display text-sm tracking-wide px-4 py-2 transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-terracotta text-primary-foreground'
                    : 'bg-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
