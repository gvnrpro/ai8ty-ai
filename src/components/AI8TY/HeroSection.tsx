import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap, ChevronRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-space-pink opacity-20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-space-blue opacity-20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-space-purple opacity-15 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-space-pink" />
          <span className="text-sm font-medium text-white/90">
            Building the future of AI accessibility
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
          Building systems for a{' '}
          <span className="bg-gradient-to-r from-space-blue via-space-purple to-space-pink bg-clip-text text-transparent animate-pulse-glow">
            more intelligent
          </span>
          , more accessible future
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          AI8TY makes advanced digital capabilities—AI, automation, infrastructure—accessible to ambitious businesses, creators, and communities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={() => onNavigate('about')}
            className="glass-button text-white font-semibold px-8 py-4 text-lg group"
            size="lg"
          >
            Learn More
            <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            onClick={() => onNavigate('try-ai8ty')}
            className="glass-button-purple text-white font-semibold px-8 py-4 text-lg group"
            size="lg"
          >
            <Zap className="mr-2 w-5 h-5" />
            Try AI8TY
          </Button>
        </div>

        {/* Stats or Trust Indicators */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { label: 'AI Systems Deployed', value: '1000+' },
            { label: 'Teams Empowered', value: '500+' },
            { label: 'Success Rate', value: '99.9%' }
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;