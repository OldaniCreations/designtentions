import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  challenge: string;
  solution: string;
  impact: string;
}

const projectsData: Record<string, ProjectDetail> = {
  'ethical-ai-framework': {
    id: 'ethical-ai-framework',
    title: 'Ethical AI Governance Framework',
    category: 'AI Ethics',
    tag: 'Ethical Framework',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80',
    challenge: 'Organizations deploying AI systems face mounting pressure to ensure their algorithms operate fairly, transparently, and accountably. Without clear governance structures, AI deployments risk perpetuating biases, violating privacy, and eroding public trust.',
    solution: 'We developed a comprehensive governance framework that integrates ethical considerations into every stage of the AI lifecycle. From initial design through deployment and monitoring, our framework establishes clear accountability structures, review processes, and impact assessment methodologies.',
    impact: 'Partner organizations have reported 60% faster AI approval processes, improved stakeholder confidence, and zero regulatory incidents since implementation. The framework has been adopted as a model for industry best practices.',
  },
  'bias-detection': {
    id: 'bias-detection',
    title: 'Algorithmic Bias Detection Suite',
    category: 'AI Ethics',
    tag: 'Fairness Audit',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&auto=format&fit=crop&q=80',
    challenge: 'Machine learning models often encode historical biases present in training data, leading to discriminatory outcomes that disproportionately affect marginalized communities.',
    solution: 'Our bias detection suite employs multiple fairness metrics and testing methodologies to identify potential discrimination across protected characteristics. The toolset includes automated auditing, interpretability dashboards, and remediation recommendations.',
    impact: 'Detection of previously unidentified biases in 85% of audited systems, enabling organizations to address fairness issues before deployment and maintain equitable outcomes.',
  },
  'carbon-tracking': {
    id: 'carbon-tracking',
    title: 'Carbon Footprint Analytics',
    category: 'Climate Tech',
    tag: 'Carbon Tracking',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80',
    challenge: 'Supply chains account for significant portions of corporate carbon emissions, yet many organizations lack visibility into the environmental impact of their upstream and downstream partners.',
    solution: 'We built a real-time analytics platform that aggregates emissions data across complex supply networks, providing actionable insights at every tier. The system integrates with existing ERP systems and leverages AI for gap-filling where primary data is unavailable.',
    impact: 'Partner companies have achieved an average 23% reduction in supply chain emissions within the first year, while meeting increasingly stringent regulatory reporting requirements.',
  },
  'renewable-grid': {
    id: 'renewable-grid',
    title: 'Smart Renewable Grid Integration',
    category: 'Climate Tech',
    tag: 'Energy Systems',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&auto=format&fit=crop&q=80',
    challenge: 'The intermittent nature of renewable energy sources creates grid stability challenges, leading to curtailment of clean energy and continued reliance on fossil fuel backup generation.',
    solution: 'Our intelligent grid management system uses predictive algorithms to optimize renewable energy distribution and storage, balancing supply and demand in real-time while maximizing clean energy utilization.',
    impact: 'Reduced renewable energy curtailment by 40% and enabled 15% higher renewable penetration rates across partner grid networks.',
  },
  'regenerative-systems': {
    id: 'regenerative-systems',
    title: 'Regenerative Design Protocol',
    category: 'System Design',
    tag: 'Systems Thinking',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&auto=format&fit=crop&q=80',
    challenge: 'Traditional design approaches optimize for efficiency within existing extractive paradigms, failing to address the fundamental need for systems that restore and regenerate natural capital.',
    solution: 'We developed a holistic design protocol that places regeneration at the center of system architecture. The methodology guides organizations in creating closed-loop systems that actively contribute to ecosystem health.',
    impact: 'Projects designed using our protocol have demonstrated net-positive environmental impacts, restoring biodiversity and sequestering carbon while maintaining economic viability.',
  },
  'circular-economy': {
    id: 'circular-economy',
    title: 'Circular Economy Mapping',
    category: 'System Design',
    tag: 'Resource Flows',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&auto=format&fit=crop&q=80',
    challenge: 'Organizations struggle to visualize and optimize material flows, resulting in waste, resource depletion, and missed opportunities for value recovery.',
    solution: 'Our visual mapping framework provides clear representations of material and energy flows, identifying intervention points for circularity and enabling strategic decision-making for resource optimization.',
    impact: 'Partner organizations have identified average material cost savings of 30% while reducing waste streams by over 50%.',
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
            {project.category}
          </span>
          
          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8 max-w-3xl">
            {project.title}
          </h1>
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
            {/* The Challenge */}
            <div>
              <h2 className="font-display text-sm tracking-wide text-terracotta mb-4">
                The Challenge
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            {/* The Solution */}
            <div>
              <h2 className="font-display text-sm tracking-wide text-terracotta mb-4">
                The Intentional Solution
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
            
            {/* The Impact */}
            <div>
              <h2 className="font-display text-sm tracking-wide text-terracotta mb-4">
                The Impact
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-bone/50 grain-overlay">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
            Interested in similar work?
          </h3>
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
