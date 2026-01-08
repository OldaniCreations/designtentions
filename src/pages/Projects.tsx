import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard, { Project } from '@/components/ProjectCard';
import propertyCompassImage from '@/assets/property-compass-hero.jpg';
import rosterbossImage from '@/assets/rosterboss-hero.jpg';

const allProjects: Project[] = [
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
    image: rosterbossImage,
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

const Projects = () => {
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
            Experiments
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl">
            A collection of tools born from real frustrations and genuine curiosity. Some shipped as planned. Others taught me what not to do. All of them were fun to build.
          </p>
        </div>
      </section>
      
      {/* Project Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
