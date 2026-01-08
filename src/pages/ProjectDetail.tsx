import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import propertyCompassImage from '@/assets/property-compass-hero.jpg';

interface ProjectDetail {
  id: string;
  title: string;
  tag: string;
  image: string;
  dream: string;
  journey: string;
  lessons: string;
  tools: string[];
  externalLink?: string;
}

const projectsData: Record<string, ProjectDetail> = {
  'forkast': {
    id: 'forkast',
    title: 'Forkast',
    tag: 'Meal Planning Gone Wild',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&auto=format&fit=crop&q=80',
    dream: `My dream was simple (and ambitious): a site where I could plan meals, generate a shopping list, and then watch it magically shop across multiple stores—Misfits Market, Instacart, Amazon—to find the best prices. I'd pick my products, the deals would be highlighted, and I'd hop to each cart to checkout. The ultimate grocery optimization machine.`,
    journey: `I started by designing in Figma Make and building in Cursor, then attempted to import that design into Lovable. First attempt? Not great. The styles were off, images broken. So I pushed to GitHub and pulled it directly into Lovable from my repo. Much better—just a few tweaks to get it closer to the original.

Then came the scraping adventure with Firecrawl. The dream was to crawl grocery sites for real-time pricing. Reality? Instacart blocked me. Hard. The AI started "helping" by filling in fake average prices, which were hilariously off. If I selected products and went to the actual store carts, I had to start over anyway—nothing ported.

So I pivoted. Ripped out the pricing dreams and focused on what worked: a robust recipe management system. I added a feature to import recipes from anywhere and integrated the Spoonacular API using Lovable's connectors—that part was seamless.`,
    lessons: `Sometimes the dream has to shrink to ship. The price comparison feature hit walls that weren't worth climbing. But what survived is genuinely useful: a meal planning tool that generates shopping lists I can send to myself. Not the original vision, but a tool I actually use every week.

Next iteration? Maybe I'll explore different approaches to the pricing problem. Or maybe I'll just accept that some dreams are meant to stay dreams.`,
    tools: ['Lovable', 'Cursor', 'Figma Make', 'GitHub', 'Firecrawl', 'Spoonacular API'],
    externalLink: 'https://forkast.lovable.app/',
  },
  'rosterboss': {
    id: 'rosterboss',
    title: 'RosterBoss',
    tag: 'Fantasy Football Sanity',
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1200&auto=format&fit=crop&q=80',
    dream: `Last year I was in three separate Fantasy Football leagues. Every game day, I wanted one view of all my rosters—live, updating, no switching between apps. Nobody offered this. So this year, I decided to build it myself.

But I wanted more than just a dashboard. I wanted AI-powered insights: recommendations on who to start, who to bench, an edge over my competition.`,
    journey: `I built the core in Cursor with Figma Make handling UI tweaks. Connected to an open-source ESPN Fantasy Football API to pull roster data. It worked.

Then I discovered MindStudio at a webinar and thought: perfect for the AI layer. I'd scrape the top Fantasy Football YouTube channels and sites for intel, feed it to my rosters, get smart recommendations.

The reality was messier. MindStudio was clunky—I restarted the project multiple times. I got the scraping working for the top 5 fantasy sites, but the AI kept getting confused. It would jumble my three rosters together, swap players between them, and once recommended I bench my Quarterback for a Wide Receiver. Classic AI move.

Eventually I got it working, flaws and all. But I've since disconnected the AI—I quit my MindStudio subscription.`,
    lessons: `The tool works for its core purpose: seeing all my rosters at once. The AI insights were a fun experiment but not worth the subscription cost for the quality of output.

Future plan? Import this project into Lovable and consolidate everything. Right now it's scattered across Figma Make, Cursor, GitHub, and Vercel. I'd love to just use Lovable and its connectors to simplify the whole stack.`,
    tools: ['Cursor', 'Figma Make', 'GitHub', 'Vercel', 'MindStudio', 'ESPN API'],
    externalLink: 'https://rosterboss.vercel.app/',
  },
  'property-compass': {
    id: 'property-compass',
    title: 'Property Compass',
    tag: 'Real Estate Automation',
    image: propertyCompassImage,
    dream: `Finding the perfect acreage in Central Oregon isn't just about the view. It's navigating Deschutes County's dense regulatory landscape: zoning codes, ADU allowances, HOA restrictions, Fire Fuel zones, wildlife overlays. My wife and I were stuck in a loop—find a promising Zillow listing, then manually cross-reference it against a dozen different data sources.

My father, who did this the old way, was amazed I could find in minutes what took him weeks. But even minutes felt too long for a repeatable process.`,
    journey: `I moved from "manual searching" to "automated intelligence" by building a custom property assessment engine in Lovable. Enter an address, and the system triggers a multi-source data harvest, then processes everything through a RAG (Retrieval-Augmented Generation) database containing the specific legal and environmental restrictions of Central Oregon.

The tool doesn't just find data—it assesses it. It interprets zoning nuances and acreage requirements to give a definitive report on whether a property can actually support our needs: ADU feasibility, wildlife compliance, the whole picture. Chaotic searching became a structured, archivable library of property intelligence.`,
    lessons: `By automating due diligence, we reduced the risk of human error in one of life's largest investments. The tool acts as a digital safeguard—if it doesn't lead us to the perfect property, it performs the more critical task of protecting us from the wrong one.

This project is proof of how I approach problems: build a system that replaces noise with clarity.`,
    tools: ['Lovable', 'RAG', 'Deschutes County Data', 'Zillow'],
    externalLink: 'https://propertycompass.lovable.app/',
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

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
