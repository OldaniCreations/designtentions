import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { projectDetails } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectDetails[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 container mx-auto px-6 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-terracotta hover:text-terracotta-light transition-colors">
            Return to The Lab
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-display text-sm text-muted-foreground hover:text-terracotta transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to The Lab
          </Link>
          
          {/* Tag */}
          <span className="font-display text-xs tracking-[0.3em] uppercase text-sage mb-4 block">
            {project.tag}
          </span>
          
          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6 max-w-3xl">
            {project.title}
          </h1>
          
          {/* Tools Used */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool) => (
              <span 
                key={tool}
                className="text-sm font-display tracking-wide text-sage border border-sage/30 px-3 py-1"
              >
                {tool}
              </span>
            ))}
          </div>
          
          {/* External Link */}
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-display text-sm tracking-wide bg-terracotta text-primary-foreground hover:bg-terracotta-light transition-all duration-300 group"
            >
              View Live Project
              <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </section>
      
      {/* Image */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="aspect-[21/9] overflow-hidden bg-bone">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* The Dream */}
            <div>
              <h2 className="font-display text-sm tracking-wide text-terracotta mb-4">
                The Dream
              </h2>
              <div className="font-body text-muted-foreground leading-relaxed space-y-4">
                {project.dream.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            
            {/* The Journey */}
            <div>
              <h2 className="font-display text-sm tracking-wide text-terracotta mb-4">
                The Journey
              </h2>
              <div className="font-body text-muted-foreground leading-relaxed space-y-4">
                {project.journey.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            
            {/* The Lessons */}
            <div>
              <h2 className="font-display text-sm tracking-wide text-terracotta mb-4">
                The Lessons
              </h2>
              <div className="font-body text-muted-foreground leading-relaxed space-y-4">
                {project.lessons.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-bone/50 grain-overlay">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
            Want to build something together?
          </h3>
          <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
            Got an idea? A frustration that needs fixing? Let's tinker.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 font-display text-sm tracking-wide bg-terracotta text-primary-foreground hover:bg-terracotta-light transition-colors duration-300"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
