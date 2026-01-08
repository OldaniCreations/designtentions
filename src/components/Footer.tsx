import { Link } from 'react-router-dom';
import DiLogo from '@/assets/DiLogo.svg';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-midnight text-primary-foreground py-16 grain-overlay">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          {/* Logo & Tagline */}
          <img src={DiLogo} alt="Designtentions" className="h-20 w-auto brightness-0 invert opacity-80 mb-4" />
          <p className="font-body text-sm text-primary-foreground/60 text-center max-w-xs">
            Intentional systems for a better future.
          </p>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-primary-foreground/10 mb-8" />
        
        {/* Copyright */}
        <p className="font-body text-xs text-primary-foreground/40 text-center">
          © {currentYear} Designtentions. All rights reserved.
        </p>
      </div>
    </footer>;
};
export default Footer;