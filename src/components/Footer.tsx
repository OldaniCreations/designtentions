import { Link } from 'react-router-dom';
import DiLogo from '@/assets/DiLogo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-primary-foreground py-16 grain-overlay">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-6">
            <img src={DiLogo} alt="Designtentions" className="h-14 w-auto brightness-0 invert opacity-80" />
            <p className="font-body text-sm text-primary-foreground/60">
              Intentional systems for a better future.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-display text-sm tracking-wide mb-2">Get in Touch</h4>
            <a 
              href="mailto:hello@designtentions.com" 
              className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              hello@designtentions.com
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-primary-foreground/10 mb-8" />
        
        {/* Copyright */}
        <p className="font-body text-xs text-primary-foreground/40">
          © {currentYear} Designtentions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
