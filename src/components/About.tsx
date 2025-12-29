import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="clerestory-section bg-bone/50 grain-overlay"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Label */}
          <div className="reveal">
            <span className="font-display text-xs tracking-[0.3em] uppercase text-sage mb-8 block">
              Our Philosophy
            </span>
          </div>
          
          {/* Main Content */}
          <div className="reveal">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8 text-balance">
              We believe that every system—whether technological, ecological, or social—carries an intention.
            </h2>
          </div>
          
          <div className="reveal">
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              At Designtentions, we work at the critical intersection of artificial intelligence and climate technology. 
              Our approach is rooted in intentionality: understanding that the choices we make in system design 
              ripple outward, shaping communities, ecosystems, and futures.
            </p>
          </div>
          
          <div className="reveal">
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
              We partner with organizations ready to build with purpose—creating frameworks that are 
              not only efficient but ethical, not only innovative but sustainable.
            </p>
          </div>
          
          {/* Divider */}
          <div className="reveal">
            <div className="w-16 h-px bg-terracotta/40 mx-auto mb-12" />
          </div>
          
          {/* The Vibe Quote */}
          <div className="reveal">
            <blockquote className="font-body text-base italic text-sage">
              "Designed with the precision of a system and the warmth of a home."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
