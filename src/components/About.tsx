import { useEffect, useRef } from "react";
import tristinPhoto from "@/assets/tristin-photo.jpg";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="clerestory-section bg-bone/50 grain-overlay">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Label */}
          <div className="reveal text-center">
            <span className="font-display text-xs tracking-[0.3em] uppercase text-sage mb-8 block">The Story</span>
          </div>

          {/* Photo and Intro */}
          <div className="reveal flex flex-col md:flex-row items-center gap-10 md:gap-12 mb-16">
            <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
              <div className="absolute inset-0 bg-terracotta/20 translate-x-3 translate-y-3" />
              <img 
                src={tristinPhoto} 
                alt="Tristin" 
                className="relative w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="w-8 h-0.5 bg-terracotta/60 mb-4 mx-auto md:mx-0" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-5 text-balance">
                I'm a designer who can't stop tinkering.
              </h2>
              <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed max-w-md mx-auto md:mx-0">
                When I see a problem, I don't just sketch solutions—I build them.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="reveal">
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                Armed with curiosity and an ever-growing toolkit of AI-powered platforms, I turn frustrations into functional experiments.
              </p>
            </div>

            <div className="reveal">
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                This site is my lab. A collection of experiments born from real needs—meal planning chaos, one-stop shop
                for medical records, real estate rabbit holes. Each project is a story of what I dreamed, how I explored,
                and what I learned along the way.
              </p>
            </div>

            <div className="reveal">
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
                Some experiments ship exactly as imagined. Others hit walls and pivot. All of them teach me something new
                about what's possible when you design with intention.
              </p>
            </div>

            {/* Divider */}
            <div className="reveal">
              <div className="w-16 h-px bg-terracotta/40 mx-auto mb-12" />
            </div>

            {/* The Vibe Quote */}
            <div className="reveal">
              <blockquote className="font-body text-base italic text-sage">
                "Every tool is an experiment. Every experiment is a lesson."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
