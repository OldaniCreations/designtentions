import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

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
            {projects.map((project, index) => (
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
