import DiLogo from '@/assets/DiLogo.svg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative grain-overlay px-6">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bone/50 via-background to-background pointer-events-none" />
      
      {/* Desert glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Logo */}
        <div className="mb-12 opacity-0 animate-fade-up">
          <img 
            src={DiLogo} 
            alt="Designtentions" 
            className="h-24 md:h-32 w-auto mx-auto"
          />
        </div>
        
        {/* Mission Statement */}
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8 opacity-0 animate-fade-up stagger-2 text-balance">
          Intentional systems for a better future.
        </h1>
        
        {/* Tagline */}
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 opacity-0 animate-fade-up stagger-3">
          At the intersection of AI Ethics and Climate Tech, we design frameworks that matter.
        </p>
        
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-4">
          <a 
            href="#about" 
            className="inline-flex items-center justify-center px-8 py-3 font-display text-sm tracking-wide bg-terracotta text-primary-foreground hover:bg-terracotta-light transition-colors duration-300"
          >
            Learn More
          </a>
          <a 
            href="/projects" 
            className="inline-flex items-center justify-center px-8 py-3 font-display text-sm tracking-wide border border-foreground/20 text-foreground hover:border-terracotta hover:text-terracotta transition-colors duration-300"
          >
            View The Lab
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-5">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
