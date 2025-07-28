import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative px-6 py-32 text-center">
      <div className="mx-auto max-w-4xl">
        {/* Main Headline */}
        <h1 className="mb-8 text-6xl font-medium leading-tight tracking-tight text-white md:text-7xl">
          Building AI systems
          <br />
          for enterprise
        </h1>

        {/* Supporting Text */}
        <p className="mx-auto mb-12 max-w-2xl text-xl text-white/70">
          We create production AI that works reliably at scale.
        </p>

        {/* CTA Buttons */}
        <div className="mb-20 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={() => onNavigate('about')}
            className="h-12 px-6 text-base font-medium bg-primary hover:bg-primary/90"
          >
            Learn more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            onClick={() => onNavigate('try-ai8ty')}
            className="h-12 px-6 text-base font-medium"
            variant="outline"
          >
            Try our tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;