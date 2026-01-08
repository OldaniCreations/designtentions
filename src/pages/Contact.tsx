import { useState } from 'react';
import { Send, Linkedin, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const discussionTopics = [
  { value: 'project-idea', label: 'A Project Idea' },
  { value: 'collaboration', label: 'Collaboration Opportunity' },
  { value: 'just-hi', label: 'Just Saying Hi' },
  { value: 'other', label: 'Something Else Entirely' },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', topic: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
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
      
      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="font-display text-sm text-foreground mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 font-body text-foreground bg-transparent border-b border-border focus:border-terracotta focus:outline-none transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="font-display text-sm text-foreground mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 font-body text-foreground bg-transparent border-b border-border focus:border-terracotta focus:outline-none transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              
              {/* Topic */}
              <div>
                <label htmlFor="topic" className="font-display text-sm text-foreground mb-2 block">
                  I want to chat about...
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 font-body text-foreground bg-transparent border-b border-border focus:border-terracotta focus:outline-none transition-colors cursor-pointer appearance-none"
                >
                  <option value="" disabled>Pick a topic</option>
                  {discussionTopics.map(topic => (
                    <option key={topic.value} value={topic.value} className="bg-background text-foreground">
                      {topic.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="font-display text-sm text-foreground mb-2 block">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-0 py-3 font-body text-foreground bg-transparent border-b border-border focus:border-terracotta focus:outline-none transition-colors resize-none"
                  placeholder="Tell me what's on your mind..."
                />
              </div>
              
              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 font-display text-sm tracking-wide bg-terracotta text-primary-foreground hover:bg-terracotta-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Alternative Contact */}
      <section className="py-16 bg-bone/50 grain-overlay">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl">
            <h3 className="font-display text-xl text-foreground mb-4">
              Other ways to connect
            </h3>
            <div className="space-y-4">
              <p className="font-body text-muted-foreground">
                Reach out directly at{' '}
                <a 
                  href="mailto:hello@designtentions.com" 
                  className="text-terracotta hover:text-terracotta-light transition-colors"
                >
                  hello@designtentions.com
                </a>
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/tristinoldani/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 font-display text-sm text-foreground border border-border hover:border-terracotta hover:text-terracotta transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a 
                  href="https://calendly.com/tristinoldani/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 font-display text-sm text-foreground border border-border hover:border-terracotta hover:text-terracotta transition-colors"
                >
                  <Calendar size={18} />
                  Schedule a Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
