import { Linkedin, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1">
      
      {/* Hero */}
      <section className="pt-32 pb-16 grain-overlay">
        <div className="container mx-auto px-6 relative z-10">
          <span className="font-display text-xs tracking-[0.3em] uppercase text-sage mb-4 block">
            Say Hello
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Let's Connect
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl">
            Got a tool idea? Want to collaborate on an experiment? Or just want to chat about the chaos of building things? I'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-xl space-y-8">
            <a 
              href="https://www.linkedin.com/in/tristinoldani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-border hover:border-terracotta transition-colors group"
            >
              <Linkedin size={24} className="text-muted-foreground group-hover:text-terracotta transition-colors" />
              <div>
                <span className="font-display text-sm text-muted-foreground block">LinkedIn</span>
                <span className="font-body text-foreground group-hover:text-terracotta transition-colors">Connect with me</span>
              </div>
            </a>
            
            <a 
              href="https://calendly.com/tristinoldani/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-border hover:border-terracotta transition-colors group"
            >
              <Calendar size={24} className="text-muted-foreground group-hover:text-terracotta transition-colors" />
              <div>
                <span className="font-display text-sm text-muted-foreground block">Calendly</span>
                <span className="font-body text-foreground group-hover:text-terracotta transition-colors">Schedule a 30-minute chat</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
