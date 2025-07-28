import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
        {/* Hero Badge - More refined */}
        <div className="inline-flex items-center gap-3 glass-card px-6 py-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-body text-white/80 font-medium">
            Building accessible AI systems
          </span>
        </div>

        {/* Main Headline - Apple-style hierarchy */}
        <div className="space-y-6">
          <h1 className="text-display-xl md:text-display-2xl font-semibold text-white tracking-tight leading-none">
            Intelligence for{' '}
            <span className="text-primary">
              everyone
            </span>
          </h1>
          
          <p className="text-body-lg md:text-headline text-white/70 max-w-3xl mx-auto font-normal leading-relaxed">
            We make advanced AI accessible to businesses, creators, and communities through simple, powerful tools.
          </p>
        </div>

        {/* CTA Buttons - Simplified */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            onClick={() => onNavigate('about')}
            variant="glass"
            size="lg"
            className="group"
          >
            Learn about AI8TY
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          
          <Button 
            onClick={() => onNavigate('try-ai8ty')}
            variant="outline"
            size="lg"
          >
            Try our tools
          </Button>
        </div>

        {/* Trust indicators - Simplified */}
        <div className="pt-24 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { value: '1000+', label: 'AI systems deployed' },
            { value: '500+', label: 'Teams empowered' },
            { value: '99.9%', label: 'Uptime' }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-display-md font-semibold text-white">{stat.value}</div>
              <div className="text-body-sm text-white/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;